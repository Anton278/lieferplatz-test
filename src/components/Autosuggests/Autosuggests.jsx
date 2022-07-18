import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { SET_RESULTS } from "../../redux/reducersAndActions";

const StyledUl = styled.ul`
    width: 225px;
    list-style-type: none;
    padding-left: 0;
    border: 1px solid #bdbdbd;
    height: 300px;
    overflow: auto;
    position: absolute;
    background-color: #fff;
`;
const StyledLi = styled.li`
    padding: 0.5rem;
    border-bottom: 1px solid #bdbdbd;
    cursor: pointer;
    &:hover {
        // background-color: #fafafa;
    }
    &:last-of-type {
        border-bottom: none;
    }
`;

const Autosuggests = ({ setValue, addressInputRef }) => {
    const dispatch = useDispatch();
    const suggests = useSelector((state) => state.addressesReducer.results);

    useEffect(() => {
        const outsideClickHandler = (e) => {
            if (
                e.target.id !== "suggest-item" &&
                e.target.id !== "suggestions-list" &&
                e.target.id !== "adrress-input"
            ) {
                dispatch({ type: SET_RESULTS, payload: [] });
            }
        };
        document.body.addEventListener("click", outsideClickHandler);

        return () => {
            document.body.removeEventListener("click", outsideClickHandler);
        };
    }, []);

    return suggests.length ? (
        <StyledUl id="suggestions-list">
            {suggests.map((suggest) => (
                <StyledLi
                    id={"suggest-item"}
                    key={suggest.id}
                    onClick={(e) => {
                        setValue("address", e.target.innerText);
                        dispatch({ type: SET_RESULTS, payload: [] });
                    }}
                >
                    {suggest.title}
                </StyledLi>
            ))}
        </StyledUl>
    ) : null;
};

export default Autosuggests;
