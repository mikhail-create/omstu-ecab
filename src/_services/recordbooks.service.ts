import axios, { AxiosResponse } from "axios";
import { RecordBookData } from "../_types/recordbook-model";

export const recordbooksServise = {
    getUserRecordBook
}

async function getUserRecordBook(): Promise<AxiosResponse<RecordBookData>> {
    const email = localStorage.getItem('email')
    const url = `http://localhost:5000/recordbooks/${email}`
    let response = await axios.get(url)
    return response
}