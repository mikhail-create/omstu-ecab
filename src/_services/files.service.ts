import axios from "axios";

export const fileService = {
    getUserFiles
}

async function getUserFiles() {
    const email = localStorage.getItem('email')
    const url = `http://localhost:5000/files/download/${email}`
    let response = await axios.get(url)
    return response
}