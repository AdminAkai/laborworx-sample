import { isEmpty } from "lodash";

// import { currentAuthObject } from "graphql/Apollo";
import {
  updateWorker,
  updateWorkerPreferenceNR,
  createWorkerSkillNR,
  deleteWorkerSkillBySkillIdAndWorkerId,
  deleteWorkerExperience,
  createWorkerExperience,
  updateWorkerExperience,
  updateWorkerLanguage,
  createWorkerLanguage,
  deleteWorkerLanguage
} from "graphql/custom/custom-mutations";

// import { isPhoneUnique } from "utils/validationUtils";

/* 
  Saving worker details function, runs through all the mutations necessary to update Worker, WorkerPreference, WorkerSkills, WorkerExperiences, and WorkerLanguages
  No return is needed as the query hook will refetch the worker after saga exits and switches Worker Profile back to view mode 
*/
export const saveWorkerDetails = async ([
  {
    workerId,
    updates,
    preferenceId,
    workerPreference,
    skillsToAdd,
    skillsToDelete,
    workerExperiences,
    workerExperiencesToDelete,
    workerLanguages
  }
]) => {
  // const client = currentAuthObject();
  // if (updates.phoneNumber) {
  //   const isUniqueNumber = await isPhoneUnique(updates.phoneNumber);
  //   if (!isUniqueNumber) {
  //     throw Error(
  //       "This phone number has already been used! Please change the number entered and try again."
  //     );
  //   }
  // }
  // if (preferenceId) {
  //   await client.mutate({
  //     mutation: updateWorkerPreferenceNR,
  //     variables: { input: { id: preferenceId, patch: { ...workerPreference } } }
  //   });
  // }
  // const allSkillUpdates = [];
  // if (!isEmpty(skillsToDelete)) {
  //   skillsToDelete.forEach((skillId) => {
  //     allSkillUpdates.push(
  //       client.mutate({
  //         mutation: deleteWorkerSkillBySkillIdAndWorkerId,
  //         variables: { input: { workerId, skillId } }
  //       })
  //     );
  //   });
  // }
  // if (!isEmpty(skillsToAdd)) {
  //   skillsToAdd.forEach((skillId) => {
  //     allSkillUpdates.push(
  //       client.mutate({
  //         mutation: createWorkerSkillNR,
  //         variables: { input: { workerSkill: { workerId, skillId } } }
  //       })
  //     );
  //   });
  // }
  // await Promise.all(allSkillUpdates);
  // const allExperienceUpdates = [];
  // const updatedExperiences = workerExperiences.filter((experience) => experience.updated);
  // const addedExperiences = workerExperiences.filter((experience) => experience.new);
  // if (!isEmpty(workerExperiencesToDelete)) {
  //   workerExperiencesToDelete.forEach((experienceId) => {
  //     allExperienceUpdates.push(
  //       client.mutate({
  //         mutation: deleteWorkerExperience,
  //         variables: { input: { id: experienceId } }
  //       })
  //     );
  //   });
  // }
  // if (!isEmpty(updatedExperiences)) {
  //   updatedExperiences.forEach((experience) => {
  //     allExperienceUpdates.push(
  //       client.mutate({
  //         mutation: updateWorkerExperience,
  //         variables: {
  //           input: {
  //             id: experience.id,
  //             patch: {
  //               employer: experience.employer,
  //               endDate: experience.endDate,
  //               id: experience.id,
  //               position: experience.position,
  //               startDate: experience.startDate,
  //               workerId
  //             }
  //           }
  //         }
  //       })
  //     );
  //   });
  // }
  // if (!isEmpty(addedExperiences)) {
  //   addedExperiences.forEach((experience) => {
  //     const formattedExperience = {
  //       workerId,
  //       employer: experience.employer,
  //       endDate: experience.endDate,
  //       startDate: experience.startDate,
  //       position: experience.position
  //     };
  //     allExperienceUpdates.push(
  //       client.mutate({
  //         mutation: createWorkerExperience,
  //         variables: { input: { workerExperience: formattedExperience } }
  //       })
  //     );
  //   });
  // }
  // await Promise.all(allExperienceUpdates);
  // const allLanguageUpdates = [];
  // workerLanguages.forEach((language) => {
  //   if (language.deleted) {
  //     allLanguageUpdates.push(
  //       client.mutate({
  //         mutation: deleteWorkerLanguage,
  //         variables: { input: { id: language.id } }
  //       })
  //     );
  //   }
  //   if (language.updated) {
  //     allLanguageUpdates.push(
  //       client.mutate({
  //         mutation: updateWorkerLanguage,
  //         variables: {
  //           input: {
  //             id: language.id,
  //             patch: {
  //               isPrimary: language.isPrimary,
  //               languageId: language.languageId,
  //               workerId
  //             }
  //           }
  //         }
  //       })
  //     );
  //   }
  //   if (language.new) {
  //     allLanguageUpdates.push(
  //       client.mutate({
  //         mutation: createWorkerLanguage,
  //         variables: {
  //           input: {
  //             workerLanguage: {
  //               isPrimary: language.isPrimary,
  //               languageId: language.languageId,
  //               workerId
  //             }
  //           }
  //         }
  //       })
  //     );
  //   }
  // });
  // await Promise.all(allLanguageUpdates);
  // const updatedWorker = await client.mutate({
  //   mutation: updateWorker,
  //   variables: { input: { id: workerId, patch: updates } }
  // });
};
