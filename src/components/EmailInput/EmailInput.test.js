import { shallow } from "enzyme";
import React from "react";
import EmailInput from "./EmailInput";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { Row, StyledInput, StyledErrorP } from "../../assets/styledComponents";

Enzyme.configure({ adapter: new Adapter() });

describe("component should render", () => {
    test("row and input in it", () => {
        const component = shallow(
            <EmailInput label="email" register={() => {}} errors={{}} />
        );
        expect(component.find(Row)).toHaveLength(1);
        expect(component.find(Row).find(StyledInput)).toHaveLength(1);
    });
    test("row, input, pattern-error", () => {
        const component = shallow(
            <EmailInput
                label="email"
                register={() => {}}
                errors={{ email: { type: "pattern" } }}
            />
        );
        expect(component.find(Row)).toHaveLength(1);
        expect(component.find(Row).find(StyledInput)).toHaveLength(1);
        expect(component.find(StyledErrorP)).toHaveLength(1);
    });
    test("row, input, required-error", () => {
        const component = shallow(
            <EmailInput
                label="email"
                register={() => {}}
                errors={{ email: { type: "required" } }}
            />
        );
        expect(component.find(Row)).toHaveLength(1);
        expect(component.find(Row).find(StyledInput)).toHaveLength(1);
        expect(component.find(StyledErrorP)).toHaveLength(1);
    });
});
