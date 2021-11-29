interface resturant_Details {
  Restaurant_Details_Data: [
    ResturantId: number,
    Rooms: [
      Id: number,
      Total_Available_tables: number
    ]
  ][];

  get_Restaurant_Details_Data(): object;
  get_Restaurant_Details_by_id_Data(ResturantId:number):object;
  Set_Restaurant_Details_Data(Restaurant_Details_Data: object): string;
}

export class RestaurantDetails implements resturant_Details {
  Restaurant_Details_Data: [
    ResturantId: number,
    Rooms: [
      Id: number,
      Total_Available_tables: number
    ]
  ][]= [];

  constructor(get_Restaurant_Details) {
    this.Restaurant_Details_Data = get_Restaurant_Details;
  }

  get_Restaurant_Details_Data(): object {
    return this.Restaurant_Details_Data;
  }
  
  get_Restaurant_Details_by_id_Data(Id): object {
    var r_info = [];
    this.Restaurant_Details_Data.forEach((value) => {
      if (value.ResturantId=Id) {
        r_info.push(value);
      }
    });
    return r_info;
  }

  Set_Restaurant_Details_Data(Resturant_Data): string {
    this.Restaurant_Details_Data.push(Resturant_Data);
    return "success fully submited";
  }
}



var resturant_Details=[
  {
      ResturantId:"012",
      Rooms: [
       { Id: 1202,
        Total_Available_tables: 23},  { Id: 2222,
          Total_Available_tables: 20}
      ]
  },
  {
      ResturantId:"013",
      Rooms: [
        { Id: 1112,
          Total_Available_tables: 23},  { Id: 1122,
            Total_Available_tables: 50}
      ]
  },
  {
      ResturantId:"014",
      Rooms: [
        { Id: 7212,
          Total_Available_tables: 23}, { Id: 1122,
            Total_Available_tables: 6}
      ]
  }
]

export var RD = new RestaurantDetails(resturant_Details);
 