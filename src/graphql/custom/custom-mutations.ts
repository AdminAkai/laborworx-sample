import { gql } from "@apollo/client";

/*
  Only the mutations involving Worker Profile are available to create insight on how the graphQL mutations work for the frontend and what they return
*/

export const updateWorker = /* GraphQL */ gql`
  mutation updateWorker($input: UpdateWorkerInput!) {
    updateWorker(input: $input) {
      emailAddress
      firstName
      id
      formattedAddress
      taxElection
      lastName
      phoneNumber
      streetAddress
      workerSkills {
        id
        skill {
          id
          skillName
          trade {
            id
            tradeName
          }
        }
        yearsInTrade
      }
      workerHistories {
        id
        job {
          id
          closeDate
          jobName
        }
        type
        topic
        description
        wasSuspended
        notationDate
        workerId
        staffingRequirement {
          endDate
          duration
          skill {
            skillName
          }
          jobCandidates {
            status
            activeJobStartDate
            workerId
          }
        }
        createdAt
      }
      workerExperiences {
        id
        employer
        position
        startDate
        endDate
      }
      workerPreference {
        id
        jobTypes
        desiredRate
        distanceToWork
      }
      workerLanguages {
        isPrimary
        language {
          id
          languageName
        }
      }
    }
  }
`;

export const updateStaffingRequirement = /* GraphQL */ gql`
  mutation UpdateStaffingRequirement($input: UpdateStaffingRequirementInput!) {
    updateStaffingRequirement(input: $input) {
      id
      jobId
      skillId
      startDate
      descriptions
      skill {
        id
        skillName
        trade {
          id
          tradeName
        }
      }
      roleName
      duration
      isPublished
      quantity
      hourlyRate
      perDiemRate
      minWage
      fringePay
      orientationStartTime
      orientationEndTime
      orientationStartDate
      orientationEndDate
      shiftId
      shift {
        id
        staffingRequirementId
        name
        startTime
        endTime
        days
        baseShift
        isStandard
        hourlyRate
        ratesStatus
        createdAt
        updatedAt
      }
      shifts {
        id
        staffingRequirementId
        name
        startTime
        endTime
        days
        baseShift
        isStandard
        hourlyRate
        ratesStatus
        createdAt
        updatedAt
      }
      additionalRequirements {
        id
        staffingRequirementId
        requirementType
        type
        description
        createdAt
        updatedAt
      }
      jobCandidates {
        id
        jobId
        workerId
        staffingRequirementId
        isLead
        status
        acceptedJobDate
        notes
        worker {
          workerSkills {
            skill {
              id
              skillName
              trade {
                id
                tradeName
              }
            }
          }
        }
        declinedJobDate
        activeJobStartDate
        shiftId
        createdAt
        updatedAt
      }
      isActive
      anticipatedHours
      additionalNotes
    }
  }
`;

export const createWorkerSkillNR = /* GraphQL */ gql`
  mutation createWorkerSkillNR($input: CreateWorkerSkillInput!) {
    createWorkerSkill(input: $input) {
      id
    }
  }
`;

export const createWorkerPreferenceNR = /* GraphQL */ gql`
  mutation createWorkerPreferenceNR($input: CreateWorkerPreferenceInput!) {
    createWorkerPreference(input: $input) {
      id
    }
  }
`;

export const updateWorkerSkillNR = /* GraphQL */ gql`
  mutation updateWorkerSkillNR($input: UpdateWorkerSkillInput!) {
    updateWorkerSkill(input: $input) {
      id
    }
  }
`;

export const updateWorkerPreferenceNR = /* GraphQL */ gql`
  mutation updateWorkerPreferenceNR($input: UpdateWorkerPreferenceInput!) {
    updateWorkerPreference(input: $input) {
      id
      desiredRate
      jobTypes
      distanceToWork
    }
  }
`;

export const deleteWorkerSkillBySkillIdAndWorkerId = /* GraphQL */ gql`
  mutation deleteWorkerSkillBySkillIdAndWorkerId(
    $input: DeleteWorkerSkillBySkillIdAndWorkerIdInput!
  ) {
    deleteWorkerSkillBySkillIdAndWorkerId(input: $input) {
      id
    }
  }
`;

export const createWorkerExperience = /* GraphQL */ gql`
  mutation createWorkerExperience($input: CreateWorkerExperienceInput!) {
    createWorkerExperience(input: $input) {
      id
    }
  }
`;

export const updateWorkerExperience = /* GraphQL */ gql`
  mutation updateWorkerExperience($input: UpdateWorkerExperienceInput!) {
    updateWorkerExperience(input: $input) {
      id
    }
  }
`;

export const deleteWorkerExperience = /* GraphQL */ gql`
  mutation deleteWorkerExperience($input: DeleteWorkerExperienceInput!) {
    deleteWorkerExperience(input: $input) {
      id
    }
  }
`;

export const createWorkerLanguage = /* GraphQL */ gql`
  mutation createWorkerLanguage($input: CreateWorkerLanguageInput!) {
    createWorkerLanguage(input: $input) {
      id
    }
  }
`;

export const updateWorkerLanguage = /* GraphQL */ gql`
  mutation updateWorkerLanguage($input: UpdateWorkerLanguageInput!) {
    updateWorkerLanguage(input: $input) {
      id
    }
  }
`;

export const deleteWorkerLanguage = /* GraphQL */ gql`
  mutation deleteWorkerLanguage($input: DeleteWorkerLanguageInput!) {
    deleteWorkerLanguage(input: $input) {
      id
    }
  }
`;
