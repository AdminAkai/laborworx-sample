import { FC } from "react";

import { themeColors } from "theme/colors";

import { ISvgIconProps } from "./svgType";

const AdminIcon: FC<ISvgIconProps> = ({ color }) => (
  <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="&#240;&#159;&#166;&#134; icon &#34;user octagon&#34;">
      <g id="Group">
        <path
          id="Vector"
          d="M22.7136 8.89604V17.104C22.7136 18.448 21.9936 19.696 20.8296 20.38L13.7016 24.496C12.5376 25.168 11.0976 25.168 9.92162 24.496L2.79367 20.38C1.62967 19.708 0.909668 18.46 0.909668 17.104V8.89604C0.909668 7.55204 1.62967 6.30399 2.79367 5.61999L9.92162 1.504C11.0856 0.832 12.5256 0.832 13.7016 1.504L20.8296 5.61999C21.9936 6.30399 22.7136 7.54004 22.7136 8.89604Z"
          stroke={color || themeColors.text.Gray}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M11.8174 11.8001C13.3617 11.8001 14.6134 10.5483 14.6134 9.00407C14.6134 7.45989 13.3617 6.20813 11.8174 6.20813C10.2733 6.20813 9.02148 7.45989 9.02148 9.00407C9.02148 10.5483 10.2733 11.8001 11.8174 11.8001Z"
          stroke={color || themeColors.text.Gray}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M16.6176 18.5921C16.6176 16.4321 14.4696 14.6801 11.8176 14.6801C9.16558 14.6801 7.01758 16.4321 7.01758 18.5921"
          stroke={color || themeColors.text.Gray}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);

export default AdminIcon;
