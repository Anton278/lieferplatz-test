import styled from "styled-components";

const StyledSelect = styled.select`
    height: calc(2.25rem + 2px);
    padding: 0.375rem 1.75rem 0.375rem 0.75rem;
    line-height: 1.5;
    color: #495057;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    &:focus {
        border-color: #80bdff;
        outline: 0;
        box-shadow: inset 0 1px 2px rgb(0 0 0 / 8%),
            0 0 5px rgb(128 189 255 / 50%);
    }
`;

const GenderSelect = ({ label, register, errors }) => {
    return (
        <>
            <StyledSelect {...register(label, { required: true })}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </StyledSelect>
            {errors[label] && <span>This field is required</span>}
        </>
    );
};

export default GenderSelect;
