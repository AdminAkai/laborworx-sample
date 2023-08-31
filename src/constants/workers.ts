import { InputMaybe, Scalars } from "types";
import { emailRegex, phoneRegex } from "./validation";

export enum TaxElectionEnum {
  Is1099 = "IS1099",
  IsW2 = "IS_W2"
}

export type WorkerInput = {
  availableToWork?: InputMaybe<Scalars["Boolean"]>;
  avatarId?: InputMaybe<Scalars["ID"]>;
  bootSize?: InputMaybe<Scalars["String"]>;
  city?: InputMaybe<Scalars["String"]>;
  completedDrugScreen?: InputMaybe<Scalars["Boolean"]>;
  createdAt?: InputMaybe<Scalars["AWSDateTime"]>;
  dateNeedingEmployment?: InputMaybe<Scalars["AWSDate"]>;
  emailAddress?: InputMaybe<Scalars["String"]>;
  firstName: Scalars["String"];
  formattedAddress?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  is1099?: InputMaybe<Scalars["Boolean"]>;
  isAssociated?: InputMaybe<Scalars["Boolean"]>;
  isMilitary?: InputMaybe<Scalars["Boolean"]>;
  isNotifiable?: InputMaybe<Scalars["Boolean"]>;
  isRegistered?: InputMaybe<Scalars["Boolean"]>;
  isSuspended?: InputMaybe<Scalars["Boolean"]>;
  isW2?: InputMaybe<Scalars["Boolean"]>;
  languages?: InputMaybe<Scalars["String"]>;
  lastLocation?: InputMaybe<Scalars["String"]>;
  lastName: Scalars["String"];
  latitude?: InputMaybe<Scalars["Float"]>;
  longitude?: InputMaybe<Scalars["Float"]>;
  newLocation?: InputMaybe<Scalars["String"]>;
  notInterestedCounter?: InputMaybe<Scalars["Int"]>;
  phoneNumber: Scalars["String"];
  referralPhonenumber?: InputMaybe<Scalars["String"]>;
  state?: InputMaybe<Scalars["String"]>;
  streetAddress?: InputMaybe<Scalars["String"]>;
  taxElection?: InputMaybe<TaxElectionEnum>;
  updatedAt?: InputMaybe<Scalars["AWSDateTime"]>;
  verificationStatus?: InputMaybe<Scalars["String"]>;
  willingToLead?: InputMaybe<Scalars["Boolean"]>;
  willingToTravel?: InputMaybe<Scalars["Boolean"]>;
  workerPreferenceId?: InputMaybe<Scalars["ID"]>;
  yearsInTrade?: InputMaybe<Scalars["String"]>;
  zipcode?: InputMaybe<Scalars["String"]>;
};

interface IWorkerFormFields {
  name: string;
  label: string;
  id?: string;
  labelId?: string;
  valueAsNumber?: boolean;
  helperText?: string;
  pattern?: RegExp;
  connected?: IWorkerFormFields;
  maxLength?: number;
  editOverride?: boolean;
}

export interface CustomWorkerInput extends WorkerInput {
  trade?: string;
  skill?: string;
  desiredRate?: number;
}

export const baseWorker: any = {
  id: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  emailAddress: "",
  isAssociated: false,
  referralPhonenumber: "",
  yearsInTrade: "",
  taxElection: null,
  availableToWork: false,
  notInterestedCounter: 0,
  streetAddress: "",
  city: "",
  state: "",
  zipcode: "",
  willingToLead: false,
  willingToTravel: false,
  createdAt: "",
  updatedAt: "",
  isMilitary: false,
  workerSkills: []
  // bootSize: ""
};

export const workerUpdateInput = [
  "id",
  "firstName",
  "lastName",
  "phoneNumber",
  "emailAddress",
  "referralPhonenumber",
  "isMilitary",
  "formattedAddress",
  "latitude",
  "longitude",
  "lastLocation",
  "newLocation",
  "verificationStatus",
  "industry",
  "trade",
  "yearsInTrade",
  "languages",
  "dateNeedingEmployment",
  "completedDrugScreen",
  "willingToLead",
  "willingToTravel",
  "availableToWork",
  "taxElection",
  "workerPreferences.desiredRate",
  "bootSize"
];

