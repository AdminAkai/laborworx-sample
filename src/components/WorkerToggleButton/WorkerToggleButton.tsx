import React, { FC } from "react";
import { Controller } from "react-hook-form";

import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

interface IWorkerToggleButtonProps {
  control: any;
  name: string;
  label: string;
  formValue?: any;
  handleOnChange?: any;
  handleToggleChange?: any;
  renderConnected?: Function;
}

const WorkerToggleButton: FC<IWorkerToggleButtonProps> = ({
  control,
  name,
  label,
  formValue,
  handleOnChange,
  handleToggleChange,
  renderConnected
}) => {
  return (
    <Grid item xs={12} sm={6}>
      <FormControlLabel
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: ["48px", "72px"],
          mx: "4px"
        }}
        componentsProps={{ typography: { sx: { px: ["16px", "4px"], width: ["160px", "200px"] } } }}
        control={
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <ToggleButtonGroup
                {...field}
                exclusive
                value={field.value ? field.value : false}
                onChange={(_, value) => {
                  field.onChange(value);
                  if (handleToggleChange) {
                    handleToggleChange(value);
                  }
                  if (handleOnChange) {
                    handleOnChange({ ...formValue, [field.name]: field.value });
                  }
                }}
              >
                <ToggleButton value={true} key="Yes">
                  Yes
                </ToggleButton>
                <ToggleButton value={false} key="No">
                  No
                </ToggleButton>
              </ToggleButtonGroup>
            )}
          />
        }
        labelPlacement="start"
        label={label}
      />
      {formValue && renderConnected && renderConnected()}
    </Grid>
  );
};

export default WorkerToggleButton;
