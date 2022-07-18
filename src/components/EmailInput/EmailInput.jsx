import { StyledInput, StyledErrorP, Row } from "../../assets/styledComponents";

const EmailInput = ({ label, register, errors, setError }) => {
    return (
        <Row>
            <StyledInput
                {...register(label, { required: true, pattern: /.+@.+/g })}
                placeholder="Email"
                error={errors[label] ? true : false}
            ></StyledInput>
            {errors[label]?.type === "required" && (
                <StyledErrorP>This field is required</StyledErrorP>
            )}
            {errors[label]?.type === "pattern" && (
                <StyledErrorP>Enter valid email</StyledErrorP>
            )}
        </Row>
    );
};

export default EmailInput;
