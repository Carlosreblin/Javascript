function contar() {
    var ini = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');
    var res = document.getElementById('res');
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados!')
        res.innerHTML = `Impossível contar`
    } else {
        res.innerHTML = 'Contando:  ';
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if (i > f) {
            for(let c =i;c >= f;c-=p){
            res.innerHTML +=`  ${c}  `
        }
        } else {
            for (let c = i; c <= f; c += p) {
                res.innerHTML +=`  ${c}  `;
            }
        }


    }

}