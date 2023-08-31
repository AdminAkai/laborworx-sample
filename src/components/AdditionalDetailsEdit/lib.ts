import ProfileAutocompleteInput from "components/ProfileAutocompleteInput";
import ProfileDetailInput from "components/ProfileDetailInput";

import { ReadableWorkerJobTypes } from "constants/workers";

const readableLabels = {
  primaryLanguage: "Primary Language",
  additionalLanguages: "Additional Languages",
  jobTypes: "Job Types",
  distanceToWork: "Willing to Travel"
};

const buildProps = ({ name, data }: { name: string; data: object }): any => {
  const props: any = {};

  props["label"] = readableLabels[name];
  props["name"] = name;

  if (name === "distanceToWork") {
    props["type"] = "number";
    props["value"] = data["distanceToWork"];
    props["unitOfMeasurement"] = "Mile(s)";
    props["max"] = 999;
  } else {
    props["forcePopupIcon"] = false;
    props["multiple"] = true;
    if (name === "primaryLanguage" || name === "additionalLanguages") {
      if (name === "primaryLanguage") {
        props["multiple"] = false;
        props["disableClearable"] = true;
        props["forcePopupIcon"] = true;
        props["placeholder"] = "Select Primary Language";
        props["options"] = data["primaryLanguageSelections"];
      } else {
        props["options"] = data["additionalLanguageSelections"];
        props["placeholder"] = "Add Language";
      }
      props["values"] = data[name];
    }
    if (name === "jobTypes") {
      props["options"] = Object.keys(ReadableWorkerJobTypes).map(
        (key) => ReadableWorkerJobTypes[key]
      );
      props["placeholder"] = "Add Job Type";
      props["values"] = data["jobTypes"].map((jobType: any) => ReadableWorkerJobTypes[jobType]);
    }
  }

  return props;
};

export const AdditionalDetailsFields: Array<any> = [
  {
    name: "primaryLanguage",
    buildProps,
    Component: ProfileAutocompleteInput
  },
  {
    name: "additionalLanguages",
    buildProps,
    Component: ProfileAutocompleteInput
  },
  {
    name: "jobTypes",
    buildProps,
    Component: ProfileAutocompleteInput
  },
  {
    name: "distanceToWork",
    buildProps,
    Component: ProfileDetailInput
  }
];
