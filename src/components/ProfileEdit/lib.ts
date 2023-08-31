import AdditionalDetailsEdit from "components/AdditionalDetailsEdit";
import CertificationsEdit from "components/CertificationsEdit";
import DetailSkillInput from "components/DetailSkillInput";
import GeneralDetailsEdit from "components/GeneralDetailsEdit";
import WorkerExperienceEdit from "components/WorkerExperienceEdit";

interface IProfileEditSector {
  title: string;
  components: any[];
}

export const ProfileEditSectors: IProfileEditSector[] = [
  {
    title: "General Details",
    components: [GeneralDetailsEdit, DetailSkillInput]
  },
  {
    title: "Work Experience",
    components: [WorkerExperienceEdit]
  },
  {
    title: "Certifications",
    components: [CertificationsEdit]
  },
  {
    title: "Languages & Additional Details",
    components: [AdditionalDetailsEdit]
  }
];
