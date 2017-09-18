
//вывод в новом документе
var perem1 = sessionStorage.getItem('emailfield1');
var perem2 = sessionStorage.getItem('emailfield2');
var perem3 = sessionStorage.getItem('emailfield3');
document.getElementById('result').innerHTML = "your name: " + perem1 + "; your surname: " + perem2 + "; your age: " + perem3;

