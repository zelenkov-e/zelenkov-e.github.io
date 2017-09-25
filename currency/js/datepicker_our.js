// можно ли использовать ajax для в selectmenu и для datapicera
// подставляя нужный url
// getCurrency

// используй ajax для selectmenu
$("#button").on("click", function() {

    $.ajax({
        url: 'https://www.nbrb.by/API/ExRates/Rates?Periodicity=0',
        cache: false,
        success: function(html) {
            for(var i = 0; i<html.length;){
            $('#res').html("Валюта :" + html[i].Cur_Name+ " "+ html[i].Cur_ID );
            i++;
            console.log(html);
            }
        }
    });
});


$(function() {
    $("#datepicker").datepicker();

    $('table.ui-datepicker-calendar>tbody td').on("click", function() {
        var self = $(this);
        var year = self.data('year');
        var month = self.data('month');
        var number = $(self).first().text();
        var date = year + "-" + month + "-" + number;
        var url = "https://www.nbrb.by/API/ExRates/Rates?onDate=" + date + "&Periodicity=0"

        // console.log(url);


        // используй ajax для datapicera
        $.ajax({
            url: url,
            cache: false,
            success: function(html) {
                $('#result').html("Валюта :" + html[0].Cur_Name+ " "+ html[0].Cur_ID + " " +html[0].Date );
                // console.log(html);
            }
        });
    });
});
// function  showCurrencyData(){
//      if (USD.selected) {
//         var usd = currency[4];
//         result.innerHTML = "Валюта: " + usd.Cur_Name + ", стоимость " + usd.Cur_OfficialRate;
//         // console.log(currency[4])
//     }
// }

// // 1 июля 2016 года: http://www.nbrb.by/API/ExRates/Rates?onDate=2016-7-1&Periodicity=1
