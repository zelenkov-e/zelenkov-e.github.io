
//вывод в новом документе
var perem1 = sessionStorage.getItem('emailfield1');
var perem2 = sessionStorage.getItem('emailfield2');
var perem3 = sessionStorage.getItem('emailfield3');
document.getElementById('res').innerHTML = "YOUR NAME: " + perem1 + ";"+"\n" + " YOUR SURNAME: " + perem2 + ";"+"\n" + "YOUR AGE: " + perem3;

