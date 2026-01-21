function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length ==0 ||fano.value > ano) {
        window.alert('[ERRO] Verifique o Ano de Nascimento');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = ``;
        var img = document.createElement('img');
        img.setAttribute('id','foto');
        if (fsex[0].checked) {
            genero= `Homem`
            document.body.style.backgroundColor = '#00a6ffff'
            if (idade >=0 && idade<10) {
                img.setAttribute('src','imagens/bebe.jpg')
            }else if (idade < 21) {
                img.setAttribute('src','imagens/adolescente.jpg')
            }else if (idade<50) {
                img.setAttribute('src','imagens/adulto.jpg')
            }else{
                img.setAttribute('src','imagens/idoso.jpg')
            }
        }else if (fsex[1].checked) {
            genero = `Mulher`
            document.body.style.backgroundColor = '#ff72f8ff'
            if (idade >=0 && idade<10) {
                img.setAttribute('src','imagens/bebe-f.jpg')
            }else if (idade < 21) {
                img.setAttribute('src','imagens/adolescente-f.jpg')
            }else if (idade<50) {
                img.setAttribute('src','imagens/adulta.jpg')
            }else{
                img.setAttribute('src','imagens/idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img);
    }
}