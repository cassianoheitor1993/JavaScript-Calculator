returnEntered = false;

//KEYS MAPPING
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btn4 = document.querySelector(".btn-4");
const btn5 = document.querySelector(".btn-5");
const btn6 = document.querySelector(".btn-6");
const btn7 = document.querySelector(".btn-7");
const btn8 = document.querySelector(".btn-8");
const btn9 = document.querySelector(".btn-9");
const btn0 = document.querySelector(".btn-0");
const btnplus = document.querySelector(".btn-plus");
const btnminus = document.querySelector(".btn-minus");
const btnmultiply = document.querySelector(".btn-multiply");
const btndivision = document.querySelector(".btn-division");
const btnequals = document.querySelector(".btn-equals");
const btnminusplus = document.querySelector(".btn-minus-plus");
const btndot = document.querySelector(".btn-dot");

//KEYUP EVENT
window.addEventListener(
    "keyup",
    (event) => {
        if (event.defaultPrevented) {
            return;
        }
        switch (event.key) {
            case "1":
                btn1.classList.remove("blue");
                break;
            case "2":
                btn2.classList.remove("blue");
                break;
            case "3":
                btn3.classList.remove("blue");
                break;
            case "4":
                btn4.classList.remove("blue");
                break;
            case "5":
                btn5.classList.remove("blue");
                break;
            case "6":
                btn6.classList.remove("blue");
                break;
            case "7":
                btn7.classList.remove("blue");
                break;
            case "8":
                btn8.classList.remove("blue");
                break;
            case "9":
                btn9.classList.remove("blue");
                break;
            case "0":
                btn0.classList.remove("blue");
                break;
            case ".":
                btndot.classList.remove("blue");
                break;
            case "Backspace":
                break;
            case "+":
                btnplus.classList.remove("blue");
                break;
            case "-":
                btnminus.classList.remove("blue");
                break;
            case "*":
                btnmultiply.classList.remove("blue");
                break;
            case "/":
                btndivision.classList.remove("blue");
                break;
            case "Shift":
                btnminusplus.classList.remove("blue");
                break;
            case "Enter":
                btnequals.classList.remove("blue");
                break;
            default:
                return;
        }
        event.preventDefault();
    },
    true
);

