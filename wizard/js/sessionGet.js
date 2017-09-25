
//вывод в новом документе
var perem1 = sessionStorage.getItem('emailfield1');
var perem2 = sessionStorage.getItem('emailfield2');
var perem3 = sessionStorage.getItem('emailfield3');
document.getElementById('res').innerHTML = "YUOR NAME: " + perem1 + ";"+"\n" + " YUOR SURNAME: " + perem2 + ";"+"\n" + "YUOR AGE: " + perem3;

