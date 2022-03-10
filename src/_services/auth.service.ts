import axios from "axios";
import { handleResponse } from "../_helpers/handle-response";

export const authService = {
    login,
    logout,
    registration
}

function logout() {
    localStorage.removeItem('token');
    window.location.replace('http://localhost:3000/login');
}

// function registration(name: string, email: string, password: string) {
//     axios.post('http://localhost:5000/auth/registration', {
//         name: name,
//         email: email,
//         password: password,
//     })
//         .then(function (response) {
//             console.log(response);
//             localStorage.setItem('token', response.data.token)
//             window.location.replace('http://localhost:3000/users');
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }

function registration(name: string, email: string, password: string) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
    };

    return fetch('http://localhost:5000/auth/registration', requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('token', user.token);
            return user;
        });
}

function login(email: string, password: string) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch('http://localhost:5000/auth/login', requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('token', user.token);
            return user;
        });
}