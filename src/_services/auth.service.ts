import axios from "axios";

export const authService = {
    login
}

function login(name: string, password: string) {
    console.log(password);
    axios.post('http://localhost:5000/auth/login', {
        name: name,
        password: password
    })
        .then(function (response) {
            axios.get(
                'http://localhost:5000/users',
                { headers: { Authorization: `Bearer ${response.data.token}` } },
            ).then(function (response) {
                console.log(response.data)
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}