import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_BASE_URL 

const httpClient = axios.create({
    baseURL: url,
    withCredentials: true
})

export default httpClient