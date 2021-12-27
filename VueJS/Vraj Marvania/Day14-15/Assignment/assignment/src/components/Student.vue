// Create a Student Admission Form with Following Field // Name
–(First/Middle/Last) // DOB // Place of Birth // First Language // Address- City
State Country Pin // Father: FullName –First/Middle/Last // Email // Education
Qualification // Profession // Designation // Phone // Mother: FullName
–First/Middle/Last // Email // Education Qualification // Profession //
Designation // Phone // Emergency Contact List // Relation // Number //
Reference Details // Reference Through // Address with Tel No: // Note : Create
an Interface Student, // Emergency, Reference Details Form Group and Form Array
should be used // Apply Validation // After submitting details Forms info should
be added in StudentList Array and displayed in the Table Form
<template>
  <div class="container bg-dark text-light p-4 rounded border border-3">
    <h1 class="display-4">Student Admission Form</h1>
    <div class="text-start">
      <Form :validation-schema="schema" @submit="submitForm">
        <div class="m-4 p-4" style="border: 1px solid black">
          <h1>Student info</h1>

          <label for="First">First Name: </label>
          <Field
            name="First"
            type="text"
            v-model="StudentList.Name.First"
            class="form-control"
          />
          <!-- <span>{{ ErrorMessage.first('First') }}</span> -->

          <!-- <ErrorMessage name="First" /> -->
          <ErrorMessage name="First" v-slot="{ message }">
            <p>Error:</p>
            <p>{{ message }}</p>
          </ErrorMessage>

          <label for="Middle">Middle Name: </label>
          <Field
            name="Middle"
            type="text"
            v-model="StudentList.Name.Middle"
            class="form-control"
          />
          <ErrorMessage name="Middle" />

          <label for="Last">Last Name: </label>
          <Field
            name="Last"
            type="text"
            v-model="StudentList.Name.Last"
            class="form-control"
          />
          <ErrorMessage name="Last" />

          <label for="DOB">DOB:</label>
          <Field
            name="DOB"
            type="Date"
            v-model="StudentList.Name.DOB"
            class="form-control"
          />
          <ErrorMessage name="DOB" />

          <label for="Place_Of_Birth">Place of Birth: </label>
          <Field
            name="Place_Of_Birth"
            type="text"
            v-model="StudentList.Name.Place_Of_Birth"
            class="form-control"
          />
          <ErrorMessage name="Place_Of_Birth" />

          <label for="First_Language">First Language </label>
          <Field
            name="First_Language"
            type="text"
            v-model="StudentList.First_Language"
            class="form-control"
          />
          <ErrorMessage name="First_Language" />
        </div>
        <div class="m-4 p-4" style="border: 1px solid black">
          <h1>Address</h1>
          <label for="City">City</label>
          <Field
            name="City"
            type="text"
            v-model="StudentList.Address.City"
            class="form-control"
          />
          <ErrorMessage name="City" />

          <label for="State">State</label>
          <Field
            name="State"
            type="text"
            v-model="StudentList.Address.State"
            class="form-control"
          />
          <ErrorMessage name="State" />
          <br />

          <label for="Country">Country</label>

          <Field
            type="text"
            name="Country"
            v-model="StudentList.Address.Country"
            class="form-control"
          />
          <ErrorMessage name="State" />
          <br />

          <label for="Pin">Pin:</label>

          <Field
            name="Pin"
            type="text"
            v-model="StudentList.Address.Pin"
            class="form-control"
          />
          <ErrorMessage name="State" />
        </div>
        <br />

        <div class="m-4 p-4" style="border: 1px solid black">
          <h1>Father Details</h1>

          <label for="Father_First">Father_First:</label>

          <Field
            name="Father.Father_First"
            type="text"
            v-model="StudentList.Father.Father_First"
            class="form-control"
          />
          <ErrorMessage name="Father.Father_First" />
          <br />

          <hr />
          <label for="Father_Middle">Middle Name: </label>
          <Field
            name="Father.Father_Middle"
            type="text"
            v-model="StudentList.Father.Father_Middle"
            class="form-control"
          />
          <ErrorMessage name="Father.Father_Middle" />

          <label for="Last">Last Name: </label>
          <Field
            name="Father.Father_Last"
            type="text"
            v-model="StudentList.Father.Father_Last"
            class="form-control"
          />
          <ErrorMessage name="Father.Father_Last" />
          <label for="Pin">Father_Email:</label>

          <Field
            type="email"
            name="Father.Father_Email"
            v-model="StudentList.Father.Father_Email"
            class="form-control"
          /><br />
          <ErrorMessage name="Father.Father_Email" />

          <label for="Father_Education_Qualification"
            >Education_Qualification</label
          >

          <Field
            type="text"
            name="Father.Father_Education_Qualification"
            v-model="StudentList.Father.Father_Education_Qualification"
            class="form-control"
          /><br />
          <ErrorMessage name="Father.Father_Education_Qualification" />

          <label for="Father_Profession">Profession</label>

          <Field
            type="text"
            name="Father.Father_Profession"
            v-model="StudentList.Father.Father_Profession"
            class="form-control"
          /><br />
          <ErrorMessage name="Father.Father_Profession" />

          <label for="Father_Designation">Designation</label>

          <Field
            type="text"
            name="Father.Father_Designation"
            v-model="StudentList.Father.Father_Designation"
            class="form-control"
          /><br />
          <ErrorMessage name="Father.Father_Designation" />

          <label for="Father_Phone">Phone:</label>

          <Field
            type="tel"
            name="Father.Father_Phone"
            v-model="StudentList.Father.Father_Phone"
            class="form-control"
          /><br />
          <ErrorMessage name="Father.Father_Phone" />
        </div>

        <div class="m-4 p-4" style="border: 1px solid black">
          <h1>Mother Details</h1>

          <label for="Mother_First">Mother_First:</label>

          <Field
            name="Mother.Mother_First"
            type="text"
            v-model="StudentList.Mother.Mother_First"
            class="form-control"
          />
          <ErrorMessage name="Mother.Mother_First" />
          <br />

          <hr />
          <label for="Mother_Middle">Middle Name: </label>
          <Field
            name="Mother.Mother_Middle"
            type="text"
            v-model="StudentList.Mother.Mother_Middle"
            class="form-control"
          />
          <ErrorMessage name="Mother.Mother_Middle" />

          <label for="Last">Last Name: </label>
          <Field
            name="Mother.Mother_Last"
            type="text"
            v-model="StudentList.Mother.Mother_Last"
            class="form-control"
          />
          <ErrorMessage name="Mother.Mother_Last" />
          <label for="Pin">Mother_Email:</label>

          <Field
            type="email"
            name="Mother.Mother_Email"
            v-model="StudentList.Mother.Mother_Email"
            class="form-control"
          /><br />
          <ErrorMessage name="Mother.Mother_Email" />

          <label for="Mother_Education_Qualification"
            >Education_Qualification</label
          >

          <Field
            type="text"
            name="Mother.Mother_Education_Qualification"
            v-model="StudentList.Mother.Mother_Education_Qualification"
            class="form-control"
          /><br />
          <ErrorMessage name="Mother.Mother_Education_Qualification" />

          <label for="Mother_Profession">Profession</label>

          <Field
            type="text"
            name="Mother.Mother_Profession"
            v-model="StudentList.Mother.Mother_Profession"
            class="form-control"
          /><br />
          <ErrorMessage name="Mother.Mother_Profession" />

          <label for="Mother_Designation">Designation</label>

          <Field
            type="text"
            name="Mother.Mother_Designation"
            v-model="StudentList.Mother.Mother_Designation"
            class="form-control"
          /><br />
          <ErrorMessage name="Mother.Mother_Designation" />

          <label for="Mother_Phone">Phone:</label>

          <Field
            type="tel"
            name="Mother.Mother_Phone"
            v-model="StudentList.Mother.Mother_Phone"
            class="form-control"
          /><br />
          <ErrorMessage name="Mother.Mother_Phone" />
        </div>
        <div class="m-4 p-4" style="border: 1px solid black">
          <h1>Emergency Contact List</h1>
          <label for="Emergency.Emergency_Relation">Emergency_Relation</label>

          <Field
            name="Emergency.Emergency_Relation"
            type="text"
            v-model="StudentList.Emergency.Emergency_Relation"
            class="form-control"
          />
          <ErrorMessage name="Emergency.Emergency_Relation" />
          <br />

          <label for="Emergency.Emergency_Number">Emergency Number</label>

          <Field
            type="text"
            name="Emergency.Emergency_Number"
            v-model="StudentList.Emergency.Emergency_Number"
            class="form-control"
          />
          <ErrorMessage name="Emergency.Emergency_Number" />
          <br />

          <label for="Emergency.FirstName">FirstName</label>

          <Field
            type="text"
            name="Emergency.FirstName"
            v-model="StudentList.Emergency.FirstName"
            class="form-control"
          />
          <ErrorMessage name="Emergency.FirstName" />
          <br />
          <label for="Emergency.Reference_Details">Reference_Details:</label>
          <Field
            type="text"
            name="Emergency.Reference_Details"
            v-model="StudentList.Emergency.Reference_Details"
            class="form-control"
          />
          <ErrorMessage name="Emergency.Reference_Details" />
          <br />
          <label for="Emergency.Reference_Through">Reference_Through</label>

          <Field
            type="text"
            name="Emergency.Reference_Through"
            v-model="StudentList.Emergency.Reference_Through"
            class="form-control"
          />
          <ErrorMessage name="Emergency.Reference_Through" />
          <br />

          <label for="Emergency.Tel_No">Tel No:</label>
          <Field
            type="tel"
            name="Emergency.Tel_No"
            v-model="StudentList.Emergency.Tel_No"
            class="form-control"
          />
          <ErrorMessage name="Emergency.Tel_No" />

          <label for="Emergency.Address">Emergency Address</label>

          <Field
            type="text"
            name="Emergency.Address"
            v-model="StudentList.Emergency.Address"
            class="form-control"
          />
          <ErrorMessage name="Emergency.Address" />
        </div>

        <input type="submit" class="btn btn-success" />
      </Form>
    </div>
    <!-- {{ StudentList }} -->
            <h1>sasas</h1>

  </div>

  <hr />
  <br />

  <div v-if="StudentList_Data.length" class="fluid-container">
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
        :{{StudentList_Data}}
        <tr
          class="table-active"
          v-for="(s, i) in StudentList_Data"
          :key="s.Name.First"
        >
          <!-- <td>{{s}}</td> -->
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
            <p>{{s}}</p>

        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data: () => ({
    StudentList_Data: [],
    StudentList: {
      Name: { First: null, Middle: null, Last: null },
      DOB: null,
      First_Language: null,
      Place_Of_Birth: null,
      Address: { City: null, State: null, Country: null, Pin: null },

      Father: {
        FullName: {
          First: { type: String },
          Middle: { type: String },
          Last: { type: String },
        },
        Email: { type: String },
        Education_Qualification: { type: String },
        Profession: { type: String },
        Designation: { type: String },
        Phone: { type: String },
      },
      Father: {
        FullName: {
          First: null,
          Middle: null,
          Last: null,
        },
        Email: null,
        Education_Qualification: null,
        Profession: null,
        Designation: null,
        Phone: null,
      },

      Mother: {
        FullName: {
          First: null,
          Middle: null,
          Last: null,
        },
        Email: null,
        Education_Qualification: null,
        Profession: null,
        Designation: null,
        Phone: null,
      },
      Emergency: [{
        Relation: null,
        Number: null,
        FirstName: null,
        Reference_Details: null,
        Reference_Through: null,
        Tel_No: null,
        Address: null,
      }],
    },
  }),
  computed: {
    schema() {
      return yup.object({
        First: yup.string().required("is required"),
        Middle: yup.string().required(),
        Last: yup.string().required(),
        //   DOB: yup.date().required(),
        //   First_Language: yup.string().min(this.min).required(),
        //   Place_Of_Birth: yup.string().min(this.min).required(),
        //   City: yup.string().min(this.min).required(),
        //   State: yup.string().min(this.min),
        //   Country: yup.string( ).min(this.min),
        //   Pin: yup.string().min(this.min),

        //   Father: yup.object({
        //     Father_First: yup.string().min(this.min).required(),
        //     Father_Middle: yup.string().min(this.min).required(),
        //     Father_Last: yup.string().min(this.min).required(),
        //     Father_Email: yup.string().min(this.min),
        //     Father_Phone: yup.string().min(this.min),
        //     Father_Designation: yup.string().min(this.min),
        //     Father_Profession: yup.string().min(this.min),
        //     Father_Education_Qualification: yup.string().min(this.min),
        //   }),
        //   Mother: yup.object({
        //     Mother_First: yup.string().min(this.min).required(),
        //     Mother_Middle: yup.string().min(this.min).required(),
        //     Mother_Last: yup.string().min(this.min).required(),
        //     Mother_Email: yup.string().min(this.min),
        //     Mother_Phone: yup.string().min(this.min),
        //     Mother_Designation: yup.string().min(this.min),
        //     Mother_Profession: yup.string().min(this.min),
        //     Mother_Education_Qualification: yup.string().min(this.min),
        //   }),
        //   Emergency: yup.object({
        //     Emergency_Relation: yup.string().min(this.min),
        //     Emergency_Number: yup.string().min(this.min),
        //     FirstName: yup.string().min(this.min),
        //     Reference_Details: yup.string().min(this.min),
        //     Reference_Through: yup.string().min(this.min),
        //     Tel_No: yup.string().min(this.min),
        //     Address: yup.string().min(this.min),
        //   }),
      });
    },
  },
  methods: {
    submitForm() {
      this.StudentList_Data.push(this.StudentList);
      console.log(this.StudentList_Data);

      alert("successfully submitted");
    },
  },
};
</script>
<style>
body {
  background-color: black;
}
</style>


