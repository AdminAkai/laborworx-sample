import { FC } from "react";

import { useAppDispatch, useAppSelector } from "hooks/redux";

import { selectWorker, selectWorkerLoading } from "redux/features/workerSlice/selectors";
import {
  setWorkerError,
  updateWorkerPreference,
  updateWorkerProperty
} from "redux/features/workerSlice";

import { ProfileOnChange } from "types/workers";

import { formatDetailValue } from "utils/workerUtils";

import { workerDetailFields } from "./lib";
import { GeneralDetails } from "./styledComponents";
import { taxElectionsToDB } from "constants/workers";

const GeneralDetailsEdit: FC = () => {
  const dispatch = useAppDispatch();

  const worker = useAppSelector(selectWorker);
  const loading = useAppSelector(selectWorkerLoading);

  const handleOnChange: ProfileOnChange = async ({
    e,
    name,
    setError,
    setInput,
    validationSchema,
    newValue
  }) => {
    setError("");
    dispatch(setWorkerError({ property: name, value: "" }));
    if (name === "taxElection") {
      setInput(newValue);
      dispatch(updateWorkerProperty({ property: name, value: taxElectionsToDB[newValue] }));
      return;
    }
    const formatValue = formatDetailValue(name, e.target.value, name === "desiredRate");
    setInput(formatValue);
    try {
      if (Boolean(name !== "desiredRate")) {
        if (validationSchema) await validationSchema.validate(formatValue);
        dispatch(updateWorkerProperty({ property: e.target.name, value: e.target.value }));
      } else {
        dispatch(updateWorkerPreference({ property: e.target.name, value: parseInt(formatValue) }));
      }
    } catch (error) {
      setError(error.message);
      dispatch(setWorkerError({ property: name, value: error.message }));
    }
  };

  return (
    <GeneralDetails>
      {workerDetailFields.map(({ props, value, Component }, index) => (
        <Component
          key={props.name}
          {...props}
          detailNumber={index}
          disabled={loading || (props.name === "taxElection" && worker.taxElection === "IS_W2")}
          value={value(worker)}
          values={value(worker)}
          onChange={handleOnChange}
        />
      ))}
    </GeneralDetails>
  );
};

export default GeneralDetailsEdit;
