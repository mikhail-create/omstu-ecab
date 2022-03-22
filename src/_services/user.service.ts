import axios from "axios";
import { handleResponse } from "../_helpers/handle-response";

export const userService = {
    getAll,
}

function getAll() {
    const access = localStorage.getItem('access');
    const requestOptions = { method: 'GET', headers: { Authorization: `Bearer ${access}` } };
    return fetch('http://localhost:5000/users', requestOptions)
        .then(handleResponse)
        .then(user => {
            return user;
        })
}