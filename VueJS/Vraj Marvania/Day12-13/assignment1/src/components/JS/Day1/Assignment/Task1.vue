<template>
    <form @submit="cal" >
        <div class="container ">
            <h1>calculator</h1>

            <label for="no1" class="col-6 fw-bolder">Please enter first number:</label>
            <input type="number" id="no1" name="no1" class="col-6" required>

            <label for="no2" class="col-6 fw-bolder">Please enter second number:</label>
            <input type="number" id="no2" name="no2" class="col-6" required>

            <label for="no2" class="col-6 fw-bolder">Please select operation you want to perform :</label>
            <div class="col-12 ">
                <div class="form-check form-check">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="Addition"
                        value="Addition">
                    <label class="form-check-label" for="Addition">Addition</label>
                </div>
                <div class="form-check form-check">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="Subtraction"
                        value="Subtraction">
                    <label class="form-check-label" for="Subtraction">Subtraction</label>
                </div>
                <div class="form-check form-check">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="Multiplication"
                        value="Multiplication">
                    <label class="form-check-label" for="Multiplication">Multiplication</label>
                </div>
                <div class="form-check form-check">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="Division"
                        value="Division">
                    <label class="form-check-label" for="Division">Division</label>
                </div>
            </div>

            <input class="btn btn-success col-3" type="submit" value="Calculate">    
            <input class="btn btn-outline-secondary col-3" type="reset" onclick="cle()" value="Reset">
            
        </div>
        <label id="result" class="fw-bold pt-5 text-success col-12 text-center"></label>

    </form>
 
</template>
  
<script>
    export default {
  name:'Task1'
  , 
   methods: {  cal(e){
                  e.preventDefault();
            var no1 = parseInt(document.getElementById("no1").value)
            var no2 = parseInt(document.getElementById("no2").value)
            var type = document.querySelector('input[name="inlineRadioOptions"]:checked').value;
            var ans

            if (type == "Addition") { ans = no1 + no2 }
            else if (type == "Subtraction") { ans = no1 - no2 }
            else if (type == "Multiplication") { ans = no1 * no2 }
            else if (type == "Division") { ans = no1 / no2 }

            document.getElementById("result").innerHTML = "Result is: " + ans
        }}
}

    </script>
<style>

</style>

