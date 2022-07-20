import { shallow } from "enzyme";
import React from "react";
import PhoneNumberInput from "./PhoneNumberInput";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import {
    Row,
    StyledNumberInput,
    StyledErrorP,
} from "../../assets/styledComponents";

Enzyme.configure({ adapter: new Adapter() });

describe("component should render", () => {
    test("row and input in it", () => {
        const component = shallow(
            <PhoneNumberInput
                label="phoneNumber"
                register={() => {}}
                errors={{}}
            />
        );
        expect(component.find(Row)).toHaveLength(1);
        expect(component.find(Row).find(StyledNumberInput)).toHaveLength(1);
    });
    test("row, input, error", () => {
        const component = shallow(
            <PhoneNumberInput
                label="phoneNumber"
                register={() => {}}
                errors={{ phoneNumber: {} }}
            />
        );
        expect(component.find(Row)).toHaveLength(1);
        expect(component.find(Row).find(StyledNumberInput)).toHaveLength(1);
        expect(component.find(StyledErrorP)).toHaveLength(1);
    });
});
