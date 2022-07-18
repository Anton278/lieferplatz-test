import { StyledInput, StyledErrorP, Row } from "../../assets/styledComponents";

const SurnameInput = ({ label, register, errors }) => {
    return (
        <Row>
            <StyledInput
                {...register(label, { required: true })}
                placeholder="Surname"
                error={errors[label] ? true : false}
            ></StyledInput>
            {errors[label] && (
                <StyledErrorP>This field is required</StyledErrorP>
            )}
        </Row>
    );
};

export default SurnameInput;
