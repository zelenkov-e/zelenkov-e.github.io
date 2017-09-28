//  <!-------------------------------selectmenuScript--------------------------------------------->

  
        var select = document.getElementById('select');
        var USD = document.getElementById('USD');
        var EUR = document.getElementById('EUR');
        var RUB = document.getElementById('RUB');
        var result = document.getElementById('res');
        // var element = document.getElementsByName('currency');
        var currency;

        function getElem(param) {
            // 
            // alert(param)
            getCurrency();
        }

        function getCurrency() {
            // for (var i = 0; i < element.length; i++) {
            if ('select option:selected') {
                var request = new XMLHttpRequest();
                request.open('GET', 'https://www.nbrb.by/API/ExRates/Rates?Periodicity=0', false);
                request.send();
                // request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
                 currency = JSON.parse(request.responseText);
                // console.log(currency);
                //   если условие верно исполни функцию
                showcurrency();
            }
        }

        function showcurrency() {
            if (USD.selected) {
                var usd = currency[4];
                result.innerHTML = "Валюта: " + usd.Cur_Name + ", стоимость " + usd.Cur_OfficialRate;
                // console.log(currency[4])
            }
            else if (EUR.selected) {
                var eur = currency[5];
                result.innerHTML = "Валюта: " + eur.Cur_Name + ", стоимость " + eur.Cur_OfficialRate;;
                // console.log(currency[5])
            }
            else if (RUB.selected) {
                var rub = currency[16];
                result.innerHTML = "Валюта: " + rub.Cur_Name + ", стоимость " + rub.Cur_OfficialRate;;
                // console.log(currency[16])
            }
        }
