import ProfileAddressInput from "components/ProfileAddressInput";
import ProfileDetailInput from "components/ProfileDetailInput";
import ProfileAutocompleteInput from "components/ProfileAutocompleteInput";

import { readablePhoneNumber } from "utils/workerUtils";
import { stringRequiredValidation } from "utils/validationUtils";

import { ReadableWorkerFields, readableTaxElections } from "constants/workers";
import { phoneNumberValid, formattedAddressValid, emailValid } from "constants/validation";

export const workerDetailFields: Array<any> = [
  {
    props: {
      label: ReadableWorkerFields["firstName"],
      name: "firstName",
      validationSchema: stringRequiredValidation("First name")
    },
    value: (worker) => worker.firstName,
    Component: ProfileDetailInput
  },
  {
    props: {
      label: ReadableWorkerFields["lastName"],
      name: "lastName",
      validationSchema: stringRequiredValidation("Last name")
    },
    value: (worker) => worker.lastName,
    Component: ProfileDetailInput
  },
  {
    props: {
      label: ReadableWorkerFields["formattedAddress"],
      name: "formattedAddress",
      validationSchema: formattedAddressValid
    },
    value: (worker) => worker.formattedAddress,
    Component: ProfileAddressInput
  },
  {
    props: {
      label: ReadableWorkerFields["desiredRate"],
      name: "desiredRate",
      type: "number"
    },
    value: (worker) => worker.workerPreference.desiredRate,
    Component: ProfileDetailInput
  },
  {
    props: {
      label: ReadableWorkerFields["emailAddress"],
      name: "emailAddress",
      validationSchema: emailValid
    },
    value: (worker) => worker.emailAddress,
    Component: ProfileDetailInput
  },
  {
    props: {
      label: ReadableWorkerFields["phoneNumber"],
      name: "phoneNumber",
      validationSchema: phoneNumberValid
    },
    value: (worker) => readablePhoneNumber(worker.phoneNumber),
    Component: ProfileDetailInput
  },
  {
    props: {
      label: ReadableWorkerFields["taxElection"],
      name: "taxElection",
      options: Object.keys(readableTaxElections).map((key) => readableTaxElections[key]),
      placeholder: "Select Tax Election",
      multiple: false,
      disableClearable: true
    },
    value: (worker) => readableTaxElections[worker.taxElection],
    Component: ProfileAutocompleteInput
  }
];
