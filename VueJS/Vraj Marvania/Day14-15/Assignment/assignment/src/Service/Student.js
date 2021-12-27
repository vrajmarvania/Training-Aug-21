import Http from "../../Httpcommon";

export default new class Student_Service
{
    get_all(){
        return Http.get("/student");
    }
    
    get_by_id(data){
        return Http.get("/student/"+data);
    }
    set_data(data){
        console.log(data)
        return Http.post("/student",data);
    }
    delete_data(data){
        console.log(data)
        alert(data)

        return Http.delete("/student/"+data);
    }
    update(data){
        return Http.put('/student',data);
    }
}
