<template>
    
            <header>
                <div class="head1"><img src="Assets/style/logo.png" width="100px" height="100px"></div>
            </header>
            <!-- Menu Navigation Bar -->
            <div class="menu">
                <a href="#home">HOME</a>
                <a href="#news">ABOUNT</a>
                <a href="#notification">CONTACT US</a>
            </div>

            <footer id="footer">
                footer
            </footer>

        
 
</template>
<script>
export default {
    name:"site"
}
</script>

   <style scoped>
       .item3 .head1 {

            text-align: center;
        }
        .item3 {
  
    padding: 0px;
}

        .item3 .menu {
            clear: left;
            position: sticky;
            top: 0;
            background-color: #004ba1;
            padding: 10px 0px 10px 0px;
            color: white;
            margin: 0 auto;
            overflow: hidden;
        }

        .item3 a {
            color: white;
        }

        .item3  .menu a {
            float: left;

            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 20px;
        }

        .item3 footer {
            width: 100%;
            text-align: center;
            padding: 10PX, 0PX, 10PX, 0PX;
            color: white;
            background-color: rgb(0, 0, 0);
            padding: 14px 16px;
            width: 100%;
            bottom: 0px;
            background-color: #000;
            color: #fff;
            padding-top: 15px;
            padding-bottom: 15px;
            font-size: 30px;
            font-weight: bold;

        }
    </style>
=