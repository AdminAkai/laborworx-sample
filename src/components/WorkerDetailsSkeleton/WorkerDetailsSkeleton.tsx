import { FC } from "react";

import Skeleton from "@mui/material/Skeleton";

import LocationIcon from "images/SvgIcons/LocationIcon";

import { themeColors } from "theme/colors";
import textTheme from "theme/text";

import {
  AddressBackground,
  AddressSection,
  MainDetails,
  Section,
  SectionHeader,
  SkillSection,
  WorkerDetailsContainer
} from "./styledComponents";

const WorkerDetailsSkeleton: FC = () => {
  const renderPersonalDetailSkeletons = [null, null, null, null].map((_, i) => (
    <Skeleton key={`null-${i}`} variant="text" width="100%" />
  ));

  const renderSkillBadgeSkeletons = [null, null, null].map((_, i) => (
    <Skeleton
      key={`null-${i}`}
      sx={{ borderRadius: "24px", marginRight: "8px", marginTop: "16px" }}
      variant="rounded"
      width="74px"
      height="30px"
    />
  ));

  return (
    <WorkerDetailsContainer>
      <MainDetails>
        <Skeleton variant="circular" width="80px" height="80px" />
        <span
          style={{
            ...textTheme.headings.h2.inlineStyle,
            marginTop: "8px",
            color: themeColors.text.Black
          }}
        >
          <Skeleton variant="text" width="108px" height="24px" />
        </span>
        <span
          style={{
            ...textTheme.headings.h2.inlineStyle,
            color: themeColors.text.Gray,
            marginTop: "16px"
          }}
        >
          <Skeleton variant="text" width="176px" height="24px" />
        </span>
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
            <Skeleton variant="text" width="176px" height="56px" />
          </span>
        </AddressBackground>
      </AddressSection>
      <Section>
        <SectionHeader>Personal Details</SectionHeader>
        {renderPersonalDetailSkeletons}
      </Section>
      <Section>
        <SectionHeader>Skills</SectionHeader>
        <SkillSection>{renderSkillBadgeSkeletons}</SkillSection>
      </Section>
    </WorkerDetailsContainer>
  );
};

export default WorkerDetailsSkeleton;
