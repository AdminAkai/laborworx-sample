import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import AppNavbar from "../AppNavbar";

describe("<AppNavbar />", () => {
  it("Expect to not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error");
    // render(<Authenticator>{() => <AppNavbar />}</Authenticator>);

    expect(spy).not.toHaveBeenCalled();
  });

  it("Should render and match the snapshot", () => {
    // const {
    //   container: { firstChild }
    // } = render(<Authenticator>{() => <AppNavbar />}</Authenticator>);
    // expect(firstChild).toMatchSnapshot();
  });
});
