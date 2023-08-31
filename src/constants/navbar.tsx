import PaidIcon from "@mui/icons-material/Paid";
import SmsIcon from "@mui/icons-material/Sms";
import BarChartIcon from "@mui/icons-material/BarChart";
import ConstructionIcon from "@mui/icons-material/Construction";

import WorkforceIcon from "images/SvgIcons/Workforce";
import AccountManagerIcon from "images/SvgIcons/AccountManager";
import RecruiterIcon from "images/SvgIcons/Recruiter";
import AdminIcon from "images/SvgIcons/Admin";

import { INavbarOptionProps } from "components/NavbarOption/NavbarOption";

export const navbarOptions: INavbarOptionProps[] = [
  {
    OptionIcon: WorkforceIcon,
    optionName: "Workforce",
    optionRoute: "/workers"
  },
  {
    OptionIcon: AccountManagerIcon,
    optionName: "Account Manager",
    optionRoute: "/requisitions"
  },
  {
    OptionIcon: RecruiterIcon,
    optionName: "Recruiter",
    optionRoute: "/jobs"
  },
  {
    OptionIcon: AdminIcon,
    optionName: "Admin",
    last: true
  }
];

export const adminOptions: INavbarOptionProps[] = [
  {
    OptionIcon: SmsIcon,
    optionName: "SMS",
    optionRoute: "/sms"
  },
  {
    OptionIcon: PaidIcon,
    optionName: "Worker's Compensation",
    optionRoute: "/wc"
  },
  {
    OptionIcon: ConstructionIcon,
    optionName: "Trades",
    optionRoute: "/trades"
  },
  {
    OptionIcon: BarChartIcon,
    optionName: "Metrics",
    optionRoute: "/metrics"
  }
];
