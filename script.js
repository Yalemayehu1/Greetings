var pname = prompt("Enter Your Name, please,", "name");
var today = new Date()
var hrs = today.getHours();
document.writeln("<b>");
document.writeln("<b>")

if (hrs <= 12)
    document.write("Good Morning" + pname + '!');
else if (hrs <= 18)
    document.write("Good Afternoon" + pname + '!');
else
    document.write("Good Evening" + pname + '!'); document.writeln("<br />");