import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Table, Switch } from "antd";

const AMainContent = ({ value }) => {
    // props.value => selected lesson's members
    var memberIds = value.map((member) => member.id);
    console.log("memberIds :>> ", memberIds);
    const [fixedTop, setFixedTop] = useState(false);
    //
    const [originAttendances, setLessons] = useState(
        useSelector((state) => state.attendance.originAttendances)
    );
    // Att state
    const [Att, setAtt] = useState("결석");
    // base data => "결석"

    // let [AttData, setAttData] = useState(() => {
    //     return Array(12)
    //         .fill()
    //         .map((each, index) => {
    //             return {
    //                 title: `${index + 1}`,
    //                 dataIndex: `${index}`,
    //                 key: `${index}`,
    //                 render: () => <a onClick={clickAtt}>{Att}</a>,
    //             };
    //         });
    // });

    let AttData = Array(12)
        .fill()
        .map((each, index) => {
            return {
                title: `${index + 1}`,
                dataIndex: `${index}`,
                key: `${index + 1}`,
                render: () => (
                    <a data-month={index + 1} onClick={clickAtt}>
                        {Att}
                    </a>
                ),
            };
        });
    //

    const clickAtt = (e) => {
        // let newAtt = "";
        // if (Att === "결석") {
        //     newAtt = "출석";
        // } else {
        //     newAtt = "결석";
        // }
        // setAtt(() => {
        //     return newAtt;
        // });
        console.log("e.target.dataset.key :>> ", e.target.dataset.key);
        console.log("누구의 몇월달 출석을 클릭했는지 판단부터 :>> ");
    };

    const columns = [
        {
            title: "Full Name",
            width: 100,
            dataIndex: "name",
            key: "name",
            fixed: "left",
        },
        ...AttData,
        {
            title: "Action",
            key: "operation",
            fixed: "right",
            width: 100,
            render: () => <a>All</a>,
        },
    ];

    return (
        <Table
            columns={columns}
            dataSource={value}
            scroll={{ x: "100%" }}
            summary={(pageData) => (
                <Table.Summary fixed={fixedTop ? "top" : "bottom"}>
                    <Table.Summary.Row>
                        <Table.Summary.Cell index={0} colSpan={2}>
                            <Switch
                                checkedChildren="Fixed Top"
                                unCheckedChildren="Fixed Top"
                                checked={fixedTop}
                                onChange={() => {
                                    setFixedTop(!fixedTop);
                                }}
                            />
                        </Table.Summary.Cell>
                    </Table.Summary.Row>
                </Table.Summary>
            )}
            sticky
        />
    );
};
export default AMainContent;
