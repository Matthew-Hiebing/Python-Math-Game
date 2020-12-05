const axios = require('axios').default;
const newProblemBtn = document.querySelector('#start');
const checkBox = document.querySelector('#splash_screen_preference_check_box');

const randomFunc = [
    multiplication,
    division,
    addition,
    subtraction,
]

checkBox.addEventListener('change', function() {
    if (this.checked) {
        axios.get('/PLACEHOLDER')
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
        console.log("Checkbox is checked");
    } else {
        console.log("Checkbox is not checked");
    }
});


newProblemBtn.addEventListener('click', () => {
    let result = randomFunc[Math.floor(Math.random() * randomFunc.length)]();
    document.querySelector('#user_input').addEventListener('input', evt => {
        if (result.toString() === evt.target.value) {
            document.getElementById('result_check').innerText = ('Correct!')
        } else {
            document.getElementById('result_check').innerText = ('Incorrect')
        }
    });
})

function multiplication() {
    let num1 = Math.floor(Math.random() * 13);
    let num2 = Math.floor(Math.random() * 13);
    let problemResult = num1 * num2;
    console.log(num1, '*', num2, '=', problemResult);
    document.getElementById('math_problem').innerHTML =
    (`${num1} x ${num2}`);
    return problemResult
}

function division() {
    let num1 = Math.floor(Math.random() * 13);
    let num2 = Math.floor(Math.random() * 12) + 1;
    let problemResult = (num1 * num2) / num2;
    console.log(num1 * num2, '/', num2, '=', problemResult);
    document.getElementById('math_problem').innerHTML =
    (`${num1 * num2} / ${num2}`);
    return problemResult
}

function addition() {
    let num1 = Math.floor(Math.random() * 13);
    let num2 = Math.floor(Math.random() * 13);
    let problemResult = num1 + num2;
    console.log(num1,'+',num2,'=',problemResult);
    document.getElementById('math_problem').innerHTML =
    (`${num1} + ${num2}`);
    return problemResult
}

function subtraction() {
    let num1 = Math.floor(Math.random() * 13);
    let num2 = Math.floor(Math.random() * 13);
    let numList = [num1, num2];
    numList.sort(function (a, b) {
        return a - b
    });
    let problemResult = numList[1] - numList[0];
    console.log(numList[1], '-', numList[0], '=', problemResult);
    document.getElementById('math_problem').innerHTML =
    (`${numList[1]} - ${numList[0]}`);
    return problemResult
}

