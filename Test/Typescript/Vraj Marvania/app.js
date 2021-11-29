"use strict";
// Online table reservation in the restaurant for specific date and time. This will
// Provide the list of restaurants in the country so that the user can choose accordingly.
// Provide the list of tables available for online reservation at different dining rooms in the restaurant.
// Mention the number of guests that can be accommodated on the particular table.
// Accept the booking for tables.
// Online table reservations are done 6hrs in advance for the current date.
// Table reservation can be done up to one month in advance.
// Give a token number to the customer as an acknowledgement of booking.
exports.__esModule = true;
// restaurant
// country
// dining rooms 
// tables
var restaurant_1 = require("./restaurant");
var restaurant_Details_1 = require("./restaurant_Details");
var Booking_1 = require("./Booking");
var Resturant_list = restaurant_1.r1.get_Resturant();
console.log(Resturant_list);
// get all Restaurant
console.log(restaurant_Details_1.RD.get_Restaurant_Details_Data());
// get all Restaurant_Details
console.log(restaurant_Details_1.RD.get_Restaurant_Details_by_id_Data('012'));
// Book Table 
var data = {
    Booking_Id: '2323',
    Booking_Name: "vraj marvania",
    Booking_Dayandtime: Date.now(),
    ResturantId: '012',
    tableId: 12
};
console.log(Booking_1.tBooking.Set_Booking(data));
// var r2 = new RestaurantDetails(Resturant_info);
