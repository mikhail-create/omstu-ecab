import axios from "axios";
import { handleResponse } from "../_helpers/handle-response";

export const userService = {
    getAll,
    getUser
}

function getAll() {
    const token = localStorage.getItem('token');
    console.log(`Bearer ${token}`);
    
    const requestOptions = { method: 'GET', headers: { Authorization: `Bearer ${token}` } };
    return fetch('http://localhost:5000/users', requestOptions)
        .then(handleResponse)
        .then(user => {
            return user;
        })
}

function getUser() {
    const token = localStorage.getItem('token');
    const _id = localStorage.getItem('_id');
    const requestOptions = { method: 'GET', headers: { Authorization: `Bearer ${token}` } };
    return fetch(`http://localhost:5000/users/${_id}`, requestOptions)
        .then(handleResponse)
        .then(user => {
            return user;
        })
}