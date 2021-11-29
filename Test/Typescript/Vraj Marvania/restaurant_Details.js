"use strict";
exports.__esModule = true;
exports.RD = exports.RestaurantDetails = void 0;
var RestaurantDetails = /** @class */ (function () {
    function RestaurantDetails(get_Restaurant_Details) {
        this.Restaurant_Details_Data = [];
        this.Restaurant_Details_Data = get_Restaurant_Details;
    }
    RestaurantDetails.prototype.get_Restaurant_Details_Data = function () {
        return this.Restaurant_Details_Data;
    };
    RestaurantDetails.prototype.get_Restaurant_Details_by_id_Data = function (Id) {
        var r_info = [];
        this.Restaurant_Details_Data.forEach(function (value) {
            if (value.ResturantId = Id) {
                r_info.push(value);
            }
        });
        return r_info;
    };
    RestaurantDetails.prototype.Set_Restaurant_Details_Data = function (Resturant_Data) {
        this.Restaurant_Details_Data.push(Resturant_Data);
        return "success fully submited";
    };
    return RestaurantDetails;
}());
exports.RestaurantDetails = RestaurantDetails;
var resturant_Details = [
    {
        ResturantId: "012",
        Rooms: [
            { Id: 1202,
                Total_Available_tables: 23 }, { Id: 2222,
                Total_Available_tables: 20 }
        ]
    },
    {
        ResturantId: "013",
        Rooms: [
            { Id: 1112,
                Total_Available_tables: 23 }, { Id: 1122,
                Total_Available_tables: 50 }
        ]
    },
    {
        ResturantId: "014",
        Rooms: [
            { Id: 7212,
                Total_Available_tables: 23 }, { Id: 1122,
                Total_Available_tables: 6 }
        ]
    }
];
exports.RD = new RestaurantDetails(resturant_Details);
