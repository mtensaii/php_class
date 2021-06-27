const button1 = document.getElementById('ex1-checkButton');
const ERR_MESSAGE = "Invalid Input";
var ex1Result = document.getElementById('ex1-result');
function reset1() {
    ex1Result.value = null;
}

button1.addEventListener("click", () => {
    var ex1Input1 = document.getElementById('ex1-input1').value;
    var ex1Input2 = document.getElementById('ex1-input2').value;
    var ex1ShowInput1 = document.getElementById('ex1-input1');
    var ex1ShowInput2 = document.getElementById('ex1-input2');
    var num1 = parseFloat(ex1Input1);
    var num2 = parseFloat(ex1Input2);

    //check Valid
    if (num1 != ex1Input1) {
        ex1ShowInput1.value = ERR_MESSAGE;
        reset1();
    }
    if (num2 != ex1Input2) {
        ex1ShowInput2.value = ERR_MESSAGE;
        reset1();
    }

    //solve
    if (num1 == ex1Input1 && num2 == ex1Input2) {
        var option = document.getElementById('ex1-select').value;
        // alert(option);
        switch (option) {
            case 'add':
                ex1Result.value = num1 + num2;
                break;
            case 'sub':
                ex1Result.value = num1 - num2;
                break;
            case 'mult':
                ex1Result.value = num1 * num2;
                break;
            case 'divide':
                if (num2 === 0) {
                    ex1ShowInput2.value = ERR_MESSAGE;
                    reset1();
                }
                else {
                    ex1Result.value = num1 / num2;
                }
                break;
            case 'mod':
                if (num2 === 0) {
                    ex1ShowInput2.value = ERR_MESSAGE;
                    reset1();
                }
                else {
                    ex1Result.value = num1 % num2;
                }
                break;
            default:
                break;
        }
    }
});


//ex2
const button2 = document.getElementById('ex2-checkButton');
var ex2Result = document.getElementById('ex2-result');
function reset2() {
    ex2Result.value = null;
}

function leapYear(check) {
    if (check % 4 === 0) {
        if (check % 100 === 0) {
            if (check % 400 === 0) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }
}

button2.addEventListener("click", () => {
    var ex2Input1 = document.getElementById('ex2-input1').value;
    var ex2Input2 = document.getElementById('ex2-input2').value;
    var ex2ShowInput1 = document.getElementById('ex2-input1');
    var ex2ShowInput2 = document.getElementById('ex2-input2');
    num1 = parseInt(ex2Input1);
    num2 = parseInt(ex2Input2);

    //check valid
    if (num1 != ex2Input1) {
        ex2ShowInput1.value = ERR_MESSAGE;
        reset2();
    }
    if (num2 != ex2Input2) {
        ex2ShowInput2.value = ERR_MESSAGE;
        reset2();
    }

    //sovle
    if (num1 == ex2Input1 && num2 == ex2Input2) {
        // alert();
        switch (num1) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                ex2Result.value = "31 days";
                break;

            case 4:
            case 6:
            case 9:
            case 11:
                ex2Result.value = "30 days";
                break;

            case 2:
                if (leapYear(num2)) {
                    ex2Result.value = "29 days";
                }
                else {
                    ex2Result.value = "28 days"
                }
                break;

            default:
                ex2Result.value = "Invalid Month."
                break;
        }
    }
});

//ex3
const button3 = document.getElementById('ex3-checkButton');
var ex3Result1 = document.getElementById('ex3-result1');
var ex3Result2 = document.getElementById('ex3-result2');
function reset3() {
    ex3Result1.value = null;
    ex3Result2.value = null;
}

button3.addEventListener("click", () => {
    var ex3Input1 = document.getElementById('ex3-input1').value;
    var ex3Input2 = document.getElementById('ex3-input2').value;
    //alert();
    //checkValid
    var ex3ShowInput1 = document.getElementById('ex3-input1');
    var ex3ShowInput2 = document.getElementById('ex3-input2');
    num1 = parseFloat(ex3Input1);
    num2 = parseFloat(ex3Input2);

    //check valid
    if (num1 != ex3Input1 || num1 <= 0) {
        ex3ShowInput1.value = ERR_MESSAGE;
        reset3();
    }
    if (num2 != ex3Input2 || num2 <= 0) {
        ex3ShowInput2.value = ERR_MESSAGE;
        reset3();
    }

    //solve

    if (num1 == ex3Input1 && num2 == ex3Input2 && num1 > 0 && num2 > 0) {
        ex3Result1.value = (num1 + num2) * 2;
        ex3Result2.value = num1 * num2;
    }
});


//ex4
const button4 = document.getElementById('ex4-checkButton');
var ex4Result1 = document.getElementById('ex4-result1');
var ex4Result2 = document.getElementById('ex4-result2');
ex4Result1.style.display = "none";
ex4Result2.style.display = "none";

function reset4() {
    ex4Result1.style.display = "none";
    ex4Result2.style.display = "none";
}

