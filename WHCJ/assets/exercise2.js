const button2 = document.getElementById('ex2-checkButton');
const ERR_MESSAGE = "Invalid Input";
var result = document.getElementById('ex2-result');
function reset() {
    result.value = null;
}
button2.addEventListener("click", () => {
    var input1 = document.getElementById('ex2-input1').value;
    var input2 = document.getElementById('ex2-input2').value;
    var showInput1 = document.getElementById('ex2-input1');
    var showInput2 = document.getElementById('ex2-input2');
    var num1 = parseInt(input1);
    var num2 = parseInt(input2);
    alert(num1);

    //check valid
    if (num1 != input1) {
        showInput1.value = ERR_MESSAGE;
        reset();
    }
    if (num2 != input2) {
        showInput2.value = ERR_MESSAGE;
        reset();
    }
});