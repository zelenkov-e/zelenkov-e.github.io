    export function dateModule(){    
//------------------------------курс на заданную дату----------------------------------------------------------------------//

$(function () {
    $("#datepicker").datepicker({
        dateFormat: "yy-mm-dd",
        onSelect: function(strDate) {
            var curId = $('#select').val();
            var url = "https://www.nbrb.by/API/ExRates/Rates/" + curId + "?onDate=" + strDate + "&Periodicity=0&ParamMode=1";
            $.ajax({
                url: url,
                cache: false,
                success: function(data) {
                    data.Date = data.Date.substr(0, 10);
                    var currency = data.Cur_Name + " - " + data.Cur_OfficialRate + " " + "бел.руб. на дату :" + data.Date + "<br />"; // получается одна длинная строка
                    $('#result').html(currency);
                }
            });
        }
    });
})


submit_clear_date.onclick = function clearResult() {
        // прячу значение вывода
        result.innerHTML = '';
    }
};
