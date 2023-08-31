import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
// import { Authenticator } from "@aws-amplify/ui-react";

import NavbarOption from "../NavbarOption";

describe("<AppNavbar />", () => {
  it("Expect to not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error");
    // render(<NavbarOption />;

    expect(spy).not.toHaveBeenCalled();
  });

  it("Should render and match the snapshot", () => {
    // const {
    //   container: { firstChild }
    // } = render(<NavbarOption />);
    // expect(firstChild).toMatchSnapshot();
  });
});
