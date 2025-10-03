let a = prompt("Digite seu nome: ");
document.getElementById("nomew").innerHTML = a;

function mudacor(){
    document.body.style.backgroundColor = "red";
}

function somar(){
    let valor1, valor2, resultado;

    valor1 = parseInt(document.getElementById("valor1").value);
    valor2 = parseInt(document.getElementById("valor2").value);

    if (isNaN(valor1) || isNaN(valor2)){
        alert("Preencha os valores ${valor1}");
    } else { 
        resultado = valor1 + valor2;
        document.getElementById("result").innerHTML = resultado;
    }
}