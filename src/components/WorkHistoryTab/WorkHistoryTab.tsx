import { FC, memo } from "react";

import { useAppDispatch, useAppSelector } from "hooks/redux";

import Button from "@mui/material/Button";

import { setWorkHistoryTab } from "redux/features/workerSlice";

import { selectWorkHistoryTab } from "redux/features/workerSlice/selectors";
import { tabSx } from "./styledComponents";

const WorkHistoryTab: FC<{ tab: string }> = ({ tab }) => {
  const dispatch = useAppDispatch();

  const workerHistoryTab = useAppSelector(selectWorkHistoryTab);

  const handleOnClick = () => {
    dispatch(setWorkHistoryTab(tab));
  };

  return (
    <Button sx={tabSx} onClick={handleOnClick} disabled={tab === workerHistoryTab}>
      {tab}
    </Button>
  );
};

const memoizedWorkHistoryTab = memo(WorkHistoryTab);

export default memoizedWorkHistoryTab;
