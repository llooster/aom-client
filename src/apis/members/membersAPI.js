import axios from "axios";

const ENDPOINT = "http://127.0.0.1:8080";

// const getMembersAPI = () => {
//     axios
//         .get(`${ENDPOINT}/members`)
//         .then((res) => {
//             console.log(res.data.result.members);
//         })
//         .catch((err) => {
//             console.log("ERR : ", err);
//         });
// };

const putMembersAPI = (id, name, age) => {
    axios
        .put(`${ENDPOINT}/members/${id}`, {
            name: name,
            age: age,
        })
        .then((res) => {
            console.log("res.data.result.members :>> ", res.data);
        })
        .catch((err) => {
            console.log("ERR :>> ", err);
        });
};

const postMembersAPI = (name, age) => {
    axios
        .post(`${ENDPOINT}/members`, {
            name: name,
            age: age,
        })
        .then((res) => {
            console.log("res.data.result.members :>> ", res.data);
        })
        .catch((err) => {
            console.log("ERR :>> ", err);
        });
};

const getMemberOneAPI = (id) => {
    axios
        .get(`${ENDPOINT}/members/${id}`)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log("ERR : ", err);
        });
};
export { putMembersAPI, postMembersAPI, getMemberOneAPI };
// export           >>> 다른 파일에서 사용 가능하도록
// export default   >>> 파일에 하나만 export할 때
