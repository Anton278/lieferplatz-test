import styled from "styled-components";
import NameInput from "./components/NameInput";
import SurnameInput from "./components/SurnameInput";
import PhoneNumberInput from "./components/PhoneNumberInput";
import EmailInput from "./components/EmailInput";
import GenderSelect from "./components/GenderSelect";
import AddressInput from "./components/AddressInput";
import DataUsageConfirmation from "./components/DataUsageConfirmation";
import SubmitButton from "./components/SubmitButton";
import DataTable from "./components/DataTable/DataTable";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { SET_DATA } from "./redux/reducersAndActions";

export const StyledInput = styled.input.attrs({
    type: "text",
})`
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    border: 1px solid ${(props) => (props.error ? "#dc3545" : "#ced4da")};
    border-radius: 0.25rem;
    outline: none;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:focus {
        ${(props) =>
            props.error
                ? "box-shadow: 0 0 0 0.25rem rgb(220 53 69 / 25%);"
                : "border-color: #80bdff;  box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%)"}
    }
`;
const Row = styled.div`
    margin-bottom: 1rem;
`;
export const StyledNumberInput = styled(StyledInput).attrs({
    type: "number",
})``;
export const StyledErrorP = styled.p`
    color: #dc3545;
    margin-bottom: 0;
    margin-top: 1rem;
`;
const StyledForm = styled.form`
    margin-bottom: 2rem;
`;

const App = () => {
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        const userData = {
            name: data.name,
            surname: data.surname,
            phoneNumber: data.phoneNumber,
            email: data.email,
            gender: data.gender,
            address: data.address,
            id: Date.now(),
        };
        dispatch({ type: SET_DATA, payload: userData });
        reset();
    };

    return (
        <>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <NameInput
                        register={register}
                        label="name"
                        errors={errors}
                    ></NameInput>
                </Row>
                <Row>
                    <SurnameInput
                        register={register}
                        label="surname"
                        errors={errors}
                    ></SurnameInput>
                </Row>
                <Row>
                    <PhoneNumberInput
                        register={register}
                        label="phoneNumber"
                        errors={errors}
                    ></PhoneNumberInput>
                </Row>
                <Row>
                    <EmailInput
                        register={register}
                        label="email"
                        errors={errors}
                    ></EmailInput>
                </Row>
                <Row>
                    <GenderSelect
                        register={register}
                        label="gender"
                        errors={errors}
                    ></GenderSelect>
                </Row>
                <Row>
                    <AddressInput
                        register={register}
                        label="address"
                        errors={errors}
                    ></AddressInput>
                </Row>
                <Row>
                    <DataUsageConfirmation
                        register={register}
                        label="dataUsageConfirmation"
                        errors={errors}
                    ></DataUsageConfirmation>
                </Row>
                <SubmitButton></SubmitButton>
            </StyledForm>
            <DataTable></DataTable>
        </>
    );
};

export default App;
