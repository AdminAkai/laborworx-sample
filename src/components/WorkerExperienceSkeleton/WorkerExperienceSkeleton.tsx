import React, { FC } from "react";

import Skeleton from "@mui/material/Skeleton";

import { WorkerExperienceContainer, ItemsSection, SectionHeader } from "./styledComponents";

const WorkerExperienceSkeleton: FC = () => {
  return (
    <WorkerExperienceContainer>
      <SectionHeader>Work Experience</SectionHeader>
      <ItemsSection>
        <Skeleton width="100%" height="45px" />
      </ItemsSection>
      <SectionHeader>Certifications</SectionHeader>
      <ItemsSection>
        <Skeleton width="100%" height="45px" />
      </ItemsSection>
      <SectionHeader>Languages</SectionHeader>
      <ItemsSection>
        <Skeleton width="100%" height="45px" />
      </ItemsSection>
      <SectionHeader>Additional Details</SectionHeader>
      <ItemsSection>
        <Skeleton width="100%" height="45px" />
      </ItemsSection>
    </WorkerExperienceContainer>
  );
};

export default WorkerExperienceSkeleton;
