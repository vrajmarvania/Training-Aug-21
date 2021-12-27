<template>
  <div class="container bg-dark text-light p-4 rounded border border-3">
    <h1 class="display-4">Student Admission Form </h1>

    <form @submit="submit">
      <div class="text-start">
        <div class="m-4 p-4">
        <br/>
          <label  for="First">First Name: </label>
          <input
            name="First"
            type="text"
            v-model="Name_First"
            class="form-control"
          />
          <span class="text-danger">{{ errors["StudentList.Name.First"] }}</span>
          {{errors}}
        <br/>
          <label  for="Middle">Middle Name: </label>
          <input
            name="Middle"
            type="text"
            v-model="Name_Middle"
            class="form-control"
          />

          <span class="text-danger">{{ errors["StudentList.Name.Middle"] }}</span>

        <br/>
          <label  for="Last">Last Name: </label>
          <input name="Last" type="text" v-model="Name_Last" class="form-control" />
          <span class="text-danger">{{ errors["StudentList.Name.Last"] }}</span>

          <!-- <ErrorMessage name="First" v-slot="{ message }"> -->

        <br/>
          <label  for="DOB">DOB:</label>
          <input name="DOB" type="Date" v-model="DOB" class="form-control" />
          <span class="text-danger">{{ errors["StudentList.DOB"] }}</span>

        <br/>
          <label  for="Place_Of_Birth">Place of Birth: </label>

          <select
            class="form-select"
            name="Place_Of_Birth"
            v-model="Place_Of_Birth"
            aria-label="Default select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">Rajkot</option>
            <option value="2">ahmedabad</option>
            <option value="3">surat</option>
          </select>
          <span class="text-danger">{{ errors["StudentList.Place_Of_Birth"] }}</span>

        <br/>
          <label  for="First_Language">First Language </label>

          <select
            class="form-select"
            name="First_Language"
            v-model="First_Language"
            aria-label="Default select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">Gujrati</option>
            <option value="2">Hindi</option>
            <option value="3">English</option>
          </select>
          <span class="text-danger">{{ errors["StudentList.First_Language"] }}</span>
        </div>
        <div class="m-4 p-4" style="border: 1px solid black">
          <h1>Address</h1>
        <br/>
          <label  for="City">City</label>
          <input name="City" type="text" v-model="City" class="form-control" />
          <span class="text-danger">{{ errors["StudentList.Address.City"] }}</span>

        <br/>
          <label  for="State">State</label>
          <input
            name="State"
            type="text"
            v-model="State"
            class="form-control"
          />
          <span class="text-danger">{{ errors["StudentList.Address.State"] }}</span>
          <br />

        <br/>
          <label  for="Country">Country</label>

          <input
            type="text"
            name="Country"
            v-model="Country"
            class="form-control"
          />
          <span class="text-danger">{{ errors["StudentList.Address.Country"] }}</span>
          <br />

        <br/>
          <label  for="Pin">Pin:</label>

          <input name="Pin" type="text" v-model="Pin" class="form-control" />
          <span class="text-danger">{{ errors["StudentList.Address.Pin"] }}</span>
        </div>
        <br />
        <div class="m-4 p-4" style="border: 1px solid black">
          <h1>Father Details</h1>

        <br/>
          <label  for="Father_First">Father_First:</label>

          <input
            name="Father_First"
            type="text"
            v-model="Father_First"
            class="form-control"
          />
          <span class="text-danger">{{ errors["StudentList.Father.FullName.First"] }}</span>
          <br />

          <hr />
        <br/>
          <label  for="Father_Middle">Middle Name: </label>
          <input
            name="Father_Middle"
            type="text"
            v-model="Father_Middle"
            class="form-control"
          />
          <span class="text-danger">{{ errors["StudentList.Father.FullName.Middle"] }}</span>

        <br/>
          <label  for="Last">Last Name: </label>
          <input
            name="Father_Last"
            type="text"
            v-model="Father_Last"
            class="form-control"
          />
          <span class="text-danger">{{ errors["StudentList.Father.FullName.Last"] }}</span>
        <br/>                                 
          <label  for="Pin">Father_Email:</label>

          <input
            type="email"
            name="Father_Email"
            v-model="Father_Email"
            class="form-control"
          /><br />
          <span class="text-danger">{{ errors["StudentList.Father.Email"] }}</span>

        <br/>
          <label  for="Father_Education_Qualification"
            >Education_Qualification</label
          >

          <input
            type="text"
            name="Father_Education_Qualification"
            v-model="Father_Education_Qualification"
            class="form-control"
          /><br />
          <span>{{
            errors["StudentList.Father.Education_Qualification"]
          }}</span>

        <br/>
          <label  for="Father_Profession">Profession</label>

          <input
            type="text"
            name="Father_Profession"
            v-model="Father_Profession"
            class="form-control"
          /><br />
          <span class="text-danger">{{ errors["StudentList.Father.Profession"] }}</span>

        <br/>
          <label  for="Father_Designation">Designation</label>

          <input
            type="text"
            name="Father_Designation"
            v-model="Father_Designation"
            class="form-control"
          /><br />
          <span class="text-danger">{{ errors["StudentList.Father.Designation"] }}</span>

        <br/>
          <label  for="Father_Phone">Phone:</label>

          <input
            type="tel"
            name="Father_Phone"
            v-model="Father_Phone"
            class="form-control"
          /><br />
          <span class="text-danger">{{ errors["StudentList.Father.Phone"] }}</span>
        </div>
        <div class="m-4 p-4" style="border: 1px solid black">
          <h1>Mother Details</h1>

        <br/>
          <label  for="Mother_First">Mother_First:</label>

          <input
            name="Mother_First"
            type="text"
            v-model="Mother_First"
            class="form-control"
          />
          <span class="text-danger">{{ errors["StudentList.Mother.FullName.First"] }}</span>
          <br />

          <hr />
        <br/>
          <label  for="Mother_Middle">Middle Name: </label>
          <input
            name="Mother_Middle"
            type="text"
            v-model="Mother_Middle"
            class="form-control"
          />
          <span class="text-danger">{{ errors["StudentList.Mother.FullName.Middle"] }}</span>

        <br/>
          <label  for="Last">Last Name: </label>
          <input
            name="Mother_Last"
            type="text"
            v-model="Mother_Last"
            class="form-control"
          />
          <span class="text-danger">{{ errors["StudentList.Mother.FullName.Last"] }}</span>
        <br/>
          <label  for="Pin">Mother_Email:</label>

          <input
            type="email"
            name="Mother_Email"
            v-model="Mother_Email"
            class="form-control"
          /><br />
          <span class="text-danger">{{ errors["StudentList.Mother.Email"] }}</span>

        <br/>
          <label  for="Mother_Education_Qualification"
            >Education_Qualification</label
          >

          <input
            type="text"
            name="Mother_Education_Qualification"
            v-model="Mother_Education_Qualification"
            class="form-control"
          /><br />
          <span>{{
            errors["StudentList.Mother.Education_Qualification"]
          }}</span>

        <br/>
          <label  for="Mother_Profession">Profession</label>

          <input
            type="text"
            name="Mother_Profession"
            v-model="Mother_Profession"
            class="form-control"
          /><br />
          <span class="text-danger">{{ errors["StudentList.Mother.Profession"] }}</span>

        <br/>
          <label  for="Mother_Designation">Designation</label>

          <input
            type="text"
            name="Mother_Designation"
            v-model="Mother_Designation"
            class="form-control"
          /><br />
          <span class="text-danger">{{ errors["StudentList.Mother.Designation"] }}</span>

        <br/>
          <label  for="Mother_Phone">Phone:</label>

          <input
            type="tel"
            name="Mother_Phone"
            v-model="Mother_Phone"
            class="form-control"
          /><br />
          <span class="text-danger">{{ errors["StudentList.Mother.Phone"] }}</span>
        </div>
        <div class="m-4 p-4" style="border: 1px solid black">
          <h1>Emergency Contact List</h1>
        <br/>
          <label  for="Emergency.Emergency_Relation">Emergency_Relation</label>

          <input
            name="Emergency_Relation"
            type="text"
            v-model="Emergency_Relation"
            class="form-control"
          />
          <span class="text-danger">{{ errors["StudentList.Emergency.Relation"] }}</span>

          <br />

        <br/>
          <label  for="Emergency.Emergency_Number">Emergency Number</label>

          <input
            type="text"
            name="Emergency_Number"
            v-model="Emergency_Number"
            class="form-control"
          />
          <span class="text-danger">{{ errors["StudentList.Emergency.Number"] }}</span>

          <br />

        <br/>
          <label  for="Emergency.FirstName">FirstName</label>

          <input
            type="text"
            name="FirstName"
            v-model="FirstName"
            class="form-control"
          />
          <span class="text-danger">{{ errors["StudentList.Emergency.FirstName"] }}</span>

          <br />
        <br/>
          <label  for="Emergency.Reference_Details">Reference_Details:</label>
          <input
            type="text"
            name="Reference_Details"
            v-model="Reference_Details"
            class="form-control"
          />
          <span class="text-danger">{{ errors["StudentList.Emergency.Reference_Details"] }}</span>

          <br />
        <br/>
          <label  for="Emergency.Reference_Through">Reference_Through</label>

          <input
            type="text"
            name="Reference_Through"
            v-model="Reference_Through"
            class="form-control"
          />
          <span class="text-danger">{{ errors["StudentList.Emergency.Reference_Through"] }}</span>

          <br />

        <br/>
          <label  for="Emergency.Tel_No">Tel No:</label>
          <input
            type="tel"
            name="Tel_No"
            v-model="Tel_No"
            class="form-control"
          />
          <span class="text-danger">{{ errors["StudentList.Emergency.Tel_No"] }}</span>

        <br/>
          <label  for="Emergency.Address">Emergency Address</label>

          <input
            type="text"
            name="Address"
            v-model="Address"
            class="form-control"
          />
          <span class="text-danger">{{ errors["StudentList.Emergency.Address"] }}</span>
        </div>
        <input type="submit" class="btn btn-success" />
      </div>
      <hr />
      <br />
    </form>
  </div>
