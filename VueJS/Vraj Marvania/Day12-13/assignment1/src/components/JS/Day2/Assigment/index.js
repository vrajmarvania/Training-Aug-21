 // leapYear function
 function leapYear(year) {
    if (year % 400 == 0)
        return true;
    if (year % 100 == 0)
        return false;
    if (year % 4 == 0)
        return true;
    return false;
    }


   export default  function datecheck(date) {
       
         date = document.getElementById("Date").value
         //eslint-disable-next-line
        var patt = /^([0][0-9]|11|12)\-([0-2][0-9]|30|31)\-(19|20)\d{2}$/g;
        var datedata = date.split("-")
        var month = parseInt(datedata[0])
        var datei = parseInt(datedata[1])
        var year = parseInt(datedata[2])


        if (patt.test(date) == false) {
            document.getElementById("error").innerHTML = "please Enter date in DD-MM-YYYY Formate  and Numeric form";
        }
        else {
            document.getElementById("error").innerHTML = "";

            document.getElementById("error").innerHTML = "<b class='text-success'>date is ready<b>";
            if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
                /* Group all 31 days months  */
                if (datei > 31) {
                    document.getElementById("error").innerHTML = "Month   " + month + "  is 31 days month please check";
                }
            }
            else if (month == 4 || month == 6 || month == 9 || month == 11) {
                /* Group all 30 days months  */
                document.getElementById("error").innerHTML = "Month   " + month + "  is  days month please check";

                if (datei > 30) {
                    document.getElementById("error").innerHTML = "Month   " + month + "  is 30 days month please check";
                }

            }
            else if (month == 2) {
                if (datei > 28 && leapYear(year)) {
                    /* Group all 28  days months and is a not leapyear */
                    document.getElementById("error").innerHTML = "Month   " + month + "  is 28 days month please check";
                }
                else if (datei > 29 && leapYear(year)) {
                    /* Group all 29  days months  and is a leapyear */
                    document.getElementById("error").innerHTML = "Month   " + month + "  is  29 days month please check";
                }
            }
            else {
                document.getElementById("error").innerHTML = "check Your date";
            }
        }
    }