"use strict";
exports.__esModule = true;
exports.r1 = void 0;
var Resturant = /** @class */ (function () {
    function Resturant(Resturant_info) {
        this.Resturant_Data = [];
        this.Resturant_Data = Resturant_info;
    }
    Resturant.prototype.get_Resturant = function () {
        return this.Resturant_Data;
    };
    Resturant.prototype.Set_Resturant = function (Resturant_Data) {
        this.Resturant_Data.push(Resturant_Data);
        return "success fully submited";
    };
    return Resturant;
}());
var Resturant_info = [
    {
        ResturantId: "012",
        ResturantName: "nova",
        Resturant_address: "kalavad road ",
        Resturant_country: "india"
    },
    {
        ResturantId: "013",
        ResturantName: "rk",
        Resturant_address: "dc road ",
        Resturant_country: "Uk"
    },
    {
        ResturantId: "014",
        ResturantName: "darshan",
        Resturant_address: "univercity road",
        Resturant_country: "india"
    }
];
exports.r1 = new Resturant(Resturant_info);
