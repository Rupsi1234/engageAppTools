var express = require("express");
const Port = process.env.PORT || 8000;
var sampleFile;
var uploadPath;
var quizObj
var fs = require('fs');
const fileUpload = require('express-fileupload');
const open = require('open');
//use the application off of express.
const jsonFormat = require('json-format');
var app = express();
app.use(fileUpload());

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/login.html");
});


app.listen(Port, function () {
    console.log('Express server listening on port ', Port); // eslint-disable-line
});

app.get('/homepage', function (request, response) {
    response.sendFile(__dirname + "/home.html");
}),

    app.get('/quiz', function (request, response) {
        response.sendFile(__dirname + "/qdg1.html");
    }),

    app.post('/upload', function (req, res) {
        if (!req.files || Object.keys(req.files).length === 0) {
            res.status(400).send('No files were uploaded.');
            return;
        }

        console.log('req.files >>>', req.files); // eslint-disable-line

        sampleFile = req.files.sampleFile;

        uploadPath = __dirname + '/uploads/' + sampleFile.name;
        console.log(uploadPath)
        sampleFile.mv(uploadPath, function (err) {
            if (err) {
                return res.status(500).send(err);
            }

            fs.readFile(uploadPath, 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                var loJson = JSON.parse(data);
                quizObj = {
                    "quizName": {
                        "totalScore": 0,
                        "passScore": 0,
                        "question": []
                    }
                }
                Object.keys(loJson.itemBody.questions).forEach(function (qindex) {
                    quizObj.quizName.question[qindex] = {
                        "id": "",
                        "number": "",
                        "type": "",
                        "title": "",
                        "instruction": "",
                        "prompt": "",
                        "media": undefined,
                        "maxScore": "",
                        //"maxOptions": "",
                        "answerKey": [],
                        "scenario1": [],
                        "scenario2": [],
                        "viewLabels": undefined
                    }
                    quizObj.quizName.question[qindex].id = loJson.itemBody.questions[qindex].id;
                    quizObj.quizName.question[qindex].number = parseInt(qindex) + 1;
                    quizObj.quizName.question[qindex].maxScore = loJson.itemBody.questions[qindex].meta.score;
                    var quesJson = loJson.itemFragments[quizObj.quizName.question[qindex].id];
                    quizObj.quizName.question[qindex].type = quesJson.data.player;
                    quizObj.quizName.question[qindex].title = quesJson.data.itemBody.stimulus.content.data.replace(/(<([^>]+)>)/ig, '');
                    quizObj.quizName.question[qindex].instruction = quesJson.data.itemBody.instruction.content.data.replace(/(<([^>]+)>)/ig, '');
                    quizObj.quizName.question[qindex].prompt = quesJson.data.itemBody.prompt.content.data.replace(/(<([^>]+)>)/ig, '');
                    quizObj.quizName.question[qindex].media = quesJson.data.itemBody.media.content.data;
                    quizObj.quizName.question[qindex] = getQuesdetail(quesJson, quizObj.quizName.question[qindex]);
                    quizObj.quizName.totalScore = quizObj.quizName.totalScore + quizObj.quizName.question[qindex].maxScore;
                    //quizObj.quizName.question[qindex].id = undefined;
                    quizObj.quizName.question[qindex].scenario1 = quizObj.quizName.question[qindex].answerKey;
                    quizObj.quizName.question[qindex].scenario2 = quizObj.quizName.question[qindex].answerKey;
                })
                quizObj.quizName.passScore = Math.round(quizObj.quizName.totalScore * 0.7 * 10) / 10;

            })
        })
    })
app.get("/getvalue", function (request, response) {
    var inputFile = request.query.inputFile;
    fs.writeFile(__dirname + '/download/' + inputFile + ".json", jsonFormat(quizObj, {
        type: 'space',
        size: 2
    }), function (err) {
        if (err) throw err;
        console.log('quiz data json saved at output path');
    });

    response.sendFile(__dirname + "/qdg2.html");
})
app.get('/single', function (req, res) {
    console.log('single file');
    // Download function provided by express
    var text = req.headers.referer;
    var mySubString = text.substring(
        text.indexOf("=") + 1
        //text.lastIndexOf("&pageHeader")
    );
    res.download(__dirname + '/download/' + mySubString + '.json', function (err) {
        if (err) {
            console.log(err);
        }
    })
})

//define the route for "/"
app.listen(8080);
open('http://localhost:8080');
console.log("Please launch http://localhost:8080 in your browser url/ or direct url");
function getQuesdetail(qJson, obj) {
    var quesOptions;
    if (qJson.data.itemBody.options != undefined)
        quesOptions = qJson.data.itemBody.options;
    else if (qJson.data.itemBody.responseContainer != undefined)
        quesOptions = qJson.data.itemBody.responseContainer;
    /*else {
        console.log("Options not found for question#" + obj.number + "(" + obj.id + ")");
        //exit(0);
    }*/
    //obj.maxOptions = quesOptions.length;
    var quesValidations = qJson.data.itemBody.validations;

    if (obj.type == 'multi-mcqsr-itemplayer') {
        Object.keys(qJson.data.itemBody.questions).forEach(function (i) {
            let quesOptions = [];
            let answerKey = [];
            quesOptions[i] = qJson.data.itemBody.questions[i].data.options;
            Object.keys(quesOptions[i]).forEach(function (j) {
                answerKey[j] = [];
                answerKey[j][0] = quesOptions[i][j].id;
                answerKey[j][1] = quesOptions[i][j].content.data;
                answerKey[j][2] = "";
                answerKey[j][3] = "";
                Object.keys(qJson.data.itemBody.validations).forEach(function (key) {
                    if (qJson.data.itemBody.questions[i].id == quesValidations[key].responseContainer && quesValidations[key].correctResponse == answerKey[j][0]) {
                        answerKey[j][2] = "select";
                        answerKey[j][3] = "correct";
                    }
                })
                answerKey[j][0] = (parseInt(i) + 1) + "-" + quesOptions[i][j].id;
                obj.answerKey.push(answerKey[j])
            })
        })
        //console.log(obj.answerKey)
    }
    else if (obj.type == 'fibdropdown-itemplayer') {
        quesRC = qJson.data.itemBody.responseContainer;
        quesOptions = qJson.data.itemBody.options;
        Object.keys(quesRC).forEach(function (j) {
            obj.answerKey[j] = [];
            obj.answerKey[j][0] = quesRC[j].id;
            if (quesRC[j].id == quesValidations[j].responseContainer) {
                obj.answerKey[j][1] = quesValidations[j].correctResponse;
                obj.answerKey[j][3] = "correct";
            }
            Object.keys(quesOptions).forEach(function (i) {
                if (quesOptions[i].id == obj.answerKey[j][1]) {
                    obj.answerKey[j][2] = quesOptions[i].content.data;
                }
            })
        })
        //console.log(obj.answerKey)
    }

    else {
        console.log("get questiondetail is not available for " + obj.type);
    }
    return obj;
}