<template>
   
      <!-- <div class="item3"> -->
        <DIV class="TASK1">
            <H2>1.ProvCLASSe text alignment to center to student Report Card which is created in Day1 assignment</H2>
            <table border="2">
                <tr>
                    <th colspan="8">Report Card</th>
                </tr>
                <tr>
                    <td colspan="4">Name:</td>
                    <td colspan="4">vraj marvania</td>
    
                </tr>
                <tr>
                    <td colspan="4">RollNo:</td>
                    <td colspan="4">23</td>
                </tr>
                <tr>
                    <td colspan="4">Year Of Passing</td>
                    <td colspan="4">2021</td>
                </tr>
                <tr>
                    <th colspan="2">SUBJECT CODE</th>
                    <th colspan="2">SUBJECT NAME</th>
                    <th colspan="2">Practical Grade</th>
                    <th colspan="2">Subject Grade</th>
                </tr>
                <tr>
                    <td colspan="2">2180703</td>
                    <td colspan="2">Artificial Intelligence</td>
                    <td colspan="2">AA</td>
                    <td colspan="2">AB</td>
                </tr>
                <tr>
                    <td colspan="2">2180706</td>
                    <td colspan="2">Project (Phase-II) </td>
                    <td colspan="2">AB</td>
    
                    <td colspan="2">AA</td>
                </tr>
                <tr>
                    <td colspan="2">2180711</td>
                    <td colspan="2">Python Programming</td>
                    <td colspan="2">AA</td>
    
                    <td colspan="2">AB</td>
                </tr>
                <tr>
                    <td>SPI:9.59</td>
                    <td colspan="3">CPI: 8.60</td>
                    <td colspan="3">CGPA: 8.91</td>
                </tr>
            </table>
        </DIV>
        <HR />
    
    
        <DIV CLASS="TASK2">
            <H2>2.Provide Border to one paragraph and write some dummy text into it</H2>
            <h3>Pellentesque habitant morbi tristique</h3>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br> Vestibulum
                tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
                semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
    
    
    
        </DIV>
        <HR />
    
    
        <DIV CLASS="TASK3">
            <H2>3.Create city list in horizontal order(using display properties)</H2>
            <h4>citys:</h4>
            <ul>
                <li>Junagadh</li>
                <li>Dahod</li>
                <li>Sabarkantha</li>
                <li>Dahod</li>
                <li>Vadodara</li>
                <li>Surat</li>
                <li>Patan</li>
                <li>Navsari</li>
                <li>Junagadh</li>
                <li>Kheda</li>
                </ul>
        </DIV>
        <HR />
        <DIV CLASS="TASK4">
            <H2>4.Provide universal selector and apply blue color to a page</H2>
        </DIV>
        <HR />
    
        <DIV CLASS="TASK5">
            <H2>Suppose html markup below, apply all h1 and h2 blue color.</H2>
            <h1>Heading1</h1>
            <h2>Sub Heading</h2>
            <h1>Heading2</h1>
            <h2>Sub heading</h2>
        </div>
        <HR />      
        <!-- </div> -->
   

</template>


<script>
export default {
   name:"Day1_P_Task"
}
</script>

   <style scoped>
   .item3 .TASK1 table {
        text-align: center;
        align-self: center;
    }

    .item3 .TASK2 p,h3 {

        border-style: double;

    }

    .item3 .TASK3 li {
        display: inline;
        margin: 1px;
        border: solid 1px;
        border-color: rgb(209, 209, 214);
        background-color: rgb(50, 64, 90);
        color: white;

    }

    .item3  *{
        background-color: rgb(210, 210, 255);
    }

    .item3 .TASK3 li:hover {
        background-color: brown;
    }
    .item3  .TASK5{
        color: blue;
    }
</style>

  


