import { FC } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";

import { themeColors } from "theme/colors";
import textTheme from "theme/text";

import {
  ActiveStatusBadge,
  LeftSector,
  StatusRoleContainer,
  SubtitleOne,
  SubtitleTwo,
  WorkHistoryCardContainer
} from "./styledComponents";

interface IWorkHistoryCardProps {
  isActive?: boolean;
  skill: string;
  jobName: string;
  jobLength: string;
  jobId: string;
}

const WorkHistoryCard: FC<IWorkHistoryCardProps> = ({
  isActive,
  skill,
  jobName,
  jobLength,
  jobId
}) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/jobs/${jobId}`);
  };

  return (
    <WorkHistoryCardContainer>
      <LeftSector>
        <StatusRoleContainer>
          <ActiveStatusBadge isActive={isActive}>
            {isActive ? "Active on Job" : "Not Active on Job"}
          </ActiveStatusBadge>
          <span
            style={{
              color: themeColors.text.Black,
              opacity: "90%",
              ...textTheme.body.medium.inlineStyle
            }}
          >
            {skill}
          </span>
        </StatusRoleContainer>
        <SubtitleOne>{jobName}</SubtitleOne>
        <SubtitleTwo>{jobLength}</SubtitleTwo>
      </LeftSector>
      <Button
        variant="contained"
        disableElevation
        sx={{
          backgroundColor: themeColors.Blue,
          textTransform: "none",
          px: "24px",
          py: "12px",
          ...textTheme.body.small.inlineStyle
        }}
        onClick={handleOnClick}
      >
        Job Details
      </Button>
    </WorkHistoryCardContainer>
  );
};

export default WorkHistoryCard;
