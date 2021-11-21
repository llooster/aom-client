import axios from "axios";

const ENDPOINT = "http://127.0.0.1:8080";

const getLessonsAPI = () => {
    axios
        .get(`${ENDPOINT}/members`)
        .then((res) => {
            console.log(res);
            // this.setState({
            //     lessons: res.data.result.lessons,
            // });
        })
        .catch((err) => {
            console.log("ERR : ", err);
        });
};
const postLessonsAPI = () => {
    axios
        .post(`${ENDPOINT}/lessons`, {
            name: undefined,
        })
        .then((res) => {
            console.log("res.data.result.lessons :>> ", res.data);
        })
        .catch((err) => {
            console.log("ERR :>> ", err);
        });
};
export { getLessonsAPI, postLessonsAPI };
// default
