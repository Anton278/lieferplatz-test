import { shallow } from "enzyme";
import React from "react";
import SubmitButton from "./SubmitButton";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { StyledButton } from "./SubmitButton";

Enzyme.configure({ adapter: new Adapter() });

test("components should render button", () => {
    const component = shallow(<SubmitButton />);
    expect(component.find(StyledButton)).toHaveLength(1);
});
