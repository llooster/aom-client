import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Table, Switch } from "antd";

const AMainContent = ({ value }) => {
    const [fixedTop, setFixedTop] = useState(false);
    console.log(`value`, value);
    // id, lessons, name, age
    const columns = [
        {
            title: "Full Name",
            width: 100,
            dataIndex: "name",
            key: "name",
            fixed: "left",
        },
        {
            title: "Age",
            width: 60,
            dataIndex: "age",
            key: "age",
            fixed: "left",
        },
        // { title: "1", dataIndex: "address", key: "1" },
        // { title: "2", dataIndex: "address", key: "2" },
        // { title: "3", dataIndex: "address", key: "3" },
        // { title: "4", dataIndex: "address", key: "4" },
        // { title: "12", dataIndex: "address", key: "8" },
        {
            title: "Action",
            key: "operation",
            fixed: "right",
            width: 100,
            render: () => <a>action</a>,
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
