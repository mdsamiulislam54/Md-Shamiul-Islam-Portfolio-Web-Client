import axios from "axios";
const url = process.env.BASE_URL || "http://localhost:8000/api/v1"

const httpClient = axios.create({
    baseURL: url,
    withCredentials: true
})

export default httpClient