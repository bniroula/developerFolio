import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

describe("Button Component", () => {
  it("renders button with text", () => {
    const wrapper = shallow(<Button text="Test Button" />);
    expect(wrapper.find("a").text()).toBe("Test Button");
  });

  it("applies correct href", () => {
    const wrapper = shallow(<Button href="https://example.com" />);
    expect(wrapper.find("a").prop("href")).toBe("https://example.com");
  });
});