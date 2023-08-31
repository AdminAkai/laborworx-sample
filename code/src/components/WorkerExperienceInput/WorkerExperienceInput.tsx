import { FC } from "react";

import IconButton from "@mui/material/IconButton";

import TrashIcon from "images/SvgIcons/TrashIcon";

import { useAppDispatch } from "hooks/redux";

import {
  setWorkerError,
  updateRemoveWorkerExperience,
  updateWorkerExperience
} from "redux/features/workerSlice";

import { workerExperienceFields } from "./lib";
import { InputContainer, iconButtonSx } from "./styledComponents";
import { ProfileOnChange } from "types/workers";

const WorkerExperienceInput: FC<{ experience: any; experienceIndex: number }> = ({
  experience,
  experienceIndex
}) => {
  const dispatch = useAppDispatch();

  const handleOnChange: ProfileOnChange = async ({
    e,
    name,
    setError,
    setInput,
    validationSchema
  }) => {
    setError("");
    dispatch(setWorkerError({ property: "workerExperience", value: "" }));
    setInput(e.target.value);
    try {
      if (validationSchema) await validationSchema.validate(e.target.value);
      dispatch(
        updateWorkerExperience({
          index: experienceIndex,
          property: name,
          value: e.target.value
        })
      );
    } catch (err) {
      console.error(err);
      setError(err.message);
      dispatch(setWorkerError({ property: "workerExperience", value: err.message }));
    }
  };

  const handleDeleteExperience = () => {
    dispatch(setWorkerError({ property: "workerExperience", value: "" }));
    dispatch(updateRemoveWorkerExperience(experienceIndex));
  };

  return (
    <InputContainer>
      {workerExperienceFields.map(({ props, value, min, Component }, index) => (
        <Component
          key={props.name}
          {...props}
          detailNumber={index}
          value={value(experience)}
          min={min && min(experience)}
          onChange={handleOnChange}
        />
      ))}
      <IconButton sx={iconButtonSx} onClick={handleDeleteExperience}>
        <TrashIcon height="16" width="16" />
      </IconButton>
    </InputContainer>
  );
};

export default WorkerExperienceInput;
