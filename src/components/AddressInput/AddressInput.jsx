import { StyledInput, StyledErrorP } from "../../assets/styledComponents";
import { getAutosuggests } from "../../redux/asyncActions";
import { useDispatch } from "react-redux";
import { SET_RESULTS } from "../../redux/reducersAndActions";

const AddressInput = ({ label, register, errors, watch }) => {
    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        if (e.target.value.trim().length) {
            dispatch(getAutosuggests(watch(e.target.value)));
        } else {
            dispatch({ type: SET_RESULTS, payload: [] });
        }
    };

    return (
        <>
            <StyledInput
                id="adrress-input"
                {...register(label, { required: true })}
                placeholder="Address"
                error={errors[label] ? true : false}
                onChange={onChangeHandler}
            ></StyledInput>
            {errors[label] && (
                <StyledErrorP>This field is required</StyledErrorP>
            )}
        </>
    );
};

export default AddressInput;
