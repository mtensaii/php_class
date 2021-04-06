const ERR_MESSAGE = "Invalid input"
var input1;
var input2;
var input3;
var num1;
var num2;
var num3;
function reset2(){
    $("#ex2-result1").hide();
    $("#ex2-result2").hide();
}

$(document).ready(function () {
    $("#ex2-result1").hide();
    $("#ex2-result2").hide();
    $("#ex1-checkButton").on("click", function () {
        if (initCheck() == 1) {
            return;
        }
        var selCal = $("#ex1-select").val();
        var ex1Result = $("#ex1-result");
        switch (selCal) {
            case "add":
                ex1Result.val(num1 + num2);
                break;

            case "sub":
                ex1Result.val(num1 - num2);
                break;

            case "mult":
                ex1Result.val(num1 * num2);
                break;

            case "divide":
                if (num2 === 0) {
                    ex1Result.val("Divisor can not be 0");
                }
                else {
                    ex1Result.val(num1 / num2);
                }
                break;

            case "mod":
                if (num2 === 0) {
                    ex1Result.val("Divisor can not be 0");
                }
                else {
                    ex1Result.val(num1 % num2);
                }
                break;

            default:
                ex1Result.val("Please select function")
                break;
        }
    });

    $("#ex2-checkButton").click(function () {
        reset2();
        if (initCheck2() == 1) {
            return;
        }
        var ex2Result1 = $("#ex2-result1");
        var ex2Result2 = $("#ex2-result2");
        //solve 
        if (num1 === 0) {
            // ex4Result1.style.display = "inline";
            ex2Result1.show();
            if (num2 === 0) {
                if (num3 === 0) {
                    // ex4Result1.value = "Infinite Solutions";
                    ex2Result1.val("Infinite solutions");
                }
                else {
                    //ex4Result1.value = "Math ERROR";
                    ex2Result1.val("Math ERROR");
                }
            }
            else {
                //ex4Result1.value = (-num3) / num2;
                ex2Result1.val((-num3) / num2);
            }
        }
        else {
            ex2Result1.show();
            var delta = num2 * num2 - 4 * num1 * num3;
            if (delta < 0) {
                ex2Result2.show();
                var tmp1 = "";
                tmp1 += num2 / (2 * num1) + " + ";
                var tmp = (Math.sqrt(Math.abs(delta)) / (2 * num1)).toString();
                tmp1 += "i" + tmp;
                var tmp2 = "";
                tmp2 += num2 / (2 * num1) + " - " + "i" + tmp;
                // ex4Result1.value = tmp1;
                ex2Result1.val(tmp1);
                // ex4Result2.value = tmp2;
                ex2Result2.val(tmp2);
            }
            else if (delta === 0) {
                // ex4Result1.value = (-num2) / (2 * num1);
                ex2Result1.val((-num2) / (2 * num1));
            }
            else {
                ex2Result2.show();
                // ex4Result1.value = (-num2 + Math.sqrt(delta)) / (2 * num1);
                // ex4Result2.value = (-num2 - Math.sqrt(delta)) / (2 * num1);
                ex2Result1.val((-num2 + Math.sqrt(delta)) / (2 * num1));
                ex2Result2.val((-num2 - Math.sqrt(delta)) / (2 * num1));

            }
        }
    });
})

function initCheck() {
    var input1 = $("#ex1-input1").val();
    var input2 = $("#ex1-input2").val();
    num1 = parseFloat(input1);
    num2 = parseFloat(input2);
    let flag = 0;
    if (input1 != num1) {
        $("#ex1-input1").val(ERR_MESSAGE);
        flag = 1;
    }
    if (input2 != num2) {
        $("#ex1-input2").val(ERR_MESSAGE);
        flag = 1;
    }
    if (flag === 1) {
        return 1;
    }
}

function initCheck2() {
    input1 = $("#ex2-input1").val();
    input2 = $("#ex2-input2").val();
    input3 = $("#ex2-input3").val();
    num1 = parseFloat(input1);
    num2 = parseFloat(input2);
    num3 = parseFloat(input3);
    let flag = 0;
    if (input1 != num1) {
        $("#ex2-input1").val(ERR_MESSAGE);
        flag = 1;
    }
    if (input2 != num2) {
        $("#ex2-input2").val(ERR_MESSAGE);
        flag = 1;
    }
    if (input3 != num3) {
        $("#ex2-input3").val(ERR_MESSAGE);
        flag = 1;
    }
    if (flag === 1) {
        return 1;
    }
}


