
interface booking {
    Booking_Data: [
      Booking_Id: number,
      Booking_Name: string,
      Booking_Dayandtime:Date,
      ResturantId:string,
      tableId:string,
      token:string
    ][];
  
    get_Booking(): object;
    Set_Booking(Booking_Data: object): string;
  
  }
  
  export class Booking implements booking {
  
  
    Booking_Data: [
        Booking_Id: number,
        Booking_Name: string,
        Booking_Dayandtime:Date,
        ResturantId:string,
        tableId:string,
        token:string

      ][] = [];
  
  
    constructor() {
      this.Booking_Data = []
    }
  
    get_Booking(): object {
      return this.Booking_Data
    }
    // book table 
    Set_Booking(Booking_Data): string {
        var token=Math.random()+343434
        Booking_Data['token']=token
        // console.log(Booking_Data)
       console.log( Date())
      this.Booking_Data.push(Booking_Data)
      return "success fully submited token id is =="+token;
    }
  }
  

  
  export var tBooking = new Booking();
