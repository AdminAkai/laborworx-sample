import React, { FC } from "react";

import { themeColors } from "theme/colors";
import textTheme from "theme/text";

import { LeftSection, WorkerExperienceItemContainer } from "./styledComponents";

interface IWorkerExperienceItemProps {
  employer: string;
  position: string;
  startDate: string;
  endDate: string;
  last: boolean;
}

const WorkerExperienceItem: FC<IWorkerExperienceItemProps> = ({
  employer,
  position,
  startDate,
  endDate,
  last
}) => {
  return (
    <WorkerExperienceItemContainer last={last}>
      <LeftSection>
        <span style={{ ...textTheme.body.small.inlineStyle, color: themeColors.text.Gray }}>
          {employer}
        </span>
        <span style={{ ...textTheme.body.medium.inlineStyle, color: themeColors.text.Black }}>
          {position}
        </span>
      </LeftSection>
      <span style={{ ...textTheme.body.small.inlineStyle, color: themeColors.Blue }}>
        {new Date(startDate).toLocaleString("en-us", { month: "short", year: "numeric" })} -&nbsp;
        {new Date(endDate).toLocaleString("en-us", { month: "short", year: "numeric" })}
      </span>
    </WorkerExperienceItemContainer>
  );
};

export default WorkerExperienceItem;
