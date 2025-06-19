import * as React from "react";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";
const BackIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.7067 1.18951C11.3637 0.532672 12.4294 0.53256 13.0863 1.18951C13.7431 1.84648 13.7431 2.91213 13.0863 3.56909L4.75847 11.8969L13.0856 20.2241C13.7424 20.881 13.7424 21.9453 13.0856 22.6023C12.4287 23.2592 11.3638 23.2598 10.7067 22.603L1.18979 13.086C0.532782 12.429 0.532782 11.3635 1.18979 10.7065L10.7067 1.18951Z"
      fill="url(#paint0_linear_7_472)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_7_472"
        x1={15.2075}
        y1={3.31067}
        x2={8.58587}
        y2={20.4815}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#158EFF" />
        <Stop offset={1} stopColor="#158EFF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default BackIcon;
