import { FC, useCallback, useContext, useMemo, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
// import { getCurrentUser } from "components/Auth/lib/cognito";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import LaborWorxLogo from "images/SvgIcons/LaborWorxLogo";
import Notification from "images/SvgIcons/Notification";

// import { AuthContext } from "components/Auth/context/authContext";
import NavbarOption from "components/NavbarOption";

import { themeColors } from "theme/colors";

import { adminOptions, navbarOptions } from "constants/navbar";

import textTheme from "theme/text";

import { NavbarContainer, NavbarLeftSector, NavbarRightSector } from "./styledComponents";

const AppNavbar: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const auth = useContext(AuthContext);
  // const user = getCurrentUser().getUsername();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = useCallback(
    (optionRoute) => {
      navigate(optionRoute);
      setAnchorEl(null);
    },
    [navigate]
  );

  const signOutClicked = () => {
    localStorage.removeItem("accessToken");
    // auth.signOut();
    // navigate("/");
  };

  const navAdminOptions = useMemo(
    () =>
      adminOptions.map(({ optionName, optionRoute, OptionIcon }) => (
        <MenuItem
          key={`${optionName}-option`}
          sx={{ width: "100%", height: "100%", padding: 2 }}
          onClick={() => handleNavigate(optionRoute)}
          selected={location.pathname.includes(optionRoute)}
          divider
        >
          <Icon
            component={OptionIcon}
            sx={{
              mr: 0.5,
              color: location.pathname.includes(optionRoute)
                ? themeColors.Blue
                : themeColors.text.Black
            }}
          />
          <span
            style={{
              color: location.pathname.includes(optionRoute)
                ? themeColors.Blue
                : themeColors.text.Black
            }}
          >
            {optionName}
          </span>
        </MenuItem>
      )),
    [location.pathname, handleNavigate]
  );

  return (
    <>
      <NavbarContainer>
        <NavbarLeftSector>
          <LaborWorxLogo style={{ marginRight: "40px" }} />
          {navbarOptions.map((option) => (
            <NavbarOption
              key={option.optionName}
              {...option}
              handleOpenMenu={option.optionName === "Admin" && handleOpenMenu}
            />
          ))}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{ ".MuiMenu-list": { padding: 0 } }}
            PaperProps={{
              elevation: 2
            }}
          >
            {navAdminOptions}
          </Menu>
        </NavbarLeftSector>
        <NavbarRightSector>
          <Badge sx={{ mx: 4, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Notification />
          </Badge>
          <AccountCircleIcon sx={{ mr: 1, color: themeColors.text.Gray }} fontSize="large" />
          <div style={{ ...textTheme.body.medium.inlineStyle, marginRight: 12 }}>josh.trinidad</div>
          <Divider
            orientation="vertical"
            sx={{ height: "60%", color: themeColors.background.Primary }}
          />
          <Button
            sx={{
              ...textTheme.body.medium.inlineStyle,
              color: themeColors.Blue,
              width: "72px",
              cursor: "pointer",
              marginLeft: "8px",
              padding: "4px",
              textTransform: "none"
            }}
            disabled
            onClick={signOutClicked}
          >
            Sign Out
          </Button>
        </NavbarRightSector>
      </NavbarContainer>
      <Outlet />
    </>
  );
};

export default AppNavbar;
