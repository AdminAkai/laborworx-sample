import { FC } from "react";

import WorkHistorySkeleton from "components/WorkHistorySkeleton";
import WorkerDetails from "components/WorkerDetails";
import WorkerDetailsSkeleton from "components/WorkerDetailsSkeleton";
import WorkerExperience from "components/WorkerExperience";
import WorkerExperienceSkeleton from "components/WorkerExperienceSkeleton";
import WorkHistory from "components/WorkHistory";

import { MainSector } from "./styledComponents";

const ProfileMain: FC<{ loading: boolean }> = ({ loading }) => (
  <MainSector>
    {loading ? <WorkerDetailsSkeleton /> : <WorkerDetails />}
    {loading ? <WorkHistorySkeleton /> : <WorkHistory />}
    {loading ? <WorkerExperienceSkeleton /> : <WorkerExperience />}
  </MainSector>
);

export default ProfileMain;
