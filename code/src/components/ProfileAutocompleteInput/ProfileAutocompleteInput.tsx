import { ChangeEvent, FC, useState } from "react";

import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";

import textTheme from "theme/text";
import { themeColors } from "theme/colors";

import {
  AutocompleteInput,
  CustomSelectLabel,
  autocompleteSx,
  chipSx,
  textFieldSx
} from "./styledComponents";

interface IProfileAutocompleteInputProps {
  label?: string;
  name?: string;
  detailNumber?: number;
  options: string[];
  onChange: any;
  onDelete: any;
  values: string[];
  placeholder: string;
  validationSchema?: any;
  multiple?: boolean;
  disableClearable?: boolean;
  forcePopupIcon?: boolean;
  filterOptions?: any;
  disabled?: boolean;
}

const ProfileAutocompleteInput: FC<IProfileAutocompleteInputProps> = ({
  label,
  name,
  detailNumber,
  options,
  onChange,
  onDelete,
  values,
  placeholder,
  validationSchema,
  multiple,
  disableClearable,
  forcePopupIcon,
  filterOptions,
  disabled
}) => {
  const [input, setInput] = useState<any>(values);
  const [error, setError] = useState<any>("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>, value: string, reason: string) => {
    if (reason !== "removeOption") {
      onChange({ e, name, setError, setInput, validationSchema, newValue: value });
    }
  };

  const handleOnDelete = (option: string) => {
    setInput((prev) => {
      const newValues = Array.isArray(prev) ? prev.filter((item) => item !== option) : prev;
      onDelete({ option, newValues, name, setError });
      return newValues;
    });
  };

  return (
    <AutocompleteInput detailNumber={detailNumber}>
      {label && <CustomSelectLabel>{label}</CustomSelectLabel>}
      <Autocomplete
        disabled={disabled}
        disableClearable={disableClearable}
        multiple={multiple}
        slotProps={{
          paper: {
            sx: {
              px: "8px",
              ...textTheme.body.medium.inlineStyle
            }
          }
        }}
        forcePopupIcon={forcePopupIcon}
        sx={autocompleteSx}
        filterOptions={filterOptions}
        filterSelectedOptions
        renderTags={() =>
          values.map((value, index) => (
            <Chip
              key={`${value}-${index}-${name}`}
              variant="filled"
              label={value}
              sx={chipSx}
              onDelete={() => handleOnDelete(value)}
            />
          ))
        }
        id={`${name}-option-autocomplete`}
        options={options}
        fullWidth
        onChange={handleOnChange}
        value={input}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={textFieldSx}
            placeholder={placeholder}
            error={Boolean(error)}
          />
        )}
      />
      {error && (
        <span style={{ color: themeColors.Red, ...textTheme.body.small.inlineStyle }}>
          *{error}
        </span>
      )}
    </AutocompleteInput>
  );
};

export default ProfileAutocompleteInput;
