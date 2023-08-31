import { FC } from "react";

import { themeColors } from "theme/colors";

import { ISvgIconProps } from "./svgType";

const AccountManagerIcon: FC<ISvgIconProps> = ({ color }) => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="vuesax/linear/user-cirlce-add">
      <g id="user-cirlce-add">
        <g id="Group">
          <path
            id="Vector"
            d="M11.762 13.73C13.3139 13.73 14.572 12.4719 14.572 10.92C14.572 9.36806 13.3139 8.10999 11.762 8.10999C10.2101 8.10999 8.95203 9.36806 8.95203 10.92C8.95203 12.4719 10.2101 13.73 11.762 13.73Z"
            stroke={color || themeColors.text.Gray}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M16.952 20.2C16.952 17.87 14.632 15.97 11.762 15.97C8.89202 15.97 6.57202 17.86 6.57202 20.2"
            stroke={color || themeColors.text.Gray}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          id="Vector_3"
          d="M21.302 12.5C21.302 17.75 17.052 22 11.802 22C6.552 22 2.302 17.75 2.302 12.5C2.302 7.25 6.552 3 11.802 3C13.112 3 14.362 3.25999 15.502 3.73999C15.372 4.13999 15.302 4.56 15.302 5C15.302 5.75 15.512 6.46 15.882 7.06C16.082 7.4 16.342 7.70997 16.642 7.96997C17.342 8.60997 18.272 9 19.302 9C19.742 9 20.162 8.92998 20.552 8.78998C21.032 9.92998 21.302 11.19 21.302 12.5Z"
          stroke={color || themeColors.text.Gray}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_4"
          d="M23.302 5C23.302 5.32 23.262 5.62999 23.182 5.92999C23.092 6.32999 22.932 6.72 22.722 7.06C22.242 7.87 21.472 8.49998 20.552 8.78998C20.162 8.92998 19.742 9 19.302 9C18.272 9 17.342 8.60997 16.642 7.96997C16.342 7.70997 16.082 7.4 15.882 7.06C15.512 6.46 15.302 5.75 15.302 5C15.302 4.56 15.372 4.13999 15.502 3.73999C15.692 3.15999 16.012 2.64002 16.432 2.21002C17.162 1.46002 18.182 1 19.302 1C20.482 1 21.552 1.51002 22.272 2.33002C22.912 3.04002 23.302 3.98 23.302 5Z"
          stroke={color || themeColors.text.Gray}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="Group_2">
          <path
            id="Vector_5"
            d="M20.792 4.97998H17.812"
            stroke={color || themeColors.text.Gray}
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_6"
            d="M19.302 3.52002V6.51001"
            stroke={color || themeColors.text.Gray}
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default AccountManagerIcon;