export const workerDisplayKeys = [
  "firstName",
  "lastName",
  "phoneNumber",
  "emailAddress",
  "createdAt",
  "isMilitary",
  "formattedAddress",
  "latitude",
  "longitude",
  "yearsInTrade",
  "workerPreferences.desiredRate",
  "taxElection",
  "workerPreferences.desiredRate",
  "bootSize",
  "referralPhonenumber",
  "willingToLead",
  "willingToTravel"
];

export const WorkersFilters = {
  suspendedFilter: {
    isSuspended: { equalTo: true }
  },
  associatedFilter: {
    and: [
      { isAssociated: { equalTo: true } },
      { isSuspended: { equalTo: false } },
      { availableToWork: { equalTo: false } }
    ]
  },
  unaffiliatedFilter: {
    and: [
      { isSuspended: { equalTo: false } },
      { availableToWork: { equalTo: false } },
      { isAssociated: { equalTo: false } }
    ]
  },
  workforceFilter: {
    and: [{ availableToWork: { equalTo: true } }, { isSuspended: { equalTo: false } }]
  }
};

export const ReadableWorkerFields = {
  firstName: "First Name",
  lastName: "Last Name",
  phoneNumber: "Phone Number",
  emailAddress: "Email",
  isMilitary: "Military",
  formattedAddress: "Address",
  industry: "Industry",
  yearsInTrade: "Years in Trade",
  createdAt: "Date Registered",
  willingToLead: "Willing to Lead",
  willingToTravel: "Willing to Travel",
  desiredRate: "Min Hourly Rate",
  taxElection: "Tax Election",
  bootSize: "Boot Size (Men's Sizes)",
  referralPhonenumber: "Referral Phone Number",
  workerSkills: "Skills"
};

export const WorkerFormFields: IWorkerFormFields[] = [
  {
    name: "firstName",
    label: "First Name"
  },
  {
    name: "lastName",
    label: "Last Name"
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    helperText: "A valid phone number is required - Ex: XXXXXXXXXX",
    pattern: phoneRegex,
    maxLength: 10
  },
  {
    name: "emailAddress",
    label: "Email Address",
    helperText: "A valid email address is required - Ex: name@company.com",
    pattern: emailRegex,
    editOverride: true
  },
  {
    name: "isReferred",
    label: "Were you referred?",
    connected: {
      name: "referralPhonenumber",
      label: "Referral Phone Number",
      helperText: "A valid phone number is required - Ex: XXXXXXXXXX",
      pattern: phoneRegex
    }
  },
  {
    name: "isMilitary",
    label: "Have you served in the US Military?"
  },
  {
    name: "trade",
    label: "Trade",
    labelId: "trade-label",
    id: "trade-label",
    helperText: "Trade is required"
  },
  {
    name: "skill",
    label: "Skill",
    labelId: "skill-label",
    id: "skill-label",
    helperText: "Skill is required"
  },
  {
    name: "yearsInTrade",
    label: "Years In Trade",
    labelId: "yrs-in-trade-label",
    id: "yrs-in-trade-label",
    helperText: "Years In Trade is required"
  },
  {
    name: "taxElection",
    label: "Tax Election",
    labelId: "tax-election-label",
    id: "tax-election-label",
    helperText: "tax election is required"
  },
  {
    name: "desiredRate",
    label: "Preferred Hourly Rate",
    valueAsNumber: true
  },
  {
    name: "formattedAddress",
    label: "Address",
    helperText: "Address is required",
    editOverride: true
  },
  {
    name: "bootSize",
    label: "Boot Size (Men’s sizes)"
  },
  {
    name: "willingToTravel",
    label: "Willing To Travel?"
  },
  {
    name: "willingToLead",
    label: "Willing To Lead?"
  }
];

export const yearsInTradeOptions: string[] = [
  "Just started",
  "1-3 years",
  "3-5 years",
  "5-10 years",
  "10+ years"
];

