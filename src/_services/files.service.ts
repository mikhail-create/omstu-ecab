import axios from "axios";

export const fileService = {
    getUserFiles
}

async function getUserFiles(email: string) {
    const url = `http://localhost:5000/files/download/${email}`
    let response = await axios.get(url)
    return response.data
}