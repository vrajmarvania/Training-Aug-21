

interface resturant {
    Resturant_Data: [
        ResturantId:number,
        ResturantName:string,
        Resturant_address:string,
        Resturant_country:string
    ][];
  
    get_Resturant(): object;
    Set_Resturant(Resturant_Data: object): string;
  
  }


  
 class Resturant implements resturant {


    Resturant_Data: [
        ResturantId:number,
        ResturantName:string,
        Resturant_address:string,
        Resturant_country:string,
    ][]= [];
  
  
    constructor(Resturant_info) {
      this.Resturant_Data = Resturant_info
    }
  
    get_Resturant(): object {
      return this.Resturant_Data
    }
    Set_Resturant(Resturant_Data): string {
      this.Resturant_Data.push(Resturant_Data)
      return "success fully submited";
    }
  }
  
  var Resturant_info=[
    {
        ResturantId:"012",
        ResturantName:"nova",
        Resturant_address:"kalavad road ",
        Resturant_country:"india"
    },
    {
        ResturantId:"013",
        ResturantName:"rk",
        Resturant_address:"dc road ",
        Resturant_country:"Uk"
    },
    {
        ResturantId:"014",
        ResturantName:"darshan",
        Resturant_address:"univercity road",
        Resturant_country:"india"
    }
]

export var r1 = new Resturant(Resturant_info);
   