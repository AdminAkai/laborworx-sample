import React from "react";
import { useForm } from "react-hook-form";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import WorkerFormInput from "../index";

const name: string = "testName";
const label: string = "testLabel";
const helperText: string = "testHelperText";
const isNewWorker: boolean = false;

describe("<WorkerFormInput />", () => {
  const TestFormInput: React.FC = () => {
    const {
      control,
      register,
      getValues,
      setValue,
      formState: { errors }
    } = useForm({ mode: "onBlur" });
    return (
      <form>
        <WorkerFormInput
          name={name}
          control={control}
          label={label}
          register={register}
          helperText={helperText}
          errors={errors}
          getValues={getValues}
          setValue={setValue}
          isNewWorker={isNewWorker}
        />
      </form>
    );
  };
  it("Expect to not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error");
    render(<TestFormInput />);

    expect(spy).not.toHaveBeenCalled();
  });

  it("Should render and match the snapshot", () => {
    const {
      container: { firstChild }
    } = render(<TestFormInput />);
    expect(firstChild).toMatchSnapshot();
  });
});
