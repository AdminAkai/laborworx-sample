import { FC } from "react";

import { themeColors } from "theme/colors";
import textTheme from "theme/text";

import { DetailIcon, PersonalDetailInfo, PersonalDetailItem } from "./styledComponents";

interface IPersonalDetailProps {
  label: string;
  Icon: any;
  value: string;
}

const PersonalDetail: FC<IPersonalDetailProps> = ({ label, Icon, value }) => {
  return (
    <PersonalDetailItem marginTop="16px">
      <DetailIcon>
        <Icon />
      </DetailIcon>
      <PersonalDetailInfo>
        <span style={{ ...textTheme.body.small.inlineStyle, color: themeColors.text.Gray }}>
          {label}
        </span>
        <span style={{ ...textTheme.body.medium.inlineStyle, color: themeColors.text.Black }}>
          {value}
        </span>
      </PersonalDetailInfo>
    </PersonalDetailItem>
  );
};

export default PersonalDetail;
