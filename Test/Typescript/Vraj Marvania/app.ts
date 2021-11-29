// Online table reservation in the restaurant for specific date and time. This will
// Provide the list of restaurants in the country so that the user can choose accordingly.
// Provide the list of tables available for online reservation at different dining rooms in the restaurant.
// Mention the number of guests that can be accommodated on the particular table.
// Accept the booking for tables.
// Online table reservations are done 6hrs in advance for the current date.
// Table reservation can be done up to one month in advance.
// Give a token number to the customer as an acknowledgement of booking.

// restaurant
// country
// dining rooms 
// tables

import { r1}  from "./restaurant";
import { RD}  from "./restaurant_Details";
import { tBooking}  from "./Booking";


var Resturant_list =r1.get_Resturant();
console.log(Resturant_list)

// get all Restaurant
console.log(RD.get_Restaurant_Details_Data())

// get all Restaurant_Details
console.log(RD.get_Restaurant_Details_by_id_Data('012'))

// Book Table 
var data={
    Booking_Id: '2323',
    Booking_Name: "vraj marvania",
    Booking_Dayandtime:Date.now(),
    ResturantId:'012',
    tableId:12,
}
console.log(tBooking.Set_Booking(data))



// var r2 = new RestaurantDetails(Resturant_info);

