import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HomeIcon = (props: any) => (
  <Svg
    width={36}
    height={36}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M25.5 3H10.5C8.84315 3 7.5 4.34315 7.5 6V25.5C7.5 27.1569 8.84315 28.5 10.5 28.5H25.5C27.1569 28.5 28.5 27.1569 28.5 25.5V6C28.5 4.34315 27.1569 3 25.5 3Z"
      stroke="#A0A0A0"
      strokeWidth={3}
    />
    <Path
      d="M13.5 10.5H22.5M13.5 16.5H22.5M13.5 22.5H19.5"
      stroke="#A0A0A0"
      strokeWidth={3}
      strokeLinecap="round"
    />
  </Svg>
);
export default HomeIcon;
