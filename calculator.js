    
var value1, value2, Result, rcode, isDisplayed;
    
// In order to work with multi-digits number, value1 set to array.
value1 = [];
Result = 0;
rcode = 0;
isDisplayed = false;


let textbox=document.getElementById("tb");

function displayValue(number){
    // append number.toString to vale1 array
    value1.push(number.toString());
    // concat input numbers to string 
    let strNumber = value1.join("");

    console.log("strNumber:" + strNumber);
    return strNumber;
}

function deleteNumber(){
    // Remove 1-digit at time
    value1.splice(-1, 1);
    // Concat input number digits
    let strNumber = value1.join("");
    
    if ( strNumber.length == 0 ){
    return 0;
    } else {
    return strNumber;
    }
}

function AddNumbers(number1, number2){
    // Result = Result + inputValue
    Result = Number(number1) + Number(number2);
    textbox.value = Result;
    // console.log("Result:" + Result);
    rcode = 1;
}

function SubNumbers(number1, number2) {
    // Result = Result + (- 1 * inputValue)
    let tempResult1 = Number(number1);
    console.log("b Result: "+ Result);
    console.log("input 2: " + number2);

    // Result = Number(number1) - Number(number2);
    
    
    
    // Case when first input in
    if (number1.length == 0) {
    
    } else {
    Result = Result + (Number(number2) * -1);
    console.log("a Result: " + Result);
    }

    // // Case when first value(Result) in
    // if (number2.length == 0) {
    //   // tempResult2 set to 1 before it gets its own value
    //   tempResult2 = 1;
    //   Result = tempResult1 * tempResult2;
    //   // Case when second value in
    // } else {
    //   tempResult2 = Number(number2);
    //   Result = tempResult1 * tempResult2;
    // }



    textbox.value = Result;
    // console.log("Result:" + Result);
    rcode = 2;
}

function MultNumbers(number1, number2) {
    // Result = Result * inputValue
    let tempResult1 = Number(number1); // result
    let tempResult2 = Number(number2); // input number2 
    
    // Case when result = 0
    if( tempResult1 == 0){
    // return 0        
    Result = tempResult1 * Number(number2);

    // Case when result != 0
    } else {
        // Case when first value(Result) in
        if (number2.length == 0) {
        // tempResult2 set to 1 before it gets its own value
        tempResult2 = 1;
        Result = tempResult1 * tempResult2;
        // Case when second value in
        } else {
        tempResult2 = Number(number2);
        Result = tempResult1 * tempResult2;
        }
    }

    textbox.value = Result;
    rcode = 3;
}

function DivNumbers(number1, number2) {
    // Result = Result / inputValue
    if (Number(number2) == 0){
    textbox.value = "Can't divide by zero";
    } else {
    let inputNum1 = Number(number1);

    Result = Number(number1) / Number(number2);
    textbox.value = Result;
    }
    // console.log("Result:" + Result);
    rcode = 4;
}

function inputValue(bcode){
    // concat input numbers to string 
    let strNumber = value1.join("");

    switch (bcode) {
    case 1:
        textbox.value = displayValue(1);
        break;
    case 2:
        textbox.value = displayValue(2);
        break;
    case 3:
        textbox.value = displayValue(3);
        break;
    case 4:
        textbox.value = displayValue(4);
        break;
    case 5:
        textbox.value = displayValue(5);
        break;
    case 6:
        textbox.value = displayValue(6);
        break;
    case 7:
        textbox.value = displayValue(7);
        break;
    case 8:
        textbox.value = displayValue(8);
        break;
    case 9:
        textbox.value = displayValue(9);
        break;
    case 0:
        textbox.value = displayValue(0);
        break;
    case 55:
        // Plus
        textbox.value = "";
        AddNumbers(Result, strNumber);
        // reset input array
        value1 = [];
        break;
    case 66:
        // Minus
        textbox.value = "";
        SubNumbers(Result, strNumber);
        // reset input array
        value1 = [];
        break;
    case 77:
        // Multiply
        textbox.value = "";
        MultNumbers(Result, strNumber);
        // reset input number
        value1 = [];
        break;
    case 88:
        // Divide
        textbox.value = "";
        DivNumbers(Result, strNumber);
        // reset input number
        value1 = [];
        break;
    case 99:
        // dot
        textbox.value = 99;
        break;
    case 11:
        // delete
        textbox.value = deleteNumber();
        break;
    case 22:
        // Display Result
        displayResult(rcode)
        // reset input number
        value1 = [];
        break;
    case 33:
        // AC
        // Reset result/variables to 0
        value1 = [];
        Result = 0;
        textbox.value = 0;
        break;
    }
}

function displayResult(rcode){
  // concat input numbers to string   
  let strNumber = value1.join("");

  switch (rcode) {
    case 1:
      AddNumbers(Result, strNumber);
      break;
    case 2:
      SubNumbers(Result, strNumber);
      break;
    case 3:
      MultNumbers(Result, strNumber);
      break;
    case 4:
      DivNumbers(Result, strNumber);
      break;
  }
}
