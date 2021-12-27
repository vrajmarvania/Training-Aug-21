<template>
    <div class="container  justify-content-center pt-5">
        <div class="row p-5 bg-warning ">
            <label for="Date" class="form-label col-12  text-center fs-1">Enter Date And Check:</label><br>
            <input type="text" name="Date" placeholder="MM-DD-YYYY" id="Date" class="form-control form-control-lg col-6"
                @click="sub(this.value)">
            <label id="error" class="text-danger text-center fw-bolder fs-5"></label>
            <label id="ready" class="text-success text-center fw-bolder fs-5"></label>
        </div>
    </div>
</template>
<script>
    import {datecheck} from "./index.js"
export default {
        name:"index",
        methods:{
            sub(data){
                 datecheck(data)
            }
        }

    }
</script>

   