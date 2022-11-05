document.querySelector('#btnIngresar').addEventListener('click', iniciarSesion);

function iniciarSesion(){
    var sUsuario = '';
    var sPassword = '';
    var bAcceso = false;
    
    sUsuario = document.querySelector('#usuario').value; 
    sPassword = document.querySelector('#password').value; 

    bAcceso = validarCredenciales(sUsuario, sPassword);
    
    if(bAcceso == true){
        ingresar();
    }
}

function ingresar(){
    var rol = sessionStorage.getItem('rolUsuarioActivo');
    switch(rol){
        case '1':
            window.location.href = 'admin.html';
            break;
        case '2':
            window.location.href = '';
            break;
            default:
                window.location.href = 'index.html';
                break;
    }
}