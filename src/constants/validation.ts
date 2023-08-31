import * as Yup from "yup";

Yup.addMethod(Yup.string, "addressMinimum", function (errorMessage: string, lengthCheck: number) {
  return this.test("min-address", errorMessage, async function (stringValue) {
    return new Promise((resolve, reject) => {
      const { path, createError } = this;
      const commaCount = stringValue?.split(",")?.length;
      const hasStreetNumber: boolean = !isNaN(parseInt(stringValue?.split(" ")?.[0]));
      const hasUsa: boolean = stringValue?.endsWith("USA");
      if (commaCount && commaCount > lengthCheck && hasStreetNumber) {
        if (hasUsa) {
          resolve(true);
        } else {
          reject(createError({ path, message: "Address must be in the USA" }));
        }
      } else {
        reject(createError({ path, message: errorMessage }));
      }
    });
  });
});

export const phoneRegex: RegExp = /^(\+\d{1}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
export const emailRegex: RegExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
export const cityRegex: RegExp = /^[a-zA-Z\s]+$/;
export const zipcodeRegex: RegExp = /^\d+$/;
export const jobNumberReqex: RegExp = /^\d{2}-\d{4}/;
export const nameRegex: RegExp = /^[\sa-zA-Z0-9'.,-]+$/;

export const firstNameValid = Yup.string().required("First name is required.");
export const lastNameValid = Yup.string().required("Last name is required.");
export const phoneNumberValid = Yup.string()
  .matches(phoneRegex, "Phone number must match ***-***-**** format.")
  .required("Phone number is required.");
export const emailValid = Yup.string()
  .matches(emailRegex, "Must be a valid email address.")
  .required("Email address is required");
export const formattedAddressValid = Yup.string()
  .addressMinimum("Address must be complete address selected from suggested list", 3)
  .required("Address is required.");
export const notEmptyArrayValid = Yup.array().min(1, "Must have at least one skill.");
