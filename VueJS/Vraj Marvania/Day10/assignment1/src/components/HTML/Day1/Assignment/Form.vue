<!-- Assignment:
Design a form for storing employee details. (Employee name, age, Gender, designation, salary, location, Email ID, Date of Joining and contact number)
   Validation required
   Age should be a number
   Each field should contain value
   Email ID should be in proper format
   Date of joining should be in date format
   Location should be in the drop down list
   Use radio buttons for Gender
-->

<template>
  
         <form action="" method="GET">
            <table>
               <H1>Employee Details Form</H1>
               <tr>
                  <td><label for="Employee name">Employee name</label></td>
                  <td><input type="text" name="Employee name" placeholder="Enter Name" required><br></td>
               </tr>
               <tr>
                  <td>
                     <label for="age">Age:</label>
                  </td>
                  <td>
                     <input type="number" name="age" min="18" max="75" required><br>
                  </td>
               </tr>
               <tr>
                  <td>
                     <label for="Gender">Gender:</label><br>
                  </td>
                  <td>
                     <label>Male</label>
                     <input type="radio" value="Male" name="Gender" required>
                     <label>Female</label>
                     <input type="radio" value="Female" name="Gender" required>
                     <label>Other</label>
                     <input type="radio" value="Other" name="Gender" required><br>
                  </td>
               </tr>
               <tr>
                  <td>
                     <label for="designation">Designation</label>
                  </td>
                  <td>
                     <input type="text" name="designation" placeholder="Enter Designation" required><br>
                  </td>
               </tr>
               <tr>
                  <td>
                     <label for="salary">Salary</label>
                  </td>
                  <td>
                     <input type="number" name="salary" min="20000" max="70000" required><br>
                  </td>
               </tr>
               <tr>
                  <td>
                     <label for="Location">Location:</label>
                  </td>
                  <td>
                     <select name="Location" id="Location">
                        <option value="rajkot">Rajkot</option>
                        <option value="ahmendabad">Ahmendabad</option>
                        <option value="jamnager">Jamnager</option>
                        <option value="gandhinager">Gandhinager</option>
                     </select>
                  </td>
               </tr>
               <tr>
                  <td>
                     <label for="Email ID">Email ID</label>
                  </td>
                  <td>
                     <input type="email" name="Email ID" placeholder="Enter Email" required><br>
                  </td>
               </tr>
               <tr>
                  <td>
                     <label for="Date of Joining">Date of Joining</label><br>
                  </td>
                  <td>
                     <input type="date" name="Date of Joining" required><br>
                  </td>
               </tr>
               <tr>
                  <td>
                     <label for="number">Contact number</label>
                  </td>
                  <td>
                     <input type="tel" name="number" placeholder="Enter Contact" pattern="[0-9]{10}" required>
                  </td>
               </tr>
               <tr>
                  <td>
                     <input type="submit" name="submit">
                  </td>
                  <td>
                     <input type="reset" name="reset">
                  </td>
               </tr>
            </table>
         </form>
     

</template>
<script>
   export default {
  name: "Form",
};
</script>




  
