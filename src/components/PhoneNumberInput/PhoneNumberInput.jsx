import {
    StyledNumberInput,
    StyledErrorP,
    Row,
} from "../../assets/styledComponents";

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
