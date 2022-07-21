import styled from "styled-components";
import React from "react";

export const StyledButton = styled.button`
    line-height: 1.5;
    text-align: center;
    cursor: pointer;
    border: 1px solid #0d6efd;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    color: #fff;
    background-color: #0d6efd;
    &:hover {
        background-color: #0b5ed7;
        border-color: #0a58ca;
    }
    &:active {
        background-color: #0a58ca;
        border-color: #0a53be;
    }
`;

const SubmitButton = () => {
    return <StyledButton type="submit">Submit</StyledButton>;
};

export default SubmitButton;
