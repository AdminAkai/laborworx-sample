import { FC } from "react";

import CircularProgress from "@mui/material/CircularProgress";

import WorkHistoryTab from "components/WorkHistoryTab";

import textTheme from "theme/text";
import { themeColors } from "theme/colors";

import { workerHistoryTabs } from "constants/workers";

import { TabContainer, WorkHistoryCardContainer, WorkHistoryContainer } from "./styledComponents";

const WorkHistorySkeleton: FC = () => (
  <WorkHistoryContainer>
    <span style={{ ...textTheme.headings.h1.inlineStyle }}>Work History</span>
    <TabContainer>
      {workerHistoryTabs.map((tab) => (
        <WorkHistoryTab key={tab} tab={tab} />
      ))}
    </TabContainer>
    <WorkHistoryCardContainer>
      <CircularProgress sx={{ color: themeColors.Blue }} size={96} />
    </WorkHistoryCardContainer>
  </WorkHistoryContainer>
);
export default WorkHistorySkeleton;
