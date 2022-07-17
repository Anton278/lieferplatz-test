import { StyledInput, StyledErrorP } from "../../App";

const SurnameInput = ({ label, register, errors }) => {
    return (
        <>
            <StyledInput
                {...register(label, { required: true })}
                placeholder="Surname"
                error={errors[label] ? true : false}
            ></StyledInput>
            {errors[label] && (
                <StyledErrorP>This field is required</StyledErrorP>
            )}
        </>
    );
};

export default SurnameInput;
