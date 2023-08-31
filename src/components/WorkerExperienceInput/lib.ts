import ProfileDetailInput from "components/ProfileDetailInput";

import { stringRequiredValidation } from "utils/validationUtils";

export const workerExperienceFields: Array<any> = [
  {
    props: {
      label: "Position",
      name: "position",
      validationSchema: stringRequiredValidation("Position")
    },
    value: (experience) => experience.position,
    Component: ProfileDetailInput
  },
  {
    props: {
      label: "Company",
      name: "employer",
      validationSchema: stringRequiredValidation("Company")
    },
    value: (experience) => experience.employer,
    Component: ProfileDetailInput
  },
  {
    props: {
      label: "From",
      name: "startDate",
      type: "date",
      validationSchema: stringRequiredValidation("From date")
    },
    value: (experience) => experience.startDate,
    Component: ProfileDetailInput
  },
  {
    props: {
      label: "To",
      name: "endDate",
      type: "date",
      validationSchema: stringRequiredValidation("To date")
    },
    min: (experience) => experience.startDate,
    value: (experience) => experience.endDate,
    Component: ProfileDetailInput
  }
];
