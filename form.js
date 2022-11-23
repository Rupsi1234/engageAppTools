var express = require("express");
const Port = process.env.PORT || 8000;
var sampleFile;
var uploadPath;
var quizObj
var fs = require('fs');
const fileUpload = require('express-fileupload');
const open = require('open');
var fs = require('fs');
const PageTemplate = require('./PageTemplate.json');
const cssProperty = require('./property.json');
var file, pageSelectorFile, arr = [], pageSelectorGroup = [], k, columnName;
var parse = require('csv-parse');
var sampleFile;
var uploadPath;
const zip = require('express-zip');
//use the application off of express.
var app = express();
app.use(fileUpload());
var testName,response1;


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
//app.listen(8080);
open('http://localhost:8000');
//console.log("Please launch http://localhost:8080 in your browser url/ or direct url");

app.get('/homepage', function (request, response) {
    response.sendFile(__dirname + "/home.html");

    //joining path of directory 
    //const directoryPath = path.join(__dirname, 'Documents');
    //passsing directoryPath and callback function
    file3 = fs.createWriteStream(__dirname + '/checkbox.html');
    console.log(__dirname + '/checkbox.html')
    fs.readdir(__dirname + '/testResources/testExecutionFiles/difusionExperienceApp/production', function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        file3.write("<!DOCTYPE html><html>")
        file3.write("<head> <meta charset=\"utf-8\">\ <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><meta http-equiv=\"Cache-Control\" content=\"no-cache, no-store, must-revalidate\" />" +
            "<meta http-equiv=\"Pragma\" content=\"no-cache\" /><meta http-equiv=\"Expires\" content=\"0\" /> <title>Engage QA Tools - Execution File</title><link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css\">" +
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
        file3.write("<form  action=\"/execution\" method=\"get\">")
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            var res = []
            res = file.split(".", 2);
            file3.write("<input style= \"margin-left: 2em\"; type=\"checkbox\" id=\"" + res[0] + " \"name= \"" + res[0] + " \"value= \"" + res[0] + "\">")
            file3.write(" " + file)
            file3.write("<br>")

        });
        file3.write("<br>")
        file3.write("<div display:inline-block><button style=\"font-size: 22px; margin: 4px 2px; cursor: pointer\" class=\"w3-btn w3-black has-text-grey-light\" name=\"Next\" ><strong>Click for Running the Test</strong></button>")


        // file3.write("<form  action=\"/view\" method=\"post\">")
        file3.write("<button style=\"margin-left : 20em;font-size: 22px; margin: 4px 20px; cursor: pointer\" class=\"w3-btn w3-black has-text-grey-light\" name=\"View\"><strong>View</strong></button>")
        file3.write("<button style=\"margin-left : 20em;font-size: 22px; margin: 4px 20px; cursor: pointer\" class=\"w3-btn w3-black has-text-grey-light\" name=\"Report\"><strong>Report</strong></button>")
        file3.write("<button style=\"margin-left : 20em;font-size: 22px; margin: 4px 20px; cursor: pointer\" class=\"w3-btn w3-black has-text-grey-light\" name=\"Result\"><strong>Result</strong></button>")

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

    app.post('/check', function (request, response) {


        response.send("PLEASE CLICK ON REPORT BUTTON AFTER 5 MINS TO CHECK THE RESULTS");
        response1 = shell.exec("npm run test -- --appType=difusionExperienceApp --testEnv=production --testExecFile=" + testName + " --browserCapability=desktop-chrome-1920")
        console.log(response1)
    })
    app.get('/report', function (request, response) {
        response.sendFile(__dirname + "/output/reports/TestReports/index.html");
    }),
    //app.get('/view', function (request, response) {

    app.get('/execution', function (req, response) {
        fs.readdir(__dirname + '/testResources/testExecutionFiles/difusionExperienceApp/production/', function (err, files) {
            //handling error
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            }
            executionFile = Object.values(req.query);
            var i = 0;
            if ((req.originalUrl).includes("View")) {
                const { readFileSync } = require('fs')

                var loadUser = JSON.parse(readFileSync(__dirname + '/testResources/testExecutionFiles/difusionExperienceApp/production/' + executionFile[0] + ".json"));
                response.json(loadUser);
            }
            else if ((req.originalUrl).includes("Report")) {
                response.sendFile(__dirname + "/output/reports/TestReports/index.html");
            }
           else if ((req.originalUrl).includes("Result")) {

                response.send(response1)
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

                response.sendFile(__dirname + "/tcp2.html");
                // var mySubString = response1.substring(
                //   response1.indexOf("Starting"), 
                //   response1.lastIndexOf("in chrome")
                //);
                //console.log(mySubString)
                /* if (response1.includes("PASSED in chrome"))
                     response.write("Test is Passed")
                 else
                     response.write("fail in chrome");*/

                //  var response1 = shell.exec("npm run test -- --appType=difusionExperienceApp --testEnv=production --testExecFile=" + testName + " --browserCapability=desktop-chrome-1920")

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

    app.get('/page', function (req, res) {
        res.sendFile(__dirname + "/index1.html");
    })
    app.post('/upload1', function (req, res) {


        if (!req.files || Object.keys(req.files).length === 0) {
            res.status(400).send('No files were uploaded.');
            return;
        }
    
        console.log('req.files >>>', req.files); // eslint-disable-line
    
        sampleFile = req.files.sampleFile;
    
        uploadPath = __dirname + '/uploads/' + sampleFile.name;
    
        sampleFile.mv(uploadPath, function (err) {
            if (err) {
                return res.status(500).send(err);
            }
    
            res.sendFile(__dirname + "/pageObject.html");
            var parser = parse({ columns: true }, function (err, records) {
                pageSelectorFile = records;
                columnName = parser.options.columns;
            });
            fs.createReadStream(uploadPath).pipe(parser);
        });
    });
    app.get("/getvalue", function (request, response) {
        var inputFile = request.query.inputFile;
        var isInitializedcheck = request.query.isInitialized;
        var getDataCheck = request.query.getData;
        var selectorJsonCheck = request.query.selectorJson;
        var testcaseJsCheck = request.query.testcaseJs;
        var appDataJsonCheck = request.query.appDataJson;
        var pageHeaderCheck = request.query.pageHeader;
        var param1Check = request.query.baseAction;
        var param2Check = request.query.selectorFile;
        var selectorDeclartionCheck = request.query.selectorDeclartion;
        var clickFunctionsCheck = request.query.clickFunction;
        var setValueFunctionsCheck = request.query.setValueFunction;
        var appShellPageCheck = request.query.appShellPage;
    
        if (inputFile != "") {
            try {
                console.log("inputFileName" + inputFile)
                response.sendFile(__dirname + "/index2.html");
                //  response.send("Your PageObject \"" + inputFile + ".page.js\" is genrated at \"" + __dirname + "\\outputFile\\" + inputFile + '.page.js\"');
                // Traverse the selector json
                //Create the output Page
    
                file = fs.createWriteStream(__dirname + "/outputFile/" + inputFile + '.page.js');
    
    
    
                for (let i = 1; i < pageSelectorFile.length; i++) {
                    for (let j = 1; j < pageSelectorFile.length; j++) {
                        pageSelectorGroup[i] = [];
                    }
                }
                for (var i = 0; i < pageSelectorFile.length; i++) {
                    arr[i] = pageSelectorFile[i].group
    
                }
                let unique = [...new Set(arr)]
                for (var j = 1; j <= unique.length; j++) {
                    k = 0;
                    for (var i = 0; i < pageSelectorFile.length; i++) {
                        if (unique[j - 1] == pageSelectorFile[i].group) {
                            pageSelectorGroup[j][k] = pageSelectorFile[i]
                            k++;
                        }
    
                    }
                }
                if (appDataJsonCheck) {
                    generateAppDataJson(pageSelectorFile, inputFile) //for app data generation
                }
                if (testcaseJsCheck) {
                    if (appShellPageCheck)
                    generateTestcase(pageSelectorFile, inputFile, pageSelectorGroup,appShellPageCheck);
                    else
                    generateTestcase(pageSelectorFile, inputFile, pageSelectorGroup);
                }
                if (selectorJsonCheck) {
                    generatePageSelectorJson(pageSelectorFile, inputFile);
                    //generateTestcase(pageSelectorFile, inputFile, pageSelectorGroup);
                    // generateAppDataJson(pageSelectorFile, inputFile) //for app data generation
                }
                if (pageHeaderCheck) {
    
                    // Generate Page Header
                    if (param1Check)
                        if (param2Check)
                            if (appShellPageCheck)
                                generatePageHeader(PageTemplate, param1Check, param2Check, appShellPageCheck);
                            else
                                generatePageHeader(PageTemplate, param1Check, param2Check);
                        else
                            generatePageHeader(PageTemplate, param1Check);
                    else
                        generatePageHeader(PageTemplate);
                }
    
                if (selectorDeclartionCheck) {
                    //Travserse the Selector of a page     
                    generatePageSelector(pageSelectorFile, inputFile);
                }
    
                if (isInitializedcheck) {
                    if (appShellPageCheck)
    
                        generateIsinitiazeFunction(pageSelectorFile, PageTemplate, appShellPageCheck);
                    else
                        generateIsinitiazeFunction(pageSelectorFile, PageTemplate);
                }
    
                if (getDataCheck) {
                    //Basic Data function
                    console.log("Data function is generated")
                    generategetCssPropertyData(pageSelectorFile, inputFile, cssProperty)
                    //console.log(pageSelectorGroup.length)
                    getDatafunction(pageSelectorFile, pageSelectorGroup, inputFile)
                    /*    if (pageSelectorFile[0].group == "")
                            generateGetDatafunction(pageSelectorFile, inputFile)
                        else
                            generateGroupGetDatafunction(pageSelectorGroup, inputFile)*/
                }
    
                if (clickFunctionsCheck) {
                    // Basic Click functions
                    console.log("Click Function is generated")
                    generateClickFunctions(pageSelectorFile, inputFile, pageSelectorGroup, PageTemplate)
                }
    
                if (setValueFunctionsCheck) {
                    // Basic SetData functions
                    console.log("Set Value Function is generated")
                    generateSetValueFunctions(pageSelectorFile, inputFile)
                }
                file.write("\n}\n\n")
    
                file.end();
                app.get('/single1', function (req, res) {
                    console.log('single file');
                    // Download function provided by express
                    var text = req.headers.referer;
                    var mySubString = text.substring(
                        text.indexOf("=") + 1,
                        text.lastIndexOf("&pageHeader")
                    );
                    res.download(__dirname + "/outputFile/" + mySubString + '.page.js', function (err) {
                        if (err) {
                            console.log(err);
                        }
                    })
                })
                app.get('/multiple1', function (req, res) {
                    console.log('Multiple file download')
                    // Download function provided by express
                    var text1 = req.headers.referer;
                    var mySubString1 = text1.substring(
                        text1.indexOf("=") + 1,
                        text1.lastIndexOf("&pageHeader")
                    );
                    // zip method which take file path
                    // and name as objects
                    if (fs.existsSync(__dirname + "/outputFile/" + 'selector.json') == true  && fs.existsSync(__dirname + "/outputFile/" + 'appLangEN.json') == true && fs.existsSync(__dirname + "/outputFile/" + mySubString1 + '.test.js') == true) {
                        res.zip([
                            {
                                path: __dirname + "/outputFile/" + mySubString1 + '.page.js',
                                name: mySubString1 + '.page.js'
                            },
                            {
                                path: __dirname + "/outputFile/" + 'appLangEN.json',
                                name: 'appLangEN.json'
                            },
                            {
                                path: __dirname + "/outputFile/" + 'selector.json',
                                name: 'selector.json'
                            },
                            {
                                path: __dirname + "/outputFile/" + mySubString1 + '.test.js',
                                name: mySubString1 + '.test.js'
                            }
                        ])
                    }
                    else {
                        if (fs.existsSync(__dirname + "/outputFile/" + 'selector.json') == false && fs.existsSync(__dirname + "/outputFile/" + 'appLangEN.json') == true && fs.existsSync(__dirname + "/outputFile/" + mySubString1 + '.test.js') == true) {
                            res.zip([
                                {
                                    path: __dirname + "/outputFile/" + mySubString1 + '.page.js',
                                    name: mySubString1 + '.page.js'
                                },
                                {
                                    path: __dirname + "/outputFile/" + 'appLangEN.json',
                                    name: 'appLangEN.json'
                                },
                                {
                                    path: __dirname + "/outputFile/" + mySubString1 + '.test.js',
                                    name: mySubString1 + '.test.js'
                                }
                            ])
                        }
                        else {
                            if (fs.existsSync(__dirname + "/outputFile/" + 'selector.json') == true && fs.existsSync(__dirname + "/outputFile/" + 'appLangEN.json') == false && fs.existsSync(__dirname + "/outputFile/" + mySubString1 + '.test.js') == true) {
                                res.zip([
                                    {
                                        path: __dirname + "/outputFile/" + mySubString1 + '.page.js',
                                        name: mySubString1 + '.page.js'
                                    },
                                    {
                                        path: __dirname + "/outputFile/" + 'selector.json',
                                        name: 'selector.json'
                                    },
                                    {
                                        path: __dirname + "/outputFile/" + mySubString1 + '.test.js',
                                        name: mySubString1 + '.test.js'
                                    }
                                ])
                            }
    
                            else {
                                if (fs.existsSync(__dirname + "/outputFile/" + 'selector.json') == false && fs.existsSync(__dirname + "/outputFile/" + 'appLangEN.json') == false && fs.existsSync(__dirname + "/outputFile/" + mySubString1 + '.test.js') == true) {
    
                                    res.zip([
                                        {
                                            path: __dirname + "/outputFile/" + mySubString1 + '.page.js',
                                            name: mySubString1 + '.page.js'
                                        },
                                        {
                                            path: __dirname + "/outputFile/" + mySubString1 + '.test.js',
                                            name: mySubString1 + '.test.js'
                                        }
                                    ])
                                }
                                else {
                                    if (fs.existsSync(__dirname + "/outputFile/" + 'selector.json') == true && fs.existsSync(__dirname + "/outputFile/" + 'appLangEN.json') == false && fs.existsSync(__dirname + "/outputFile/" + mySubString1 + '.test.js') == false) {
        
                                        res.zip([
                                            {
                                                path: __dirname + "/outputFile/" + mySubString1 + '.page.js',
                                                name: mySubString1 + '.page.js'
                                            },
                                            {
                                                path: __dirname + "/outputFile/" + 'selector.json',
                                                name: 'selector.json'
                                            }
                                        ])
                                    }
                                else{
    
                                    if (fs.existsSync(__dirname + "/outputFile/" + 'selector.json') == true && fs.existsSync(__dirname + "/outputFile/" + 'appLangEN.json') == false && fs.existsSync(__dirname + "/outputFile/" + mySubString1 + '.test.js') == false) {
        
                                        res.zip([
                                            {
                                                path: __dirname + "/outputFile/" + mySubString1 + '.page.js',
                                                name: mySubString1 + '.page.js'
                                            },
                                            {
                                                path: __dirname + "/outputFile/" + 'selector.json',
                                                name: 'selector.json'
                                            }
                                        ])
                                    }
                                else {
                                    if (fs.existsSync(__dirname + "/outputFile/" + 'selector.json') == false && fs.existsSync(__dirname + "/outputFile/" + 'appLangEN.json') == true && fs.existsSync(__dirname + "/outputFile/" + mySubString1 + '.test.js') == false) {
    
                                        res.zip([
                                            {
                                                path: __dirname + "/outputFile/" + mySubString1 + '.page.js',
                                                name: mySubString1 + '.page.js'
                                            },
                                            {
                                                path: __dirname + "/outputFile/" + 'appLangEN.json',
                                                name: 'appLangEN.json'
                                            }
                                        ])
    
                                    }
    
                                    else {
                                        if (fs.existsSync(__dirname + "/outputFile/" + 'selector.json') == false && fs.existsSync(__dirname + "/outputFile/" + 'appLangEN.json') == false && fs.existsSync(__dirname + "/outputFile/" + mySubString1 + '.test.js') == false) {
                                            res.zip([
                                                {
                                                    path: __dirname + "/outputFile/" + mySubString1 + '.page.js',
                                                    name: mySubString1 + '.page.js'
                                                }
                                            ])
                                        }
                                        else{
                                        if (fs.existsSync(__dirname + "/outputFile/" + 'selector.json') == true && fs.existsSync(__dirname + "/outputFile/" + 'appLangEN.json') == true && fs.existsSync(__dirname + "/outputFile/" + mySubString1 + '.test.js') == false) {
                                            res.zip([
                                                {
                                                    path: __dirname + "/outputFile/" + mySubString1 + '.page.js',
                                                    name: mySubString1 + '.page.js'
                                                },
                                                {
                                                    path: __dirname + "/outputFile/" + 'appLangEN.json',
                                                    name: 'appLangEN.json'
                                                },
                                                {
                                                    path: __dirname + "/outputFile/" + 'selector.json',
                                                    name: 'selector.json'
                                                }
                                            ])
                                        }
                                    }
                                }}
                            }
                            }
                        }
                        }
                    }
                })
            }
            catch (err) {
                console.log(err)
            }
    
        }
        else {
            response.send("Please provide us input File");
        }
    });
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
                var quizObj = {
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

    if (obj.quesType == 'multi-mcqsr-itemplayer' || obj.quesType == 'mcqmr-itemplayer' || obj.quesType == 'kids-mcqsr-itemplayer') {
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
                    else if (obj.quesType == 'multi-mcqsr-itemplayer' || 'kids-mcqsr-itemplayer') {
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

    else if (obj.quesType == 'fibdropdown-itemplayer' || 'kids-fibdropdown-itemplayer') {
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
function generatePageSelectorJson(pageSelectorFile, inputFile) {
    file1 = fs.createWriteStream(__dirname + "/outputFile/" + 'selector.json');
    file1.write("{\"" + inputFile + "\": \n{\n")
    for (var i = 0; i < pageSelectorFile.length; i++) {
        file1.write("\"" + pageSelectorFile[i].Label + "\" : \"" + pageSelectorFile[i].cssSelector + "\",\n")
    }
    file1.write("\n}\n}")
}
function generateTestcase(pageSelectorFile, inputFile, pageSelectorGroup, appShellPageCheck) {
    var testCaseNumber = 1;
    file2 = fs.createWriteStream(__dirname + "/outputFile/" + inputFile + '.test.js');
    file2.write("\"use strict\";\n")
    file2.write("var " + inputFile + "= require('../../pages/engageExperienceApp/" + inputFile + ".page.js');");
    if (appShellPageCheck)
    file2.write("\nvar appShell = require('../../pages/engageExperienceApp/appShell.page');");
    file2.write("\nvar sts;\n\nmodule.exports = {\n");
    for (var i = 0; i < pageSelectorFile.length; i++) {
        if ((pageSelectorFile[i].tagName).toLowerCase().includes("button")) {
            file2.write("ENG_" + (inputFile.substring(0, 4)).toUpperCase() + "_TC_" + testCaseNumber + " :   async function (testdata) { \n")
            // file2.write("\nsts = await " + inputFile + ".click_" + pageSelectorFile[i].functionSupport + "();\n")
            if (pageSelectorFile[i].returnValue != "" && (!(pageSelectorFile[i].returnValue).toLowerCase().includes(".page"))&&(!(pageSelectorFile[i].returnValue).includes(","))) {
                file2.write("sts = await " + inputFile + ".click_" + pageSelectorFile[i].Label + "();")
                for (var k = 0; k < pageSelectorFile.length; k++) {
                    if (pageSelectorFile[i].returnValue == pageSelectorFile[k].group) {
                        file2.write("\nawait assertion.assertEqual(sts." + pageSelectorFile[k].Label + ",tesdata." + pageSelectorFile[k].Label + ",\""+ pageSelectorFile[k].Label + " text mismatch\");")
                    }
                }
            }
            else {
                if ((pageSelectorFile[i].returnValue).toLowerCase().includes(".page")) {
                    file2.write("sts = await " + inputFile + ".click_" + pageSelectorFile[i].Label + "();\n")
                    file2.write("await assertion.assertEqual(sts.pageStatus, true,\"Page is not launched. \");\n")
                    file2.write("await assertion.assertEqual(sts.appShell.header, true,\"Page header status mismatch\");")
                }
                else
                if ((pageSelectorFile[i].returnValue).includes(",")) {
                    file2.write("sts = await " + inputFile + ".click_" + pageSelectorFile[i].Label + "();\n")
                    file2.write("await assertion.assertEqual(sts, true,\"" + pageSelectorFile[i].Label + " are not Clicked\");")
                }
                else {
                    file2.write("sts = await " + inputFile + ".click_" + pageSelectorFile[i].Label + "();\n")
                    file2.write("await assertion.assertEqual(sts, true,\"" + pageSelectorFile[i].Label + " are not Clicked\");")
                }
            }
            if (pageSelectorFile[i].functionSupport != "") {
                // file2.write("\nsts = await " + inputFile + ".click_" + pageSelectorFile[i].functionSupport + "();\n")

                for (var p = 0; p < pageSelectorFile.length; p++) {
                    if (pageSelectorFile[p].Label == pageSelectorFile[i].functionSupport) {
                        if (pageSelectorFile[p].returnValue != "" && (!(pageSelectorFile[p].returnValue).toLowerCase().includes(".page"))&&(!(pageSelectorFile[i].returnValue).includes(","))) {
                            file2.write("sts = await " + inputFile + ".click_" + pageSelectorFile[i].functionSupport + "();")
                            for (var k = 0; k < pageSelectorFile.length; k++) {
                                if (pageSelectorFile[p].returnValue == pageSelectorFile[k].group) {
                                    file2.write("\nawait assertion.assertEqual(sts." + pageSelectorFile[k].Label + ",tesdata." + pageSelectorFile[k].Label + ",\""+ pageSelectorFile[k].Label + " text mismatch\");")
                                }
                            }
                        }
                        else {
                            if ((pageSelectorFile[p].returnValue).toLowerCase().includes(".page")) {
                                file2.write("sts = await " + inputFile + ".click_" + pageSelectorFile[i].functionSupport + "();")
                                file2.write("\nawait assertion.assertEqual(sts.pageStatus, true ,\"Page is not launched. \");")
                                file2.write("\nawait assertion.assertEqual(sts.appShell.header, true ,\"Page header status mismatch\");")
                            }
                            if ((pageSelectorFile[i].returnValue).toLowerCase().includes(",")) {
                                file2.write("sts = await " + inputFile + ".click_" + pageSelectorFile[i].functionSupport + "();")
                                file2.write("\nawait assertion.assertEqual(sts, true,\"" + pageSelectorFile[i].functionSupport + " are not Clicked\");")
                            }
                            else {
                                file2.write("sts = await " + inputFile + ".click_" + pageSelectorFile[i].functionSupport + "();")
                                file2.write("\nawait assertion.assertEqual(sts, true ,\"" + pageSelectorFile[i].functionSupport + " are not Clicked\");")
                            }
                        }
                    }
                }
            }
            testCaseNumber++;
            file2.write("\n},\n\n")

        }


        if ((pageSelectorFile[i].tagName).toLowerCase().includes("input") || (pageSelectorFile[i].tagName).toLowerCase().includes("textarea")) {
            file2.write("ENG_" + (inputFile.substring(0, 4)).toUpperCase() + "_TC_" + testCaseNumber + " :   async function (testdata) { \n")
            file2.write("sts = await " + inputFile + ".set_" + pageSelectorFile[i].Label + "();")

            if (pageSelectorFile[i].returnValue != "" && (!(pageSelectorFile[i].returnValue).toLowerCase().includes(".page"))&&(!(pageSelectorFile[i].returnValue).includes(","))) {
                for (var k = 0; k < pageSelectorFile.length; k++) {
                    if (pageSelectorFile[i].returnValue == pageSelectorFile[k].group) {
                        file2.write("\nawait assertion.assertEqual(sts." + pageSelectorFile[k].Label + ",tesdata." + pageSelectorFile[k].Label + ",\""+ pageSelectorFile[k].Label + " text mismatch\");")
                    }
                }
            }
            else {
                if ((pageSelectorFile[i].returnValue).toLowerCase().includes(".page")) {
                    file2.write("\nawait assertion.assertEqual(sts.pageStatus, true ,\"Page is not launched. \");")
                    file2.write("\nawait assertion.assertEqual(sts.appShell.header, true ,\"Page header status mismatch\");")
                }
                if ((pageSelectorFile[i].returnValue).toLowerCase().includes(",")) {
                    file2.write("\nawait assertion.assertEqual(sts, true,\"" + pageSelectorFile[i].Label + " values are not set\");\n")
                }
                else {
                    file2.write("\nawait assertion.assertEqual(sts, true ,\"" + pageSelectorFile[i].Label + " values are not set\");\n")
                }
            }




            if (pageSelectorFile[i].functionSupport != "") {
                // file2.write("\nsts = await " + inputFile + ".click_" + pageSelectorFile[i].functionSupport + "();\n")

                for (var p = 0; p < pageSelectorFile.length; p++) {
                    if (pageSelectorFile[p].Label == pageSelectorFile[i].functionSupport) {
                        if (pageSelectorFile[p].returnValue != "" && (!(pageSelectorFile[p].returnValue).toLowerCase().includes(".page"))&&(!(pageSelectorFile[i].returnValue).includes(","))) {
                            file2.write("sts = await " + inputFile + ".click_" + pageSelectorFile[i].functionSupport + "();")
                            for (var k = 0; k < pageSelectorFile.length; k++) {
                                if (pageSelectorFile[p].returnValue == pageSelectorFile[k].group) {
                                    file2.write("\nawait assertion.assertEqual(sts." + pageSelectorFile[k].Label + ",tesdata." + pageSelectorFile[k].Label + ",\""+ pageSelectorFile[k].Label + " text mismatch\");")
                                }
                            }
                        }
                        else {
                            if ((pageSelectorFile[p].returnValue).toLowerCase().includes(".page")) {
                                file2.write("sts = await " + inputFile + ".click_" + pageSelectorFile[i].functionSupport + "();\n")
                                file2.write("await assertion.assertEqual(sts.pageStatus, true,\"Page is not launched. \");\n")
                                file2.write("await assertion.assertEqual(sts.appShell.header, true,\"Page header status mismatch\");\n")
                            }
                            if ((pageSelectorFile[i].returnValue).toLowerCase().includes(",")) {
                                file2.write("sts = await " + inputFile + ".click_" + pageSelectorFile[i].functionSupport + "();\n")
                                file2.write("await assertion.assertEqual(sts, true,\"" + pageSelectorFile[i].functionSupport + " are not Clicked\");")
                            }
                            else {
                                file2.write("sts = await " + inputFile + ".click_" + pageSelectorFile[i].functionSupport + "();\n")
                                file2.write("await assertion.assertEqual(sts, true,\"" + pageSelectorFile[i].functionSupport + " are not Clicked\");")
                            }
                        }
                    }
                }
            }
            testCaseNumber++
            file2.write("\n},\n\n")
        }

    }

    for (var i = 1; i < pageSelectorGroup.length; i++) {

        if (pageSelectorGroup[i].length > 0 && pageSelectorGroup[i][0].group != "") {
            file2.write("ENG_" + (inputFile.substring(0, 4)).toUpperCase() + "_TC_" + testCaseNumber + " :   async function (testdata) { \n")
            file2.write("sts = await " + inputFile + ".getData_" + pageSelectorGroup[i][0].group + "(testdata);\n")

            for (let j = 0; j < pageSelectorGroup[i].length; j++) {
                if (pageSelectorGroup[i][j].group != "") {

                    if (((pageSelectorGroup[i][j].tagName).toLowerCase().includes("img")) || (pageSelectorGroup[i][j].tagName.toLowerCase().includes("svg"))) {
                        file2.write("await assertion.assertEqual(sts." + pageSelectorGroup[i][j].Label + ", true ,\"" + pageSelectorGroup[i][j].Label + " Values is not as expected.\");\n")
                    }
                    else {
                        file2.write("await assertion.assertEqual(sts." + pageSelectorGroup[i][j].Label + ", testdata." + pageSelectorGroup[i][j].Label + ",\"" + pageSelectorGroup[i][j].Label + " Values is not as expected.\");\n")
                    }

                }
            }
            testCaseNumber++;

            file2.write("},\n\n")
        }

    }
    file2.write("}")
}


//test app data generator
function generateAppDataJson(pageSelectorFile, inputFile) {
    var fileEN, fileES;

    if (typeof (columnName.find(o => o.name.includes('AppLangEN'))) == "object") { //check for AppLangEng
        fileEN = fs.createWriteStream(__dirname + "/outputFile/" + 'appLangEN.json');
        fileEN.write("{\"" + inputFile + "\": \n{");

        if (typeof (columnName.find(o => o.name.includes('teacherAppLangEN'))) == "object") {

            fileEN.write("\n" + "\"" + "teacher" + "\": \n{\n");
            for (var i = 0; i < pageSelectorFile.length; i++) {
                if (pageSelectorFile[i].teacherAppLangEN == '')
                    continue;

                else if (i == pageSelectorFile.length - 2) //last record excluding header
                    fileEN.write("\"" + pageSelectorFile[i].Label + "\" : " + pageSelectorFile[i].teacherAppLangEN + "\n")

                else
                    fileEN.write("\"" + pageSelectorFile[i].Label + "\" : " + pageSelectorFile[i].teacherAppLangEN + ",\n")
            }
            fileEN.write("\n}")
        }

        if (typeof (columnName.find(o => o.name.includes('studentAppLangEN'))) == "object") {

            fileEN.write(",\n" + "\"" + "student" + "\": \n{\n");

            for (var i = 0; i < pageSelectorFile.length; i++) {

                if (pageSelectorFile[i].studentAppLangEN == '')
                    continue;

                else if (i == pageSelectorFile.length - 2) //last record excluding header
                    fileEN.write("\"" + pageSelectorFile[i].Label + "\" : " + pageSelectorFile[i].studentAppLangEN + "\n")

                else
                    fileEN.write("\"" + pageSelectorFile[i].Label + "\" : " + pageSelectorFile[i].studentAppLangEN + ",\n")
            }
            fileEN.write("\n}")

        }
        fileEN.write("\n}\n}")
    }


    if (typeof (columnName.find(o => o.name.includes('AppLangES'))) == "object") { //check for AppLang Spanish
        fileES = fs.createWriteStream(__dirname + "/outputFile/" + 'appLangES.json');
        fileES.write("{\"" + inputFile + "\": \n{");

        if (typeof (columnName.find(o => o.name.includes('teacherAppLangES'))) == "object") {

            fileES.write("\n" + "\"" + "teacher" + "\": \n{\n");

            for (var i = 0; i < pageSelectorFile.length; i++) {

                if (pageSelectorFile[i].teacherAppLangES == '')
                    continue;

                else if (i == pageSelectorFile.length - 2) //last record excluding header
                    fileES.write("\"" + pageSelectorFile[i].Label + "\" : " + pageSelectorFile[i].teacherAppLangES + "\n")

                else
                    fileES.write("\"" + pageSelectorFile[i].Label + "\" : " + pageSelectorFile[i].teacherAppLangES + ",\n")
            }
            fileES.write("\n}")

        }

        if (typeof (columnName.find(o => o.name.includes('studentAppLangES'))) == "object") {

            fileES.write(",\n" + "\"" + "student" + "\": \n{\n");

            for (var i = 0; i < pageSelectorFile.length; i++) {

                if (pageSelectorFile[i].studentAppLangES == '')
                    continue;

                else if (i == pageSelectorFile.length - 2) //last record excluding header
                    fileES.write("\"" + pageSelectorFile[i].Label + "\" : " + pageSelectorFile[i].studentAppLangES + "\n")

                else
                    fileES.write("\"" + pageSelectorFile[i].Label + "\" : " + pageSelectorFile[i].studentAppLangES + ",\n")
            }
            fileES.write("\n}")
        }
        fileES.write("\n}\n}")
    }
}



//Genrate header of the page
function generatePageHeader(PageTemplate, param1, param2, appShellPageCheck) {
    file.write("\"use strict\";\n")

    if (param1)
        file.write(PageTemplate.header[param1])
    if (param2)
        file.write(PageTemplate.header[param2])
    if (appShellPageCheck)
        file.write(PageTemplate.isInitialized.appShellPageDeclartion)
    //file.write("\nlet obj;\n")
    file.write("\n\nmodule.exports = {\n");

}

function getDatafunction(pageSelectorFile, pageSelectorGroup, inputFile) {
    var groupCheck = null;
    for (var i = 1; i < pageSelectorGroup.length; i++) {
        for (let j = 0; j < pageSelectorGroup[i].length; j++) {
            if ((pageSelectorGroup[i][j].group) != "") {
                groupCheck == true;
                generateGroupGetDatafunction(pageSelectorGroup, inputFile)
                return;
            }
        }
    }
    if (groupCheck == null)
        generateGetDatafunction(pageSelectorFile, inputFile)
    //generateGroupGetDatafunction(pageSelectorGroup, inputFile)
}

//Generate Selector of a page
function generatePageSelector(pageSelectorFile, inputFile) {
    for (var i = 0; i < pageSelectorFile.length; i++) {
        file.write(pageSelectorFile[i].Label + ": selectorFile.css.ComproEngage." + inputFile + "." + pageSelectorFile[i].Label + ",\n");
    }
}

//Basic isinitialize fucntion  
function generateIsinitiazeFunction(pageSelectorFile, PageTemplate, param1) {
    var flag = false;
    file.write("\n\nisInitialized: async function ()\n{ \n" +
        "var res;\n" +
        "await logger.logInto(await stackTrace.get());\n" +
        "await action.waitForDocumentLoad();\nres = {\n")
    for (var i = 0; i < pageSelectorFile.length; i++) {
        // console.log(pageSelectorFile[i].extraInfo)
        if ((pageSelectorFile[i].extraInfo).toLowerCase().includes("isinitialization")) {
            //   console.log(pageSelectorFile[i].Label)
            file.write("pageStatus:await action.waitForDisplayed(this." + pageSelectorFile[i].Label + "),\n")
            flag = true;
            break;
        }
    }
    if (flag == false) {
        file.write("pageStatus: await action.waitForDisplayed(this." + pageSelectorFile[0].Label + "),\n")// to be decided about the by default label to be selected
    }
    if (param1)
        file.write(PageTemplate.isInitialized[param1])
    file.write("};\n")

    //  if (param1)
    //    file.write(PageTemplate.isInitialized.appShellPagecall)
    file.write("return res; \n},\n\n")
}

function generateGetDatafunction(pageSelectorFile, key) {
    file.write(key + "_Data: async function ()\n{  \n")
    file.write("await logger.logInto(await stackTrace.get());\n var obj;\n obj = {\n")

    for (var i = 0; i < pageSelectorFile.length; i++) {
        if ((pageSelectorFile[i].extraInfo).toLowerCase().includes("pattern")) {
            file.write(pageSelectorFile[i].Label + ": this." + pageSelectorFile[i].Label + "_Data(),\n")
        }
        else {
            if (pageSelectorFile[i].tagName.toLowerCase().includes("img") || pageSelectorFile[i].tagName.toLowerCase().includes("svg")) {
                file.write(pageSelectorFile[i].Label + ":((await action.getElementCount(this." + pageSelectorFile[i].Label + ")) > 0) ? await action.waitForDisplayed(this." + pageSelectorFile[i].Label + ") : false,\n");
            } else {
                if ((pageSelectorFile[i].tagName).toLowerCase().includes("input") || (pageSelectorFile[i].tagName).toLowerCase().includes("textarea"))
                    file.write(pageSelectorFile[i].Label + ": ((await action.getElementCount(this." + pageSelectorFile[i].Label + ")) > 0) ? await action.getAttribute(this." + pageSelectorFile[i].Label + ", \"placeholder\") : null,\n")
                else
                    file.write(pageSelectorFile[i].Label + ":((await action.getElementCount(this." + pageSelectorFile[i].Label + ")) > 0) ? await action.getText(this." + pageSelectorFile[i].Label + ") : null,\n");
            }
        }
    }
    file.write("}\n return obj; \n},\n\n")
    listDataGenerate1(pageSelectorFile);
}


function generategetCssPropertyData(pageSelectorFile, key, cssProperty) {

    var cssPropertyState = false;
    for (var i = 0; i < pageSelectorFile.length; i++) {
        if ((pageSelectorFile[i].extraInfo).toLowerCase().includes("cssproperty")) {
            cssPropertyState = true;
            break;
        }
    }
    if (cssPropertyState == true) {
        file.write("getCssPropertyData: async function ()\n{\n await logger.logInto(await stackTrace.get()); \nvar obj;\n obj = {\n")

        for (var i = 0; i < pageSelectorFile.length; i++) {
            if ((pageSelectorFile[i].extraInfo).toLowerCase().includes("cssproperty")) {
                var cssSelectorTag = pageSelectorFile[i].tagName
                var cssSelectorTagGroup = cssProperty.elements[cssSelectorTag];
                //console.log(cssProperty.cssProperty[cssSelectorTagGroup])
                for (var j = 0; j < cssProperty.cssProperty[cssSelectorTagGroup].length; j++) {
                    var labelValue = cssProperty.cssProperty[cssSelectorTagGroup][j]
                    labelValue = labelValue.replace(/-|\s/g, "")
                    file.write(pageSelectorFile[i].Label + "_" + labelValue + ":await action.getElementCount(this." + pageSelectorFile[i].Label + ") > 0 ? await action.getCSSProperty(this." + pageSelectorFile[i].Label + ", '" + cssProperty.cssProperty[cssSelectorTagGroup][j] + "').value : null,\n")
                }

            }
        }

        file.write("}\n return obj; \n},\n\n")
    }
}


function generateGroupGetDatafunction(pageSelectorGroup) {
    for (var i = 1; i < pageSelectorGroup.length; i++) {
        //console.log(pageSelectorGroup[i].length)
        if (pageSelectorGroup[i] != '') {
            generategroupDatafunction(pageSelectorGroup[i], pageSelectorGroup[i][0].group)
        }
    }
}

/*function listDataGenerate(pageSelectorFile) {
    for (var i = 0; i < pageSelectorFile.length; i++) {
        if (pageSelectorFile[i].group == "") {
            if (((pageSelectorFile[i].extraInfo).includes("pattern"))) {
                file.write(pageSelectorFile[i].Label + "_Data: function ()\n {\n")
                file.write("let i, list;\n" +
                    "let " + pageSelectorFile[i].Label + "_Arr = [];\n" +
                    "list = action.findElements(this." + pageSelectorFile[i].Label + ");\n" +
                    "for (i = 0; i < list.length; i++) {\n" +
                    pageSelectorFile[i].Label + "_Arr[i] = action.getText(list[i])\n" +
                    "}\n" +
                    "logger.logInto(stackTrace.get(), componentArr);\n" +
                    "return " + pageSelectorFile[i].Label + "_Arr;\n},\n\n")
            }
        }
    }
}*/
function listDataGenerate1(pageSelectorFile) {

    for (var i = 0; i < pageSelectorFile.length; i++) {
        if (((pageSelectorFile[i].extraInfo).toLowerCase().includes("pattern"))) {
            file.write(pageSelectorFile[i].Label + "_Data: async function ()\n {\n")
            file.write("await logger.logInto(await stackTrace.get());\n")
            file.write("var i, list;\n" +
                "var " + pageSelectorFile[i].Label + "_Arr = [];\n" +
                "list =await action.findElements(this." + pageSelectorFile[i].Label + ");\n" +
                "for (i = 0; i < list.length; i++) {\n" +
                pageSelectorFile[i].Label + "_Arr[i] =await action.getText(list[i])\n" +
                "}\n" +
                "await logger.logInto(await stackTrace.get(), " + pageSelectorFile[i].Label + "_Arr);\n" +
                "return " + pageSelectorFile[i].Label + "_Arr;\n},\n\n")
        }

    }
}


function generateClickFunctions(pageSelectorFile, key, pageSelectorGroup, PageTemplate) {
    for (var k = 0; k < pageSelectorFile.length; k++) {
        if (((pageSelectorFile[k].extraInfo).toLowerCase().includes("pattern")) && ((pageSelectorFile[k].tagName).toLowerCase().includes("button")) && ((pageSelectorFile[k].group) != "")) {
            //   console.log("sdafd" + pageSelectorFile[k].Label)
            for (var i = 1; i < pageSelectorGroup.length; i++) {
                //   console.log(pageSelectorGroup[i].length)
                for (var j = 0; j < pageSelectorGroup[i].length; j++) {

                    if ((pageSelectorGroup[i][j].length) != 0) {

                        if (pageSelectorGroup[i][j].Label == pageSelectorFile[k].Label) {
                            generategroupClickfunction(pageSelectorGroup[i], pageSelectorFile[k].Label, pageSelectorFile[k], PageTemplate)
                            break;
                        }
                    }
                }
            }
        }
        else {
            if (((pageSelectorFile[k].tagName).toLowerCase().includes("button")) && ((pageSelectorFile[k].extraInfo).toLowerCase().includes("pattern")) && ((pageSelectorFile[k].group) == "")) {
                Clickfunction(pageSelectorFile[k].Label, pageSelectorFile[k].Label, pageSelectorFile[k], PageTemplate)
            }


            if (((pageSelectorFile[k].tagName).toLowerCase().includes("button")) && (!(pageSelectorFile[k].extraInfo).includes("pattern"))) {
                file.write("\nclick_" + pageSelectorFile[k].Label + ": async function () {\n" +
                    "await logger.logInto(await stackTrace.get());\n" +
                    "var res;\n" +
                    "res =await action.click(this." + pageSelectorFile[k].Label + ");\n" +
                    "if (true == res) {\n await logger.logInto(await stackTrace.get(), \" " + pageSelectorFile[k].Label + " is clicked\");\n")
                if ((pageSelectorFile[k].returnValue) != "") {
                    generateReturnPage(PageTemplate, pageSelectorFile[k].returnValue);
                    /*     if ((pageSelectorFile[k].returnValue).toLowerCase().includes(".page"))
                             file.write("res =require" + PageTemplate.returnValue[pageSelectorFile[k].returnValue] + ";\n")
                         else
                             file.write("res= this.getData_" + pageSelectorFile[k].returnValue + "();");
     */
                }
                file.write(
                    "}\nelse {\nawait logger.logInto(await stackTrace.get(), res +\"" + pageSelectorFile[k].Label + " is NOT clicked\", 'error');\n}\n")
                file.write("return res;\n},\n")


                // console.log("Click function write")
            }

        }
    }

}
function generategroupClickfunction(pageSelectorGroup, selectorName, pageSelectorFileValue, PageTemplate) {
    var textcondition = null;
    var parentAvailable = null;
    var patternValue = null;
    for (var j = 0; j < pageSelectorGroup.length; j++) {
        if (((pageSelectorGroup[j].relation).toLowerCase().includes("parent"))) {
            parentAvailable = pageSelectorGroup[j].Label;
            break;
        }
    }

    for (var j = 0; j < pageSelectorGroup.length; j++) {
        if (((pageSelectorGroup[j].relation).toLowerCase().includes("condition"))) {
            textcondition = pageSelectorGroup[j].Label;
            break;
        }
    }


    if (textcondition == null) {
        for (var j = 0; j < pageSelectorGroup.length; j++) {

            if (((pageSelectorGroup[j].relation).toLowerCase().includes("parent"))) {
                textcondition = pageSelectorGroup[j].Label;
                break;
            }
        }
    }

    if ((textcondition == null) && (parentAvailable == null)) {
        for (var j = 0; j < pageSelectorGroup.length; j++) {

            if (((pageSelectorGroup[j].extraInfo).toLowerCase().includes("pattern"))) {
                patternValue = true;
            }
        }
    }
    if (textcondition == null) {
        textcondition = selectorName;
    }
    if (parentAvailable != null || patternValue == true) {
        Clickfunction(textcondition, selectorName, pageSelectorFileValue, PageTemplate);
    }
    else
        Clickfunctionindex(textcondition, selectorName, pageSelectorFileValue, PageTemplate);
}

function Clickfunctionindex(textcondition, selectorName, seletorRow, PageTemplate) {
    file.write("\nclick_" + selectorName + ": async function (" + textcondition + "Name) {\n" +
        "await logger.logInto(await stackTrace.get());\n" +
        "var i, res;\n")
    if (textcondition != selectorName) {
        file.write("var " + textcondition + "  = await action.findElements(this." + textcondition + ");\n" +
            "var " + selectorName + " = await action.findElements(this." + selectorName + ");\n" +
            "for (i = 0; i < " + textcondition + ".length; i++) {\n" +
            "if (((await action.getText(" + textcondition + "[i])))== " + textcondition + "Name) {\n " +
            "res = await action.click(" + selectorName + "[i]);\n" +
            "break;\n}\n" +
            "}\nif (res == true) {\n await logger.logInto(await stackTrace.get(), \" --" + selectorName + " clicked\");\n")
    }
    else {
        file.write(
            "var " + selectorName + " = await action.findElements(this." + selectorName + ");\n" +
            "for (i = 0; i < " + selectorName + ".length; i++) {\n" +
            "if ((await action.getText(" + selectorName + "[i])))== " + selectorName + "Name) {\n " +
            "res = await action.click(" + selectorName + "[i]);\n" +
            "break;\n}\n" +
            "}\nif (res == true) {\n  await logger.logInto(await stackTrace.get(), \" --" + selectorName + " clicked\");\n")
    }
    if ((seletorRow.returnValue) != "") {
        generateReturnPage(PageTemplate, seletorRow.returnValue);

    }
    file.write(

        "} \nelse\n" +
        "await logger.logInto(await stackTrace.get(), \" --" + selectorName + " NOT clicked\", \"error\")\n");

    file.write("return res;\n},\n")
}

function Clickfunction(textcondition, selectorName, seletorRow, PageTemplate) {
    file.write("\nclick_" + selectorName + ":async function (" + textcondition + "Name) {\n" +
        "await logger.logInto(await stackTrace.get());\n" +
        "var i, list, res;\n" +
        "list =await action.findElements(this." + selectorName + ");\n" +
        "for (i = 0; i < list.length; i++) {\n" +
        "if ((( await action.getText(this." + textcondition + "+i+\"]\")))== " + textcondition + "Name) {\n " +
        "res = await action.click(list[i]);\n" +
        "break;\n}\n" +
        "}\nif (res == true) {\n await logger.logInto(await stackTrace.get(), \" --" + selectorName + " clicked\");\n")
    if ((seletorRow.returnValue) != "") {
        generateReturnPage(PageTemplate, seletorRow.returnValue);

    }
    file.write(

        "} \nelse\n" +
        "await logger.logInto(await stackTrace.get(), \" --" + selectorName + " NOT clicked\", \"error\")\n");

    file.write("return res;\n},\n")
}

function generateReturnPage(PageTemplate, returnValue) {

    const returnValueArray = returnValue.split(",");
    if (returnValueArray.length == 1) {
        if ((returnValue).toLowerCase().includes(".page"))
            file.write("res =await require ('./" + returnValueArray[0] + "').isInitialized();\n")
        else
            file.write("res= await this.getData_" + returnValueArray[0] + "();");
    }
    else {

        file.write("res= await action." + returnValueArray[0] + "(this." + returnValueArray[1])
        if (returnValueArray.length > 2) {
            for (let i = 2; i < returnValueArray.length; i++)
                file.write("," + returnValueArray[i])
        }
        file.write(");")
    }

}

function generateSetValueFunctions(pageSelectorFile) {
    for (var i = 0; i < pageSelectorFile.length; i++) {
        if ((pageSelectorFile[i].tagName).toLowerCase().includes("input") || (pageSelectorFile[i].tagName).toLowerCase().includes("textarea")) {
            file.write("\nset_" + pageSelectorFile[i].Label + ":async  function (value)" + "{\nvar res;" +
                "\nawait logger.logInto(await stackTrace.get());\n" +
                "res =await action.setValue(this." + pageSelectorFile[i].Label + ",value);\n" +
                "if (true == res) {\nawait logger.logInto(await stackTrace.get(), \"Value is entered in " + pageSelectorFile[i].Label + "\");\n}" +
                "else {\nawait logger.logInto(await stackTrace.get(), res + \"Value is NOT entered in " + pageSelectorFile[i].Label + "\", 'error');\n}\n" +
                "return res;\n},\n")
        }
        if ((pageSelectorFile[i].tagName).toLowerCase().includes("upload")) {
            file.write("\nupload_" + pageSelectorFile[i].Label + ": async function (testdata)" + "{\nvar res;" +
                "\nawait logger.logInto(await stackTrace.get());\n" +
                "res = await action.uploadFile(testdata);\n" +
                "if ((typeof res) === 'string') {\n" +
                "res = await action.setValue(this." + pageSelectorFile[i].Label + " , res);\n" +
                "}\nawait logger.logInto(await stackTrace.get(), res);\n" +
                "return res;\n},\n")
        }

    }
}
function generategroupDatafunction(group, groupName) {

    var generate = false;
    if (groupName != "") {
        for (var i = 0; i < group.length; i++) {
            if ((group[i].relation).toLowerCase().includes("parent")) {
                // console.log("groupName" + groupName)
                dataPatternGenerateWithParent(group, groupName, i)
                generate = true;
                break;

            }
        }
        if (generate == false) {
            for (var i = 0; i < group.length; i++) {
                if ((group[i].relation).toLowerCase().includes("condition")) {
                    // console.log("groupName" + groupName)
                    dataPatternGenerateWithCondition(group, groupName, i)
                    generate = true;
                    break;

                }
            }
        }
        if (generate == false) {
            dataPatternGenerate(group, groupName);
        }
    }
    //}
}

function dataPatternGenerate(pageSelectorFile, groupName) {
    file.write("getData_" + groupName + ": async function ()\n{\n")
    file.write("await logger.logInto(await stackTrace.get());\n")
    file.write("var obj;\n")
    file.write("obj = {\n")
    for (var i = 0; i < pageSelectorFile.length; i++) {
        if ((pageSelectorFile[i].extraInfo).toLowerCase().includes("pattern")) {
            file.write(pageSelectorFile[i].Label + ": await this." + pageSelectorFile[i].Label + "_Data(),\n")
        }
        else {
            if ((pageSelectorFile[i].tagName).toLowerCase().includes("img") || (pageSelectorFile[i].tagName).toLowerCase().includes("svg")) {
                file.write(pageSelectorFile[i].Label + ":(( await action.getElementCount(this." + pageSelectorFile[i].Label + ")) > 0) ? await action.waitForDisplayed(this." + pageSelectorFile[i].Label + ") : false,\n");
            } else
                file.write(pageSelectorFile[i].Label + ":(( await action.getElementCount(this." + pageSelectorFile[i].Label + ")) > 0) ? await action.getText(this." + pageSelectorFile[i].Label + ") : null,\n");
        }
    }
    file.write("}\n return obj; \n},\n\n")
    listDataGenerate1(pageSelectorFile);
}
function dataPatternGenerateWithParent(groupSelectorData, groupName, key) {
    selectedText = "";
    for (var j = 0; j < groupSelectorData.length; j++) {
        if (((groupSelectorData[j].relation).toLowerCase().includes("condition"))) {
            selectedText = groupSelectorData[j].Label;
            break;
        }
    }
    for (var j = 0; j < groupSelectorData.length; j++) {
        if (((groupSelectorData[j].relation).toLowerCase().includes("parent"))) {
            selectedText = groupSelectorData[j].Label;
            break;
        }
    }
    if (selectedText)
        file.write("getData_" + groupName + ": async function (" + selectedText + "Name)\n{\n")
    else
        file.write("getData_" + groupName + ":async function ()\n{\n")
    file.write("await logger.logInto(await stackTrace.get());\n")
    file.write("var obj=[];\n")
    file.write(" await action.waitForDisplayed(this." + groupSelectorData[key].Label + ");\n" +
        "var list = await action.findElements(this." + groupSelectorData[key].Label + ");\n");


    if (selectedText) {
        file.write(" if (" + selectedText + "Name) {" +
            "for (var i=0;i<list.length;i++){\n" +
            "if ((await action.getText(this." + selectedText + " + i) )== " + selectedText + "Name) {\n")

        file.write("obj[0] = {\n")
        for (var i = 0; i < groupSelectorData.length; i++) {
            if ((groupSelectorData[i].extraInfo).toLowerCase().includes("pattern")) {
                if ((groupSelectorData[i].tagName).toLowerCase().includes("img") || (groupSelectorData[i].tagName).toLowerCase().includes("svg")) {
                    file.write(groupSelectorData[i].Label + ":(( await action.getElementCount(this." + groupSelectorData[i].Label + "+i+\"]\")) > 0) ? await action.waitForDisplayed(this." + groupSelectorData[i].Label + "+i+\"]\")  : false,\n");
                } else
                    file.write(groupSelectorData[i].Label + ":(( await action.getElementCount(this." + groupSelectorData[i].Label + "+i+\"]\"))  > 0) ? await action.getText(this." + groupSelectorData[i].Label + "+i+\"]\")  : null,\n");

            }
        }
        file.write("}\n break; \n}\n } \n")
        for (var i = 0; i < groupSelectorData.length; i++) {
            if (!(groupSelectorData[i].extraInfo).toLowerCase().includes("pattern")) {
                if ((groupSelectorData[i].tagName).toLowerCase().includes("img") || (groupSelectorData[i].tagName).toLowerCase().includes("svg")) {
                    file.write("obj." + groupSelectorData[i].Label + "=(( await action.getElementCount(this." + groupSelectorData[i].Label + ")) > 0) ?await action.waitForDisplayed(this." + groupSelectorData[i].Label + ")  : false\n");
                } else
                    file.write("obj." + groupSelectorData[i].Label + "=((await action.getElementCount(this." + groupSelectorData[i].Label + "))  > 0) ?await action.getText(this." + groupSelectorData[i].Label + ")  : null\n");

            }
        }
        file.write("}else{\n ")
    }


    file.write("for (var i=0;i<list.length;i++){\n obj[i] = {\n")
    for (var i = 0; i < groupSelectorData.length; i++) {

        if ((groupSelectorData[i].extraInfo).toLowerCase().includes("pattern")) {
            // console.log("groupName" + groupSelectorData[i].Label)
            if ((groupSelectorData[i].tagName).toLowerCase().includes("img") || (groupSelectorData[i].tagName).toLowerCase().includes("svg")) {
                file.write(groupSelectorData[i].Label + ":((await action.getElementCount(this." + groupSelectorData[i].Label + "+i+\"]\")) > 0) ? await action.waitForDisplayed(this." + groupSelectorData[i].Label + "+i+\"]\")  : false,\n");
            } else
                file.write(groupSelectorData[i].Label + ":(( await action.getElementCount(this." + groupSelectorData[i].Label + "+i+\"]\"))  > 0) ? await action.getText(this." + groupSelectorData[i].Label + "+i+\"]\")  : null,\n");
        }
    }
    file.write("}\n")
    if (selectedText) {
        file.write(" }\n")
    }
    for (var i = 0; i < groupSelectorData.length; i++) {
        if (!(groupSelectorData[i].extraInfo).toLowerCase().includes("pattern")) {
            if ((groupSelectorData[i].tagName).toLowerCase().includes("img") || (groupSelectorData[i].tagName).toLowerCase().includes("svg")) {
                file.write("obj." + groupSelectorData[i].Label + "=(( await action.getElementCount(this." + groupSelectorData[i].Label + ")) > 0) ?await action.waitForDisplayed(this." + groupSelectorData[i].Label + ")  : false\n");
            } else
                file.write("obj." + groupSelectorData[i].Label + "=(( await action.getElementCount(this." + groupSelectorData[i].Label + "))  > 0) ?await action.getText(this." + groupSelectorData[i].Label + ")  : null\n");

        }
    }
    file.write("}\n")
    file.write("return obj; \n},\n\n")
}


function dataPatternGenerateWithCondition(groupSelectorData, groupName, key) {
    selectedText = "";
    for (var j = 0; j < groupSelectorData.length; j++) {
        if (((groupSelectorData[j].relation).toLowerCase().includes("condition"))) {
            selectedText = groupSelectorData[j].Label;
            break;
        }
    }
    if (selectedText)
        file.write("getData_" + groupName + ": async function (" + selectedText + "Name)\n{\n")
    else
        file.write("getData_" + groupName + ":async  function ()\n{\n")
    file.write("logger.logInto(stackTrace.get());\n")
    file.write("var obj =[] , i , arr = [];\n")
    for (var i = 0; i < groupSelectorData.length; i++) {
        file.write("var " + groupSelectorData[i].Label + "=action.findElements(this." + groupSelectorData[i].Label + ")\n");
    }

    file.write(" if (" + selectedText + "Name) {" +
        "for (var i=0;i<=" + selectedText + ".length;i++){\n" +
        "if ((await action.getText(" + selectedText + "[i])) == " + selectedText + "Name) {\n")

    file.write("obj[0] = {\n")
    for (var i = 0; i < groupSelectorData.length; i++) {
        if ((groupSelectorData[i].extraInfo).toLowerCase().includes("pattern")) {
            if ((groupSelectorData[i].tagName).toLowerCase().includes("img") || (groupSelectorData[i].tagName).toLowerCase().includes("svg")) {
                file.write(groupSelectorData[i].Label + ":((await action.getElementCount(" + groupSelectorData[i].Label + "[i])) > 0) ? await action.waitForDisplayed(" + groupSelectorData[i].Label + "[i])  : false,\n");
            } else
                file.write(groupSelectorData[i].Label + ":((await action.getElementCount(" + groupSelectorData[i].Label + "[i]))  > 0) ? await action.getText(" + groupSelectorData[i].Label + "[i])  : null,\n");

        }
    }
    file.write("}\n break; \n}\n } \n")
    for (var i = 0; i < groupSelectorData.length; i++) {
        if (!(groupSelectorData[i].extraInfo).toLowerCase().includes("pattern")) {
            if ((groupSelectorData[i].tagName).toLowerCase().includes("img") || (groupSelectorData[i].tagName).toLowerCase().includes("svg")) {
                file.write("obj." + groupSelectorData[i].Label + "=((await action.getElementCount(" + groupSelectorData[i].Label + "[i]) > 0)) ?await action.waitForDisplayed(" + groupSelectorData[i].Label + "[i] )  : false\n");
            } else
                file.write("obj." + groupSelectorData[i].Label + "=((await action.getElementCount(" + groupSelectorData[i].Label + "[i])  > 0)) ? await action.getText(" + groupSelectorData[i].Label + "[i])  : null\n");

        }
    }
    file.write("}else{\n ")
    //}


    file.write("for (var i=0;i<=" + selectedText + ".length;i++){\n obj[i] = {\n")
    for (var i = 0; i < groupSelectorData.length; i++) {

        if ((groupSelectorData[i].extraInfo).toLowerCase().includes("pattern")) {
            // console.log("groupName" + groupSelectorData[i].Label)
            if ((groupSelectorData[i].tagName).toLowerCase().includes("img") || (groupSelectorData[i].tagName).toLowerCase().includes("svg")) {
                file.write(groupSelectorData[i].Label + ":((await action.getElementCount(" + groupSelectorData[i].Label + "[i]) > 0)) ? await action.waitForDisplayed(" + groupSelectorData[i].Label + "[i])  : false,\n");
            } else
                file.write(groupSelectorData[i].Label + ":((await action.getElementCount(" + groupSelectorData[i].Label + "[i])  > 0)) ? await action.getText(" + groupSelectorData[i].Label + "[i])  : null,\n");
        }
    }
    file.write("}\n}\n")
    if (selectedText) {
        file.write(" }\n")
    }
    for (var i = 0; i < groupSelectorData.length; i++) {
        if (!(groupSelectorData[i].extraInfo).toLowerCase().includes("pattern")) {
            if ((groupSelectorData[i].tagName).toLowerCase().includes("img") || (groupSelectorData[i].tagName).toLowerCase().includes("svg")) {
                file.write("obj." + groupSelectorData[i].Label + "=((await action.getElementCount(" + groupSelectorData[i].Label + "[i]) > 0)) ? await action.waitForDisplayed(" + groupSelectorData[i].Label + "[i])  : false\n");
            } else {
                file.write("obj." + groupSelectorData[i].Label + "=((await action.getElementCount(" + groupSelectorData[i].Label + "[i])  > 0)) ?await action.getText(" + groupSelectorData[i].Label + "[i])  : null\n");
            }
        }
    }
    //file.write("}\n")
    file.write("return obj; \n},\n\n")
}
