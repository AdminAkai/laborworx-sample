import * as Yup from "yup";

// import { validatePhoneNumber } from "graphql/custom/custom-queries";

export const stringRequiredValidation = (message: string) =>
  Yup.string().required(`${message} is required.`);

// Unique phone number used to check that current phone number does not already exist in the backend as it was our main method for identifying unique workers
// export const isPhoneUnique: (phoneNumber: string) => Promise<boolean | any> = async (
//   phoneNumber: string
// ) => {
//   const filter = getPhoneNumberFilter(phoneNumber);

//   const client = currentAuthObject();

//   const response = await client.query({
//     query: validatePhoneNumber,
//     variables: { filter }
//   });

//   return response.data.workers.length === 0;
// };
