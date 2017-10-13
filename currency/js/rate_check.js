//------------------------------курс на сегодня-----------------------------------------------------------------------//
var submit = document.getElementById('submit');
var element = document.getElementsByName('currency');
var res = document.getElementById('res');
var USD = document.getElementById('USD_check');
var EUR = document.getElementById('EUR_check');
var RUB = document.getElementById('RUB_check');
var currency;
function getCurrency() {
    for (var i = 0; i < element.length; i++) {
        if (element[i].checked) {
            var request = new XMLHttpRequest();
            request.open('GET', 'https://www.nbrb.by/API/ExRates/Rates?Periodicity=0', false);
            request.send();
            currency = JSON.parse(request.responseText);
            showcurrency();
        }
    }
}
function showcurrency() {
    if (USD.checked) {
        var usd = currency[4];
        res.innerHTML = "Валюта: " + usd.Cur_Name + ", стоимость " + usd.Cur_OfficialRate;
        console.log(currency[4])
    }
    else if (EUR.checked) {
        var eur = currency[5];
        res.innerHTML = "Валюта: " + eur.Cur_Name + ", стоимость " + eur.Cur_OfficialRate;;
        console.log(currency[5])
    }
    else if (RUB.checked) {
        var rub = currency[16];
        res.innerHTML = "Валюта: " + rub.Cur_Name + ", стоимость " + rub.Cur_OfficialRate;;
        console.log(currency[16])
    }
}
function clearRes() {
    for (var i = 0; i < element.length; i++) {
        element[i].checked = this.checked;
        res.innerHTML = '';
    }
}