export const bootSizeOptions: string[] = [
  "4",
  "4.5",
  "5",
  "5.5",
  "6",
  "6.5",
  "7",
  "7.5",
  "8",
  "8.5",
  "9",
  "9.5",
  "10",
  "10.5",
  "11",
  "11.5",
  "12",
  "12.5",
  "13"
];

export const WorkerNoteTopics: object = {
  TGT2M: "Tardy Greater than 20 Minutes",
  AWC: "Absent with Call",
  AWOC: "Absent without Call",
  SVF: "Near Miss / Safety Violation (Flagrant)",
  SVNF: "Near Miss / Safety Violation (Non Flagrant)",
  UEL: "Unauthorized Early Leaving",
  CPV: "Company Policy Violation",
  SSW: "Substandard Work",
  VSR: "Violation of Safety Rules",
  IBTC: "Inappropriate Behavior Towards Customer",
  I: "Insubordination",
  O: "Other",
  ATS: "Adding to Suspended",
  ATWF: "Adding to worker force",
  NG: "Not given"
};

export const WorkerHistoryTypes: object = {
  R: "Reinstated",
  WN: "Worker Note",
  WD: "Dismissal",
  S: "Suspended",
  JA: "Job Assigned",
  NI: "Not Interested Job",
  JI: "Job Invited"
};

export interface IDeleteWorkerReasons {
  QWN: string;
  QWON: string;
  FWOC: string;
  FWC: string;
  AWC: string;
  AWOC: string;
  LO: string;
}
export const DeleteWorkerReasons: IDeleteWorkerReasons = {
  QWN: "Quit With Notice",
  QWON: "Quit Without Notice",
  FWOC: "Fired Without Cause",
  FWC: "Fired W/ Cause",
  AWC: "Absent W/ Call",
  AWOC: "Absent Without Call",
  LO: "Layoff"
};

export const readableWorkerTopics = {
  ...DeleteWorkerReasons,
  ...WorkerNoteTopics,
  ...WorkerHistoryTypes,
  ATWF: "Added to Workforce",
  ATS: "Added to Suspended"
};

export const subMenuList = (): Array<string> => ["FWC", "QWN", "LO"];

export const deleteReasonsSub = {
  FWC: [
    "Poor Work Performance",
    "Misconduct",
    "Chronic Lateness/ Absence",
    "Company Policy Violations",
    "Drug or Alcohol Use at Work",
    "Personal Use of Company Property",
    "Theft or Property Damage",
    "Falsifying Company Records",
    "Inappropriate Use of Social Media",
    "Insubordination",
    "E-Verification Failed"
  ],
  QWN: [
    "Pay was too low",
    "Working too few hours",
    "Working too many hours",
    "No advancement opportunities",
    "Family Emergency",
    "Not enough flexibility in hours",
    "Poor management",
    "Poor workplace culture",
    "Better Opportunity",
    "Health Reasons"
  ],
  LO: [
    "Cutting Costs",
    "Lack of Funds",
    "Lack of Work",
    "Termination of Project",
    "E-Verification Pending",
    "Insubordination"
  ]
};

export const taxElectionOptions: string[] = [TaxElectionEnum.Is1099, TaxElectionEnum.IsW2];

export const readableTaxElections = {
  IS1099: "1099",
  IS_W2: "W2"
};

export const taxElectionsToDB = {
  1099: "IS1099",
  W2: "IS_W2"
};

export enum anticipatedHours {
  FORTY_TO_FORTY_NINE = "40-49",
  FIFTY_TO_FIFTY_NINE = "50-59",
  SIXTY_TO_SIXTY_NINE = "60-69",
  SEVENTY_PLUS = "70+"
}

export const workerHistoryTabs = ["All Jobs", "Active Jobs", "Past Active", "Accepted", "Benched"];

export const ReadableWorkerJobTypes = {
  CONTRACT: "Contract",
  TEMP_TO_PERM: "Temp to Perm",
  PERM: "Permanent"
};

export const jobTypeToDB = {
  Contract: "CONTRACT",
  "Temp to Perm": "TEMP_TO_PERM",
  Permanent: "PERM"
};
