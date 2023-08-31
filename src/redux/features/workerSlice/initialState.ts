import { baseWorker, workerHistoryTabs } from "constants/workers";

type JobTypeEnum = "FULL_TIME" | "PART_TIME" | "TEMP_TO_PERM" | "CONTRACT";

export interface WorkerState {
  loading: boolean;
  errors: any;
  worker: any;
  workHistoryTab: string;
  workHistory: any[];
  workerEditMode: boolean;
  workerUpdates: {};
  desiredRate: string | number;
  workerPreference: {
    desiredRate?: string | number;
    distanceToWork?: string | number;
    jobTypes?: JobTypeEnum;
  };
  workerExperiences: any[];
  workerExperiencesToDelete: any[];
  workerTrades: any[];
  workerSkills: any[];
  allSkills: allSkillsArray[];
  skillsToAdd: string[];
  skillsToDelete: string[];
  workerLanguages: any[];
  primaryLanguage: string;
  additionalLanguages: any[];
  allLanguages: allLanguagesArray[];
  languageSelections: string[];
}

export interface allSkillsArray {
  skillId: string;
  skillName: string;
  tradeId: string;
  tradeName: string;
}

export interface allLanguagesArray {
  languageId: string;
  languageName: string;
}

// Initial State
const initialState: WorkerState = {
  loading: false,
  errors: {},
  worker: baseWorker,
  workHistoryTab: workerHistoryTabs[0],
  workHistory: [],
  workerEditMode: false,
  workerUpdates: {
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: ""
  },
  desiredRate: "",
  workerPreference: {},
  workerExperiences: [],
  workerExperiencesToDelete: [],
  workerTrades: [],
  workerSkills: [],
  allSkills: [],
  skillsToAdd: [],
  skillsToDelete: [],
  workerLanguages: [],
  allLanguages: [],
  languageSelections: [],
  primaryLanguage: "",
  additionalLanguages: []
};

export default initialState;
