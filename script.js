var resultado = document.getElementById("resultado");
var borrar = document.getElementById("borrar");
var operadorSum = document.getElementById("operadorSum");
var igual = document.getElementById("igual");
var localStorag = document.getElementById("localStorag");
var numeroA = 0;
var numeroB = 0;
var simbolo;
var newOp = true;
var calculated = false;

var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var n3 = document.getElementById("n3");
var n4 = document.getElementById("n4");
var n5 = document.getElementById("n5");
var n6 = document.getElementById("n6");
var n7 = document.getElementById("n7");
var n8 = document.getElementById("n8");
var n9 = document.getElementById("n9");
var n0 = document.getElementById("n0");
var coma = document.getElementById("coma");
var del = document.getElementById("del");

n1.addEventListener("click", () => escribir(1))
n2.addEventListener("click", () => escribir(2))
n3.addEventListener("click", () => escribir(3))
n4.addEventListener("click", () => escribir(4))
n5.addEventListener("click", () => escribir(5))
n6.addEventListener("click", () => escribir(6))
n7.addEventListener("click", () => escribir(7))
n8.addEventListener("click", () => escribir(8))
n9.addEventListener("click", () => escribir(9))
n0.addEventListener("click", () => escribir(0))
coma.addEventListener("click", () => escribir("."))
localStorag.addEventListener("click", function localStorag() {
    resultado.value = localStorage.getItem("ultimoRes");
});


function escribir(a) {
    if (a === "." && resultado.value.includes('.')) {
        return
    }
    if (simbolo != null && newOp)
        resultado.value = ''
    resultado.value = resultado.value + a
    newOp = false;
};

del.addEventListener("click", function del() {
    resultado.value = resultado.value.slice(0, -1)
});

borrar.addEventListener("click", function borrar() {
    resultado.value = ""
    numeroA = null
    numeroB = null
    simbolo = null
});
function operador(simb) {
    if (!numeroA)
        numeroA = parseFloat(resultado.value)
    else if (!calculated || newOp) {
        numeroB = parseFloat(resultado.value)
    }
    if (numeroB && numeroA && (!calculated || newOp)) {
        numeroA = realizarOperacion(numeroA, numeroB, simbolo);
    }
    numeroB = null
    simbolo = simb;
    newOp = true;
    calculated = false
};
operadorSum.addEventListener("click", function operadorSum() {
    operador("+")
});
operadorRes.addEventListener("click", function operadorRes() {
    operador("-")
});
operadorMult.addEventListener("click", function operadorMult() {
    operador("*")
});
operadorDiv.addEventListener("click", function operadorDiv() {
    operador("/")
});

igual.addEventListener("click", function igual() {
    if (!numeroB) {
        numeroB = parseFloat(resultado.value);
    }
    numeroA = realizarOperacion(numeroA, numeroB, simbolo)
    resultado.value = numeroA;
    calculated = true;
    newOp = false;
    localStorage.setItem("ultimoRes", numeroA)
});

function realizarOperacion(numeroA, numeroB, simbolo) {
    if (simbolo == "+") {
        return numeroA + numeroB;
    }
    else if (simbolo == "-") {
        return numeroA - numeroB;
    }
    else if (simbolo == "*") {
        return numeroA * numeroB;
    }
    else if (simbolo == "/") {
        return numeroA / numeroB;
    } else {
        return parseFloat(resultado.value);
    }

}


