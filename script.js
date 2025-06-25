let num1 = 0;
let num2 = 0;
let operator = "";

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