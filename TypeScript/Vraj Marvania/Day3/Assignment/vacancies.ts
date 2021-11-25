
interface IVacancies {
  Vacancies_Data: [
    Vacancies_Id: number,
    Vacancies_Name: string,
    Available_Vacancies: number,
  ][];

  get_Vacancies(): object;
  Set_Vacancies(Vacancies_Data: object): string;

}

export class Vacancies implements IVacancies {


  Vacancies_Data: [
    Vacancies_Id: number,
    Vacancies_Name: string,
    Available_Vacancies: number,
  ][] = [];


  constructor(Vacancies_info) {
    this.Vacancies_Data = [Vacancies_info]
  }

  get_Vacancies(): object {
    return this.Vacancies_Data
  }
  Set_Vacancies(Vacancies_Data): string {
    this.Vacancies_Data.push(Vacancies_Data)
    return "success fully submited";
  }
}
