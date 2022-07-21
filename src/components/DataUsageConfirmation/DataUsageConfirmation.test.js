import { shallow } from "enzyme";
import React from "react";
import DataUsageConfirmation from "./DataUsageConfirmation";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { Row, StyledErrorP } from "../../assets/styledComponents";

Enzyme.configure({ adapter: new Adapter() });

describe("component should render", () => {
    test("row, label in row, input in label", () => {
        const component = shallow(
            <DataUsageConfirmation
                label="dataUsageConfirmation"
                register={() => {}}
                errors={{}}
            />
        );
        expect(component.find(Row)).toHaveLength(1);
        expect(component.find(Row).find("label")).toHaveLength(1);
        expect(component.find(Row).find("label").find("input")).toHaveLength(1);
    });
    test("row, label, input and error", () => {
        const component = shallow(
            <DataUsageConfirmation
                label="dataUsageConfirmation"
                register={() => {}}
                errors={{ dataUsageConfirmation: {} }}
            />
        );
        expect(component.find(Row)).toHaveLength(1);
        expect(component.find(Row).find("label")).toHaveLength(1);
        expect(component.find(Row).find("label").find("input")).toHaveLength(1);
        expect(component.find(StyledErrorP)).toHaveLength(1);
    });
});
