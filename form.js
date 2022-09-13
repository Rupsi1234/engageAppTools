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
/*app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
 }) 
*/
var shell = require("shelljs");
app.get("/", function (request, response) {
    response.sendFile(__dirname + "/login.html");
});

app.listen(Port, function () {
    console.log('Express server listening on port ', Port); // eslint-disable-line
});
app.listen(8080);
open('http://localhost:8080');
console.log("Please launch http://localhost:8080 in your browser url/ or direct url");

app.get('/homepage', function (request, response) {
    response.sendFile(__dirname + "/home.html");

    //joining path of directory 
    //const directoryPath = path.join(__dirname, 'Documents');
    //passsing directoryPath and callback function
    file3 = fs.createWriteStream(__dirname + '/checkbox.html');
    console.log(__dirname + '/checkbox.html')
    fs.readdir(__dirname + '/testResources/testExecutionFiles/difusionExperienceApp/qa', function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        file3.write("<!DOCTYPE html><html>")
        file3.write("<head> <meta charset=\"utf-8\">\ <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><meta http-equiv=\"Cache-Control\" content=\"no-cache, no-store, must-revalidate\" />" +
            "<meta http-equiv=\"Pragma\" content=\"no-cache\" /><meta http-equiv=\"Expires\" content=\"0\" /> <title>Login - Engage QA Tools</title><link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css\">" +
            "</head>")
        file3.write("<body>")
        file3.write("class=\"has-navbar-fixed-top\">    <nav class=\"navbar has-background-grey-lighter is-fixed-top is-spaced has-shadow\" role=\"navigation\" " +
            "aria-label=\"main navigation\"> <div class=\"navbar-brand\"><div class=\"navbar-item\"> <img src=\"https://config-qa.engage.comprodls.com/4eabb7df/difusion/expapp/ootb/v25/assets/images/engage_app.svg\">  </div>" +
            "<a role=\"button\" class=\"navbar-burger\" aria-label=\"menu\" aria-expanded=\"false\" data-target=\"navbarBasic\">" +
            "<span aria-hidden=\"true\"></span><span aria-hidden=\"true\"></span> <span aria-hidden=\"true\"></span></a> </div>" +
            "<div id=\"navbarBasic\" class=\"navbar-menu\" ><div class=\"navbar-start\">" +
            "<div class=\"navbar-item has-dropdown is-hoverable\"><a class=\"navbar-link\"> App URLs</a>" +
            "<div class=\"navbar-dropdown\"><a class=\"navbar-item\" href=\"https://engage-dev1.comprodls.com/\" target=\"_blank\"> Engage - dev1 </a>" +
            "<a class=\"navbar-item\" href=\"https://engage-difusion-dev2.comprodls.com/\" target=\"_blank\">Engage - dev2</a>" +
            "<a class=\"navbar-item\" href=\"https://engage-dev2.comprodls.com/\" target=\"_blank\">Engage - dev2 (generic)</a>" +
            "<a class=\"navbar-item\" href=\"https://backoffice-difusion-dev1.comprodls.com/\" target=\"_blank\"> Backoffice - dev1 </a>" +
            "<a class=\"navbar-item\" href=\"https://backoffice-difusion-dev2.comprodls.com/\" target=\"_blank\">Backoffice - dev2</a></div></div>" +
            "<div class=\"navbar-item has-dropdown is-hoverable\"><a class=\"navbar-link\">Accessibility </a>" +
            "<div class=\"navbar-dropdown\"><a class=\"navbar-item\" href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\">W3C Guidelines</a>" +
            "<a class=\"navbar-item\" href=\"https://docs.google.com/spreadsheets/d/1aJ2VL4rhSfHGFt2OtXKhfvH0QlMwq5eOfnGUUVTcht4/edit#gid=445513750\"target=\"_blank\">Guidelines for Engage  </a>" +
            "<a class=\"navbar-item\" href=\"https://docs.google.com/spreadsheets/d/1CMQ3C4LIoaNhRzWaN0FOfg3lQJwb3ubqqigadJoNdqc/edit#gid=0\" target=\"_blank\"> QA Status</a>" +
            "<a class=\"navbar-item\" href=\"https://accessibilityinsights.io/en/downloads/\" target=\"_blank\"> Accessibility Tool </a></div></div>" +
            "<div class=\"navbar-item has-dropdown is-hoverable\"><a class=\"navbar-link\">More </a>" +
            "<div class=\"navbar-dropdown\"> <a class=\"navbar-item\" href=\"https://projects.invisionapp.com/share/R510S1Q7X94A#/screens/454803500?browse\"  target=\"_blank\">Engage IR Mocks</a>" +
            "<a class=\"navbar-item\" href=\"https://semaphoreci.com/comprodlsengage\" target=\"_blank\">Semaphore</a>" +
            "<a class=\"navbar-item\" href=\"https://bitbucket.org/dashboard/repositories\" target=\"_blank\">Bitbucket</a>" +
            "<hr class=\"navbar-divider\"><a class=\"navbar-item has-text-grey-light\" disabled>Contact</a></div></div> </div>" +
            "<form method='GET' action=\"/\"> <button class=\"button\"><strong>Log Out</strong></button></form> </div ></nav ><br><br> <section class=\"section\">")
        file3.write("<form  action=\"/quiz2\" method=\"get\">")
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            var res = []
            res = file.split(".", 2);
            file3.write("<input style= \"margin-left: 2em\"; type=\"checkbox\" id=\"" + res[0] + " \"name= \"" + res[0] + " \"value= \"" + res[0] + "\">")
            file3.write(" " + file)
            file3.write("<br>")

        });
        file3.write("<br>")
        file3.write("<div display:inline-block><button style=\"font-size: 22px; margin: 4px 2px; cursor: pointer\" class=\"w3-btn w3-black has-text-grey-light\" name=\"Run\" ><strong>Run</strong></button>")


        // file3.write("<form  action=\"/view\" method=\"post\">")
        file3.write("<button style=\"margin-left : 20em;font-size: 22px; margin: 4px 20px; cursor: pointer\" class=\"w3-btn w3-black has-text-grey-light\" name=\"View\"><strong>View</strong></button>")
        file3.write("</form></div>")
        file3.write("</section></body> </html>")
    });
}),

    app.get('/quiz', function (request, response) {
        response.sendFile(__dirname + "/qdg1.html");


    }),
    app.get('/test', function (request, response) {
        response.sendFile(__dirname + "/checkbox.html");

    }),
    //app.get('/view', function (request, response) {

    app.get('/quiz2', function (req, response) {
        fs.readdir(__dirname + '/testResources/testExecutionFiles/difusionExperienceApp/production/', function (err, files) {
            //handling error
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            }
            executionFile = Object.values(req.query);
            var i = 0, testName;
            if ((req.originalUrl).includes("View")) {
                const { readFileSync } = require('fs')
                var loadUser = JSON.parse(readFileSync(__dirname + '/testResources/testExecutionFiles/difusionExperienceApp/production/' + executionFile[0] + ".json"));
                response.json(loadUser);
            }
            else {

                if (executionFile.length > 2) {
                    for (i = 1; i < executionFile.length - 1; i++) {
                        executionFile[i] = executionFile[i - 1] + ".json," + executionFile[i] + ".json"
                        testName = executionFile[i];
                    }
                }
                else {
                    testName = executionFile[0] + ".json";
                }
                console.log("Running the test : " + testName)
                var response1 = shell.exec("npm run landingFeatureTest");
                console.log(response1)
                response.send(response1);
                //  console.log(__dirname + "/output/reports/TestReports/index.html")
                // response.sendFile(__dirname + "/output/reports/TestReports/index.html");
            }
            /*       if (response1.length > 0)
                     file1 = fs.createWriteStream(__dirname + '/executionoutput.txt');
                 response1.replace("\n", "<br>")
                 file1.write(String(response1))
                 file2 = fs.createWriteStream(__dirname + '/testResult.html');
                 file2.write("<!DOCTYPE html><html><body>")
                 file2.write("<object data=\"" + __dirname + '/executionoutput.txt' + "\" width=\"800\" height=\"1000\" Not supported </object>)")
                 file2.write("</body> </html>")
                 response.sendFile(__dirname + '/testResult1.html')
                 //
        */ })
    }),

    app.post('/upload', function (req, res) {
        if (!req.files || Object.keys(req.files).length === 0) {
            res.status(400).send('No files were uploaded please retry.');
            return;
        }

        console.log('req.files >>>', req.files); // eslint-disable-line
        res.sendFile(__dirname + "/qdg2.html");
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
                        // "totalScore": 0,
                        // "passScore": 0,
                        "type": "Native Engage Learning Object",
                        "name": "",
                        "question": []
                    }
                }
                Object.keys(loJson.itemBody.questions).forEach(function (qindex) {
                    quizObj.quizName.question[qindex] = {
                        "number": null,
                        "quesType": "",
                        "quesTitle": "",
                        "instructionText": null,
                        "promptText": null,
                        "viewLabels": {
                            "instructionHeading": null,
                            "selectOneLabel": null,
                            "selectOneOrMoreLabel": null,
                            "selectFromDropdownLabel": null,
                            "matchingLeftLabel": null,
                            "matchingRightLabel": null,
                            "zoomLabel": null,
                            "selectLabel": null,
                            "noneLabel": null,
                            "clearLabel": null
                        },
                        "mediaType": null,
                        "subQues": [],
                        "answerKey": [],
                        "scenario1": [],
                        "scenario2": [],
                        // "maxScore": "",
                        //"maxOptions": "",
                        // "id": "",
                    }
                    //quizObj.quizName.question[qindex].id = loJson.itemBody.questions[qindex].id;

                    console.log(loJson.itemBody.questions[qindex].id);

                    quizObj.quizName.question[qindex].number = parseInt(qindex) + 1;
                    quizObj.quizName.name = loJson.itemMeta.title;
                    var quesJson = loJson.itemFragments[loJson.itemBody.questions[qindex].id];
                    quizObj.quizName.question[qindex].quesType = quesJson.data.player;
                    quizObj.quizName.question[qindex].quesTitle = quesJson.data.itemBody.stimulus.content.data.replace(/(<([^>]+)>)/ig, '');
                    quizObj.quizName.question[qindex].instructionText = quesJson.data.itemBody.instruction.content.data.replace(/(<([^>]+)>)/ig, '') == "" ? null : quesJson.data.itemBody.instruction.content.data.replace(/(<([^>]+)>)/ig, '');
                    if (quesJson.data.itemBody.prompt != null)
                        quizObj.quizName.question[qindex].promptText = (quesJson.data.itemBody.prompt.content.data.replace(/(<([^>]+)>)/ig, '')) == "" ? null : quesJson.data.itemBody.prompt.content.data.replace(/(<([^>]+)>)/ig, '');

                    quizObj.quizName.question[qindex].mediaType = (quesJson.data.itemBody.media.content.data.type) == "" ? null : (quesJson.data.itemBody.media.content.data.type);
                    quizObj.quizName.question[qindex] = getQuesdetail(quesJson, quizObj.quizName.question[qindex]);
                    //quizObj.quizName.question[qindex].scenario1 = quizObj.quizName.question[qindex].answerKey;
                    //quizObj.quizName.question[qindex].scenario2 = quizObj.quizName.question[qindex].answerKey;
                    quizObj.quizName.question[qindex].subQues = quizObj.quizName.question[qindex].subQues;

                    if (quesJson.data.itemBody.viewLabels != null) {
                        quizObj.quizName.question[qindex].viewLabels = {
                            instructionHeading: quesJson.data.itemBody.viewLabels.instructionHeading || null,
                            selectOneLabel: quesJson.data.itemBody.viewLabels.selectOne || null,
                            selectOneOrMoreLabel: quesJson.data.itemBody.viewLabels.selectOneOrMore || null,
                            selectFromDropdownLabel: quesJson.data.itemBody.viewLabels.selectFromDropdown || null,
                            matchingLeftLabel: quesJson.data.itemBody.viewLabels.matchingLeftLabel || null,
                            matchingRightLabel: quesJson.data.itemBody.viewLabels.matchingRightLabel || null,
                            zoomLabel: quesJson.data.itemBody.viewLabels.zoomLabel || null,
                            selectLabel: quesJson.data.itemBody.viewLabels.selectLabel || null,
                            noneLabel: quesJson.data.itemBody.viewLabels.noneLabel || null,
                            clearLabel: quesJson.data.itemBody.viewLabels.clearLabel || null,
                        }
                    }
                    // quizObj.quizName.totalScore = quizObj.quizName.totalScore + quizObj.quizName.question[qindex].maxScore;
                    // quizObj.quizName.question[qindex].maxScore = loJson.itemBody.questions[qindex].meta.score;
                })
                // quizObj.quizName.passScore = Math.round(quizObj.quizName.totalScore * 0.7 * 10) / 10;
                fs.writeFile(__dirname + '/download/' + "output.json", jsonFormat(quizObj, {
                    type: 'space',
                    size: 2
                }), function (err) {
                    if (err) throw err;
                    console.log('quiz data json saved at output path');
                });
            })
        })
    })
