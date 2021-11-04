import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Transfer, Switch } from "antd";

export default function Member({ name }) {
    const [oneWay, setOneWay] = useState(false);
    const [targetKeys, setTargetKeys] = useState([]);
    let allMembers = useSelector((state) => state.members.originMembers);
    // let includedKeys = name.map((members) => members.id);
    console.log("name :>> ", name);
    let [targetMembers, setTargetMembers] = useState("");
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

    const newTargetKeys = allMembers.map((originMember) => originMember.id);
    console.log("newTargetKeys :>> ", newTargetKeys);

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
