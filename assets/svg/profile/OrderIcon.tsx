import * as React from "react";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";
const OrderIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17 4H7C5.89543 4 5 4.89543 5 6V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V6C19 4.89543 18.1046 4 17 4Z"
      stroke="url(#paint0_linear_50_73)"
      strokeWidth={2}
    />
    <Path
      d="M9 9H15M9 13H15M9 17H13"
      stroke="url(#paint1_linear_50_73)"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_50_73"
        x1={12}
        y1={4}
        x2={12}
        y2={21}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#158EFF" />
        <Stop offset={1} stopColor="#158EFF" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_50_73"
        x1={12}
        y1={9}
        x2={12}
        y2={17}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#158EFF" />
        <Stop offset={1} stopColor="#158EFF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default OrderIcon;
