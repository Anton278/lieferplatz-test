import { shallow } from "enzyme";
import React from "react";
import AddressInput from "./AddressInput";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { StyledInput, StyledErrorP } from "../../assets/styledComponents";
import { useDispatch } from "react-redux";

jest.mock("react-redux");

Enzyme.configure({ adapter: new Adapter() });

describe("component should render", () => {
    test("input", () => {
        useDispatch.mockReturnValue(() => {});
        const component = shallow(
            <AddressInput label="address" register={() => {}} errors={{}} />
        );
        expect(component.find(StyledInput)).toHaveLength(1);
    });
    test("input, error", () => {
        useDispatch.mockReturnValue(() => {});
        const component = shallow(
            <AddressInput
                label="address"
                register={() => {}}
                errors={{ address: {} }}
            />
        );
        expect(component.find(StyledInput)).toHaveLength(1);
        expect(component.find(StyledErrorP)).toHaveLength(1);
    });
});
