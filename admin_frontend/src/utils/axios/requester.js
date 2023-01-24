import axios from "axios";
import { userToken } from "../userStorage_helper";

const config = {
    baseURL: "http://127.0.0.1:8000/api/admin",
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
};

if (userToken.hasToken()) {
    config.headers.Authorization = `Bearer ${userToken.getToken()}`;
    config.headers.Accept = 'application/json';
}

const instance = axios.create(config);

export default instance
