import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Table, Switch } from "antd";

const AMainContent = ({ value }) => {
    const [fixedTop, setFixedTop] = useState(false);
    const [originAttendances, setLessons] = useState(
        useSelector((state) => state.attendance.originAttendances)
    );
    const [Att, setAtt] = useState("결석");
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
                key: `${index}`,
                render: () => <a onClick={clickAtt}>{Att}</a>,
            };
        });
    // console.log("AttData :>> ", AttData);
    const clickAtt = (e) => {
        // console.log("e :>> ", e);
        // let newAtt = "";
        // if (Att === "결석") {
        //     newAtt = "출석";
        // } else {
        //     newAtt = "결석";
        // }
        // setAtt(() => {
        //     return newAtt;
        // });
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
