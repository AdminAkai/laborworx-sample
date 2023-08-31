import { ChangeEventHandler, FC, memo, useState } from "react";

import { themeColors } from "theme/colors";
import textTheme from "theme/text";

import { IProfileInputProps } from "types/workers";

import {
  CustomAdornment,
  CustomInput,
  CustomInputLabel,
  DetailInput,
  UnitOfMeasurement
} from "./styledComponents";

interface IProfileDetailInputProps extends IProfileInputProps {
  unitOfMeasurement?: string;
  disabled?: boolean;
  min?: number | string;
  max?: number | string;
}

const ProfileDetailInput: FC<IProfileDetailInputProps> = ({
  detailNumber,
  label,
  name,
  type,
  onChange,
  value,
  customError,
  validationSchema,
  unitOfMeasurement,
  disabled,
  min,
  max
}) => {
  const [input, setInput] = useState<string>(value);
  const [error, setError] = useState<any>(customError || "");

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange({ e, name, setError, setInput, validationSchema });
  };

  return (
    <DetailInput detailNumber={detailNumber}>
      <CustomInputLabel htmlFor={name} error={Boolean(error)}>
        {label}
      </CustomInputLabel>
      <div style={{ position: "relative", width: "100%" }}>
        {type === "number" && name === "desiredRate" && <CustomAdornment>$</CustomAdornment>}
        {unitOfMeasurement && <UnitOfMeasurement>{unitOfMeasurement}</UnitOfMeasurement>}
        <CustomInput
          name={name}
          disabled={disabled}
          type={type || "text"}
          currency={type === "number"}
          value={input}
          onChange={handleOnChange}
          maxLength={name === "phoneNumber" ? 12 : undefined}
          min={min ? min : undefined}
          max={max ? max : undefined}
        />
      </div>
      {error && (
        <span style={{ color: themeColors.Red, ...textTheme.body.small.inlineStyle }}>
          *{error}
        </span>
      )}
    </DetailInput>
  );
};

const memoizedProfileDetailInput = memo(ProfileDetailInput);

export default memoizedProfileDetailInput;
