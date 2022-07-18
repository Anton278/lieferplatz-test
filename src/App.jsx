import NameInput from "./components/NameInput";
import SurnameInput from "./components/SurnameInput";
import PhoneNumberInput from "./components/PhoneNumberInput";
import EmailInput from "./components/EmailInput";
import GenderSelect from "./components/GenderSelect";
import AddressInput from "./components/AddressInput";
import DataUsageConfirmation from "./components/DataUsageConfirmation";
import SubmitButton from "./components/SubmitButton";
import DataTable from "./components/DataTable/DataTable";
import Autosuggests from "./components/Autosuggests";

import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { SET_DATA } from "./redux/reducersAndActions";
import { Row } from "./assets/styledComponents";

const StyledForm = styled.form`
    margin-bottom: 2rem;
`;
const RelativeRow = styled(Row)`
    position: relative;
`;

const App = () => {
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
        setValue,
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
                <NameInput
                    register={register}
                    label="name"
                    errors={errors}
                ></NameInput>
                <SurnameInput
                    register={register}
                    label="surname"
                    errors={errors}
                ></SurnameInput>
                <PhoneNumberInput
                    register={register}
                    label="phoneNumber"
                    errors={errors}
                ></PhoneNumberInput>
                <EmailInput
                    register={register}
                    label="email"
                    errors={errors}
                ></EmailInput>
                <GenderSelect
                    register={register}
                    label="gender"
                    errors={errors}
                ></GenderSelect>
                <RelativeRow>
                    <AddressInput
                        register={register}
                        label="address"
                        errors={errors}
                    ></AddressInput>
                    <Autosuggests setValue={setValue}></Autosuggests>
                </RelativeRow>
                <DataUsageConfirmation
                    register={register}
                    label="dataUsageConfirmation"
                    errors={errors}
                ></DataUsageConfirmation>
                <SubmitButton></SubmitButton>
            </StyledForm>
            <DataTable></DataTable>
        </>
    );
};

export default App;
