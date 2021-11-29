"use strict";
exports.__esModule = true;
exports.tBooking = exports.Booking = void 0;
var Booking = /** @class */ (function () {
    function Booking() {
        this.Booking_Data = [];
        this.Booking_Data = [];
    }
    Booking.prototype.get_Booking = function () {
        return this.Booking_Data;
    };
    Booking.prototype.Set_Booking = function (Booking_Data) {
        var token = Math.random() + 343434;
        Booking_Data['token'] = token;
        // console.log(Booking_Data)
        console.log(new date());
        this.Booking_Data.push(Booking_Data);
        return "success fully submited token id is ==" + token;
    };
    return Booking;
}());
exports.Booking = Booking;
exports.tBooking = new Booking();
