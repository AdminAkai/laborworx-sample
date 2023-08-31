import { FC } from "react";

import { useAppDispatch, useAppSelector } from "hooks/redux";

import { selectAdditionalDetailsData } from "redux/features/workerSlice/selectors";
import {
  setWorkerError,
  updateDeleteLanguage,
  updateLanguages,
  updateWorkerPreference
} from "redux/features/workerSlice";

import { ProfileOnChange } from "types/workers";

import { noNegativeInput } from "utils/workerUtils";

import { jobTypeToDB } from "constants/workers";
import { notEmptyArrayValid } from "constants/validation";

import { AdditionalDetailsFields } from "./lib";
import { AdditionalDetailsContainer } from "./styledComponents";

const AdditionalDetailsEdit: FC = () => {
  const dispatch = useAppDispatch();

  const additionalDetails = useAppSelector(selectAdditionalDetailsData);

  const handleOnChange: ProfileOnChange = async ({ e, name, setError, setInput, newValue }) => {
    if (name === "distanceToWork" || name === "jobTypes") {
      if (name === "distanceToWork") {
        const noNegative = noNegativeInput(e.target.value);
        setInput(noNegative);
        dispatch(updateWorkerPreference({ property: name, value: parseInt(noNegative) }));
      } else {
        setError("");
        dispatch(setWorkerError({ property: name, value: "" }));
        setInput(newValue);
        const formatJobTypes = newValue.map((jobType) => jobTypeToDB[jobType]);
        dispatch(updateWorkerPreference({ property: name, value: formatJobTypes }));
      }
    } else {
      if (additionalDetails.primaryLanguage !== "" && name === "additionalLanguages") {
        const filteredValues = [...newValue].filter(
          (language) => language !== additionalDetails.primaryLanguage
        );
        setInput(filteredValues);
        dispatch(updateLanguages({ property: name, value: filteredValues }));
      } else {
        setInput(newValue);
        dispatch(updateLanguages({ property: name, value: newValue }));
      }
    }
  };

  const handleOnDelete = async ({ option, newValues, name, setError }): Promise<void> => {
    if (name === "jobTypes") {
      try {
        await notEmptyArrayValid.validate(newValues);
        const formatJobTypes = newValues.map((jobType) => jobTypeToDB[jobType]);
        dispatch(updateWorkerPreference({ property: name, value: formatJobTypes }));
      } catch (error) {
        console.error(error);
        setError(error.message);
        dispatch(setWorkerError({ property: name, value: error.message }));
      }
    } else if (name === "additionalLanguages") {
      dispatch(updateDeleteLanguage({ property: name, value: option }));
    }
  };

  return (
    <AdditionalDetailsContainer>
      {AdditionalDetailsFields.map(({ name, buildProps, Component }, index) => (
        <Component
          key={`${name}-${index}`}
          {...buildProps({ name, data: additionalDetails })}
          detailNumber={index}
          onChange={handleOnChange}
          onDelete={handleOnDelete}
        />
      ))}
    </AdditionalDetailsContainer>
  );
};

export default AdditionalDetailsEdit;
