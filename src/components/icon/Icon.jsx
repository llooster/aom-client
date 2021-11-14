import React from "react";
import { 
    CheckCircleOutlined,
    BarChartOutlined,
    SettingOutlined,
    UserSwitchOutlined,
    FormOutlined,
    ArrowLeftOutlined
} from '@ant-design/icons';

const icons = {
    "check": <CheckCircleOutlined />,
    "barChart": <BarChartOutlined />,
    "setting": <SettingOutlined />,
    "user": <UserSwitchOutlined />,
    "form": <FormOutlined />,
    "back": <ArrowLeftOutlined />
}

const Icon = (props) => {
    const { icon } = props;
    return icons[icon];
}

export default Icon;