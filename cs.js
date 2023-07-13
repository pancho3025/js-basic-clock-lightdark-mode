const boton = document.querySelector('.btn');
const body = document.body;
const tiempo = document.querySelector('.tiempo');
const fecha = document.querySelector('.fecha');

const horal= document.querySelector('.hora');
const minuto= document.querySelector('.minuto');
const segundo = document.querySelector('.segundo');

boton.addEventListener('click',(e)=>{
    if(!body.classList.contains('dark')){
        body.classList.add('dark')
        boton.innerHTML = 'Light Mode'
    }else{
        body.classList.remove('dark')
        boton.innerHTML = 'Dark Mode'
    }
})



function añadirCero(n){
    if(n.toString().length < 2) return "0".concat(n)
    return n;
};
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

function actualizarHora(){
    const date = new Date();
    const hora=añadirCero(date.getHours())
    const minutos=añadirCero(date.getMinutes())
    const segundos=añadirCero(date.getSeconds())
    tiempo.innerHTML = `${hora}:${minutos}:${segundos}`
    horal.style.transform = `translateY(40%) rotate(${scale(hora, 0, 12, 0, 360)}deg)`
    minuto.style.transform = `rotate(${scale(minutos, 0, 60, 0, 360)}deg)`
    segundo.style.transform = `rotate(${scale(segundos, 0, 60, 0, 360)}deg)`
};

function actualizarFecha(){
    const date = new Date();
    const dia = date.getDay();
    const fechilla = date.getDate();
    const mes = date.getMonth();
    let dias;
    switch(dia){
        case(0):
            dias ='Domingo';
            break;
        case(1):
            dias ='Lunes';
            break;
        case(2):
            dias ='Martes';
            break;
        case(3):
            dias ='Miercoles';
            break;
        case(4):
            dias ='Jueves';
            break;
        case(5):
            dias ='Viernes';
            break;
        case(6):
            dias ='Sabado';
            break;
    }
    let mess;
    switch(mes){
        case(0):
            mess ='Enero';
            break;
        case(1):
            mess ='Febrero';
            break;
        case(2):
            mess ='Marzo';
            break;
        case(3):
            mess ='Abril';
            break;
        case(4):
            mess ='Mayo';
            break;
        case(5):
            mess ='Junio';
            break;
        case(6):
            mess ='Julio';
            break;
        case(7):
            mess ='Agosto';
            break;
        case(8):
            mess ='Septiembre';
            break;
        case(9):
            mess ='Octubre';
            break;
        case(10):
            mess ='Noviembre';
            break;
        case(11):
            mess ='Diciembre';
            break;
    }
    fecha.innerHTML = `${dias}, ${fechilla} de ${mess}`
};
actualizarHora();
actualizarFecha();
setInterval(actualizarHora,1000);


