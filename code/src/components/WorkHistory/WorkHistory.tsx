import { FC } from "react";

import { useAppSelector } from "hooks/redux";

import { selectWorkHistories } from "redux/features/workerSlice/selectors";

import WorkHistoryCard from "components/WorkHistoryCard";
import WorkHistoryTab from "components/WorkHistoryTab";

import textTheme from "theme/text";

import { workerHistoryTabs } from "constants/workers";

import { TabContainer, WorkHistoryCardContainer, WorkHistoryContainer } from "./styledComponents";

const WorkHistory: FC = () => {
  const workHistories = useAppSelector(selectWorkHistories);

  return (
    <WorkHistoryContainer>
      <span style={{ ...textTheme.headings.h1.inlineStyle }}>Work History</span>
      <TabContainer>
        {workerHistoryTabs.map((tab) => (
          <WorkHistoryTab key={tab} tab={tab} />
        ))}
      </TabContainer>
      <WorkHistoryCardContainer>
        {workHistories.map((workHistory) => (
          <WorkHistoryCard key={workHistory.id} {...workHistory} />
        ))}
      </WorkHistoryCardContainer>
    </WorkHistoryContainer>
  );
};

export default WorkHistory;
