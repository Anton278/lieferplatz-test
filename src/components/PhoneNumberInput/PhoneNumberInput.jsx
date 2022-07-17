import { StyledNumberInput, StyledErrorP } from "../../App";

const PhoneNumberInput = ({ label, register, errors }) => {
    return (
        <>
            <StyledNumberInput
                {...register(label, { required: true })}
                placeholder="Phone number"
                error={errors[label] ? true : false}
            ></StyledNumberInput>
            {errors[label] && (
                <StyledErrorP>This field is required</StyledErrorP>
            )}
        </>
    );
};

export default PhoneNumberInput;
