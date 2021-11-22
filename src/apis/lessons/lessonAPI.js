import axios from "axios";

const ENDPOINT = "http://127.0.0.1:8080";

const getLessonsAPI = () => {
    return axios
        .get(`${ENDPOINT}/lessons`)
        .then((res) => {
            console.log(res.data.result.lessons);
            // this.setState({
            //     lessons: res.data.result.lessons,
            // });
            return res;
        })
        .catch((err) => {
            console.log("ERR : ", err);
            return err;
        });
};
const postLessonsAPI = (name, day, time) => {
    axios
        .post(`${ENDPOINT}/lessons`, {
            name: name,
            day: day,
            time: time,
        })
        .then((res) => {
            console.log("res.data.result.lessons :>> ", res.data);
        })
        .catch((err) => {
            console.log("ERR :>> ", err);
        });
};

const getLessonsIdAPI = () => {
    axios
        .get(`${ENDPOINT}/lessons/6`)
        .then((res) => {
            console.log(res.data.result);
            // this.setState({
            //     lessons: res.data.result.lessons,
            // });
        })
        .catch((err) => {
            console.log("ERR : ", err);
        });
};

const deleteLessonAPI = (id) => {
    axios
        .delete(`${ENDPOINT}/lessons/${id}`)
        .then((res) => {
            console.log(res.data.result.lessons);
            // this.setState({
            //     lessons: res.data.result.lessons,
            // });
        })
        .catch((err) => {
            console.log("ERR : ", err);
        });
};

export { getLessonsAPI, postLessonsAPI, getLessonsIdAPI, deleteLessonAPI };
// default
