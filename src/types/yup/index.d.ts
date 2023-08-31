import * as Yup from "yup";

declare module "yup" {
  interface StringSchema extends Yup.StringSchema {
    addressMinimum(errorMessage: string, lengthCheck: number): StringSchema;
  }
}
