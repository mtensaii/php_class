const DOMbtn1 = document.getElementById('btn1');
const DOMbtn2 = document.getElementById('btn2');
const DOMbtn3 = document.getElementById('btn3');
const DOMbtn4 = document.getElementById('btn4');
var letter = /[a-zA-Z]/;



/**** EVEN OR ODD *********************************************/

DOMbtn1.addEventListener("click", () => {
    var input = parseInt(document.getElementById('input1').value);
    var DOMresult = document.getElementById('result1');

    if (!isNaN(input)) {
        if ((input % 2) === 0) {
            DOMresult.value = "This is an even number";
        }
        else {
            DOMresult.value = "This is an odd number";
        }
    }
    else {
        DOMresult.value = "Invalid input!";
    }
});



/**** STUDENT RANK ********************************************/

DOMbtn2.addEventListener("click", () => {
    var input = parseFloat(document.getElementById('input2').value);
    var DOMresult = document.getElementById('result2');
    var result;

    if (input >= 0 && input <= 10) {
        if (input < 5) {
            result = "Weak";
        }
        else if (input >= 5 && input < 7) {
            result = "Average";
        }
        else if (input >= 7 && input < 9) {
            result = "Good";
        }
        else {
            result = "Exellent";
        }
        DOMresult.value = `${result} student`;
    }
    else {
        DOMresult.value = `Invalid input!`;
    }
});



/**** TIME CALCULATOR *****************************************/

DOMbtn3.addEventListener("click", () => {
    var DOMinput = document.getElementById('input3');
    var unitLength = 1;
    var unitTime = 1;
    var road = parseFloat(DOMinput.value);
    var DOMresult = document.getElementById('result3');
    var result = 0;

    switch (document.getElementById('unit-length').value) {
        case "m":
            unitLength = 1;
            break;

        case "km":
            unitLength = 1000;
            break;
    }

    switch (document.getElementById('unit-time').value) {
        case "second":
            unitTime = 1;
            break;

        case "minute":
            unitTime = 60;
            break;

        case "hour":
            unitTime = 3600;
            break;
    }

    road *= unitLength;
    if (!isNaN(road)) {
        function timeCalc(s, time) {
            console.log(`${road} - ${result}`);
            if (road > 0) {
                if (road >= s) {
                    road -= s;
                    result += (s * time);
                }
                else {
                    result += (road * time);
                    road -= road;
                }
            }
        }

        console.log(`---------------------`);
        timeCalc(3000, 1);
        timeCalc(2000, 2);
        timeCalc(1000, 3);
        timeCalc(Infinity, 5);
        console.log(`${road} - ${result}`);
        result /= unitTime;

        DOMresult.value = result;
    }
    else {
        DOMresult.value = "Invalid input!";
    }

});



/**** GRADE CONVERTOR *****************************************/

DOMbtn4.addEventListener("click", () => {
    var DOMinput = document.getElementById('input4');
    var input = DOMinput.value;
    var DOMresult = document.getElementById('result4');
    var result;

    if (input.match(letter)) {
        input = DOMinput.value = input.toUpperCase();
        switch (input) {
            case "A":
                result = 4;
                break;

            case "B":
                result = 3;
                break;

            case "C":
                result = 2;
                break;

            case "D":
                result = 1;
                break;

            default:
                result = "Out-schooled";
                break;
        }
        DOMresult.value = result;
    }
    else {
        DOMresult.value = "Invalid input!";
    }

});
