

 

<template>
    
      <div class="item3">
        <H3>Display Student Report Card, Which contains field like Name, RollNo, Year Of Passing. Different subject marks
            should be displayed with its grade</H3>
        <CENTER>
            <table border="1">
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
        </CENTER>
        <HR />
    
    
    
        <!-- 2--------->
        <H3>You are working in some company as HR. you have been assigned a task to arrange department hierarchy example:
            employee working under some manager<BR/>Note: Use Ordered and unordered list with its list-style-type attribute,
            practice nested list as well
    
        </H3>
        <ul>
            <li>CTO Tayler Vincent</li>
            <ul>
                <li>Application Development</li>
                <ol>
                    <li>System Analyst</li>
                    <ol>
                        <li>Hari Wang</li>
                        <li>Cotton Jackson</li>
                        <li>Jackson Cotton</li>
                    </ol>
                    <li>System Enginner</li>
                    <ol>
                        <li>Tyriq Houston</li>
                        <li>Jackson Cotton</li>
                    </ol>
                    <li>Application Developer</li>
                    <ol>
                        <li>Hari Wang</li>
                        <li>Asia Dalton</li>
                    </ol>
                </ol>
                <li>IT-Manangement</li>
                <ol>
                    <li>Enterprice Architecher</li>
                    <ol>
                        <li>Hari Wang</li>
                        <li>Asia Dalton</li>
                    </ol>
                    <li>IT-project manager</li>
                    <ol>
                        <li>Teddie Legge</li>
                        <li>Jackson Cotton</li>
                    </ol>
                    <li>Business Analyst</li>
                    <ol>
                        <li>Jai Hartman</li>
                        <li>Tyriq Houston</li>
                    </ol>
                </ol>
                <li>IT-Security</li>
                <ol>
                    <li>Cyber Security</li>
                    <ol>
                        <li>Kim Collier</li>
                        <li>Jai Hartman</li>
                    </ol>
                    <li>information Security</li>
                    <ol>
                        <li>Tyrone Conway</li>
                        <li>Una Yu</li>
                    </ol>
                </ol>
                <li>User</li>
                <ol>
                    <li>Technical Support</li>
                    <ol>
                        <li>Hari Wang</li>
                        <li>Asia Dalton</li>
                    </ol>
                    <li>IT Support</li>
                    <ol>
                        <li>Teddie Legge</li>
                        <li>Jackson Cotton</li>
                    </ol>
                </ol>
            </ul>
        </ul>
        <HR/>
    
        <!-- 3--------->
        <H3> Create Login Form with field UserName and Password field.</H3>
        <CENTER>
            <form method="get" action='a'>
                <TABLE>
                    <tr>
                        <th colspan="6">
                            <h1>Login Form</h1>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <label for="NAME"><b>Name:</b></label>
                        </td>
                        <td>
                            <input type="text" name="NAME" placeholder="Name" required>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="password"><b>Password:</b></label>
                        </td>
                        <td>
                            <input type="password" name="password" placeholder="Password" required>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" value="submit"></td>
                    </tr>
                </TABLE>
            </form>
        </CENTER>
        <HR />
    
    
        <!-- 4--------->
        <H3>Use Article tag display one latest news.</H3>
        <article style="
                width: 300px;
                border: 2px solid gray;
                padding: 10px;
                border-radius: 10px;
                margin: 5px;">
            <img src="https://images.indianexpress.com/2021/09/climate.jpg" alt="image" width="300" height="250">
            <h1>Scientists scramble to harvest ice cores as glaciers melt - The Indian Express</h1>
            <p>A study published in April found glaciers lost 227 gigatons of ice annually from 2000 to 2004, but that
                increased to an average of 298 gigatons a year after 2015.</p>
        </article>
        <HR />
    
        <!-- 5--------->
        <H3>Create Horizontal menu. Menu item will Home, AboutUs, ContactUS.
            Use Nav tag and anchor tag</H3>
    
        <div id='task5'>
            <header>
                <h1>Horizontal Navigation Menu</h1>
            </header>
            <nav>
                <ul>
                    <li>
                        <a href="login.html">Login Page</a>
                    </li>
                    <li>
                        <a href="Article%20.html">Article</a>
                    </li>
                    <li>
                        <a href="Department hierarchy.html">department hierarchy</a>
                    </li>
                    <li>
                        <a href="Report Card.html">Report Card</a>
                    </li>
                </ul>
            </nav>
        </div>      </div>
</template>
      
     
<script>
export default {
   name:'Practice'
}
</script>
  <style scoped>
    #task5 li {
        list-style: none;
        display: inline;
        border: solid;
        margin: 5px;
    }
    
</style>