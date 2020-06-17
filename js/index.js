//Declarar variables para vincular objetos o formulario
const usuario = document.getElementById('user');
const password = document.getElementById('pass');
const formulario = document.getElementById('formLogin');

//Generando eventos
formulario.addEventListener('submit', login);

//funciones a ejecutar
function login(e){
    e.preventDefault();
    console.log('Se ejecuta evento de form');
    let usuarioVal = usuario.value;
    let passwordVal = password.value;

    if(usuarioVal == '' || passwordVal =='' ){
        return;
    }

    console.log('el valor para user es:' + usuarioVal);
    console.log('el valor para password es:' + passwordVal);

}