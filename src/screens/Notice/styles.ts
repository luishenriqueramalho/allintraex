import { Colors } from "@/utils/colors";
import { scale } from "@/utils/global";
import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: ${scale(10)}px;
`;

export const Card = styled.View`
  background-color: ${Colors.backgroundChart};
  padding: ${scale(10)}px;
  border-radius: ${scale(10)}px;
  margin-top: ${scale(20)}px;
`;

export const CardTitle = styled.Text`
  font-size: ${scale(14)}px;
  font-weight: bold;
  color: ${Colors.white};
  text-align: justify;
`;

export const CardSubTitle = styled.Text`
  font-size: ${scale(14)}px;
  color: ${Colors.white};
  text-align: justify;
  margin-top: ${scale(10)}px;
`;
