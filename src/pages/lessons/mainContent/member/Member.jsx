import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Transfer, Switch } from "antd";

export default function Member() {
    const [oneWay, setOneWay] = useState(false);
    // const [members, setMembers] = useState([]);
    let getMembers = useSelector((state) => state.members.originMembers);
    // [{key: '1', title: 'content2', description: 'description of content2', chosen: true}
    // {key: '2', title: 'content3', description: 'description of content3', chosen: true}]

    const [targetKeys, setTargetKeys] = useState([]);
    getMembers = getMembers.map(
        (originMember) =>
            (originMember = {
                ...originMember,
                title: `${originMember.name}`,
                key: `${originMember.id}`,
            })
    );
    const targetMember = useSelector(
        (state) => state.lessons.originLessons[0].members
    );
    const newTargetKeys = getMembers.map((originMember) => originMember.id);
    useEffect(() => {
        // const newTargetKeys = [];
        // const newmembers = [];
        // for (let i = 0; i < 15; i++) {
        //     const data = {
        //         key: i.toString(),
        //         title: `content${i + 1}`,
        //         description: `description of content${i + 1}`,
        //         chosen: Math.random() * 2 > 1,
        //     };
        //     if (data.chosen) {
        //         newTargetKeys.push(data.key);
        //     }
        //     newmembers.push(data);
        // }
        // setTargetKeys(newTargetKeys);
        // setMembers(newmembers);
    }, []);

    const onChange = (newTargetKeys, direction, moveKeys) => {
        // console.log(newTargetKeys, direction, moveKeys);
        setTargetKeys(newTargetKeys);
    };

    console.log("targetKeys :>> ", targetKeys);

    return (
        <Transfer
            dataSource={getMembers}
            targetKeys={targetKeys}
            onChange={onChange}
            render={(item) => item.title}
            oneWay={oneWay}
            pagination
        />
    );
}
