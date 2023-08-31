import { FC } from "react";
import { ISvgIconProps } from "./svgType";

const ExportIcon: FC<ISvgIconProps> = ({ color }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10C0 4.5 4.5 0 10 0ZM6 15H14V13H6V15ZM14 8H11.5V4H8.5V8H6L10 12L14 8Z"
      fill={color || "#0062A7"}
    />
  </svg>
);

export default ExportIcon;