//KEYDOWN EVENT
window.addEventListener(
    "keydown",
    (event) => {
        if (event.defaultPrevented) {
            return;
        }
        if (returnEntered === true) {
            document.getElementById("prompt-operation").innerHTML = 0;
            document.getElementById("prompt-result").innerHTML = "";
            returnEntered = false;
        }
        document.getElementById("alertMessage").innerHTML = "";
        var currentNumber = document.getElementById("prompt-result").textContent;
        switch (event.key) {
            case "1":
                calculated = parseFloat(currentNumber + 1);
                prompt(calculated, "numberInput");
                btn1.classList.add("blue");
                break;
            case "2":
                calculated = parseFloat(currentNumber + 2);
                prompt(calculated, "numberInput");
                btn2.classList.add("blue");
                break;
            case "3":
                calculated = parseFloat(currentNumber + 3);
                prompt(calculated, "numberInput");
                btn3.classList.add("blue");
                break;
            case "4":
                calculated = parseFloat(currentNumber + 4);
                prompt(calculated, "numberInput");
                btn4.classList.add("blue");
                break;
            case "5":
                calculated = parseFloat(currentNumber + 5);
                prompt(calculated, "numberInput");
                btn5.classList.add("blue");
                break;
            case "6":
                calculated = parseFloat(currentNumber + 6);
                prompt(calculated, "numberInput");
                btn6.classList.add("blue");
                break;
            case "7":
                calculated = parseFloat(currentNumber + 7);
                prompt(calculated, "numberInput");
                btn7.classList.add("blue");
                break;
            case "8":
                calculated = parseFloat(currentNumber + 8);
                prompt(calculated, "numberInput");
                btn8.classList.add("blue");
                break;
            case "9":
                calculated = parseFloat(currentNumber + 9);
                prompt(calculated, "numberInput");
                btn9.classList.add("blue");
                break;
            case "0":
                calculated = parseFloat(currentNumber + 0);
                prompt(calculated, "numberInput");
                btn0.classList.add("blue");
                break;
            case ".":
                calculated = parseFloat(currentNumber) + ".";
                prompt(calculated, "numberInput");
                btndot.classList.add("blue");
                break;
            case "Backspace":
                let currentPrompt = currentNumber.length;
                if (currentPrompt < 2) {
                    calculated = 0;
                    document.getElementById("prompt-operation").innerHTML = "0";
                } else {
                    calculated = currentNumber.substring(0, currentPrompt - 1);
                }
                prompt(calculated, "numberInput");
                break;
            case "+":
                document.getElementById("prompt-operation").innerHTML =
                    currentNumber + " +";
                prompt(0);
                btnplus.classList.add("blue");
                break;
            case "-":
                document.getElementById("prompt-operation").innerHTML =
                    currentNumber + " -";
                prompt(0);
                btnminus.classList.add("blue");
                break;
            case "*":
                document.getElementById("prompt-operation").innerHTML =
                    currentNumber + " *";
                prompt(0);
                btnmultiply.classList.add("blue");
                break;
            case "/":
                document.getElementById("prompt-operation").innerHTML =
                    currentNumber + " /";
                prompt(0);
                btndivision.classList.add("blue");
                break;
            case "Shift":
                let currentValue = document.getElementById("prompt-result").textContent;
                document.getElementById("prompt-result").innerHTML =
                    parseFloat(currentValue) * -1;
                btnminusplus.classList.add("blue");
                break;
            case "Enter":
                const currentNumberOpe =
                    document.getElementById("prompt-operation").textContent;
                const currentOperation = currentNumberOpe.substring(
                    currentNumberOpe.length - 1,
                    currentNumberOpe.length
                );
                firstNumber = parseFloat(
                    currentNumberOpe.substring(0, currentNumberOpe.length - 2)
                );
                secondNumber = parseFloat(currentNumber);

                promptCalculation(firstNumber, secondNumber, currentOperation);
                returnEntered = true;
                btnequals.classList.add("blue");
                break;
            default:
                return;
        }
        event.preventDefault();

        /*PROMPT FONT-SIZE SETTINGS*/
        let currentFontSize = window.getComputedStyle(
            document.getElementById("prompt-result")
        ).fontSize;
        var fieldLenght = document.getElementById("prompt-result").textContent;
        lengthPrompt = fieldLenght.length;
        if (lengthPrompt >= 12 && lengthPrompt <= 17) {
            document.getElementById("prompt-result").style.fontSize = "40px";
        } else if (lengthPrompt > 17) {
            document.getElementById("prompt-result").style.fontSize = "30px";
        } else {
            document.getElementById("prompt-result").style.fontSize = "55px";
        }
    },
    true
);

/*DISPLAY THE ENTERED NUMBER FROM KEYBOARD*/
function prompt(promptedValue) {
    document.getElementById("prompt-result").innerHTML = promptedValue;
}

/*DISPLAY THE ENTERED NUMBER FROM MOUSE*/
function promptMouse(clickedButton) {
    if (returnEntered === true) {
        document.getElementById("prompt-operation").innerHTML = 0;
        document.getElementById("prompt-result").innerHTML = "";
        returnEntered = false;
    }
    let currentNumberMouse = document.getElementById("prompt-result").textContent;
    calculatedValue =
        (currentNumberMouse != "0" ? currentNumberMouse : "") +
        (clickedButton != "." ? parseFloat(clickedButton) : clickedButton);
    document.getElementById("prompt-result").innerHTML = calculatedValue;
}

