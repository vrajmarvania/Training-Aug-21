"use strict";
// This project is aimed at developing a web-based and central Recruitment Process System for the HR Group for a company. Some features of this system will be creating vacancies, storing Applicants data, Interview process initiation, Scheduling Interviews, Storing Interview results for the applicant and finally Hiring of the applicant. Reports may be required to be generated for the use of HR group.
exports.__esModule = true;
// Applicants
// storing Applicants data
// vacancies
// creating vacancies
// Interview_process
// Interview process initiation
// Scheduling Interviews
// Storing Interview results for the applicant
// finally Hiring of the applicant.
var Applicants_1 = require("./Applicants");
var Vacancies_1 = require("./Vacancies");
var Interview_process_1 = require("./Interview_process");
// create objects & set data
var Applicants_info = [
    {
        Applicants_Id: 113,
        Applicants_Name: "string",
        Applicants_phoneNo: 1212,
        Vacancies_Id: 2221
    },
    {
        Applicants_Id: 114,
        Applicants_Name: "vraj",
        Applicants_phoneNo: 1212,
        Vacancies_Id: 2121
    },
];
var a1 = new Applicants_1.Applicants(Applicants_info);
var Vacancies_info = [
    {
        Vacancies_Id: 2121,
        Vacancies_Name: "developer",
        Available_Vacancies: 323
    },
    {
        Vacancies_Id: 2221,
        Vacancies_Name: "QA",
        Available_Vacancies: 393
    },
];
var v1 = new Vacancies_1.Vacancies(Vacancies_info);
var I1 = new Interview_process_1.Interview_process();
// storing Applicants data------------------------------------------------>
var temp_data = {
    Applicants_Id: 114,
    Applicants_Name: "vraj",
    Applicants_phoneNo: 1212,
    Vacancies_Id: 2121
};
console.log('______________Set_Applicants_______________');
console.log(a1.Set_Applicants(temp_data));
// get Applicants data----------------------------------------------------->
console.log('______________get_Applicants_______________');
a1.get_Applicants();
// creating vacancies  ---------------------------------------------------->
console.log('______________creating vacancies_______________');
console.log(v1.Set_Vacancies({
    Vacancies_Id: 2121,
    Vacancies_Name: "developer",
    Available_Vacancies: 323
}));
// get vacancies -------------------------------------------------------->
console.log('______________Get vacancies_______________');
console.log(v1.get_Vacancies());
// Scheduling Interviews------------------------------------------------->
console.log('______________Scheduling Interview_______________');
console.log("Scheduling_Interviews");
var a = I1.Scheduling_Interviews(a1.get_Applicants(), 2121, "25-11-2021", "10:00");
console.log(a);
// Storing Interview results for the applicant---------------------------->
console.log('______________Storing Interview results for the applicant_______________');
I1.Interview_Results(a, 114, "selected");
console.log(a1.get_Applicants());
// Reports finally Hiring of the applicants ------------------------------->
I1.Interview_Process_Reports(2221, a1.get_Applicants());
