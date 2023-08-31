import React from "react";
import { useForm } from "react-hook-form";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import WorkerToggleButton from "../index";

const name: string = "testName";
const label: string = "testLabel";

describe("<WorkerSelectInput />", () => {
  const TestToggleButton: React.FC = () => {
    const { control } = useForm({ mode: "onBlur" });
    return (
      <form>
        <WorkerToggleButton name={name} control={control} label={label} />
      </form>
    );
  };
  it("Expect to not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error");
    render(<TestToggleButton />);

    expect(spy).not.toHaveBeenCalled();
  });

  it("Should render and match the snapshot", () => {
    const {
      container: { firstChild }
    } = render(<TestToggleButton />);
    expect(firstChild).toMatchSnapshot();
  });
});
