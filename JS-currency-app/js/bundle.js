/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rate_check_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rate_date_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rate_period_js__ = __webpack_require__(3);




Object(__WEBPACK_IMPORTED_MODULE_0__rate_check_js__["a" /* checkModule */])();
Object(__WEBPACK_IMPORTED_MODULE_1__rate_date_js__["a" /* dateModule */])();
Object(__WEBPACK_IMPORTED_MODULE_2__rate_period_js__["a" /* periodModule */])();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = checkModule;
var submit = document.getElementById('submit');
var element = document.getElementsByName('currency');
var res = document.getElementById('res');
var USD = document.getElementById('USD_check');
var EUR = document.getElementById('EUR_check');
var RUB = document.getElementById('RUB_check');
var currency;

function checkModule(){    
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


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dateModule;
    function dateModule(){    
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


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = periodModule;
function periodModule(){   
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


/***/ })
/******/ ]);