"use strict";
exports.__esModule = true;
exports.Interview_process = void 0;
var Interview_process = /** @class */ (function () {
    function Interview_process() {
        // Scheduling Interviews
        this.Scheduling_Interviews_Data = [];
        this.Scheduling_Interviews = function (Applicantdata, Vacancies_id, Date, time) {
            for (var _i = 0, _a = Applicantdata[0]; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.Vacancies_Id == Vacancies_id) {
                    i.Interviews_Time = time,
                        i.Interviews_Date = Date;
                }
            }
            return Applicantdata;
        };
        this.Interview_Results = function (a, Applicants_Id, status) {
            for (var _i = 0, _a = a[0]; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.Applicants_Id == Applicants_Id) {
                    i.status = status;
                }
            }
            console.log(a[0]);
        };
        this.Interview_Process_Reports = function (Vacancies_id, Applicantdata) {
            console.log('_________________Interview_Process_Reports_________________________');
            var b = Applicantdata[0].filter(function (data) {
                return data.Vacancies_Id == Vacancies_id;
            });
            console.log(b);
            return b;
        };
    }
    return Interview_process;
}());
exports.Interview_process = Interview_process;
