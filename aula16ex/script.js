let num = document.getElementById('num');
let tab = document.getElementById('tab');
let res = document.getElementById('res');
let valores = [];

function isNumero(n) {
    if (Number(n) >=1 && Number(n) <=100) {
        return true;
    }else{
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado`;
        tab.appendChild(item);
    } else {
        alert('Valor inválido ou já encontrado na lista');
    }
    num.value = ``;
    num.focus();
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    }else{
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for (let pos in valores) { 
            soma += valores[pos];
            if (valores[pos] > maior) {
                maior = valores[pos];
            }
            if (valores[pos] < menor) {
                menor = valores[pos];
            }
        }
        media = soma/valores.length;

        res.innerHTML = ``;
        res.innerHTML = `<p>Ao todo, temos ${valores.length} números cadastrados.</p><p>O maior valor informado foi ${maior}.</p><p>O menor valor informado foi ${menor}.</p><p>Somando todos os números, temos ${soma}.</p><p>A média dos números informados é ${media}.</p>`;
    }
}