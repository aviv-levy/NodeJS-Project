
let addUser = () => {
    let form = document.getElementById('my-form');

    let { username, name, lastname, email, password, permission } = form.elements;

    let user = {
        username: username.value,
        name: name.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value,
        permission: permission.value
    }
    console.log(user);
    fetch('register', {
        method: 'POST',
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(user)
    })
}