
interface user {
    User_Data: [
      User_Id: number,
      User_Name: string,
      
    ][];
  
    get_User(): object;
    Set_User(User_Data: object): string;
  
  }
  
  export class User implements user {
  
  
    User_Data: [
        User_Id: number,
        User_Name: string ][] = [];
  
  
    constructor() {
      this.User_Data = []
    }
  
    get_User(): object {
      return this.User_Data
    }
    // set user
    Set_User(User_Data): string {
      this.User_Data.push(User_Data);
      return "success fully submited";
    }
  }
  

  
  export var tUser = new User();
