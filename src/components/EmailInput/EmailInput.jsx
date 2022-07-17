import { StyledInput, StyledErrorP } from "../../App";

const EmailInput = ({ label, register, errors }) => {
    return (
        <>
            <StyledInput
                {...register(label, { required: true })}
                placeholder="Email"
                error={errors[label] ? true : false}
            ></StyledInput>
            {errors[label] && (
                <StyledErrorP>This field is required</StyledErrorP>
            )}
        </>
    );
};

export default EmailInput;
