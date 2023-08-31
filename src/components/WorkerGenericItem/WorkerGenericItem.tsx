import React, { FC } from "react";

import { themeColors } from "theme/colors";
import textTheme from "theme/text";

import { WorkerGenericItemContainer } from "./styledComponents";

interface IWorkerGenericItemProps {
  detailTitle: string;
  detailSubtitle: string;
  last: boolean;
}

const WorkerGenericItem: FC<IWorkerGenericItemProps> = ({ detailTitle, detailSubtitle, last }) => {
  return (
    <WorkerGenericItemContainer last={last}>
      <span style={{ ...textTheme.body.medium.inlineStyle, color: themeColors.text.Black }}>
        {detailTitle}
      </span>
      <span style={{ ...textTheme.body.small.inlineStyle, color: themeColors.text.Gray }}>
        {detailSubtitle}
      </span>
    </WorkerGenericItemContainer>
  );
};

export default WorkerGenericItem;
