// const inputBtns = document.querySelectorAll(".inputBtn");
// const inputBtnsArray = Array.from(inputBtns);

let num1 = 0;
let num2 = 0;
let operator = "";

const displayScreen = document.querySelector("#displayScreen")
let displayBufferArray = [];
let outputBufferArray = [];

const ac = document.querySelector("#ac");
const back  = document.querySelector("#back");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const addBtn = document.querySelector("#addBtn");
const subBtn = document.querySelector("#subBtn");
const productBtn = document.querySelector("#productBtn");
const divideBtn = document.querySelector("#divideBtn");
const decimalBtn = document.querySelector("#decimalBtn");
const resultOperatorBtn = document.querySelector("#resultOperatorBtn");

ac.addEventListener("click", () => {
    displayScreen.textContent = "";
    displayBufferArray = [];
    outputBufferArray = [];
})
back.addEventListener("click", () => {
    displayBufferArray.pop();
    outputBufferArray.pop()
    displayScreen.textContent = displayBufferArray.join("");
})
one.addEventListener("click", () => {
    displayBufferArray.push("1");
    outputBufferArray.push("1");
    displayScreen.textContent = displayBufferArray.join("");
})
two.addEventListener("click", () => {
    displayBufferArray.push("2");
    outputBufferArray.push("2");
    displayScreen.textContent = displayBufferArray.join("");
})
three.addEventListener("click", () => {
    displayBufferArray.push("3");
    outputBufferArray.push("3");
    displayScreen.textContent = displayBufferArray.join("");
})
four.addEventListener("click", () => {
    displayBufferArray.push("4");
    outputBufferArray.push("4");
    displayScreen.textContent = displayBufferArray.join("");
})
five.addEventListener("click", () => {
    displayBufferArray.push("5");
    outputBufferArray.push("5");
    displayScreen.textContent = displayBufferArray.join("");
})
six.addEventListener("click", () => {
    displayBufferArray.push("6");
    outputBufferArray.push("6");
    displayScreen.textContent = displayBufferArray.join("");
})
seven.addEventListener("click", () => {
    displayBufferArray.push("7");
    outputBufferArray.push("7");
    displayScreen.textContent = displayBufferArray.join("");
})
eight.addEventListener("click", () => {
    displayBufferArray.push("8");
    outputBufferArray.push("8");
    displayScreen.textContent = displayBufferArray.join("");
})
nine.addEventListener("click", () => {
    displayBufferArray.push("9");
    outputBufferArray.push("9");
    displayScreen.textContent = displayBufferArray.join("");
})
zero.addEventListener("click", () => {
    displayBufferArray.push("0");
    outputBufferArray.push("0");
    displayScreen.textContent = displayBufferArray.join("");
})
addBtn.addEventListener("click", () => {
    operator = "add";
    num1 = parseInt(outputBufferArray.join(""));
    displayBufferArray.push("+");
    displayScreen.textContent = displayBufferArray.join("");
    outputBufferArray = [];
})
subBtn.addEventListener("click", () => {
    operator = "sub";
    num1 = parseInt(outputBufferArray.join(""));
    displayBufferArray.push("-");
    displayScreen.textContent = displayBufferArray.join("");
    outputBufferArray = [];
})
productBtn.addEventListener("click", () => {
    operator = "product";
    num1 = parseInt(outputBufferArray.join(""));
    displayBufferArray.push("*");
    displayScreen.textContent = displayBufferArray.join("");
    outputBufferArray = [];
})
divideBtn.addEventListener("click", () => {
    operator = "division";
    num1 = parseInt(outputBufferArray.join(""));
    displayBufferArray.push("/");
    displayScreen.textContent = displayBufferArray.join("");
    outputBufferArray = [];
})
decimalBtn.addEventListener("click", () => {
    displayBufferArray.push(".");
    outputBufferArray.push(".");
    displayScreen.textContent = displayBufferArray.join("");
})
resultOperatorBtn.addEventListener("click", () => {
    num2 = parseInt(outputBufferArray.join(""));
    displayBufferArray = [];
    outputBufferArray = [];
    displayScreen.textContent = operate(num1,num2,operator);
    num1 = operate(num1,num2,operator);
    displayBufferArray.push(num1);
    outputBufferArray.push(num1);
})

let operate = (num1,num2,operator) => {
    switch(operator){
        case "add":
            return add(num1,num2);
            break;
        case "sub":
            return sub(num1,num2);
            break;
        case "product":
            return product(num1,num2);
            break;
        case "division":
            return division(num1,num2);
            break;
    }
}


const add = (num1, num2) => {
    return num1 + num2;
}
const sub = (num1,num2) => {
    return num1 - num2;
}
const product = (num1, num2) => {
    return num1 * num2;
}
const division = (num1, num2) => {
    if(num2 == 0)
        return false;
    else    
        return (num1/num2);
}