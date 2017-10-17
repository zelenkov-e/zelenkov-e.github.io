export function periodModule(){   
$(document).ready(function ratePeriod() {
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
        $("#conteiner").addClass("conteiner_newClass");
        var currency = $('#select_range').val();
        var url_range = "https://www.nbrb.by/API/ExRates/Rates/Dynamics/" + currency + "?startDate=" + startDate + "&endDate=" + endDate;
        var rates = [];
        var dates = [];
        $.ajax({
            url: url_range,
            cache: false,
            success: function(data) {
                //  пробеги по всем эл data
                //  idex-запихни в index
                //  в item значение объекта
                $.each(data, function(index, item) {
                    rates.push(item.Cur_OfficialRate);
            // изменяю формат даты
                    item.Date = item.Date.substr(0, 10);
                    dates.push(item.Date)
                });
                //------------------------------------------chart.js-#diagram_bar ------------------------------------------------------------              
                var rateCanvasBar = $("#diagram_bar");
                Chart.defaults.global.defaultFontFamily = 'Open Sans Condensed';
                Chart.defaults.global.defaultFontSize = 12;
                Chart.defaults.global.defaultFontColor = '#DFDFDF';
                var rateDataBar = {
                    labels: dates,
                    datasets: [{
                        label: "rate_bar",
                        data: rates,
                        fontColor: '#FDFFAF',
                        borderColor: '#FDFFAF',
                        backgroundColor: '#FDFFAF',
                    }]
                };
                var chartOptionsBar = {
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
                var Chart_bar = new Chart(rateCanvasBar, {
                    type: 'bar',
                    data: rateDataBar,
                    options: chartOptionsBar
                });
                //------------------------------------------chart.js-#diagram_bar --#diagram_line----------------------------------------------------------                        
                var rateCanvasline = $("#diagram_line");
                Chart.defaults.global.defaultFontFamily = 'Open Sans Condensed';;
                Chart.defaults.global.defaultFontSize = 12;
                Chart.defaults.global.defaultFontColor = '#DFDFDF';
                var rateDataline = {
                    labels: dates,
                    datasets: [{
                        label: "rate_line",
                        data: rates,
                        fontColor: '#FDFFAF',
                        borderColor: '#FDFFAF',
                    }]
                };
                var chartOptionsLine = {
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

                var Chart_line = new Chart(rateCanvasline, {
                    type: 'line',
                    data: rateDataline,
                    options: chartOptionsLine
                });
            }
        });
    });
});
}
