
function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;
    if (hora >=0 && hora < 12) {
        msg.innerHTML += `<p>Bom Dia!</p>`;
        img.src = 'imagens/pexels-leticia-alvares-1805702-31428993.jpg';
        document.body.style.backgroundColor = '#ffb886';
    }else if(hora < 18){
        msg.innerHTML += `<p>Boa Tarde!</p>`;
        img.src = 'imagens/pexels-brin-silver-2149146469-30562548.jpg'
        document.body.style.backgroundColor = '#60a000'
    }else{
        msg.innerHTML += `<p>Boa Noite!</p>`;
        img.src = 'imagens/pexels-rpnickson-2885320.jpg'
        document.body.style.backgroundColor = '#002a60ff'
    }
}