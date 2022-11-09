
console.log("script hit")
"use strict";
let button = document.querySelector(".btn");
let result = document.querySelector(".result");
let resultStatus = document.querySelector(".resultStatus");
let heightInput = document.querySelector(".h");
let weightInput = document.querySelector(".w");

    function bmi(){
    event.preventDefault();
    let height = Number(heightInput.value);
    let weight = Number(weightInput.value);
    let bmi = weight / (((height / 100) * height) / 100);
    let bmio = Math.round(bmi);
    if (bmio <= 18.5) {
        result.innerHTML = "Your BMI is " + bmio;
        resultStatus.innerHTML = "Sorry you are underweight ❌";
    }
    else if (bmio >= 18.6 && bmio <= 24.9) {
        result.innerHTML = "Your BMI is " + bmio;
        resultStatus.innerHTML = "Congrats your weight is perfect ✅";
    }
    else if (bmio >= 25 && bmio <= 29.9) {
        result.innerHTML = "Your BMI is " + bmio;
        resultStatus.innerHTML = "Sorry you are overweight ❌";
    }
    else if (bmio >= 30 && bmio <= 39.9) {
        result.innerHTML = "Your BMI is " + bmio;
        resultStatus.innerHTML = "Sorry you are obese ❌";
    }
    else if (bmio >= 40 && bmio >= 39.9) {
        result.innerHTML = "Your BMI is " + bmio;
        resultStatus.innerHTML = "Sorry you are extremely obese ❌";
    }


}
function myFunction()
{   
    document.getElementById("result").innerHTML = "";
    document.getElementById("resultStatus").innerHTML = "";
}

