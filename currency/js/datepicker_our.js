$("#button").on("click", function() {
    $.ajax({
        url: 'https://www.nbrb.by/API/ExRates/Rates?Periodicity=0',
        cache: false,
        success: function showCurrency(currency) {
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


$(function() {
    $("#datepicker").datepicker();
    $('.ui-datepicker-calendar>tbody td').on("click", function(e) {
        //33-38??
        var self = $(this);
        var year = self.data('year');
        var month = self.data('month');
        var number = $(self).first().text();
        var date = year + "-" + month + "-" + number;
        var curId = $('#select').val();
        var url = "https://www.nbrb.by/API/ExRates/Rates/" + curId + "?onDate=" + date + "&Periodicity=0&ParamMode=1"
        // if ('option:selected') {
        $.ajax({
            url: url,
            cache: false,
            success: function showCurrency(data) {
                var currency = data.Cur_Name + " - " + data.Cur_OfficialRate + " " + "бел.руб. на дату :" + data.Date + "<br />"; // получается одна длинная строка
                console.log(currency);
                // после завршения формирования контента помещаем его в элемент
                $('#result').html(currency);
            }
        })

    });

});

// // 1 июля 2016 года: http://www.nbrb.by/API/ExRates/Rates?onDate=2016-7-1&Periodicity=1
