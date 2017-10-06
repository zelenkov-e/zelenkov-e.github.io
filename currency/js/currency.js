//------------------------------курс на сегодня-----------------------------------------------------------------------//

$("#button").on("click", function() {
    $.ajax({
        url: 'https://www.nbrb.by/API/ExRates/Rates?Periodicity=0',
        cache: false,
        success: function(currency) {
            var currency_content = ''; // пустая строка
            for (var i = 0; i < currency.length; i++) {
                var per = currency[i];
                currency_content += per.Cur_Name + " - " + per.Cur_OfficialRate + " " + "бел.руб." + "<br />"; // получается одна длинная строка
            }
            $('#res').html(currency_content);
        }
    });
});
//------------------------------курс на заданную дату----------------------------------------------------------------------//
$(function() {
    $("#datepicker").datepicker({
        dateFormat: "yy-mm-dd",
        onSelect: function(strDate) {
            var curId = $('#select').val();
            var url = "https://www.nbrb.by/API/ExRates/Rates/" + curId + "?onDate=" + strDate + "&Periodicity=0&ParamMode=1";
            $.ajax({
                url: url,
                cache: false,
                success: function(data) {
                    var currency = data.Cur_Name + " - " + data.Cur_OfficialRate + " " + "бел.руб. на дату :" + data.Date + "<br />"; // получается одна длинная строка
                    $('#result').html(currency);
                }
            });
        }
    });
});
//--------------------------------курс за выбранный период-----------------------------------------------------------//
$(document).ready(function() {
    var startDate, endDate;
    $(".datepickerFrom").datepicker({
        dateFormat: "yy-mm-dd",
        onSelect: function(date) {
            startDate = date;
        }
    });
    $(".datepickerTo").datepicker({
        dateFormat: "yy-mm-dd",
        onSelect: function(date) {
            endDate = date;
        }
    });
    $("#button_range").on("click", function() {
        var currency = $('#select_range').val();
        var url_range = "https://www.nbrb.by/API/ExRates/Rates/Dynamics/" + currency + "?startDate=" + startDate + "&endDate=" + endDate;
        // console.log(url_range);
        var rates = [];
        var dates = [];
        $.ajax({
            url: url_range,
            cache: false,
            success: function(data) {
                console.log(data);
                $.each(data, function(index, item) {
                    rates.push(item.Cur_OfficialRate);
                    dates.push(item.Date)
                });
                //------------------------------------------chart.js--------------------------------------------------------------              
                var speedCanvas = $("#diagram");
                Chart.defaults.global.defaultFontFamily = "Lato";
                Chart.defaults.global.defaultFontSize = 18;
                var speedData = {
                    labels: dates,
                    datasets: [{
                        label: "Currency",
                        data: rates,
                        fontColor: 'white',
                        borderColor: 'white',
                      
                    }]
                };

                var chartOptions = {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            boxWidth: 80,
                            fontColor: 'white',
                            borderColor: 'white',
                        }
                    }
                };

                var lineChart = new Chart(speedCanvas, {
                    type: 'line',
                    data: speedData,
                    options: chartOptions
                    // fontColor: 'white',
                    // borderColor: 'white',
                });

                //------------------------------------------d3--------------------------------------------------------------              
            }
        });

    });
});
