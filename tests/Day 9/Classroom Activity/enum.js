"use strict";
// String Enum (Named Constants)
console.log("String Enum (Named Constants)");
var testResult;
(function (testResult) {
    testResult["pass"] = "Pass";
    testResult["fail"] = "Fail";
    testResult["skip"] = "Skip";
})(testResult || (testResult = {}));
function results(examResult) {
    console.log("The result is :", examResult);
}
results(testResult.pass);
// Numeric Enum
console.log("Numeric Enum");
var testMarks;
(function (testMarks) {
    testMarks[testMarks["pass"] = 100] = "pass";
    testMarks[testMarks["fail"] = 34] = "fail";
    testMarks[testMarks["justPass"] = 36] = "justPass";
})(testMarks || (testMarks = {}));
function score(examMarks) {
    console.log("The result is :", examMarks);
}
score(testMarks.justPass);
// Heterogenous Enum
console.log("Heterogenous Enum");
var studentDetails;
(function (studentDetails) {
    studentDetails["name"] = "Naveen";
    studentDetails[studentDetails["mathMark"] = 98] = "mathMark";
    studentDetails[studentDetails["scienceMark"] = 99] = "scienceMark";
    studentDetails[studentDetails["socialMark"] = 99] = "socialMark";
})(studentDetails || (studentDetails = {}));
function sscResult(tenthresult) {
    console.log("The result is :", tenthresult);
}
sscResult(studentDetails.scienceMark);
