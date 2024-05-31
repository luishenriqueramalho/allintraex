import { Colors } from "@/utils/colors";
import { scale } from "@/utils/global";
import styled from "styled-components/native";

export const Content = styled.View`
  background-color: ${Colors.white};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 9px;
  border-radius: ${scale(30)}px;
  margin-horizontal: ${scale(30)}px;
`;

export const Title = styled.Text`
  color: ${Colors.white};
  text-align: center;
`;

export const SelectOption = styled.TouchableOpacity`
  background-color: aqua;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;
