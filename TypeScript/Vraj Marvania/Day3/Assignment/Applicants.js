"use strict";
exports.__esModule = true;
exports.Applicants = void 0;
var Applicants = /** @class */ (function () {
    function Applicants(Applicants_info) {
        this.Applicants_Data = [];
        this.Applicants_Data = [Applicants_info];
    }
    Applicants.prototype.get_Applicants = function () {
        console.log(this.Applicants_Data);
        return this.Applicants_Data;
    };
    Applicants.prototype.Set_Applicants = function (Applicants_s) {
        this.Applicants_Data.push(Applicants_s);
        return "--- successfully submitted ---";
    };
    return Applicants;
}());
exports.Applicants = Applicants;
