import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { ModalBox, Input, Title } from "../../../components";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function AMainContent(props) {
    const dispatch = useDispatch();

    return (
        <>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox defaultChecked={true} />}
                    label="Label"
                />
                <FormControlLabel
                    control={<Checkbox defaultChecked={true} />}
                    label="Label"
                />
                {/* <FormControlLabel
                    disabled
                    control={<Checkbox />}
                    label="Disabled"
                /> */}
            </FormGroup>
        </>
    );
}
