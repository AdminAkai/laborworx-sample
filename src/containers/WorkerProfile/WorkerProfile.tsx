import React, { FC, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { sortBy } from "lodash";
import { ToastContainer, toast } from "react-toastify";

import { getLanguages, getWorkerDetails, listAllTrades } from "graphql/custom/custom-queries";

import { useAppDispatch, useAppSelector } from "hooks/redux";

import { setAllLanguages, setAllSkills, setInitialWorker } from "redux/features/workerSlice";
import { selectWorkerEditMode, selectWorkerLoading } from "redux/features/workerSlice/selectors";

import SectionHeader from "components/SectionHeader";
import ProfileMain from "components/ProfileMain";
import ProfileEdit from "components/ProfileEdit";

import { WorkerProfileContainer } from "./styledComponents";

const WorkerProfile: FC = () => {
  const dispatch = useAppDispatch();

  /* Will typically grab worker ID from params to fetch worker profile */
  // const params = useParams();

  const workerEditMode = useAppSelector(selectWorkerEditMode);
  const workerLoading = useAppSelector(selectWorkerLoading);

  /*
    Queries here to show logic and example of production but commented out as this is a test with no connection to DB
  */

  // const { loading: workerLoading } = useQuery(getWorkerDetails, {
  //   variables: { id: params?.employeeId },
  //   onError: () => {
  //     toast.error("Failed to load worker.");
  //   },
  //   onCompleted: (data) => {
  //     dispatch(setInitialWorker(data.worker));
  //   }
  // });

  // useQuery(listAllTrades, {
  //   onCompleted: (data) => {
  //     // When connected to DB, trade/skill data is formatted and sent to Redux here
  //     const tradeResults: Trade[] = data.trades as Trade[];
  //     const allTrades = sortBy(tradeResults, "tradeName");
  //     const tradeList = allTrades.reduce((acc, trade) => {
  //       const skills = trade.skills;
  //       const tradeSkills = skills.reduce((acc, skill) => {
  //         return [
  //           ...acc,
  //           {
  //             label: `${trade.tradeName} - ${skill.skillName}`,
  //             skillId: skill.id,
  //             skillName: skill.skillName,
  //             tradeId: trade.id,
  //             tradeName: trade.tradeName
  //           }
  //         ];
  //       }, []);
  //       return [...acc, ...tradeSkills];
  //     }, []);
  //     dispatch(setAllSkills(tradeList));
  //   },
  //   fetchPolicy: "cache-and-network"
  // });

  // useQuery(getLanguages, {
  //   onCompleted: (data) => {
  //     // When completed language data is formatted and sent to Redux
  //     const allLanguages = data.languages.reduce((acc, next) => {
  //       acc.push({ languageId: next.id, languageName: next.languageName });
  //       return acc;
  //     }, []);
  //     dispatch(setAllLanguages(allLanguages));
  //   }
  // });

  // Test data for sample profile
  useEffect(() => {
    const testTrades = [
      {
        label: `Painting - Painting Manager`,
        skillId: "testId1",
        skillName: "Painting Manager",
        tradeId: "testTradeId1",
        tradeName: "Painting"
      },
      {
        label: `Construction - Framer`,
        skillId: "testId2",
        skillName: "Framer",
        tradeId: "testTradeId2",
        tradeName: "Construction"
      }
    ];
    dispatch(setAllSkills(testTrades));
    const testLanguages = [
      {
        languageId: "testLanguageId1",
        languageName: "English"
      },
      {
        languageId: "testLanguageId2",
        languageName: "Spanish"
      },
      {
        languageId: "testLanguageId3",
        languageName: "Chinese"
      }
    ];
    dispatch(setAllLanguages(testLanguages));
    const testWorker = {
      id: "test",
      firstName: "Josh",
      lastName: "Trinidad",
      formattedAddress: "5228 Lexmark Cir SW, Atlanta, GA",
      emailAddress: "akatoirotech@gmail.com",
      phoneNumber: "6783085760",
      taxElection: "IS_W2",
      workerSkills: [
        {
          id: "testWorkerSkillsId1",
          skill: {
            id: "testSkillId1",
            skillName: "Painter",
            trade: {
              id: "testTradeId1",
              tradeName: "Painting"
            }
          },
          yearsInTrade: 5
        },
        {
          id: "testWorkerSkillsId2",
          skill: {
            id: "testSkillId2",
            skillName: "Framer",
            trade: {
              id: "testTradeId2",
              tradeName: "Construction"
            }
          },
          yearsInTrade: 5
        }
      ],
      workerHistories: [
        {
          workerId: "test",
          id: "testWorkerHistoriesId",
          job: {
            id: "testJobId",
            closeDate: "09-10-2023",
            jobName: "Construction Job"
          },
          staffingRequirement: {
            endDate: "09-09-2023",
            skill: {
              skillName: "Framer"
            },
            jobCandidates: [
              {
                status: "ACTIVE",
                activeJobStartDate: "08-30-2023",
                workerId: "test"
              }
            ]
          }
        }
      ],
      workerLanguages: [
        {
          id: "testWorkerLanguagesId1",
          isPrimary: true,
          language: {
            id: "testLanguageId1",
            languageName: "English"
          }
        },
        {
          id: "testWorkerLanguagesId2",
          isPrimary: false,
          language: {
            id: "testLanguageId2",
            languageName: "Spanish"
          }
        }
      ],
      workerExperiences: [
        {
          id: "testWorkerExperiencesId1",
          employer: "LaborWorx",
          position: "Senior Fullstack Engineer",
          startDate: "08-08-2022",
          endDate: "08-25-2023",
          workerId: "test"
        }
      ],
      workerPreference: {
        id: "testWorkerPreferencesId1",
        jobTypes: ["PERM", "CONTRACT"],
        desiredRate: 75,
        distanceToWork: 25
      }
    };
    dispatch(setInitialWorker(testWorker));
  }, [dispatch]);

  return (
    <WorkerProfileContainer>
      <SectionHeader loading={workerLoading} />
      {workerEditMode ? <ProfileEdit /> : <ProfileMain loading={workerLoading} />}
      <ToastContainer
        position="bottom-center"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        theme="light"
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        role="Worker Profile Toast Container"
      />
    </WorkerProfileContainer>
  );
};

export default WorkerProfile;
