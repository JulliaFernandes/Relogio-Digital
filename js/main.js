//cria uma variavel do tipo const que vai pegar o atributo da tag span e ID
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dataToday = new Date();
    let hora = dataToday.getHours();
    let min = dataToday.getMinutes();
    let seg = dataToday.getSeconds();

    if(hora < 10){
        hora = '0' + hora;
    }
    if(min < 10){
        min = '0' + min;
    }
    if(seg < 10){
        seg = '0' + seg;
    }

    horas.textContent = hora; /*text content muda o texto*/
    minutos.textContent = min;
    segundos.textContent = seg;
})