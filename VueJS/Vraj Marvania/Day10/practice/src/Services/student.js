import Http from "../Httpcommon"

export default new class Student_Service
{
    get_all(){
        return Http.get("/students");
    }
    set_data(data){
        return Http.post("/students",data);
    }
}
