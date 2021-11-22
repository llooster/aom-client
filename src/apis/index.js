import axios from "axios";

const ENDPOINT = "http://127.0.0.1:8080";

export const getAPIs = (payload) => {
    let path = payload.path;
    let params = payload.params;
    return axios.get(`${ENDPOINT}${path}`, { params: params })
        .then((res) => {
            return res.data.result;
        })
        .catch((err) => {
            return err;
        });
}