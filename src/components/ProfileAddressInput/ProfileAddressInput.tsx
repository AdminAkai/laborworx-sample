import { FC, useState } from "react";
import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";

import { useAppDispatch } from "hooks/redux";

import { setWorkerAddress, setWorkerError } from "redux/features/workerSlice";

import ProfileDetailInput from "components/ProfileDetailInput";

import { breakdownAddressInput } from "utils/stringUtils";

import { ProfileOnChange } from "types/workers";

interface IProfileAddressInputProps {
  detailNumber: number;
  label: string;
  name: string;
  value: any;
  validationSchema?: any;
}

const googleMapsLibraries: any = ["places"];

const ProfileAddressInput: FC<IProfileAddressInputProps> = ({
  detailNumber,
  label,
  name,
  value,
  validationSchema
}) => {
  const dispatch = useAppDispatch();

  const { isLoaded: mapsLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: googleMapsLibraries
  });

  const [addressAutoComplete, setAddressAutoComplete] = useState(null);
  const [error, setError] = useState<any>("");

  const onAddressLoad = (autocomplete: any) => setAddressAutoComplete(autocomplete);

  const onPlaceChanged = async () => {
    dispatch(setWorkerError({ property: name, value: "" }));
    setError("");
    const payload = breakdownAddressInput(addressAutoComplete.getPlace());
    try {
      if (validationSchema) await validationSchema.validate(payload);
      dispatch(setWorkerAddress(payload));
    } catch (error) {
      setError(error.message);
      dispatch(setWorkerError({ property: name, value: error.message }));
    }
  };

  const handleOnChange: ProfileOnChange = ({ e, setError, setInput }) => {
    setError("");
    dispatch(setWorkerError({ property: name, value: "" }));
    setInput(e.target.value);
  };

  if (mapsLoaded)
    return (
      <Autocomplete onLoad={onAddressLoad} onPlaceChanged={onPlaceChanged}>
        <ProfileDetailInput
          detailNumber={detailNumber}
          label={label}
          name={name}
          value={value}
          onChange={handleOnChange}
          customError={error}
        />
      </Autocomplete>
    );

  return null;
};

export default ProfileAddressInput;
