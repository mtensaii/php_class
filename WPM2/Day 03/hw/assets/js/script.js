var tmp = "";
var tmpString = "";

function reset1() {
    $("#ex1-errorMessage").hide();
    $("#ex1-result1").hide();
    $("#ex1-result").hide();
}

$(document).ready(function () {
    reset1();
    $("#ex1-checkButton").on("click", function () {
        // alert();
        reset1();
        
        var ex1Input = $("#ex1-input").val();
        var num = parseInt(ex1Input);
        if (ex1Input =="") {
            $("#ex1-errorMessage").html("Không được bỏ trống");
            $("#ex1-errorMessage").show();
            return;
        }
        
        if (ex1Input != num) {
            $("#ex1-errorMessage").html("Vui lòng nhập số nguyên");
            $("#ex1-errorMessage").show();
        }
        else {
            if (num > 100 || num < 1) {
                $("#ex1-errorMessage").html("Vui lòng nhập số nguyên dương thuộc [1-100]!!");
                $("#ex1-errorMessage").show();
            }
            else {
                tmp = "";
                tmpString = "";
                for (let i = 0; i < num +1; i++) {
                    if (i%5 ==0 && i%2== 0) {
                        tmp = String(i);
                        tmpString += tmp + ", ";
                    }
                }
                $("#ex1-result1").html("Các số chia hết cho 2 và 5 trong khoảng [0," + num +"] là: ");
                $("#ex1-result2").html(tmpString);
                $("#ex1-result1").show();
                $("#ex1-result2").show();
            }
        }

    });
})