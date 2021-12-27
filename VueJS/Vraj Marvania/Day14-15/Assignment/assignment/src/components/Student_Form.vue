<template>
  <div class="container bg-dark text-light p-4 rounded border border-3">
    <h1 class="display-4">Student Admission Form</h1>

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
    :{{StudentList_Data}}
  </div>
  <!-- <div v-if="StudentList_Data.length" class="fluid-container bg-dark">
    <h1 class="display-4 text-light">Student data</h1>
    <table class="table table-dark table-md table-striped table-hover">
      <thead>
        <tr>
          <th>Id</th>

          <th colspan="3">Name</th>
          <th colspan="4">Address</th>
          <th colspan="5">Father</th>
          <th colspan="5">Mother</th>
          <th colspan="7">Emergency</th>
        </tr>
        <tr>
          <th>#</th>

          <th>First</th>
          <th>Middle</th>
          <th>Last</th>
          <th>City</th>
          <th>State</th>
          <th>Country</th>
          <th>Pin</th>

          <th>Father_First</th>
          <th>Father_Email</th>
          <th>Father_Education_Qualification</th>
          <th>Father_Profession</th>
          <th>Father_Phone</th>

          <th>Mother_First</th>
          <th>Mother_Email</th>
          <th>Mother_Education_Qualification</th>
          <th>Mother_Profession</th>
          <th>Mother_Phone</th>

          <th>Emergency_Relation</th>
          <th>Emergency_Number</th>
          <th>FirstName</th>
          <th>Reference_Details</th>
          <th>Reference_Through</th>
          <th>Tel_No</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
       
        <tr
          class="table-active"
          v-for="(s, i) in StudentList_Data"
          :key="s.Name.First"
        >
          <td>{{s}}</td>
          <td>{{ i + 1 }}</td>

          <td>{{ s.Name.First }}</td>
          <td>{{ s.Name.Middle }}</td>
          <td>{{ s.Name.Last }}</td>
          <td>{{ s.Address.City }}</td>
          <td>{{ s.Address.State }}</td>
          <td>{{ s.Address.Country }}</td>
          <td>{{ s.Address.Pin }}</td>

          <td>{{ s.Father.Father_First }}</td>
          <td>{{ s.Father.Father_Email }}</td>
          <td>{{ s.Father.Father_Education_Qualification }}</td>
          <td>{{ s.Father.Father_Profession }}</td>
          <td>{{ s.Father.Father_Phone }}</td>

          <td>{{ s.Mother.Mother_First }}</td>
          <td>{{ s.Mother.Mother_Email }}</td>
          <td>{{ s.Mother.Mother_Education_Qualification }}</td>
          <td>{{ s.Mother.Mother_Profession }}</td>
          <td>{{ s.Mother.Mother_Phone }}</td>

          <td>{{ s.Emergency.Emergency_Relation }}</td>
          <td>{{ s.Emergency.Emergency_Number }}</td>
          <td>{{ s.Emergency.FirstName }}</td>
          <td>{{ s.Emergency.Reference_Details }}</td>
          <td>{{ s.Emergency.Reference_Through }}</td>
          <td>{{ s.Emergency.Tel_No }}</td>
          <td>{{ s.Emergency.Address }}</td>
        </tr>
      </tbody>
    </table>
  </div> -->
</template>

<script>
import student from "../Service/Student"

import { useForm, useField } from "vee-validate";
import * as yup from "yup";
// import { handleError } from '@vue/runtime-core';

export default {


  mounted(){
       student.get_all().then(response => {
        //   this.tutorials = response.data;
            // this.student_list=response.data;
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });

    },
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
      // this.StudentList_Data.push(a);
      console.log(this.StudentList_Data)
      student.set_data(a)

      alert("data is submited");
      this.$router.push({name: "Students"}); 

    });

    return {
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
   Address
  }
}}
</script>
