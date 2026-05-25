// String Enum (Named Constants)
console.log("String Enum (Named Constants)")

enum testResult {
    pass = "Pass",
    fail = "Fail",
    skip = "Skip"
}

function results(examResult : testResult){
    console.log("The result is :",examResult )
}
results(testResult.pass)

// Numeric Enum
console.log("Numeric Enum")

enum testMarks {
    pass = 100,
    fail = 34,
    justPass = 36
}

function score(examMarks : testMarks){
    console.log("The result is :",examMarks )
}
score(testMarks.justPass)

// Heterogenous Enum
console.log("Heterogenous Enum")

enum studentDetails {
    name = "Naveen",
    mathMark = 98,
    scienceMark = 99,
    socialMark = 99
}

function sscResult(tenthresult : studentDetails){
    console.log("The result is :",tenthresult)
}
sscResult(studentDetails.scienceMark)