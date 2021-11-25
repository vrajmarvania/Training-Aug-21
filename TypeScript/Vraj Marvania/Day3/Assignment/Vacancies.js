"use strict";
exports.__esModule = true;
exports.Vacancies = void 0;
var Vacancies = /** @class */ (function () {
    function Vacancies(Vacancies_info) {
        this.Vacancies_Data = [];
        this.Vacancies_Data = [Vacancies_info];
    }
    Vacancies.prototype.get_Vacancies = function () {
        return this.Vacancies_Data;
    };
    Vacancies.prototype.Set_Vacancies = function (Vacancies_Data) {
        this.Vacancies_Data.push(Vacancies_Data);
        return "success fully submited";
    };
    return Vacancies;
}());
exports.Vacancies = Vacancies;
