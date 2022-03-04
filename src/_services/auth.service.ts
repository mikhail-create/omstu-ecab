import axios from "axios";

export const authService = {
    login,
    logout,
    registration
}

function logout() {
    localStorage.removeItem('token');
    window.location.replace('http://localhost:3000/login');
}

function registration(name: string, email: string, password: string) {
    axios.post('http://localhost:5000/auth/registration', {
        name: name,
        email: email,
        password: password,
        roles: "ADMIN"
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