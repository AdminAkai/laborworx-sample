import { FC } from "react";
import { ISvgIconProps } from "./svgType";

export const TrashIcon: FC<ISvgIconProps> = ({ color }) => (
  <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.66658 0.666667H7.33325L6.66658 0H3.33325L2.66659 0.666667H0.333252V2H9.66658M0.999919 10.6667C0.999919 11.0203 1.14039 11.3594 1.39044 11.6095C1.64049 11.8595 1.97963 12 2.33325 12H7.66658C8.02021 12 8.35935 11.8595 8.60939 11.6095C8.85944 11.3594 8.99992 11.0203 8.99992 10.6667V2.66667H0.999919V10.6667Z"
      fill={color || "black"}
    />
  </svg>
);

export default TrashIcon;
