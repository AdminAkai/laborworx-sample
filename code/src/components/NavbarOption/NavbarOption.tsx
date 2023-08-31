import { FC, SVGProps, memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import textTheme from "theme/text";
import { themeColors } from "theme/colors";

import { adminOptions } from "constants/navbar";

import { NavbarOptionContainer } from "./styledComponents";

export interface INavbarOptionProps {
  OptionIcon: FC<SVGProps<SVGSVGElement>>;
  optionName: string;
  optionRoute?: string;
  handleOpenMenu?: (event: React.MouseEvent<HTMLElement>) => void;
  last?: boolean;
}

const NavbarOption: FC<INavbarOptionProps> = ({
  OptionIcon,
  optionName,
  optionRoute,
  handleOpenMenu,
  last
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (handleOpenMenu) {
      handleOpenMenu(event);
      return;
    }
    navigate(optionRoute);
  };

  const currentColor =
    location.pathname.includes(optionRoute) ||
    (adminOptions.some((option) => location.pathname.includes(option.optionRoute)) &&
      optionName === "Admin")
      ? themeColors.Blue
      : themeColors.text.Gray;

  return (
    <NavbarOptionContainer
      last={last}
      $selected={
        location.pathname.includes(optionRoute) ||
        (adminOptions.some((option) => location.pathname.includes(option.optionRoute)) &&
          optionName === "Admin")
      }
      onClick={handleClick}
    >
      <OptionIcon color={currentColor} />
      <p
        style={{
          margin: "0 0 0 8px",
          ...textTheme.body.large.inlineStyle,
          color: currentColor
        }}
      >
        {optionName}
      </p>
    </NavbarOptionContainer>
  );
};

export default memo(NavbarOption);
