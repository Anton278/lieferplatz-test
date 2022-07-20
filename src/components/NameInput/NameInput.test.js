import { shallow } from "enzyme";
import React from "react";
import NameInput from "./NameInput";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { Row, StyledInput, StyledErrorP } from "../../assets/styledComponents";

Enzyme.configure({ adapter: new Adapter() });

describe("component should render", () => {
    test("row and input in it", () => {
        const component = shallow(
            <NameInput label="name" register={() => {}} errors={{}} />
        );
        expect(component.find(Row)).toHaveLength(1);
        expect(component.find(Row).find(StyledInput)).toHaveLength(1);
    });
    test("row, input, error", () => {
        const component = shallow(
            <NameInput label="name" register={() => {}} errors={{ name: {} }} />
        );
        expect(component.find(Row)).toHaveLength(1);
        expect(component.find(Row).find(StyledInput)).toHaveLength(1);
        expect(component.find(StyledErrorP)).toHaveLength(1);
    });
});
