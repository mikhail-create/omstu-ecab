import axios, { AxiosResponse } from "axios";
import { RecordBookData } from "../_models/recordbook-model";

export const recordbooksServise = {
    getUserRecordBook
}

async function getUserRecordBook(email: string): Promise<AxiosResponse<RecordBookData>> {
    const url = `http://localhost:5000/recordbooks/${email}`
    let response = await axios.get(url)
    return response
}