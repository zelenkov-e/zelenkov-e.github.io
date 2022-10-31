
//вывод в новом документе
var input3 = document.getElementById('emailfield3');
// var but_three = document.getElementById("three");
var but_next = document.getElementById("next");
var regNum = /^[0-9]+$/;

function setData() {
    if (regNum.test(input3.value)) {
        window.location = 'result.html';
    }
}

//  but_three.addEventListener('click', setData);
but_next.addEventListener('click', setData);
