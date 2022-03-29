import axios from "axios";
import { handleResponse } from "../_helpers/handle-response";

export const fileService = {
    getUserFiles
}

async function getUserFiles() {
    const email = localStorage.getItem('email')
    const url = `http://localhost:5000/files/download/${email}`
    let response = await axios.get(url)
    return response
}