</template>

<script>
import student from "../Service/Student"

import { useForm, useField } from "vee-validate";
import * as yup from "yup";
// import { handleError } from '@vue/runtime-core';

export default {
name:"Student_Update",

 
  data() {
    
    // Define a validation schema
    const schema = yup.object({
      StudentList: yup.object({

        Name: yup.object({
          First: yup.string().required("is required"),
          Middle: yup.string().required("is required"),
          Last: yup.string().required("is required"),
        
        }),
          // DOB: yup.date().required(),
          // Place_Of_Birth: yup.string().required("is required"),
          // First_Language: yup.string().required("is required"),

        // Address: yup.object({
        //   City: yup.string().required("is required"),
        //   State: yup.string().required("is required"),
        //   Country: yup.string().required("is required"),
        //   Pin: yup.string().required("is required"),
        // }),

        
        // Father: yup.object({
        //    FullName: yup.object({
        //   First: yup.string().required("is required"),
        //   Middle: yup.string().required("is required"),
        //   Last: yup.string().required("is required"),
        //    }),
         
        //   Email: yup.string().email().required("is required"),
        //   Phone: yup.string().required("is required"),
        //   Designation: yup.string().required("is required"),
        //   Profession: yup.string().required("is required"),
        //   Education_Qualification: yup.string().required("is required"),
        // }),
      
        //  Mother: yup.object({
        //    FullName: yup.object({
        //   First: yup.string().required("is required"),
        //   Middle: yup.string().required("is required"),
        //   Last: yup.string().required("is required"),
        //    }),
        //   Email: yup.string().email().required("is required"),
        //   Phone: yup.string().required("is required"),
        //   Designation: yup.string().required("is required"),
        //   Profession: yup.string().required("is required"),
        //   Education_Qualification: yup.string().required("is required"),
        // }),

        // Emergency: yup.object({
        //   Relation: yup.string().required("is required"),
        //   Emergency_Number: yup.string().required("is required"),
        //   FirstName: yup.string().required("is required"),
        //   Reference_Details: yup.string().required("is required"),
        //   Reference_Through: yup.string().required("is required"),
        //   Tel_No: yup.string().required("is required"),
        //   Address: yup.string().required("is required"),
        // }),
      }),
    }
  
     
  
    
    
    );

    // Create a form context with the validation schema
    const { handleSubmit, errors } = useForm({
      validationSchema: schema,
    });

    // No need to define rules for fields

    const { value: Name_First } = useField("StudentList.Name.First");
    const { value: Name_Middle } = useField("StudentList.Name.Middle");
    const { value: Name_Last } = useField("StudentList.Name.Last");

    const { value: DOB } = useField("StudentList.DOB");
    const { value: First_Language } = useField("StudentList.First_Language");
    const { value: Place_Of_Birth } = useField(
      "StudentList.Place_Of_Birth"
    );
    const { value: City } = useField("StudentList.Address.City");
    const { value: State } = useField("StudentList.Address.State");
    const { value: Country } = useField("StudentList.Address.Country");
    const { value: Pin } = useField("StudentList.Address.Pin");



    const { value: Father_First } = useField("StudentList.Father.FullName.First");
    const { value: Father_Middle } = useField("StudentList.Father.FullName.Middle");
    const { value: Father_Last } = useField("StudentList.Father.FullName.Last");

    const { value: Father_Email } = useField("StudentList.Father.Email");

    const { value: Father_Phone } = useField("StudentList.Father.Phone");
    const { value: Father_Designation } = useField(
      "StudentList.Father.Designation"
    );
    const { value: Father_Profession } = useField(
      "StudentList.Father.Profession"
    );
    const { value: Father_Education_Qualification } = useField(
      "StudentList.Father.Education_Qualification"
    );

    const { value: Mother_First } = useField("StudentList.Mother.FullName.First");
    const { value: Mother_Middle } = useField("StudentList.Mother.FullName.Middle");
    const { value: Mother_Last } = useField("StudentList.Mother.FullName.Last");
    const { value: Mother_Email } = useField("StudentList.Mother.Email");
    const { value: Mother_Phone } = useField("StudentList.Mother.Phone");
    const { value: Mother_Designation } = useField(
      "StudentList.Mother.Designation"
    );
    const { value: Mother_Profession } = useField(
      "StudentList.Mother.Profession"
    );

    const { value: Mother_Education_Qualification } = useField(
      "StudentList.Mother.Education_Qualification"
    );

    const { value: Emergency_Relation } = useField(
      "StudentList.Emergency.Relation"
    );
    const { value: Emergency_Number } = useField(
      "StudentList.Emergency.Emergency_Number"
    );
    const { value: FirstName } = useField("StudentList.Emergency.FirstName");
    const { value: Reference_Details } = useField(
      "StudentList.Emergency.Reference_Details"
    );
    const { value: Reference_Through } = useField(
      "StudentList.Emergency.Reference_Through"
    );
    const { value: Tel_No } = useField("StudentList.Emergency.Tel_No");
    const { value: Address } = useField("StudentList.Emergency.Address");

    var a;

    const submit = handleSubmit((values) => {
      a = values.StudentList;
       a['_id']=this.$route.params._id,
      student.update(a)
      alert("data is submited");
      this.$router.push({name: "Students"}); 

    });

    return {
      // s,
      StudentLifst_Data: [],
      a,
      submit,
      errors,
    
   Name_First ,
   Name_Middle,
   Name_Last ,
   DOB ,
   First_Language ,
   Place_Of_Birth ,
   City,
   State, 
   Country ,
   Pin,
   Father_First,
   Father_Middle, 
   Father_Last ,
   Father_Email,
   Number,
   Father_Phone ,
   Father_Designation,
   Father_Profession ,
   Father_Education_Qualification,
   Mother_First ,
   Mother_Middle ,
   Mother_Last ,
   Mother_Email ,
   Mother_Phone,
   Mother_Designation ,
   Mother_Profession ,
   Mother_Education_Qualification ,
   Emergency_Relation  ,
   Emergency_Number,
   FirstName ,
   Reference_Details,
   Reference_Through ,
   Tel_No,
   Address,
   s:[]
  }
},
 mounted(){
        student.get_by_id(this.$route.params._id).then(response => {
        //   this.tutorials = response.data;
            this.s=response.data;
            this.Name_First=this.s.Name.First
            this.Name_Middle=this.s.Name.Middle,
   this.Name_Last=this.s.Name.Last ,
   this.DOB=this.s.DOB ,
   this.First_Language=this.s.First_Language ,
   this.Place_Of_Birth=this.s.Place_Of_Birth ,
  this. City=this.s.Address.City,
   this.State=this.s.Address.State, 
   this.Country=this.s.Address.Country,
   this.Pin=this.s.Address.Pin,

   this.Father_First=this.s.Father.FullName.First,
   this.Father_Middle=this.s.Father.FullName.Middle, 
   this.Father_Last=this.s.Father.FullName.Last ,
   this.Father_Email=this.s.Father.Email,
   this.Number=this.s.Father.Number,
   this.Father_Phone=this.s.Father.Phone,
   this.Father_Designation=this.s.Father.Designation,
   this.Father_Profession=this.s.Father.Profession ,
   this.Father_Education_Qualification=this.s.Father.Education_Qualification,


 this.Mother_First=this.s.Mother.FullName.First,
   this.Mother_Middle=this.s.Mother.FullName.Middle, 
   this.Mother_Last=this.s.Mother.FullName.Last ,
   this.Mother_Email=this.s.Mother.Email,
   this.Number=this.s.Mother.Number,
   this.Mother_Phone=this.s.Mother.Phone,
   this.Mother_Designation=this.s.Mother.Designation,
   this.Mother_Profession=this.s.Mother.Profession ,
   this.Mother_Education_Qualification=this.s.Mother.Education_Qualification,

  

   this.Emergency_Relation =this.s.Emergency.Relation,
   this.Emergency_Number=this.s.Emergency.Emergency_Number,
   this.FirstName=this.s.Emergency.FirstName,
   this.Reference_Details=this.s.Emergency.Reference_Details,
   this.Reference_Through=this.s.Emergency.Reference_Through,
   this.Tel_No=this.s.Emergency.Tel_No,
   this.Address=this.s.Emergency.Address,


    
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });

    },
}
</script>
