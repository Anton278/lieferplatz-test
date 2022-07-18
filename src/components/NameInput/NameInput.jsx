import { StyledInput, StyledErrorP, Row } from "../../assets/styledComponents";

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
