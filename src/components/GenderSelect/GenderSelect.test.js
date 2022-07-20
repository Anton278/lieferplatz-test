import { shallow } from "enzyme";
import React from "react";
import GenderSelect, { StyledSelect } from "./GenderSelect";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { Row } from "../../assets/styledComponents";

Enzyme.configure({ adapter: new Adapter() });

describe("component should render", () => {
    test("row and select in it", () => {
        const component = shallow(
            <GenderSelect label="gender" register={() => {}} errors={{}} />
        );
        expect(component.find(Row)).toHaveLength(1);
        expect(component.find(Row).find(StyledSelect)).toHaveLength(1);
    });
});
