import { FC } from "react";

import WorkerExperienceInput from "components/WorkerExperienceInput";
import DetailsEditButton from "components/DetailsEditButton";

import { useAppDispatch, useAppSelector } from "hooks/redux";

import { selectWorkExperience, selectWorkerId } from "redux/features/workerSlice/selectors";
import { updateAddWorkerExperience } from "redux/features/workerSlice";

import { WorkerExperienceContainer } from "./styledComponents";

const WorkerExperienceEdit: FC = () => {
  const dispatch = useAppDispatch();

  const workerId = useAppSelector(selectWorkerId);
  const experiences = useAppSelector(selectWorkExperience);

  const handleAddNewExperience = () => {
    dispatch(
      updateAddWorkerExperience({
        workerId,
        employer: "",
        position: "",
        startDate: "",
        endDate: "",
        new: true
      })
    );
  };

  return (
    <WorkerExperienceContainer>
      {experiences.map((experience, index) => (
        <WorkerExperienceInput
          key={`experience-${index}`}
          experience={experience}
          experienceIndex={index}
        />
      ))}
      <DetailsEditButton title="+ New Position" onClick={handleAddNewExperience} />
    </WorkerExperienceContainer>
  );
};

export default WorkerExperienceEdit;
