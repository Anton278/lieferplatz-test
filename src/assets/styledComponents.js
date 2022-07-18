import styled from "styled-components";

export const StyledInput = styled.input.attrs({
    type: "text",
})`
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    border: 1px solid ${(props) => (props.error ? "#dc3545" : "#ced4da")};
    border-radius: 0.25rem;
    outline: none;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:focus {
        ${(props) =>
            props.error
                ? "box-shadow: 0 0 0 0.25rem rgb(220 53 69 / 25%);"
                : "border-color: #80bdff;  box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%)"}
    }
`;
export const StyledNumberInput = styled(StyledInput).attrs({
    type: "number",
})``;
export const StyledErrorP = styled.p`
    color: #dc3545;
    margin-bottom: 0;
    margin-top: 1rem;
`;
export const Row = styled.div`
    margin-bottom: 1rem;
`;
