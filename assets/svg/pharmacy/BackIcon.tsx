import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BackIcon = (props: any) => (
  <Svg
    width={13}
    height={21}
    viewBox="0 0 13 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.49691 1.3996C10.0797 0.816917 11.0244 0.816919 11.6072 1.3996C12.1899 1.98235 12.1899 2.92709 11.6072 3.50987L4.22054 10.8965L11.6072 18.2832C12.1899 18.8659 12.1899 19.8107 11.6072 20.3934C11.0244 20.9761 10.0797 20.9761 9.49691 20.3934L1.05514 11.9517C0.472494 11.3689 0.472489 10.4241 1.05514 9.84138L9.49691 1.3996Z"
      fill="black"
    />
  </Svg>
);
export default BackIcon;
