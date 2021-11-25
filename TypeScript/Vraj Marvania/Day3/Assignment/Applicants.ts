import { Vacancies } from "./Vacancies";

interface IApplicants {
  Applicants_Data: [
    Applicants_Id: number,
    Applicants_Name: string,
    Applicants_phoneNo: number,
    Vacancies_id: number
  ][];

  get_Applicants(): object;
  Set_Applicants(Applicants_s: object): string;


}

export class Applicants implements IApplicants {
  Applicants_Data: [
    Applicants_Id: number,
    Applicants_Name: string,
    Applicants_phoneNo: number,
    Vacancies_id: number
  ][] = [];

  constructor(Applicants_info) {
    this.Applicants_Data = [Applicants_info];
  }

  get_Applicants(): object {
    console.log(this.Applicants_Data);
    return this.Applicants_Data;
  }
  Set_Applicants(Applicants_s): string {
    this.Applicants_Data.push(Applicants_s);
    return "--- successfully submitted ---";
  }
}
