function add() {
    document.getElementById("result").innerHTML=
        parseFloat(document.getElementById("num1").value)
            + parseFloat(document.getElementById("num2").value);
}

function sub() {
    document.getElementById("result").innerHTML=
        parseFloat(document.getElementById("num1").value)
        - parseFloat(document.getElementById("num2").value);
}

function mul() {
    document.getElementById("result").innerHTML=
        parseFloat(document.getElementById("num1").value)
        * parseFloat(document.getElementById("num2").value);
}
function div() {
    document.getElementById("result").innerHTML=
        parseFloat(document.getElementById("num1").value) / parseFloat(document.getElementById("num2").value);

    if (parseFloat(document.getElementById("num2").value) === 0) {
        document.getElementById("result").innerHTML = "Invalid Operation";
    }
}
