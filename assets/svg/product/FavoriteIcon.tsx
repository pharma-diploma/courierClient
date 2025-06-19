import * as React from "react";
import Svg, { Path } from "react-native-svg";
const FavoriteIcon = (props: any) => (
  <Svg
    width={26}
    height={22}
    viewBox="0 0 26 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2 7.4C2 3 5.5 2 7.5 2C10 2 12 4 13 5.5C14 4 16 2 18.5 2C20.5 2 24 3 24 7.4C24 14 13 20 13 20C13 20 2 14 2 7.4Z"
      stroke="black"
      strokeWidth={3}
    />
  </Svg>
);
export default FavoriteIcon;
