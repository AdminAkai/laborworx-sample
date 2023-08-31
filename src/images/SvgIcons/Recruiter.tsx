import { FC } from "react";

import { themeColors } from "theme/colors";

import { ISvgIconProps } from "./svgType";

const RecruiterIcon: FC<ISvgIconProps> = ({ color, width, height }) => (
  <svg
    width={width || "19"}
    height={height || "26"}
    viewBox="0 0 19 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Group">
      <g id="Vector">
        <path d="M17.9365 22.2013H13.0905H17.9365Z" fill="white" />
        <path
          d="M17.9365 22.2013H13.0905"
          stroke={color || themeColors.text.Gray}
          strokeWidth="1.81725"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g id="Vector_2">
        <path d="M15.5134 24.6243V19.7783V24.6243Z" fill="white" />
        <path
          d="M15.5134 24.6243V19.7783"
          stroke={color || themeColors.text.Gray}
          strokeWidth="1.81725"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        id="Vector_3"
        d="M10.2555 11.746C10.1343 11.7339 9.98896 11.7339 9.85569 11.746C6.97228 11.6491 4.68254 9.28668 4.68254 6.37907C4.67043 3.41089 7.08131 1 10.0495 1C13.0177 1 15.4286 3.41089 15.4286 6.37907C15.4286 9.28668 13.1267 11.6491 10.2555 11.746Z"
        fill="white"
        stroke={color || themeColors.text.Gray}
        strokeWidth="1.81725"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="Vector_4">
        <path
          d="M10.0496 25.0001C7.84465 25.0001 5.65188 24.4428 3.98 23.3282C1.04817 21.3656 1.04817 18.1672 3.98 16.2167C7.31163 13.9875 12.7755 13.9875 16.1071 16.2167"
          fill="white"
        />
        <path
          d="M10.0496 25.0001C7.84465 25.0001 5.65188 24.4428 3.98 23.3282C1.04817 21.3656 1.04817 18.1672 3.98 16.2167C7.31163 13.9875 12.7755 13.9875 16.1071 16.2167"
          stroke={color || themeColors.text.Gray}
          strokeWidth="1.81725"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);

export default RecruiterIcon;
