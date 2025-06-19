import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
const ProfileIcon = (props: any) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_7_67)">
      <Path
        d="M1.875 24.8437C1.875 23.1032 2.5664 21.434 3.79711 20.2033C5.02781 18.9726 6.69701 18.2812 8.43749 18.2812H21.5625C23.303 18.2812 24.9721 18.9726 26.2029 20.2033C27.4336 21.434 28.125 23.1032 28.125 24.8437C28.125 25.7139 27.7793 26.5485 27.1639 27.1639C26.5486 27.7792 25.714 28.1249 24.8437 28.1249H5.15625C4.28601 28.1249 3.45141 27.7792 2.83605 27.1639C2.2207 26.5485 1.875 25.7139 1.875 24.8437Z"
        stroke="#A0A0A0"
        strokeWidth={3}
        strokeLinejoin="round"
      />
      <Path
        d="M15 11.7187C17.7183 11.7187 19.9219 9.51514 19.9219 6.79687C19.9219 4.0786 17.7183 1.875 15 1.875C12.2817 1.875 10.0781 4.0786 10.0781 6.79687C10.0781 9.51514 12.2817 11.7187 15 11.7187Z"
        stroke="#A0A0A0"
        strokeWidth={3}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_7_67">
        <Rect width={30} height={30} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ProfileIcon;
