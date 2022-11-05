function obtenerListaUsuarios(){
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLs'));

    if(listaUsuarios == null) {
        listaUsuarios =
    [
        ['1', 'Danna', 'Monestel', 'danna2', 'rocio2', '1987-10-12', '1'],
        ['2', 'Luis', 'Santamaria', 'luis1', 'lalo2', '1993-04-17', '2']
    ]
    }
    return listaUsuarios;
}
function validarCredenciales(pUsuario, pPassword){
    var listaUsuarios = obtenerListaUsuarios();
    varbAcceso = false;

    for (var i=0; i < listaUsuarios.length; i++){
        if(pUsuario == listaUsuarios[i][3] && pPassword == listaUsuarios[i][4]){
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1] + ' ' + listaUsuarios[i][2]);
            sessionStorage.setItem('rolUsuarioActivo', listaUsuarios[i][6]);
        }

    }
    return bAcceso;
}