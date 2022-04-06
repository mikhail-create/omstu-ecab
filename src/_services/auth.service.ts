import axios from "axios";
import { handleResponse } from "../_helpers/handle-response";

export const authService = {
    signIn,
    logout,
    signUp,
    refresh
}

function logout() {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('email');
    window.location.replace('http://localhost:3000/login');
}

function signUp(name: string, email: string, password: string) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
    };

    return fetch('http://localhost:5000/auth/registration', requestOptions)
        .then(handleResponse)
        .then(user => {
            window.location.replace('http://localhost:3000/news');
            return user;
        });
}

function signIn(email: string, password: string) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    }

    return fetch('http://localhost:5000/auth/login', requestOptions)
        .then(handleResponse)
        .then(user => {
            window.location.replace('http://localhost:3000/news');
            return user;
        });
}

function refresh(refresh: any) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${refresh}` },
        body: JSON.stringify({ refresh })
    }

    return fetch('http://localhost:5000/auth/refresh', requestOptions)
        .then(handleResponse)
        .then(token => {
            return token;
        });
}