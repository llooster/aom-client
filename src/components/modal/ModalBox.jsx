import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ModalOverlay = styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
`;

const ModalWrapper = styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? "block" : "none")};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    overflow: auto;
    outline: 0;
`;

const ModalInner = styled.div.attrs(({ width, height }) => ({
    width: width || "400px",
    height: height || "250px",
}))`
    width: ${(props) => props.width};
    height: ${(props) => props.height};

    box-sizing: border-box;
    position: relative;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
    background-color: #aaa;
    border-radius: 10px;
    width: 360px;
    max-width: 480px;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    padding: 20px 10px;
    /* background-color: red; */
`;

export default function ModalBox({
    className,
    visible,
    children,
    width,
    height,
}) {
    // console.log(width, height);
    return (
        <>
            <ModalOverlay visible={visible} />
            <ModalWrapper className={className} tabIndex="-1" visible={visible}>
                <ModalInner
                    width={width}
                    height={height}
                    tabIndex="0"
                    className="modal-inner"
                >
                    {children}
                </ModalInner>
            </ModalWrapper>
        </>
    );
}

ModalBox.propTypes = {
    visible: PropTypes.bool,
};
