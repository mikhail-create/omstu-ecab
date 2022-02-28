import axios from "axios";

export const userService = {
    getUsers
}

function getUsers () {
    const token = localStorage.getItem('token');
    axios.get(
        'http://localhost:5000/users',
        { headers: { Authorization: `Bearer ${token}` } },
    )
    .then(function (response) {
        return response.data
    })
    .catch(function (error) {
        console.log(error);
        return error
    });
}