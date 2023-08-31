import { FC } from "react";

import RequestPageIcon from "@mui/icons-material/RequestPage";

import EmailIcon from "images/SvgIcons/EmailIcon";
import MoneyIcon from "images/SvgIcons/MoneyIcon";
import PhoneIcon from "images/SvgIcons/PhoneIcon";

import { themeColors } from "theme/colors";

import { readablePhoneNumber } from "utils/workerUtils";

import { ReadableWorkerFields, readableTaxElections } from "constants/workers";

export const WorkerDetailsDisplay: Array<{
  label: string;
  Icon: FC;
  workerKey: string;
  value?: (worker: any) => any;
}> = [
  {
    label: ReadableWorkerFields["desiredRate"],
    Icon: MoneyIcon,
    workerKey: "workerPreference",
    value: (worker) => `$${worker.workerPreference.desiredRate} / hr`
  },
  {
    label: ReadableWorkerFields["emailAddress"],
    Icon: EmailIcon,
    workerKey: "emailAddress",
    value: (worker) => worker.emailAddress
  },
  {
    label: ReadableWorkerFields["phoneNumber"],
    Icon: PhoneIcon,
    workerKey: "phoneNumber",
    value: (worker) => readablePhoneNumber(worker.phoneNumber)
  },
  {
    label: ReadableWorkerFields["taxElection"],
    Icon: () => <RequestPageIcon sx={{ color: themeColors.text.Gray }} />,
    workerKey: "taxElection",
    value: (worker) => readableTaxElections[worker.taxElection]
  }
];
