import { StyledErrorP, Row } from "../../assets/styledComponents";
import React from "react";

const DataUsageConfirmation = ({ label, register, errors }) => {
    return (
        <Row>
            <label>
                <input
                    type="checkbox"
                    {...register(label, { required: true })}
                />
                Data Usage Confirmation
            </label>
            {errors[label] && (
                <StyledErrorP>This option is required</StyledErrorP>
            )}
        </Row>
    );
};

export default DataUsageConfirmation;
