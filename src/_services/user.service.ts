import { handleResponse } from "../_helpers/handle-response";

export const userService = {
    getAll,
    getUser,
    updateUser
}

function getUser() {
    const access = localStorage.getItem('access');
    const email = localStorage.getItem('email')
    const requestOptions = { method: 'GET', headers: { Authorization: `Bearer ${access}` } };
    return fetch(`http://localhost:5000/users/${email}`, requestOptions)
        .then(handleResponse)
        .then(user => {
            return user;
        })
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

function updateUser(
    email: string,
    name: string,
    group: string,
    fullData: [{
        passportSeries: string,
        passportNumber: string,
        adress: string,
        previousEducation: string,
        previousEducationPlace: string,
        previousEducationYear: string,
        phone: string
    }]
) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email,
            name,
            group,
            fullData
        }
        )
    }
    return fetch(`http://localhost:5000/users/${email}`, requestOptions)
        .then(handleResponse)
        .then(user => {
            return user;
        });
}
