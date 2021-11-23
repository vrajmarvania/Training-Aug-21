var firsts = 123;
var sec = 0x37CF;
var third = 255;
var fours = 57;
var fives = 1235;
fives.valueOf();
console.log(firsts);
console.log(sec);
console.log(third);
console.log(fours);

//number method------------------->
console.log("VAlue Mehtods");
console.log(fives);
console.log(fives.valueOf());
console.log("Fixeds Mehtods");
console.log(fives.toFixed());
console.log("Fixeds Mehtods");
console.log(fives.toFixed());
console.log("Fixeds Mehtods  digits");
console.log(sec.toFixed(2));
console.log("Explonotesion Mehtods  digits");
console.log(sec.toExponential());
console.log(fours.toExponential());
console.log("LocaleString Mehtods  digits");
console.log(sec.toExponential());
console.log(fours.toExponential());
console.log("Local string  digits");
console.log(fours.toLocaleString());


// "string--------------------------->"
console.log(fours.toString());
console.log("String");
var fnames = "karana";
var lnames = "patel";
function fullname() {
    var fullname = fnames+ "" + lnames;
    var fullname = " " + fnames + "   " + lnames;
    return fullname;
}
console.log(fullname());
console.log(fnames.charAt(1));
var age = "22";
console.log(fnames.concat(lnames, age));
console.log(fnames.toUpperCase());


// ====================== Any ========================
function mix(x, y) {
    return x + y;
}
var final = mix(10, 25);
console.log(final);
var str = mix("vraj", "maravania");
console.log(str);


// "======================  Array & loop  ========================"
var list = [1, 2, 3];
console.log(list);
var genlist = [1, 2, 3];
console.log(genlist);
var values = ['Apple', 1, 'Mango', 2, 4, 'Orange', 3];
console.log(values);
var genvalues = ['Apple', 1, 'Mango', 2, 4, 'Orange', 3];
console.log(genvalues);
var strs = ['Apple', 'Mango', 'Orange'];
console.log(strs);
for (var index in strs) {
    console.log(index + "-" + strs[index]);
}
var data = list.pop();
console.log(data);
list.pop();
console.log(list);
list.push(7, 6, 5, 4);
console.log(list);
list.sort();
console.log(list);
console.log(list.concat(data));
console.log(list.shift());
var newarry = strs.filter(function (strs, i, arr) {
    return strs.length < 2;
});
console.log(newarry);


var n = 5;
while (n > 5) {
   console.log("Entered while");
}

do {
   console.log("Entered do…while");
} while (n > 5);