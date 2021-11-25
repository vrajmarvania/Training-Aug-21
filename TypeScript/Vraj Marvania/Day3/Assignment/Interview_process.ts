interface IInterview_process {
    Scheduling_Interviews(Applicantdata: object, Vacancies_id: number, Date: string, time: string): object
    Interview_Results(a: object, Applicants_Id: number, status: string)
    Interview_Process_Reports(Vacancies_id: number, Applicantdata: object): object


}
export class Interview_process implements IInterview_process {
    // Scheduling Interviews



    Scheduling_Interviews = (Applicantdata: object, Vacancies_id: number, Date: string, time: string): object => {
        for (var i of Applicantdata[0]) {

            if (i.Vacancies_Id == Vacancies_id) {
                i.Interviews_Time = time,
                    i.Interviews_Date = Date

            }
        }

        return Applicantdata
    }

    Interview_Results = (a: object, Applicants_Id: number, status: string) => {
        for (var i of a[0]) {
            if (i.Applicants_Id == Applicants_Id) {
                i.status = status
            }
        }
        console.log(a[0])

    }



    Interview_Process_Reports = (Vacancies_id: number, Applicantdata: object): object => {
        console.log('_________________Interview_Process_Reports_________________________')
        var b = Applicantdata[0].filter(function (data) {
            return data.Vacancies_Id == Vacancies_id;
        });
        console.log(b)
        return b;
    }
}