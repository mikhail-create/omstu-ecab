import axios from "axios";

export const authService = {
    login,
    logout
}

function logout() {
    localStorage.removeItem('token');
    window.location.replace('http://localhost:3000/login');
}

function login(email: string, password: string) {
    axios.post('http://localhost:5000/auth/login', {
        email: email,
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