/*START NEW MATH OPERATION BY CLICK*/
function mouseOperation(operation) {
    let currentValue = document.getElementById("prompt-result").textContent;
    let currentResultValue =
        document.getElementById("prompt-operation").textContent != 0 ?
        document.getElementById("prompt-operation").textContent :
        "";
    /*CHECK IS THERE IS AN OPERATION IN THE PROMPT*/
    if (
        currentResultValue.substring(
            currentResultValue.length - 1,
            currentResultValue.length
        ) == "+" ||
        currentResultValue.substring(
            currentResultValue.length - 1,
            currentResultValue.length
        ) == "-" ||
        currentResultValue.substring(
            currentResultValue.length - 1,
            currentResultValue.length
        ) == "*" ||
        currentResultValue.substring(
            currentResultValue.length - 1,
            currentResultValue.length
        ) == "/"
    ) {
        document.getElementById("prompt-operation").innerHTML =
            currentResultValue + " " + currentValue + " " + operation;
        prompt(0);
    } else {
        document.getElementById("prompt-operation").innerHTML =
            currentValue + " " + operation;
        prompt(0);
    }
}

/*MAKE OPOSITE NUMERIC SIGNAL*/
function oppositeSignal() {
    let currentValue = document.getElementById("prompt-result").textContent;
    document.getElementById("prompt-result").innerHTML =
        parseFloat(currentValue) * -1;
}

/*PRESSED ENTER - CALCULATE AND DISPLAY THE PROMPT VALUE CLICKED*/
function clickedEqualsButton() {
    const currentNumber = document.getElementById("prompt-result").textContent;
    const currentNumberOpe =
        document.getElementById("prompt-operation").textContent;
    const currentOperation = currentNumberOpe.substring(
        currentNumberOpe.length - 1,
        currentNumberOpe.length
    );
    firstNumber = parseFloat(
        currentNumberOpe.substring(0, currentNumberOpe.length - 2)
    );
    secondNumber = parseFloat(currentNumber);

    promptCalculation(firstNumber, secondNumber, currentOperation);
    returnEntered = true;
}

/*CALCULATE AND DISPLAY THE PROMPT VALUE*/
function promptCalculation(value1, value2, operation) {
    /*document.getElementById("prompt-operation").innerHTML = " = ";*/

    //var operationsNumber = 0;
    //var mathOpe = "+-*/";
    //var promptCalculations =
    //    document.getElementById("prompt-operation").textContent;

    //for (var i = 0; i < mathOpe.length; i++) {
    //    var mathOperator = "/" + mathOpe[i] + "/g";
    //    operationsNumber += promptCalculations.match(mathOperator).length;
    //}

    //console.log(operationsNumber);

    /*MAKING SINGLE MATH OPERATION*/
    if (operation === "+") {
        value = parseFloat(value1) + parseFloat(value2);
        errorBool = false;
    } else if (operation === "-") {
        value = parseFloat(value1) - parseFloat(value2);
        errorBool = false;
    } else if (operation === "*") {
        value = parseFloat(value1) * parseFloat(value2);
        errorBool = false;
    } else if (operation === "/") {
        value = parseFloat(value1) / parseFloat(value2);
        if (!isFinite(value)) {
            document.getElementById("alertMessage").innerHTML = "Division by zero!";
            errorBool = true;
        }
        errorBool = false;
    } else {
        value = 0;
    }
    if (errorBool === false) {
        document.getElementById("prompt-operation").innerHTML = 0;
        document.getElementById("prompt-result").innerHTML = value;
    } else if (errorBool === true) {
        document.getElementById("prompt-operation").innerHTML = 0;
        document.getElementById("prompt-result").innerHTML = 0;
        document.getElementById("alertMessage").innerHTML = "Division by zero!";
    }
}

/*GET CURRENT TIME DATE */
function getDateTimeJs() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let time = date.getHours() + ":" + date.getMinutes();

    currentDate = `${day}-${month}-${year} ${time}`;
    document.getElementById("footer-copy").innerHTML = "&copy; Cassiano Medeiros";
    document.getElementById("footer-date-time").innerHTML = currentDate;
}