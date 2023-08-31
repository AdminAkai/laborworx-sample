import { createSelector } from "@reduxjs/toolkit";

import { ReadableWorkerJobTypes } from "constants/workers";

const selectWorkerSliceReducer = (state: any) => state.worker;

const formatLanguages = (workerLanguages: any) => {
  let formattedLanguages = [];
  workerLanguages.forEach((workerLanguage) => {
    formattedLanguages.push(
      `${workerLanguage.languageName}${workerLanguage.isPrimary ? " (Primary)" : ""}`
    );
  });
  return formattedLanguages.sort();
};

export const selectWorkerLoading = createSelector(
  [selectWorkerSliceReducer],
  (state) => state.loading
);

export const selectWorkerErrors = createSelector(
  [selectWorkerSliceReducer],
  (state) => state.errors
);

export const selectWorker = createSelector([selectWorkerSliceReducer], (state) => state.worker);

export const selectWorkerId = createSelector(
  [selectWorkerSliceReducer],
  (state) => state.worker.id
);

export const selectWorkerName = createSelector(
  [selectWorkerSliceReducer],
  (state) => `${state.worker.firstName} ${state.worker.lastName}`
);

export const selectWorkHistoryTab = createSelector(
  [selectWorkerSliceReducer],
  (state) => state.workHistoryTab
);

export const selectWorkHistories = createSelector(
  [selectWorkerSliceReducer],
  (state) => state.workHistory
);

export const selectWorkExperience = createSelector(
  [selectWorkerSliceReducer],
  (state) => state.workerExperiences
);

export const selectWorkerAdditionalDetailsDisplay = createSelector(
  [selectWorkerSliceReducer],
  (state) => {
    const formattedJobTypes = [];
    const formattedDistanceToWork = [];
    state.worker.workerPreference?.jobTypes?.forEach((jobType: any) => {
      formattedJobTypes.push(ReadableWorkerJobTypes[jobType]);
    });

    formattedDistanceToWork.push(`${state.workerPreference.distanceToWork} miles`);

    return [
      { label: "Job Types", value: formattedJobTypes.join(", ") },
      { label: "Willing to travel", value: formattedDistanceToWork.join(", ") }
    ];
  }
);

export const selectWorkerLanguages = createSelector([selectWorkerSliceReducer], (state) =>
  formatLanguages(state.workerLanguages).join(", ")
);

export const selectWorkerEditMode = createSelector(
  [selectWorkerSliceReducer],
  (state) => state.workerEditMode
);

export const selectWorkerAndUpdates = createSelector([selectWorkerSliceReducer], (state) => ({
  workerId: state.worker.id,
  updates: state.workerUpdates,
  preferenceId: state.worker.workerPreference && state.worker.workerPreference.id,
  workerPreference: state.workerPreference,
  skillsToAdd: state.skillsToAdd,
  skillsToDelete: state.skillsToDelete,
  workerExperiences: state.workerExperiences,
  workerExperiencesToDelete: state.workerExperiencesToDelete,
  workerLanguages: state.workerLanguages
}));

export const selectAllSkills = createSelector(
  [selectWorkerSliceReducer],
  (state) => state.allSkills
);

export const selectWorkerTrades = createSelector(
  [selectWorkerSliceReducer],
  (state) => state.workerTrades
);

export const selectWorkerSkillsForInput = createSelector([selectWorkerSliceReducer], (state) => ({
  oldWorkerSkills: state.worker.workerSkills.map((skill) => skill.skill.id),
  currentWorkerSkills: state.workerSkills.map((skill) => skill.label)
}));

export const selectAdditionalDetailsData = createSelector([selectWorkerSliceReducer], (state) => {
  const distanceToWork = state.worker.workerPreference.distanceToWork;
  return {
    primaryLanguage: state.primaryLanguage,
    additionalLanguages: state.additionalLanguages,
    distanceToWork,
    jobTypes: state.workerPreference.jobTypes,
    primaryLanguageSelections: state.languageSelections,
    additionalLanguageSelections: state.languageSelections.filter(
      (language) => language !== state.primaryLanguage
    )
  };
});
