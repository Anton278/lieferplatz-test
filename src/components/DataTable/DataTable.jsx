import { useSelector } from "react-redux";
import styled from "styled-components";
const StyledTh = styled.th`
    padding: 1rem;
`;
const StyledTd = styled.td`
    padding: 1rem;
`;
const StyledCaption = styled.caption`
    margin-bottom: 20px;
`;

const DataTable = () => {
    const usersData = useSelector((state) => state.dataReducer);

    return (
        <table border={1}>
            <StyledCaption>Users Data</StyledCaption>
            <thead>
                <tr>
                    <StyledTh>Name</StyledTh>
                    <StyledTh>Surname</StyledTh>
                    <StyledTh>PhoneNumber</StyledTh>
                    <StyledTh>Email</StyledTh>
                    <StyledTh>Gender</StyledTh>
                    <StyledTh>Address</StyledTh>
                </tr>
            </thead>
            <tbody>
                {usersData.map((userData) => {
                    return (
                        <tr key={userData.id}>
                            <StyledTd>{userData.name}</StyledTd>
                            <StyledTd>{userData.surname}</StyledTd>
                            <StyledTd>{userData.phoneNumber}</StyledTd>
                            <StyledTd>{userData.email}</StyledTd>
                            <StyledTd>{userData.gender}</StyledTd>
                            <StyledTd>{userData.address}</StyledTd>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default DataTable;
