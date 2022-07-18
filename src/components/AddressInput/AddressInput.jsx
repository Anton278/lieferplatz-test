import { StyledInput, StyledErrorP } from "../../assets/styledComponents";
import { getAutosuggests } from "../../redux/asyncActions";
import { useDispatch } from "react-redux";

const AddressInput = ({ label, register, errors }, ref) => {
    const dispatch = useDispatch();

    return (
        <>
            <StyledInput
                id="adrress-input"
                {...register(label, { required: true })}
                placeholder="Address"
                error={errors[label] ? true : false}
                onChange={(e) => dispatch(getAutosuggests(e.target.value))}
            ></StyledInput>
            {errors[label] && (
                <StyledErrorP>This field is required</StyledErrorP>
            )}
        </>
    );
};

export default AddressInput;
