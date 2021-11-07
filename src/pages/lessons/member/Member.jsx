import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Transfer } from "antd";

export default function Member() {
    const [oneWay, setOneWay] = useState(false);
    const [targetKeys, setTargetKeys] = useState([]);
    let allMembers = useSelector((state) => state.members.originMembers);
    // let includedKeys = name.map((members) => members.id);

    // let [targetMembers, setTargetMembers] = useState("");
    allMembers = allMembers.map(
        (originMember) =>
            (originMember = {
                ...originMember,
                title: `${originMember.name}`,
                key: `${originMember.id}`,
            })
    );

    // // console.log("name :>> ", name);
    // [{key: '1', title: 'content2', description: 'description of content2', chosen: true}
    // {key: '2', title: 'content3', description: 'description of content3', chosen: true}]

    // const newTargetKeys = allMembers.map((originMember) => originMember.id);

    const onChange = (newTargetKeys, direction, moveKeys) => {
        setTargetKeys(newTargetKeys);
    };

    return (
        <Transfer
            dataSource={allMembers}
            targetKeys={targetKeys}
            onChange={onChange}
            render={(item) => item.title}
            oneWay={oneWay}
            pagination
        />
    );
}
