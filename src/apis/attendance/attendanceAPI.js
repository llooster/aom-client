import axios from "axios";

const ENDPOINT = "http://127.0.0.1:8080";
const getAttendanceAPI = () => {
    axios
        .get(`${ENDPOINT}/lessons/6/attendances?date=2021-08-02`)
        .then((res) => {
            console.log(res.data.result);
        })
        .catch((err) => {
            console.log("ERR : ", err);
        });
};

export { getAttendanceAPI };
// default
