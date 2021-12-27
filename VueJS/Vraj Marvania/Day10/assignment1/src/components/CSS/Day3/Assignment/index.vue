<!-- Create a menu list of the website. It should be responsive. -->
<template>
    <DIV class="FLEX">
            <div CLASS="A">
                Home
            </div>
            <div CLASS="A">
                News
            </div>
            <div CLASS="A">
                Contact
            </div>
            <div CLASS="A">
                About
            </div>
        </DIV>      
</template>
<script>
export default {
   name:'index'
}
</script>

   <style>
    .FLEX {
        background-color: rgb(0, 0, 0);
        JUSTIFY-CONTENT: LEFT;
        display: flex;
        flex-flow: wrap;
        align-content: center;
    }
    .FLEX>DIV {
        background-color: rgb(0, 0, 0);
        font-family: belleza;
        color: rgb(255, 255, 255);
        text-align: center;
        FONT-SIZE: 26PX;
        padding: 10px 20px;
    }

    .FLEX>DIV:hover {
        color: black;
        background-color: rgb(93, 255, 6);
    }

    @media (max-width:1000px) {

        .A {
            width: 100%;
        }
    }

    BODY {
        margin: 0PX;
    }
</style>
