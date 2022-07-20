import {
    StyledNumberInput,
    StyledErrorP,
    Row,
} from "../../assets/styledComponents";
import React from "react";

const PhoneNumberInput = ({ label, register, errors }) => {
    return (
        <Row>
            <StyledNumberInput
                {...register(label, { required: true })}
                placeholder="Phone number"
                error={errors[label] ? true : false}
            ></StyledNumberInput>
            {errors[label] && (
                <StyledErrorP>This field is required</StyledErrorP>
            )}
        </Row>
    );
};

export default PhoneNumberInput;
