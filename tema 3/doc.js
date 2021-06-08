 const n1 = prompt("insert first number");
const operator = prompt("insert operation +-*/");
const n2 = prompt("insert secoundNumber");
if (operator === "+") {
    alert(parseFloat(n1) + parseFloat(n2));
}else if (operator === "-"){
    alert (parseFloat(n1)- parseFloat(n2));
}else if(operator === "*"){
    alert(parseFloat(n1)* parseFloat(n2));
}else if (operator ==="/"){
    alert(parseFloat(n1)/ parseFloat(n2));
}else if (n1|| n2 === ''){
    alert("insert a number")
}

    