button4.addEventListener("click", () => {
    // alert();

    //solve
    var ex4Input1 = document.getElementById('ex4-input1').value;
    var ex4Input2 = document.getElementById('ex4-input2').value;
    var ex4Input3 = document.getElementById('ex4-input3').value;

    //checkValid
    var ex4ShowInput1 = document.getElementById('ex4-input1');
    var ex4ShowInput2 = document.getElementById('ex4-input2');
    var ex4ShowInput3 = document.getElementById('ex4-input3');
    num1 = parseFloat(ex4Input1);
    num2 = parseFloat(ex4Input2);
    var num3 = parseFloat(ex4Input3);

    reset4();

    if (num1 != ex4Input1) {
        // alert();
        ex4ShowInput1.value = ERR_MESSAGE;
        reset4();
        return;
    }


    if (num2 != ex4Input2) {
        ex4ShowInput2.value = ERR_MESSAGE;
        reset4();
        return;
    }

    if (num3 != ex4Input3) {
        ex4ShowInput3.value = ERR_MESSAGE;
        reset4();
        return;
    }

    //solve 
    if (num1 === 0) {
        ex4Result1.style.display = "inline";
        if (num2 === 0) {
            if (num3 === 0) {
                ex4Result1.value = "Infinite Solutions";
            }
            else {
                ex4Result1.value = "Math ERROR";
            }
        }
        else {
            ex4Result1.value = (-num3) / num2;
        }
    }
    else {
        ex4Result1.style.display = "inline";
        var delta = num2 * num2 - 4 * num1 * num3;
        if (delta < 0) {
            ex4Result2.style.display = "inline";
            var tmp1 = "";
            tmp1 += num2 / (2 * num1) + " + ";
            var tmp = (Math.sqrt(Math.abs(delta)) / (2 * num1)).toString();
            tmp1 += "i" + tmp;
            var tmp2 = "";
            tmp2 += num2 / (2 * num1) + " - " + "i" + tmp;
            ex4Result1.value = tmp1;
            ex4Result2.value = tmp2;
        }
        else if (delta === 0) {
            ex4Result1.value = (-num2) / (2 * num1);
        }
        else {
            ex4Result2.style.display = "inline";
            ex4Result1.value = (-num2 + Math.sqrt(delta)) / (2 * num1);
            ex4Result2.value = (-num2 - Math.sqrt(delta)) / (2 * num1);
        }
    }
});

//ex5
const button5 = document.getElementById('ex5-checkButton');
var ex5Result = document.getElementById('ex5-result');
function reset5() {
    ex5Result.value = null;
}

function isPrime(num) {
    for (let i = 2; i < Math.sqrt(num); i++)
        if (num % i === 0) return false;
    return true;
}

button5.addEventListener("click", () => {
    //alert();
    var ex5Input = document.getElementById('ex5-input').value;
    var ex5ShowInput = document.getElementById('ex5-input');
    num1 = parseInt(ex5Input);

    reset5();
    //checkValid
    if (num1 != ex5Input) {
        ex5ShowInput.value = ERR_MESSAGE;
        return;
    }
    if (num1 > 100 || num1 < 0) {
        reset5();
        alert("Please input again");
        return;
    }

    //solve
    if (isPrime(num1)) {
        ex5Result.value = "Prime number";
    }
    else {
        ex5Result.value = "Not a prime number";
    }

});

//ex6

const button6 = document.getElementById('ex6-checkButton');
var ex6Result = document.getElementById('ex6-result');
function reset6() {
    ex6Result.value = null;
}

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * (factorial(n - 1));
    }
}

button6.addEventListener("click", () => {
    //alert();
    var ex6Input = document.getElementById('ex6-input').value;
    var ex6ShowInput = document.getElementById('ex6-input');
    num1 = parseInt(ex6Input);

    reset6();
    //checkValid
    if (num1 != ex6Input) {
        ex6ShowInput.value = ERR_MESSAGE;
        return;
    }
    if (num1 > 50 || num1 < 0) {
        reset6();
        alert("Please enter again");
        return;
    }

    //solve
    ex6Result.value = factorial(num1);

});


//ex7
var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];

var n = 1;
var x = 0;

function AddRow() {

    var AddRown = document.getElementById('show');
    var NewRow = AddRown.insertRow(n);


    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);

    cel1.innerHTML = list1[list1.length - 1];
    cel2.innerHTML = list2[list2.length - 1];
    cel3.innerHTML = list3[list3.length - 1];
    cel4.innerHTML = list4[list4.length - 1];

    n++;
}
var flag = {
    read: false,
    travel: false,
    music: false
};
function onChange(event) {


    console.log(event.target.name, event.target.value)
    switch (event.target.name) {
        case 'name':
            list1.push(event.target.value);
            break;
        case 'phone':
            list2.push(event.target.value);
            break;
        case 'gender':
            list3.push(event.target.value);
            break;
        case 'read':
            flag.read = !flag.read;
            flag.read && list4.push(event.target.value);
            break;
        case 'travel':
            flag.travel = !flag.travel
            flag.travel && list4.push(event.target.value);
            break;
        case 'music':
            flag.music = !flag.music;
            list4.push(event.target.value);
            break;
    }
}

const clearButton = document.getElementById('clearButton');

clearButton.addEventListener("click", ()=> {
    location.reload();
});