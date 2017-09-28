$("#button").on("click", function() {
    $.ajax({
        url: 'https://www.nbrb.by/API/ExRates/Rates?Periodicity=0',
        cache: false,
        success: function (currency) {
            // по клику выводи в res выводи полый объект 
            // создаем переменную, которая будет хранить контент
            var currency_content = ''; // пустая строка
            for (var i = 0; i < currency.length; i++) {
                var per = currency[i];
                // на каждой итерации цикла мы добавляем данные к переменной контента в виде строки
                currency_content += per.Cur_Name + " - " + per.Cur_OfficialRate + " " + "бел.руб." +"<br />"; // получается одна длинная строка
            }
            // после завршения формирования контента помещаем его в элемент
            $('#res').html(currency_content);
        }
    });
});


$(function () {
    $("#datepicker").datepicker({
        dateFormat: "yy-mm-dd",
        onSelect: function(strDate){
            var curId = $('#select').val();
            var url = "https://www.nbrb.by/API/ExRates/Rates/" + curId + "?onDate=" + strDate + "&Periodicity=0&ParamMode=1"
            // if ('option:selected') {
            $.ajax({
                url: url,
                cache: false,
                success: function (data) {
                    var currency = data.Cur_Name + " - " + data.Cur_OfficialRate + " " + "бел.руб. на дату :" + data.Date + "<br />"; // получается одна длинная строка
                    // после завршения формирования контента помещаем его в элемент
                    $('#result').html(currency);
                }
            });
        }
    });
});

// // 1 июля 2016 года: http://www.nbrb.by/API/ExRates/Rates?onDate=2016-7-1&Periodicity=1

// http://www.nbrb.by/API/ExRates/Rates/Dynamics/190?startDate=2016-6-1&endDate=2016-6-30
