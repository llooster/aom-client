import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styled from "styled-components";

const NewBox = styled(Box)`
    box-sizing: border-box;
    background-color: transparent;
`;

export default function CenteredTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <NewBox
            sx={{ width: "100%", height: "100%", bgcolor: "background.paper" }}
        >
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Lessons" />
                <Tab label="Member" />
                <Tab label="A&P" />
            </Tabs>
        </NewBox>
    );
}
