import React, { FC } from "react";
import { Controller } from "react-hook-form";
import { Autocomplete } from "@react-google-maps/api";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Grid from "@mui/material/Grid";

import CheckBoxIcon from "@mui/icons-material/CheckBox";

import { AYTFormatPhone } from "utils/stringUtils";

interface IWorkerFormInputProps {
  control: any;
  name: string;
  label: string;
  errors: any;
  register: any;
  isNewWorker?: boolean;
  valueAsNumber?: boolean;
  pattern?: RegExp;
  helperText?: string;
  sx?: any;
  setValue: any;
  getValues: any;
  editOverride?: boolean;
  onAddressLoad?: (any) => void;
  onPlacesChanged?: () => void;
}

const WorkerFormInput: FC<IWorkerFormInputProps> = ({
  control,
  name,
  label,
  errors,
  register,
  isNewWorker,
  valueAsNumber,
  editOverride,
  pattern,
  helperText,
  setValue,
  getValues,
  sx,
  onAddressLoad,
  onPlacesChanged
}) => {
  const handleInput = (e: any) => {
    if (name === "phoneNumber" || name === "referralPhonenumber") {
      setValue(name, AYTFormatPhone(e.target.value));
    } else {
      setValue(name, e.target.value);
    }
  };

  if (valueAsNumber)
    return (
      <Grid
        item
        xs={12}
        sx={{
          ...sx,
          paddingLeft: 4,
          paddingRight: 4
        }}
      >
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={label}
              size="small"
              fullWidth
              type="number"
              value={parseInt(getValues(name))}
              inputProps={{ min: 0 }}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>
              }}
              {...register(name, {
                valueAsNumber,
                onChange: handleInput
              })}
            />
          )}
        />
      </Grid>
    );

  if (name === "formattedAddress") {
    return (
      <Grid
        item
        xs={12}
        sx={{
          ...sx,
          paddingLeft: 4,
          paddingRight: 4
        }}
      >
        <Controller
          name={name}
          control={control}
          render={() => (
            <Autocomplete
              className="laborworx_signup_address_container"
              onLoad={onAddressLoad}
              onPlaceChanged={onPlacesChanged}
            >
              <TextField
                InputLabelProps={{ shrink: true }}
                value={getValues(name)}
                label={label}
                size="small"
                fullWidth
                {...register(name, {
                  required: true,
                  pattern,
                  onChange: handleInput
                })}
                error={!!errors[name]}
                helperText={
                  errors &&
                  errors[name] &&
                  errors[name].type === "required" &&
                  (helperText || `${label} is required`)
                }
                disabled={!isNewWorker && !editOverride}
              />
            </Autocomplete>
          )}
        />
        {errors && !errors[name] && getValues(name) && <CheckBoxIcon />}
      </Grid>
    );
  }

  return (
    <Grid
      item
      xs={12}
      sx={{
        ...sx,
        paddingLeft: 4,
        paddingRight: 4
      }}
    >
      <Controller
        name={name}
        control={control}
        render={() => (
          <TextField
            value={getValues(name)}
            label={label}
            size="small"
            fullWidth
            {...register(name, {
              required: true,
              pattern,
              onChange: handleInput
            })}
            error={!!errors[name]}
            helperText={
              errors &&
              errors[name] &&
              errors[name].type === "required" &&
              (helperText || `${label} is required`)
            }
            disabled={!isNewWorker && !editOverride}
          />
        )}
      />
      {errors && !errors[name] && getValues(name) && <CheckBoxIcon />}
    </Grid>
  );
};

export default WorkerFormInput;
