const button1 = document.getElementById('check-button1');
const button2 = document.getElementById('check-button2');
const button3 = document.getElementById('check-button3');
const button4 = document.getElementById('check-button4');
const ERR_MESSAGE = "Invalid Input";

function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}
function isCharacter(c) {
    return (/[A-Z]/).test(c);
}   
// script1 
button1.addEventListener("click", () => {
    var input = document.getElementById('input1').value;
    var result = document.getElementById('result1');
    var tmp = parseInt(input);

    if (tmp == input) {
        if ((tmp % 2) === 0) {
            result.value = "EVEN";
        }
        else {
            result.value = "ODD";
        }
    }
    else {
        result.value = ERR_MESSAGE;
    }
});

// script2 
button2.addEventListener("click", () => {
    var input = document.getElementById('input2').value;
    var result = document.getElementById('result2');
    var tmp = parseInt(input);

    if (tmp == input && (tmp < 11 && tmp > -1)) {
        switch (tmp) {
            case 9, 10:
                result.value = "Excellent";
                break;
            case 7, 8:
                result.value = "Good";
                break;
            case 5, 6:
                result.value = "Average";
                break;
            default:
                result.value = "Weak";
                break;
        }
    }
    else {
        result.value = ERR_MESSAGE;
    }
});


// script3 
button3.addEventListener("click", () => {
    var input = document.getElementById('input3').value;
    var result = document.getElementById('result3');
    var tmp = parseFloat(input);
    var time = 0;
    if (tmp == input && tmp > -1) {
        time += Math.min(tmp, 3000) * 1;
        tmp -= 3000;
        time += Math.min(Math.max(tmp, 0), 2000) * 2;
        tmp -= 2000;
        time += Math.min(Math.max(tmp, 0), 1000) * 3;
        tmp -= 1000;
        time += Math.max(tmp, 0) * 5;
        result.value = time;
    }
    else {
        result.value = ERR_MESSAGE;
    }
});

button4.addEventListener("click", () => {
    var input = document.getElementById('input4').value;
    var result = document.getElementById('result4');

    if (isCharacter(input)) {
        switch (input) {
            case 'A':
                result.value = "4";
                break;
            case 'B':
                result.value = "3";
                break;
            case 'C':
                result.value = "2";
                break;
            case 'D':
                result.value = "1";
                break;
            default:
                result.value = "This student has left the school";
                break;
        }
    }
    else {
        result.value = ERR_MESSAGE;
    }
});

