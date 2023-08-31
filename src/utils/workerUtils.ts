import moment from "moment";

import { workerHistoryTabs } from "constants/workers";

export const createCurrentWorkHistories = (currentTab, workHistories) => {
  return workHistories.reduce((acc, next) => {
    if (next.job && next.staffingRequirement) {
      const history = {
        id: next.id,
        jobId: next.job.id,
        jobName: next.job.jobName,
        skill: next.staffingRequirement.skill.skillName,
        isActive: false,
        status: null,
        jobLength: "N/A"
      };
      const foundJobCandidate = next.staffingRequirement.jobCandidates.find(
        (jobCandidate) => jobCandidate.workerId === next.workerId
      );
      let jobLength = "N/A";
      if (foundJobCandidate) {
        if (foundJobCandidate.activeJobStartDate) {
          const startDate = new Date(foundJobCandidate.activeJobStartDate).toLocaleDateString();
          const endDate = new Date(next.staffingRequirement.endDate).toLocaleDateString();
          jobLength = `${startDate} - ${endDate}`;
        }
        history.isActive = foundJobCandidate.status === "ACTIVE";
        history.status = foundJobCandidate.status;
        history.jobLength = jobLength;
      }
      if (currentTab === workerHistoryTabs[0]) {
        acc.push(history);
      }
      if (currentTab === workerHistoryTabs[1]) {
        if (history.isActive && new Date().getTime() < new Date(next.job.closeDate).getTime())
          acc.push(history);
      }
      if (currentTab === workerHistoryTabs[2]) {
        if (!history.isActive) acc.push(history);
      }
      if (currentTab === workerHistoryTabs[3]) {
        if (history.status === "ACCEPTED") acc.push(history);
      }
      if (currentTab === workerHistoryTabs[4]) {
        if (history.status === "BENCHED") acc.push(history);
      }
      return acc;
    }
    return acc;
  }, []);
};

export const createWorkerHistoryPreviews = (workerHistory, allJobData) => {
  const activeJobs = [];

  const history = workerHistory.reduce((acc, next, index) => {
    acc.push({
      id: next.id,
      jobName: allJobData[index].jobName,
      type: next.type,
      topic: next.type === "JA" ? null : next.topic,
      activeStatus: allJobData[index].activeStatus,
      jobID: next.jobId,
      date: next.notationDate && moment(next.notationDate).utc(false).local().format("MM-DD-YYYY"),
      accepted: allJobData[index].accepted || false,
      benched: allJobData[index].benched || false,
      workerTrade: allJobData[index].workerTrade
    });
    return acc;
  }, []);

  activeJobs.forEach((index) => {
    history.splice(index, 1);
  });

  return history;
};

export const readablePhoneNumber = (phoneNumber: string) => {
  if (/[a-z]/i.test(phoneNumber)) {
    return phoneNumber.slice(0, phoneNumber.length - 1);
  }
  return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
};

export const noNegativeInput = (value: string): string => {
  if (value === "") return "0";
  const parsed = parseInt(value);
  const absolute = Math.abs(parsed) >= 0 ? Math.abs(parsed) : null;
  const max3Digits = absolute.toString().slice(0, 3);
  return max3Digits;
};

export const formatDetailValue = (name: string, value: string, noNegative: boolean): string => {
  if (name !== "phoneNumber") {
    if (noNegative) {
      return noNegativeInput(value);
    }
    return value;
  } else {
    const parsed = readablePhoneNumber(value);
    return parsed;
  }
};
