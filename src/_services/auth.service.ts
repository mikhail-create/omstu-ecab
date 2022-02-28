import axios from "axios";

export const authService = {
    login
}

function login(name: string, password: string) {
    axios.post('http://localhost:5000/auth/login', {
        name: name,
        password: password
    })
        .then(function (response) {
           console.log(response);
           localStorage.setItem('token', response.data.token)
           window.location.replace('http://localhost:3000/users');
        })
        .catch(function (error) {
            console.log(error);
        });
}