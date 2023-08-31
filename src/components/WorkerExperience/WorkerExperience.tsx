import React, { FC } from "react";

import { useAppSelector } from "hooks/redux";

import {
  selectWorkExperience,
  selectWorkerAdditionalDetailsDisplay,
  selectWorkerLanguages
} from "redux/features/workerSlice/selectors";

import WorkerExperienceItem from "components/WorkerExperienceItem";
import WorkerGenericItem from "components/WorkerGenericItem";

import {
  WorkerExperienceContainer,
  ItemsSection,
  SectionHeader,
  SectionSubHeader
} from "./styledComponents";

const WorkerExperience: FC = () => {
  const workerExperiences = useAppSelector(selectWorkExperience);
  const workerAdditionalDetails = useAppSelector(selectWorkerAdditionalDetailsDisplay);
  const workerLanguages = useAppSelector(selectWorkerLanguages);

  return (
    <WorkerExperienceContainer>
      <SectionHeader>Work Experience</SectionHeader>
      <ItemsSection>
        {workerExperiences.length !== 0 ? (
          workerExperiences.map((workerExperience, i) => (
            <WorkerExperienceItem
              key={workerExperience.id}
              {...workerExperience}
              last={i === workerExperiences.length - 1}
            />
          ))
        ) : (
          <SectionSubHeader>N/A</SectionSubHeader>
        )}
      </ItemsSection>
      <SectionHeader>Certifications</SectionHeader>
      <ItemsSection>
        <SectionSubHeader>N/A</SectionSubHeader>
      </ItemsSection>
      <SectionHeader>Languages</SectionHeader>
      <ItemsSection>
        <SectionSubHeader>{workerLanguages ? workerLanguages : "N/A"}</SectionSubHeader>
      </ItemsSection>
      <SectionHeader>Additional Details</SectionHeader>
      <ItemsSection>
        {workerAdditionalDetails ? (
          workerAdditionalDetails.map((detail, i) => (
            <WorkerGenericItem
              key={`${detail.label}-${i}`}
              detailTitle={detail.label}
              detailSubtitle={detail.value}
              last={i === workerAdditionalDetails.length - 1}
            />
          ))
        ) : (
          <SectionSubHeader>N/A</SectionSubHeader>
        )}
      </ItemsSection>
    </WorkerExperienceContainer>
  );
};

export default WorkerExperience;
