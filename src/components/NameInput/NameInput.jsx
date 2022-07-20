import { StyledInput, StyledErrorP, Row } from "../../assets/styledComponents";
import React from "react";

const NameInput = ({ label, register, errors }) => {
    return (
        <Row>
            <StyledInput
                {...register(label, { required: true })}
                placeholder="Name"
                error={errors[label] ? true : false}
            ></StyledInput>
            {errors[label] && (
                <StyledErrorP>This field is required</StyledErrorP>
            )}
        </Row>
    );
};

export default NameInput;
