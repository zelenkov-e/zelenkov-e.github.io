var submit = document.getElementById('submit');
var element = document.getElementsByName('currency');
var res = document.getElementById('res');
var USD = document.getElementById('USD_check');
var EUR = document.getElementById('EUR_check');
var RUB = document.getElementById('RUB_check');
var currency;

export function checkModule(){    
// по клику на submit 'отправить' срабатывает getCurrency(),только тогда когда checked на элементе
// for для пробежки по всем checkbox
submit.onclick = function getCurrency() {
    for (var i = 0; i < element.length; i++) {
        if (element[i].checked) {
            var request = new XMLHttpRequest();
            request.open('GET', 'https://www.nbrb.by/API/ExRates/Rates?Periodicity=0', false);
            request.send();
            currency = JSON.parse(request.responseText);
            //   если условие верно исполни функцию
            showcurrency();
        }
    }
}
// по одной выводит . все срузу только доллар
// кнопка очистить -должна чистить и вывод формы
function showcurrency() {
    if (USD.checked) {
        var usd = currency[4];
        res.innerHTML = "Валюта: " + usd.Cur_Name + ", стоимость " + usd.Cur_OfficialRate;
    }
    else if (EUR.checked) {
        var eur = currency[5];
        res.innerHTML = "Валюта: " + eur.Cur_Name + ", стоимость " + eur.Cur_OfficialRate;;
    }
    else if (RUB.checked) {
        var rub = currency[16];
        res.innerHTML = "Валюта: " + rub.Cur_Name + ", стоимость " + rub.Cur_OfficialRate;;
    }
}

// по клику на submit "очистить"  срабатывает clearForm(),(чистит все checkbox)
// только тогда когда checked на элементе
// for для пробежки по всем checkbox
submit_clear_today.onclick = function clearRes() {
    for (var i = 0; i < element.length; i++) {
        //   перезапиши значачение 'чеканотому' элементу checked на кот ты находишься 
        element[i].checked = this.checked;
        // прячу значение вывода
        res.innerHTML = '';
    }

}
}
