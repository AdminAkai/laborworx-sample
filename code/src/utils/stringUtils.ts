import { allStates } from "constants/states";
import { AsYouType, parsePhoneNumber } from "libphonenumber-js";
import { Dispatch, SetStateAction } from "react";

export const capitalizeName = (name) => {
  const allNames = name.split(" ");

  const capitalizedName = allNames.map((name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  });

  return capitalizedName.join(" ");
};

interface ExtractedAddress {
  level: "full" | "city";
  street?: string;
  city: string;
  state: string;
  zipcode: string | null;
  country: string;
}

export const extractAddress = (formattedAddress: string): ExtractedAddress | null => {
  if (!formattedAddress) {
    return null;
  }
  const splitString: string[] = formattedAddress.split(",");
  const splitCount = splitString.length;
  if (splitCount === 4) {
    const splitState: string[] = splitString[2].trim().split(" ");
    const state = splitState[0]?.trim();
    const zipcode = splitState.length === 2 ? splitState[1] : null;
    return {
      level: "full",
      street: splitString[0],
      city: splitString[1].trim(),
      state,
      zipcode,
      country: splitString[3]?.trim()
    };
  } else if (splitCount === 3) {
    let state = "";
    let zipcode = "";
    const splitState: string[] = splitString[1].trim().split(" ");
    if (splitState.length === 3) {
      state = allStates[`${splitState[0]} ${splitState[1]}`];
      zipcode = splitState[2];
    } else {
      state = allStates[splitState[0]];
      zipcode = splitState[1];
    }
    return {
      level: "city",
      city: splitString[0].trim(),
      state,
      zipcode,
      country: splitString[3]?.trim()
    };
  } else {
    return null;
  }
};

export const parsePhoneString = (phoneStr: string) => (phoneStr.match(/\d+/g) || []).join("");

export const AYTFormatPhone = (phoneStr: string) => {
  const digits = parsePhoneString(phoneStr).slice(0, 10);
  return new AsYouType("US").input(digits);
};

export const formatPhoneDb = (phoneStr: string) => {
  const phoneNumber = parsePhoneNumber(phoneStr, "US");
  return phoneNumber.nationalNumber;
};

export const handleBlurMoney = (
  inputValue: string | number,
  onBlur: any,
  name: string,
  setInputValue?: Dispatch<SetStateAction<string | number>>
): void => {
  let newInputValue: string | number;
  if (typeof inputValue === "string") {
    newInputValue = parseFloat(inputValue).toFixed(2);
  } else {
    newInputValue = inputValue.toFixed(2);
  }

  if (setInputValue) {
    setInputValue(newInputValue);
  }
  onBlur(newInputValue);
};

export const onFocusMoney = (
  inputValue: string,
  setInputValue: Dispatch<SetStateAction<string | number>> | any,
  workerForm?: boolean,
  name?: string
): void => {
  const removeZeroVal = inputValue.replace(/^0+|0+$/g, "");
  if (workerForm) {
    setInputValue(name, parseFloat(removeZeroVal));
  } else {
    setInputValue(parseFloat(removeZeroVal));
  }
};

export const breakdownAddressInput = (payload) => {
  if (payload) {
    let currentAddress = payload.formatted_address;
    const streetNumberSet: boolean = !isNaN(parseInt(currentAddress.split(" ")[0]));
    let streetNumber: string = streetNumberSet ? currentAddress.split(" ")[0] : "";

    const streetNumberRemoved: boolean = isNaN(parseInt(currentAddress.split(" ")[0]));
    if (streetNumberSet && streetNumberRemoved)
      currentAddress = streetNumber + " " + currentAddress;

    if (currentAddress.endsWith("EE. UU."))
      currentAddress = currentAddress.replace("EE. UU.", "USA");

    const latitude: number = payload.geometry.location.lat();
    const longitude: number = payload.geometry.location.lng();

    return { currentAddress, latitude, longitude };
  }
};
