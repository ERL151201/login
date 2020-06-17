//Declarar variables para vincular objetos o formulario
const usuario = document.getElementById('user');
const password = document.getElementById('pass');
const formulario = document.getElementById('formLogin');

//Generando eventos
formulario.addEventListener('submit', login);

//funciones a ejecutar
function login(e){
    e.preventDefault();
    
    let usuarioVal = usuario.value;
    let passwordVal = password.value;

    if(usuarioVal == '' || passwordVal =='' ){
        console.log ('Verifica tus campos')
        creaMensaje('Verifica tus campos', 'danger');
        return;
    }

  if(localStorage.getItem('usuario')){
      let objeto = JSON.parse(localStorage.getItem('usuario'));

      if(usuarioVal == objeto.user && passwordVal == objeto.pass){
          creaMensaje('Login Correcto', 'success');
      }else{
          creaMensaje('Usuario Incorrecto', 'danger');
      }
    }else {
        creaMensaje('No hay registros', 'danger');
    }

}