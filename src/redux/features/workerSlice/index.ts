import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { uniqBy } from "lodash";

import { createCurrentWorkHistories } from "utils/workerUtils";
import { parsePhoneString } from "utils/stringUtils";

import initialState from "./initialState";

interface PropertyValuePayload {
  property: string;
  value: any;
  index?: number;
}

interface AddressPayload {
  currentAddress: string;
  latitude: number;
  longitude: number;
}

// Slice
const workerSlice = createSlice({
  name: "worker",
  initialState,
  reducers: {
    // Set Reducers
    setWorkerLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setWorkerError: (state, { payload }: PayloadAction<PropertyValuePayload>) => {
      state.errors[payload.property] = payload.value;
    },
    setInitialWorker: (state, { payload }: PayloadAction<any>) => {
      state.workerExperiencesToDelete = [];
      state.skillsToAdd = [];
      state.skillsToDelete = [];
      state.workerEditMode = false;

      state.worker = payload;
      state.workHistory = createCurrentWorkHistories(state.workHistoryTab, payload.workerHistories);
      state.workerUpdates = {
        firstName: payload.firstName,
        lastName: payload.lastName,
        emailAddress: payload.emailAddress,
        phoneNumber: payload.phoneNumber
      };
      if (payload.workerPreference) {
        state.workerPreference = {
          desiredRate: payload.workerPreference.desiredRate || 0,
          distanceToWork: payload.workerPreference.distanceToWork || 0,
          jobTypes: payload.workerPreference.jobTypes || []
        };
        state.desiredRate = payload.workerPreference.desiredRate || 0;
      }
      if (payload.workerExperiences) {
        state.workerExperiences = payload.workerExperiences || [];
      }
      if (payload.workerSkills) {
        state.workerSkills = payload.workerSkills.reduce((acc, next) => {
          acc.push({
            label: `${next.skill.trade.tradeName} - ${next.skill.skillName}`,
            skillId: next.skill.id,
            skillName: next.skill.skillName,
            tradeId: next.skill.trade.id,
            tradeName: next.skill.trade.tradeName
          });
          return acc;
        }, []);
        state.workerTrades = uniqBy(
          payload.workerSkills.reduce((acc, next) => {
            acc.push({ tradeId: next.skill.trade.id, tradeName: next.skill.trade.tradeName });
            return acc;
          }, []),
          (trade) => trade.tradeId
        );
      }
      if (payload.workerLanguages) {
        state.workerLanguages = payload.workerLanguages.map((workerLanguage) => ({
          id: workerLanguage.id,
          isPrimary: workerLanguage.isPrimary,
          languageId: workerLanguage.language.id,
          languageName: workerLanguage.language.languageName
        }));
        state.primaryLanguage = payload.workerLanguages.find(
          (language) => language.isPrimary
        )?.language.languageName;
        state.additionalLanguages = payload.workerLanguages
          .filter((workerLanguage) => !workerLanguage.isPrimary)
          .map((workerLanguage) => workerLanguage.language.languageName);
        state.languageSelections = state.allLanguages
          .filter((language) => language.languageName !== state.primaryLanguage)
          .map((language) => language.languageName);
      }
    },
    setWorkHistoryTab: (state, { payload }: PayloadAction<string>) => {
      state.workHistoryTab = payload;
      state.workHistory = createCurrentWorkHistories(payload, state.worker.workerHistories);
    },
    setWorkHistory: (state, { payload }: PayloadAction<any>) => {
      state.workHistory = createCurrentWorkHistories(state.workHistoryTab, payload);
    },
    setWorkerEditMode: (state, { payload }: PayloadAction<boolean>) => {
      state.workerEditMode = payload;
    },
    setAllSkills: (state, { payload }: PayloadAction<any>) => {
      state.allSkills = payload;
    },
    setWorkerSkills: (
      state,
      { payload }: PayloadAction<{ workerSkills: any[]; skillsToAdd: any[] }>
    ) => {
      payload.skillsToAdd.forEach((skill) => {
        const skillToDelete = state.skillsToDelete.findIndex((deletion) => deletion === skill);
        if (skillToDelete !== -1) {
          state.skillsToDelete = state.skillsToDelete.splice(skillToDelete, 1);
        }
      });
      state.skillsToAdd = payload.skillsToAdd;
      state.workerSkills = payload.workerSkills;
    },
    setAllLanguages: (state, { payload }: PayloadAction<any[]>) => {
      state.allLanguages = payload;
      payload.forEach((language) => {
        state.languageSelections.push(`${language.languageName}`);
      });
    },
    setWorkerAddress: (state, { payload }: PayloadAction<AddressPayload>) => {
      state.worker.formattedAddress = payload.currentAddress;
      state.worker.latitude = payload.latitude;
      state.worker.longitude = payload.longitude;
    },
    // Update Reducers
    updateWorkerProperty: (state, { payload }: PayloadAction<PropertyValuePayload>) => {
      if (payload.property === "phoneNumber") {
        state.workerUpdates[payload.property] = parsePhoneString(payload.value);
      } else {
        state.workerUpdates[payload.property] = payload.value;
      }
    },
    updateWorkerDesiredRate: (state, { payload }) => {
      state.desiredRate = payload;
    },
    updateSkillsToDelete: (state, { payload }: PayloadAction<string>) => {
      for (let i = 0; i < state.workerSkills.length; i++) {
        if (state.workerSkills[i].skillId === payload) {
          const cancelAddSkill = state.skillsToAdd.findIndex(
            (skillId) => skillId === state.workerSkills[i].skillId
          );
          if (cancelAddSkill !== -1) {
            state.skillsToAdd.splice(cancelAddSkill, 1);
          }
          const skillToDelete = state.worker.workerSkills.findIndex(
            (workerSkill) => workerSkill.skill.id === state.workerSkills[i].skillId
          );
          if (skillToDelete !== -1) {
            state.skillsToDelete.push(state.worker.workerSkills[skillToDelete].skill.id);
          }
          state.workerSkills.splice(i, 1);
          break;
        }
      }
    },
    updateWorkerExperience: (state, { payload }: PayloadAction<PropertyValuePayload>) => {
      if (state.workerExperiences[payload.index].id) {
        state.workerExperiences[payload.index].updated = true;
      }
      state.workerExperiences[payload.index][payload.property] = payload.value;
    },
    updateAddWorkerExperience: (state, { payload }: PayloadAction<any>) => {
      state.workerExperiences.push(payload);
    },
    updateRemoveWorkerExperience: (state, { payload }: PayloadAction<number>) => {
      const deletedExperience = state.workerExperiences.splice(payload, 1);
      if (!deletedExperience[0].new) state.workerExperiencesToDelete.push(deletedExperience[0].id);
    },
    updateWorkerPreference: (state, { payload }: PayloadAction<PropertyValuePayload>) => {
      state.workerPreference[payload.property] = payload.value;
    },
    updateLanguages: (state, { payload }: PayloadAction<PropertyValuePayload>) => {
      state.languageSelections = state.allLanguages.map((language) => language.languageName);
      state[payload.property] = payload.value;
      if (payload.property === "primaryLanguage") {
        const foundAdditionalLanguage = state.additionalLanguages.findIndex(
          (language) => language === payload.value
        );
        if (foundAdditionalLanguage !== -1) {
          state.additionalLanguages.splice(foundAdditionalLanguage, 1);
        }
        const foundLanguage = state.languageSelections.findIndex(
          (language) => language === payload.value
        );
        if (foundLanguage !== -1) {
          state.languageSelections.splice(foundLanguage, 1);
        }
        const languageExists = state.workerLanguages.findIndex(
          (language) => language.languageName === payload.value
        );
        const findOldPrimary = state.workerLanguages.findIndex((language) => language.isPrimary);
        if (findOldPrimary !== -1) {
          if (state.workerLanguages[findOldPrimary].new) {
            state.workerLanguages.splice(findOldPrimary, 1);
          } else {
            state.workerLanguages[findOldPrimary].isPrimary = false;
            state.workerLanguages[findOldPrimary]["updated"] = true;
          }
        }
        if (languageExists !== -1) {
          state.workerLanguages[languageExists].isPrimary = true;
          if (!state.workerLanguages[languageExists].new) {
            state.workerLanguages[languageExists]["updated"] = true;
            if (state.workerLanguages[languageExists].deleted) {
              state.workerLanguages[languageExists].deleted = false;
            }
          }
        } else {
          state.workerLanguages.push({
            languageName: payload.value,
            languageId: state.allLanguages[foundLanguage].languageId,
            isPrimary: true,
            new: true
          });
        }
      } else {
        payload.value.forEach((language) => {
          const languageExists = state.workerLanguages.findIndex(
            (workerLanguage) => workerLanguage.languageName === language
          );
          if (languageExists !== -1) {
            if (state.workerLanguages[languageExists].updated) {
              state.worker.workerLanguages[languageExists].updated = false;
            }
            if (state.workerLanguages[languageExists].deleted) {
              state.worker.workerLanguages[languageExists].deleted = false;
            }
          } else {
            const foundLanguage = state.allLanguages.findIndex(
              (selection) => selection.languageName === language
            );
            state.workerLanguages.push({
              languageName: language,
              languageId: state.allLanguages[foundLanguage].languageId,
              isPrimary: false,
              new: true
            });
          }
        });
      }
    },
    updateDeleteLanguage: (state, { payload }: PayloadAction<PropertyValuePayload>) => {
      const languageExists = state.workerLanguages.findIndex(
        (language) => language.languageName === payload.value
      );
      if (languageExists !== -1) {
        if (state.workerLanguages[languageExists].new) {
          state.workerLanguages.splice(languageExists, 1);
        } else {
          if (state.workerLanguages[languageExists].updated) {
            state.workerLanguages[languageExists]["updated"] = false;
          }
          state.workerLanguages[languageExists]["deleted"] = true;
        }
      }
      state[payload.property] = state[payload.property].filter(
        (language) => language !== payload.value
      );
    }
  }
});

// Actions - Reducer
export const {
  // Set Reducers
  setWorkerLoading,
  setWorkerError,
  setInitialWorker,
  setWorkHistoryTab,
  setWorkHistory,
  setWorkerEditMode,
  setWorkerAddress,
  setAllSkills,
  setAllLanguages,
  setWorkerSkills,
  // Update Reducers
  updateWorkerProperty,
  updateWorkerDesiredRate,
  updateSkillsToDelete,
  updateWorkerExperience,
  updateAddWorkerExperience,
  updateRemoveWorkerExperience,
  updateWorkerPreference,
  updateLanguages,
  updateDeleteLanguage
} = workerSlice.actions;

export default workerSlice.reducer;
