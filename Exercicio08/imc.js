function calcimc() {
    let nomew = document.getElementById("nome").value.trim();
    let pesow = parseFloat(document.getElementById("peso").value);
    let alturaw = parseFloat(document.getElementById("altura").value);
    let classificacao;

    if (!nomew) {
        alert("Por favor, preencha o campo Nome.");
        return;
    }
    if (isNaN(pesow) || pesow <= 0) {
        alert("Por favor, insira um Peso válido (positivo e maior que zero).");
        return;
    }
    if (isNaN(alturaw) || alturaw <= 0) {
        alert("Por favor, insira uma Altura válida (positiva e maior que zero).");
        return;
    }

    let imc = pesow / (alturaw * alturaw);

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        classificacao = "Obesidade grau 1";
    } else if (imc >= 35 && imc <= 39.9) {
        classificacao = "Obesidade grau 2";
    } else { // imc >= 40
        classificacao = "Obesidade grau 3";
    }

    document.getElementById("result").innerHTML = `${nomew}, seu IMC é <strong>${imc.toFixed(2)}</strong> - ${classificacao}`;

}