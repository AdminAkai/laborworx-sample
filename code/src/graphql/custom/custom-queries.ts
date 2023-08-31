import { gql } from "@apollo/client";

export const getWorkerDetails = /* GraphQL */ gql`
  query getWorkerDetails($id: ID!) {
    worker(id: $id) {
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
      workerLanguages {
        id
        isPrimary
        language {
          id
          languageName
        }
      }
      workerExperiences {
        id
        employer
        position
        startDate
        endDate
        workerId
      }
      workerPreference {
        id
        jobTypes
        desiredRate
        distanceToWork
      }
    }
  }
`;

export const listAllTrades = /* GraphQL */ gql`
  query ListTrades {
    trades {
      id
      tradeName
      skills {
        id
        tradeId
        skillName
      }
    }
  }
`;

export const getLanguages = /* GraphQL */ gql`
  query getLanguages {
    languages {
      languageName
      languageCode
      id
    }
  }
`;
