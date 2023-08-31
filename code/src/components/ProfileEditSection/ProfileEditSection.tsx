import { Dispatch, FC, MouseEventHandler, PropsWithChildren, SetStateAction } from "react";

import Button from "@mui/material/Button";

import { useAppSelector } from "hooks/redux";

import { selectWorkerLoading } from "redux/features/workerSlice/selectors";

import { themeColors } from "theme/colors";
import textTheme from "theme/text";

import { Section, Header, HeaderButtonSx, CustomAccordion } from "./styledComponents";

interface IProfileEditSectionProps extends PropsWithChildren {
  title: string;
  detailNumber: number;
  openNumber: number;
  setOpenNumber: Dispatch<SetStateAction<number>>;
}

const ProfileEditSection: FC<IProfileEditSectionProps> = ({
  children,
  title,
  detailNumber,
  openNumber,
  setOpenNumber
}) => {
  const workerLoading = useAppSelector(selectWorkerLoading);

  const open = openNumber === detailNumber;

  const handleOnClick: MouseEventHandler<HTMLButtonElement> = () => {
    setOpenNumber(detailNumber);
  };

  return (
    <Section isOpen={open}>
      <Header>
        <span
          style={{
            color: themeColors.text.Black,
            ...textTheme.headings.h1.inlineStyle,
            userSelect: "none"
          }}
        >
          {title}
        </span>
        {!open && (
          <Button
            variant="contained"
            disableElevation
            sx={HeaderButtonSx}
            onClick={handleOnClick}
            disabled={workerLoading}
          >
            Edit
          </Button>
        )}
      </Header>
      <CustomAccordion isOpen={open}>{children}</CustomAccordion>
    </Section>
  );
};

export default ProfileEditSection;
