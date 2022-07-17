import { StyledInput, StyledErrorP } from "../../App";

const NameInput = ({ label, register, errors }) => {
    return (
        <>
            <StyledInput
                {...register(label, { required: true })}
                placeholder="Name"
                error={errors[label] ? true : false}
            ></StyledInput>
            {errors[label] && (
                <StyledErrorP>This field is required</StyledErrorP>
            )}
        </>
    );
};

export default NameInput;
