import { FC, MouseEventHandler } from "react";
import { SectionButton } from "./styledComponents";

interface DetailsEditButtonProps {
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const DetailsEditButton: FC<DetailsEditButtonProps> = ({ title, onClick, disabled }) => {
  return (
    <SectionButton disableElevation variant="outlined" onClick={onClick} disabled={disabled}>
      {title}
    </SectionButton>
  );
};

export default DetailsEditButton;
