<!-- Design a form for storing employee details. (EmployeeID,Employee name, age,Gender,designation,salary,location, 
    Email ID, Date of Joining and  contact number)
Validation required
EmployeeID should be at least 5 character long. use regular Expression
Age should be a number
Each field should contain value
Email ID should be in proper format
Date of joining should be in date format
Location should be in the drop down list
Use radio buttons for Gender
 -->
<template>

  <div class="pt-5 bg-dark">
    <div class="container  p-5 border border-light col-7 " style="    border-radius: 26px; color: white;  ">
      <h1 class="text-center fw-bolder" id="namea">Employee Form</h1>
      <form class="needs-validation">
        <div class="row">
          <label for="EmployeeID" class="form-label fw-bolder  col-6">EmployeeID</label>
          <input type="number" class="form-control  col-6 " id="EmployeeID" required>
          <div id="EmployeeID_v" class="valid-feedback">
            Looks good!
          </div>
          <div id="EmployeeID_v" class="invalid-feedback">
            Please chek data
          </div>
        </div>
  
        <div class="row">
          <label for="EmployeeName" class="form-label fw-bolder  col-6">EmployeeName</label>
          <input type="text" class="form-control  col-6" id="EmployeeName" required>
          <div id="EmployeeName_v" class="valid-feedback">
            Looks good!
          </div>
          <div id="EmployeeID_v" class="invalid-feedback">
            Please choose a username more than 5 char.
          </div>
        </div>
  
        <div class="row">
          <label for="age" class="form-label fw-bolder  col-6">age</label>
          <input type="text" class="form-control  col-6" id="age" required>
          <div id="age_v" class="valid-feedback">
            Looks good!
          </div>
          <div id="age_v" class="invalid-feedback">
            Please choose a age in number .
          </div>
        </div>
  
        <div class="row">
          <label class="form-check-label fw-bolder  col-6" for="Gender">Gender</label><br>
          <div class="form-check form-check-inline  col-6">
            <input class="form-check-input " def type="radio" name="Gender" id="inlineRadio1" value="Male" checked>
            <label class="form-check-label" for="inlineRadio1">Male</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="Gender" id="inlineRadio2" value="Female">
            <label class="form-check-label" for="inlineRadio2">Female</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="Gender" id="inlineRadio3" value="other">
            <label class="form-check-label" for="inlineRadio2">other</label>
          </div>
          <div id="EmployeeID_v" class="valid-feedback">
            Looks good!
          </div>
          <div id="EmployeeID_v" class="invalid-feedback">
            Please chek data
          </div>
          <br>
        </div>
  
        <div class="row">
          <label for="designation " class="form-label fw-bolder">Designation</label>
          <input type="text" class="form-control" id="Designation" required>
          <div id="EmployeeID_v" class="valid-feedback">
            Looks good!
          </div>
          <div id="EmployeeID_v" class="invalid-feedback">
            Please chek data
          </div>
        </div>
  
        <div class="row">
          <label for="salary" class="form-label fw-bolder">Salary</label>
          <input type="number" class="form-control" id="salary" required>
          <div id="EmployeeID_v" class="valid-feedback">
            Looks good!
          </div>
          <div id="EmployeeID_v" class="invalid-feedback">
            Please chek data
          </div>
        </div>
  
        <div class="row">
          <label for="location" class="form-label fw-bolder">location</label>
          <select class="form-select" id="location" aria-label="Default select example">
            <option>Open this select menu</option>
            <option selected value="Rajkot" checked>Rajkot</option>
            <option value="ahmedabad">ahmedabad</option>
            <option value="Gandhinager">Gandhinager</option>
            <option value="surat">surat</option>
          </select>
          <div id="EmployeeID_v" class="valid-feedback">
            Looks good!
          </div>
          <div id="EmployeeID_v" class="invalid-feedback">
            Please chek data
          </div>
        </div>
  
        <div class="row">
          <label for="Email_ID" class="form-label fw-bolder">Email ID</label>
          <input type="email" class="form-control" id="Email_ID" required>
          <div id="EmployeeID_v" class="valid-feedback">
            Looks good!
          </div>
          <div id="EmployeeID_v" class="invalid-feedback">
            Please chek data
          </div>
        </div>
 
        <div class="row">
          <label for="Date_of_Joining" class="form-label fw-bolder">Date of Joining</label>
          <input type="date" class="form-control " id="Date_of_Joining" required>
          <div id="EmployeeID_v" class="valid-feedback">
            Looks good!
          </div>
          <div id="EmployeeID_v" class="invalid-feedback">
            Please chek data
          </div>
        </div>
  
        <div class="row">
          <label for="Contact_Number" class="form-label fw-bolder">Contact Number</label>
          <input type="number" class="form-control  " id="Contact_Number" required>
          <div id="EmployeeID_v" class="valid-feedback">
            Looks good!
          </div>
          <div id="EmployeeID_v" class="invalid-feedback">
            Please chek data
          </div>
        </div>
        <br>
  
        <div class="row">
          <input type="btn" @click="sub" class="btn btn-success col-6" value="submit">
          <input type="reset" class="btn btn-secondary   col-6">
        </div>
  
      </form>
    </div>
  </div>
</template>

<script>
  import onsub from "./script.js"

  export default {
   name:'Index',
   methods:{
    sub(){
      onsub()
    }
   }
}
  </script>

<style>
  
</style>

