import axios from "axios";

const ENDPOINT = "http://127.0.0.1:8080";

const getPaymnetAPI = () => {
    axios
        .get(`${ENDPOINT}/lessons/2/paymnets?date=2021-08-02`)
        .then((res) => {
            console.log(res.data.result.paymnet);
        })
        .catch((err) => {
            console.log("ERR : ", err);
        });
};

export { getPaymnetAPI };
