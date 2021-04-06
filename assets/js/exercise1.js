$(document).ready(fucntion(){
    $("#ex1-checkButton").click(fucntion(){
    });
})

// const button1 = document.getElementById('ex1-checkButton');
// const ERR_MESSAGE = "Invalid Input";
// var ex1Result = document.getElementById('ex1-result');
// function reset1() {
//     ex1Result.value = null;
// }

// button1.addEventListener("click", () => {
//     var ex1Input1 = document.getElementById('ex1-input1').value;
//     var ex1Input2 = document.getElementById('ex1-input2').value;
//     var ex1ShowInput1 = document.getElementById('ex1-input1');
//     var ex1ShowInput2 = document.getElementById('ex1-input2');
//     var num1 = parseFloat(ex1Input1);
//     var num2 = parseFloat(ex1Input2);

//     //check Valid
//     if (num1 != ex1Input1) {
//         ex1ShowInput1.value = ERR_MESSAGE;
//         reset1();
//     }
//     if (num2 != ex1Input2) {
//         ex1ShowInput2.value = ERR_MESSAGE;
//         reset1();
//     }

//     //solve
//     if (num1 == ex1Input1 && num2 == ex1Input2) {
//         var option = document.getElementById('ex1-select').value;
//         // alert(option);
//         switch (option) {
//             case 'add':
//                 ex1Result.value = num1 + num2;
//                 break;
//             case 'sub':
//                 ex1Result.value = num1 - num2;
//                 break;
//             case 'mult':
//                 ex1Result.value = num1 * num2;
//                 break;
//             case 'divide':
//                 if (num2 === 0) {
//                     ex1ShowInput2.value = ERR_MESSAGE;
//                     reset1();
//                 }
//                 else {
//                     ex1Result.value = num1 / num2;
//                 }
//                 break;
//             case 'mod':
//                 if (num2 === 0) {
//                     ex1ShowInput2.value = ERR_MESSAGE;
//                     reset1();
//                 }
//                 else {
//                     ex1Result.value = num1 % num2;
//                 }
//                 break;
//             default:
//                 break;
//         }
//     }
// });





// //ex4
// const button4 = document.getElementById('ex4-checkButton');
// var ex4Result1 = document.getElementById('ex4-result1');
// var ex4Result2 = document.getElementById('ex4-result2');
// ex4Result1.style.display = "none";
// ex4Result2.style.display = "none";

// function reset4() {
//     ex4Result1.style.display = "none";
//     ex4Result2.style.display = "none";
// }

// button4.addEventListener("click", () => {
//     //alert();

//     //solve
//     var ex4Input1 = document.getElementById('ex4-input1').value;
//     var ex4Input2 = document.getElementById('ex4-input2').value;
//     var ex4Input3 = document.getElementById('ex4-input3').value;

//     //checkValid
//     var ex4ShowInput1 = document.getElementById('ex4-input1');
//     var ex4ShowInput2 = document.getElementById('ex4-input2');
//     var ex4ShowInput3 = document.getElementById('ex4-input3');
//     num1 = parseFloat(ex4Input1);
//     num2 = parseFloat(ex4Input2);
//     var num3 = parseFloat(ex4Input3);

//     reset4();

//     if (num1 != ex4Input1) {
//         // alert();
//         ex4ShowInput1.value = ERR_MESSAGE;
//         reset4();
//         return;
//     }


//     if (num2 != ex4Input2) {
//         ex4ShowInput2.value = ERR_MESSAGE;
//         reset4();
//         return;
//     }

//     if (num3 != ex4Input3) {
//         ex4ShowInput3.value = ERR_MESSAGE;
//         reset4();
//         return;
//     }

//     //solve 
//     if (num1 === 0) {
//         ex4Result1.style.display = "inline";
//         if (num2 === 0) {
//             if (num3 === 0) {
//                 ex4Result1.value = "Infinite Solutions";
//             }
//             else {
//                 ex4Result1.value = "Math ERROR";
//             }
//         }
//         else {
//             ex4Result1.value = (-num3) / num2;
//         }
//     }
//     else {
//         ex4Result1.style.display = "inline";
//         var delta = num2 * num2 - 4 * num1 * num3;
//         if (delta < 0) {
//             ex4Result2.style.display = "inline";
//             var tmp1 = "";
//             tmp1 += num2 / (2 * num1) + " + ";
//             var tmp = (Math.sqrt(Math.abs(delta)) / (2 * num1)).toString();
//             tmp1 += "i" + tmp;
//             var tmp2 = "";
//             tmp2 += num2 / (2 * num1) + " - " + "i" + tmp;
//             ex4Result1.value = tmp1;
//             ex4Result2.value = tmp2;
//         }
//         else if (delta === 0) {
//             ex4Result1.value = (-num2) / (2 * num1);
//         }
//         else {
//             ex4Result2.style.display = "inline";
//             ex4Result1.value = (-num2 + Math.sqrt(delta)) / (2 * num1);
//             ex4Result2.value = (-num2 - Math.sqrt(delta)) / (2 * num1);
//         }
//     }
// });



