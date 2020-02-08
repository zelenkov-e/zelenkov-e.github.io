var but_one = document.getElementById("one");
var but_two = document.getElementById("two");
var but_three = document.getElementById("three");
var input1 = document.getElementById('emailfield1');
var input2 = document.getElementById('emailfield2');
var input3 = document.getElementById('emailfield3');
var el_form1 = document.getElementById('button_active1');
var el_form2 = document.getElementById('button_active2');
var el_form3 = document.getElementById('button_active3');
var regTxt = /^[а-яА-ЯёЁa-zA-Z]+$/;
var regNum = /^[0-9]+$/;


// ф-ция покажи форму 
function showForm(button, el_form) {
    button.onclick = function() {
        el_form.style.display = 'inline';
    }
}
showForm(but_one, el_form1);


// ф-ция проверь форму
var testForm = function(input, button, el_form,reg) {
    return function() {
        if (
        reg.test(input.value))
            {
            alert("ok!move on");
            el_form.style.display = 'none';
            button.disabled = false;
            sessionStorage.setItem(input.getAttribute('id'), input.value);
        }
        else {
            alert("error! incorrect data");
        }
        return input;
    }
}
input1.addEventListener('change', testForm(input1, but_two, el_form1,regTxt));
showForm(but_two, el_form2);
input2.addEventListener('change', testForm(input2, but_three, el_form2,regTxt));
showForm(but_three, el_form3);
input3.addEventListener('change', testForm(input3, but_three, el_form3,regNum));
