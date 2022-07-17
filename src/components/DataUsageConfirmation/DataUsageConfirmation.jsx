import { StyledErrorP } from "../../App";

const DataUsageConfirmation = ({ label, register, errors }) => {
    return (
        <>
            <label>
                <input
                    type="checkbox"
                    {...register(label, { required: true })}
                />
                Data Usage Confirmation
            </label>
            {errors[label] && (
                <StyledErrorP>This option is required</StyledErrorP>
            )}
        </>
    );
};

export default DataUsageConfirmation;