app.get('/single', function (req, res) {
    console.log('single file');
    // Download function provided by express
    //console.log(sampleFile.name)
    res.download(__dirname + '/download/' + "output.json", function (err) {
        if (err) {
            console.log(err);
        }
    })
})

//define the route for "/"

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

    if (obj.quesType == 'multi-mcqsr-itemplayer' || obj.quesType == 'mcqmr-itemplayer') {
        Object.keys(qJson.data.itemBody.questions).forEach(function (i) {
            let quesOptions = [];
            let answerKey = [];
            let subQues = [];
            let subQuesOption = [];
            subQuesOption[i] = qJson.data.itemBody.questions;
            Object.keys(subQuesOption).forEach(function (j) {
                subQues[j] = [];
                subQues[j][0] = subQuesOption[i][j].id.substring(13);
                subQues[j][1] = (subQuesOption[i][j].data.stimulus.content.data.replace(/(<([^>]+)>)/ig, '')) == "" ? null : (subQuesOption[i][j].data.stimulus.content.data.replace(/(<([^>]+)>)/ig, ''));
                subQues[j][2] = (subQuesOption[i][j].data.media.content.data.type) == "" ? null : subQuesOption[i][j].data.media.content.data.type;
                obj.subQues.push(subQues[j])
            })

            quesOptions[i] = qJson.data.itemBody.questions[i].data
                .options;
            Object.keys(quesOptions[i]).forEach(function (j) {
                answerKey[j] = [];
                answerKey[j][0] = quesOptions[i][j].id;
                answerKey[j][1] = (quesOptions[i][j].content.data.replace(/(<([^>]+)>)/ig, '')) == "" ? null : quesOptions[i][j].content.data.replace(/(<([^>]+)>)/ig, '')
                answerKey[j][2] = null;
                answerKey[j][3] = null;
                answerKey[j][4] = (quesOptions[i][j].media.content.data.type) == "" ? null : quesOptions[i][j].media.content.data.type;
                Object.keys(qJson.data.itemBody.validations).forEach(function (key) {
                    if (obj.quesType == 'mcqmr-itemplayer') {
                        if (qJson.data.itemBody.questions[i].id == quesValidations[key].responseContainer.slice(0, -3) && quesValidations[key].correctResponse == "true" && answerKey[j][0] == quesValidations[key].responseContainer.substring(15)) {
                            answerKey[j][2] = "select";
                            answerKey[j][3] = "correct";
                        }
                    }
                    else if (obj.quesType == 'multi-mcqsr-itemplayer') {
                        if (qJson.data.itemBody.questions[i].id == quesValidations[key].responseContainer && quesValidations[key].correctResponse == answerKey[j][0]) {
                            answerKey[j][2] = "select";
                            answerKey[j][3] = "correct";
                        }
                    }
                })
                answerKey[j][0] = (parseInt(i) + 1) + "-" + quesOptions[i][j].id;
                obj.answerKey.push(answerKey[j])
            })
        })
        //console.log(obj.answerKey)
    }

    else if (obj.quesType == 'fibtext-itemplayer') {
        Object.keys(quesOptions).forEach(function (j) {
            obj.answerKey[j] = [];
            obj.answerKey[j][0] = quesOptions[j].id;
            Object.keys(quesValidations).forEach(function (key) {
                if (quesValidations[key].responseContainer == obj.answerKey[j][0]) {
                    obj.answerKey[j][1] = quesValidations[key].correctDisplay;
                    obj.answerKey[j][2] = "correct";
                }
            })
        })
    }

    else if (obj.quesType == 'fibdropdown-itemplayer') {
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
    else if (obj.quesType == 'dnd-imagelabel-itemplayer' || obj.quesType == 'dnd-fib-itemplayer') {
        Object.keys(quesOptions).forEach(function (j) {
            obj.answerKey[j] = [];
            obj.answerKey[j][0] = quesOptions[j].id;
            obj.answerKey[j][1] = null;
            Object.keys(quesValidations).forEach(function (key) {
                if (quesValidations[key].correctResponse == quesOptions[j].id) {
                    obj.answerKey[j][2] = quesValidations[key].responseContainer;
                    obj.answerKey[j][3] = quesOptions[j].content.data;
                    obj.answerKey[j][4] = "correct";
                }
            })
        })
    }

    /*else if (obj.quesType == 'mcmr-itemplayer') {
        Object.keys(quesOptions).forEach(function (j) {
            obj.answerKey[j] = [];
            obj.answerKey[j][0] = quesOptions[j].id;
            obj.answerKey[j][1] = quesOptions[j].content.data;
            obj.answerKey[j][2] = "";
            obj.answerKey[j][3] = "";
            Object.keys(qJson.data.itemBody.validations).forEach(function (key) {
                if (quesValidations[key].responseContainer == obj.answerKey[j][0] && quesValidations[key].correctResponse == 'true') {
                    obj.answerKey[j][2] = "select";
                    obj.answerKey[j][3] = "correct";
                }
            })
        })
    }*/
    else if (obj.quesType == 'orderlist-itemplayer') {
        Object.keys(quesOptions).forEach(function (j) {
            obj.answerKey[j] = [];
            obj.answerKey[j][0] = quesOptions[j].id;
            obj.answerKey[j][1] = quesOptions[j].content.data;
            obj.answerKey[j][2] = "";
            obj.answerKey[j][3] = "";
            Object.keys(qJson.data.itemBody.validations).forEach(function (key) {
                if (quesValidations[key].correctResponse == quesOptions[j].id) {
                    obj.answerKey[j][2] = quesValidations[key].responseContainer;
                    obj.answerKey[j][3] = "correct";
                }
            })
        })
    }
    else if (obj.quesType == 'classify-itemplayer') {
        obj.answerKey = { "key1": [], "key2": [] }
        Object.keys(quesOptions).forEach(function (j) {
            obj.answerKey.key1[j] = [];
            obj.answerKey.key1[j][0] = quesOptions[j].id;
            obj.answerKey.key1[j][1] = "";
            Object.keys(quesValidations).forEach(function (key) {
                if (quesValidations[key].correctResponse == quesOptions[j].id) {
                    obj.answerKey.key1[j][2] = quesValidations[key].responseContainer;
                    obj.answerKey.key1[j][3] = quesOptions[j].content.data;
                    obj.answerKey.key1[j][4] = "correct";
                }
            })
        })
        Object.keys(qJson.data.itemBody.responseContainer).forEach(function (j) {
            obj.answerKey.key2[j] = [];
            obj.answerKey.key2[j][0] = qJson.data.itemBody.responseContainer[j].id;
            obj.answerKey.key2[j][1] = qJson.data.itemBody.responseContainer[j].content.data;
            obj.answerKey.key2[j][2] = "correct";
        })
    }
    else if (obj.quesType == 'matching-itemplayer') {
        var responseOptions = qJson.data.itemBody.responseContainer;
        Object.keys(quesOptions).forEach(function (j) {
            obj.answerKey[j] = [];
            obj.answerKey[j][2] = quesOptions[j].id;
            Object.keys(responseOptions).forEach(function (key) {
                if (quesValidations[key].responseContainer == responseOptions[j].id) {
                    obj.answerKey[j][1] = responseOptions[key].content.data;
                }
            })
            Object.keys(quesValidations).forEach(function (key) {
                if (quesValidations[key].correctResponse == quesOptions[j].id) {
                    obj.answerKey[j][0] = quesValidations[key].responseContainer;
                    obj.answerKey[j][3] = quesOptions[j].content.data;
                    obj.answerKey[j][4] = "correct";
                }
            })
        })
    }
    else {
        console.log("get questiondetail is not available for " + obj.type);
    }
    return obj;
}