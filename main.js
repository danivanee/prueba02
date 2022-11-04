const usuario = document.getElementById('usuario')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        usuario: usuario.value,
        password: password.value
    }

    console.log(data);
})