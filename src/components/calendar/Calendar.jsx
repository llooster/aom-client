import React from "react";
import { DatePicker, Space } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;

const dateFormat = "YYYY/MM/DD";

export default function Calendar() {
    return (
        <Space direction="vertical" size={10}>
            <RangePicker
                defaultValue={[
                    moment("2021/01/01", dateFormat),
                    moment("2021/01/01", dateFormat),
                ]}
                format={dateFormat}
            />
        </Space>
    );
}
