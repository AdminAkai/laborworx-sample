import { FC } from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import LocationIcon from "images/SvgIcons/LocationIcon";

import { useAppSelector } from "hooks/redux";

import { selectWorker, selectWorkerTrades } from "redux/features/workerSlice/selectors";

import { themeColors } from "theme/colors";
import textTheme from "theme/text";

import PersonalDetail from "components/PersonalDetail";
import SkillBadge from "components/SkillBadge";

import { WorkerDetailsDisplay } from "./lib";
import {
  AddressBackground,
  AddressSection,
  MainDetailSubtitle,
  MainDetailTitle,
  MainDetails,
  Section,
  SectionHeader,
  SkillSection,
  WorkerDetailsContainer
} from "./styledComponents";

const WorkerDetails: FC = () => {
  const worker = useAppSelector(selectWorker);
  const trades = useAppSelector(selectWorkerTrades);

  const renderPersonalDetail = WorkerDetailsDisplay.map((detail) => (
    <PersonalDetail
      key={detail.workerKey}
      Icon={detail.Icon}
      label={detail.label}
      value={worker[detail.workerKey] && detail.value(worker)}
    />
  ));

  return (
    <WorkerDetailsContainer>
      <MainDetails>
        <AccountCircleIcon sx={{ width: "80px", height: "80px", color: themeColors.text.Gray }} />
        <MainDetailTitle>
          {worker.firstName} {worker.lastName}
        </MainDetailTitle>
        <MainDetailSubtitle
          style={{
            ...textTheme.headings.h2.inlineStyle,
            color: themeColors.text.Gray,
            marginTop: "12px"
          }}
        >
          {trades.map((trade) => trade.tradeName).join(", ")}
        </MainDetailSubtitle>
      </MainDetails>
      <AddressSection>
        <AddressBackground>
          <LocationIcon style={{ width: "24px", height: "24px" }} />
          <span
            style={{
              ...textTheme.body.medium.inlineStyle,
              color: themeColors.text.Black,
              marginLeft: "8px"
            }}
          >
            {worker.formattedAddress}
          </span>
        </AddressBackground>
      </AddressSection>
      <Section>
        <SectionHeader>Personal Details</SectionHeader>
        {renderPersonalDetail}
      </Section>
      <Section>
        <SectionHeader>Skills</SectionHeader>
        <SkillSection>
          {worker.workerSkills.map((workerSkill) => (
            <SkillBadge key={workerSkill.id} skill={workerSkill.skill.skillName} />
          ))}
        </SkillSection>
      </Section>
    </WorkerDetailsContainer>
  );
};

export default WorkerDetails;
