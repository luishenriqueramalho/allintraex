import { Path, Svg } from "react-native-svg";

export const NewPaperMenu = ({ isSelected }) => (
  <Svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M21.5643 23.3383H3.98755C2.33743 23.3383 1 22.0008 1 20.3507V1.03121H18.5768V20.3507C18.5768 22.0008 19.9141 23.3383 21.5643 23.3383Z"
      stroke={isSelected ? "white" : "black"}
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M25 6.20963V20.3507C25 22.0008 23.6626 23.3383 22.0125 23.3383H21.5643C19.9142 23.3383 18.5768 22.0008 18.5768 20.3507V6.20963H25Z"
      stroke={isSelected ? "white" : "black"}
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M21.8133 23.3383H21.5643"
      stroke={isSelected ? "white" : "black"}
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M4.23651 4.61627H15.39"
      stroke={isSelected ? "white" : "black"}
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M4.23651 7.80298H15.39"
      stroke={isSelected ? "white" : "black"}
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M4.23651 19.7532H15.39"
      stroke={isSelected ? "white" : "black"}
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M15.3901 16.5665H9.81329V10.9897H15.3901V16.5665Z"
      stroke={isSelected ? "white" : "black"}
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M4.23651 12.1848H6.62655"
      stroke={isSelected ? "white" : "black"}
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M4.23651 15.3714H6.62655"
      stroke={isSelected ? "white" : "black"}
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
