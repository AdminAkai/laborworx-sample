import { FC } from "react";
import { isEmpty } from "lodash";

import Skeleton from "@mui/material/Skeleton";

import RecruiterIcon from "images/SvgIcons/Recruiter";
import ExportIcon from "images/SvgIcons/ExportIcon";

import { themeColors } from "theme/colors";
import textTheme from "theme/text";

import { useAppDispatch, useAppSelector } from "hooks/redux";

import {
  selectWorkerEditMode,
  selectWorkerErrors,
  selectWorkerLoading,
  selectWorkerName
} from "redux/features/workerSlice/selectors";
import { setWorkerEditMode, setWorkerLoading } from "redux/features/workerSlice";
import { updateWorkerDetailsStart } from "redux/features/workerSlice/actions";

import {
  HeaderButton,
  HeaderContainer,
  HeaderLeftSector,
  HeaderRightSector,
  Subtitle
} from "./styledComponents";

const SectionHeader: FC<{ loading: boolean }> = ({ loading }) => {
  const dispatch = useAppDispatch();

  const workerName = useAppSelector(selectWorkerName);
  const workerEditMode = useAppSelector(selectWorkerEditMode);
  const workerLoading = useAppSelector(selectWorkerLoading);
  const workerErrors = useAppSelector(selectWorkerErrors);

  const handleOnClick = () => {
    if (!workerEditMode) {
      dispatch(setWorkerEditMode(!workerEditMode));
    } else {
      dispatch(updateWorkerDetailsStart());
    }
  };

  const handleSetLoading = () => {
    if (workerLoading) {
      dispatch(setWorkerLoading(false));
    } else {
      dispatch(setWorkerLoading(true));
    }
  };

  return (
    <HeaderContainer>
      <HeaderLeftSector>
        <span
          style={{
            ...textTheme.headings.h1.inlineStyle
          }}
        >
          Worker
        </span>
        <Subtitle>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: themeColors.text.Gray
            }}
          >
            <RecruiterIcon width="13" height="20" />
            <p style={{ marginLeft: "8px" }}>Workforce &nbsp;/&nbsp;</p>
          </span>
          &nbsp;
          <span
            style={{
              color: workerEditMode ? themeColors.text.Gray : themeColors.Blue,
              fontWeight: !workerEditMode && 600
            }}
          >
            {loading ? <Skeleton width="88px" height="24px" /> : workerName}
          </span>
          {workerEditMode && (
            <span style={{ color: themeColors.text.Gray }}>
              &nbsp;&nbsp;/&nbsp;&nbsp;
              <span style={{ color: themeColors.Blue, fontWeight: 600 }}>Edit Details</span>
            </span>
          )}
        </Subtitle>
      </HeaderLeftSector>
      {!workerEditMode ? (
        <HeaderButton
          $workerEditMode={false}
          variant="contained"
          disableElevation
          onClick={handleSetLoading}
        >
          {workerLoading ? "Remove Loading State" : "Enable Loading State"}
        </HeaderButton>
      ) : null}
      <HeaderRightSector>
        <ExportIcon color={themeColors.text.Gray} />
        <span style={{ marginLeft: "8px", userSelect: "none" }}>Export Resume</span>
        <HeaderButton
          $workerEditMode={workerEditMode}
          variant={workerEditMode ? "outlined" : "contained"}
          disableElevation
          onClick={handleOnClick}
          disabled={
            loading ||
            workerLoading ||
            !isEmpty(Object.values(workerErrors).filter((value) => value))
          }
        >
          {workerEditMode ? "Save Details" : "Edit Details"}
        </HeaderButton>
      </HeaderRightSector>
    </HeaderContainer>
  );
};

export default SectionHeader;
