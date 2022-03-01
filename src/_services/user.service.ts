import axios from "axios";
import { handleResponse } from "../_helpers/handle-response";

export const userService = {
    getAll,
}

function getAll() {
    const token = localStorage.getItem('token');
    const requestOptions = { method: 'GET', headers: { Authorization: `Bearer ${token}` } };
    return fetch('http://localhost:5000/users', requestOptions)
        .then(handleResponse)
        .catch(function (error) {
            console.log(error);
            return error
        });
}