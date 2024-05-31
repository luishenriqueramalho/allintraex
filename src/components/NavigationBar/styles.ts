import { Colors } from "@/utils/colors";
import { scale } from "@/utils/global";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  margin-horizontal: ${scale(24)}px;
  justify-content: space-between;
  align-items: center;
`;

export const NamePeople = styled.Text`
  font-size: ${scale(32)}px;
  font-weight: bold;
  color: ${Colors.white};
  margin-top: ${scale(40)}px;
  margin-horizontal: ${scale(24)}px;
`;

export const Logo = styled.Image`
  width: ${scale(133)}px;
  height: ${scale(35)}px;
`;

export const Profile = styled.Image`
  width: ${scale(35)}px;
  height: ${scale(35)}px;
  margin-left: ${scale(30)}px;
`;
