import { ChangeEvent } from "react";

interface ProfileOnChangeArgs {
  e?: ChangeEvent<HTMLInputElement>;
  name?: string;
  setError?: any;
  setInput?: any;
  validationSchema?: any;
  newValue?: any;
}

export type ProfileOnChange = (ProfileOnChangeArgs: ProfileOnChangeArgs) => Promise<void> | void;

export interface IProfileInputProps {
  detailNumber?: number;
  label: string;
  name: string;
  type?: string;
  onChange?: ProfileOnChange;
  value: any;
  customError?: any;
  validationSchema?: any;
}
