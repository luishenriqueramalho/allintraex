import { Colors } from "@/utils/colors";
import styled from "styled-components/native";

export const SelectOption = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;

export const Title = styled.Text`
  color: ${Colors.backgroundChart};
  text-align: center;
`;

export const ItemSelected = styled.View`
  background-color: ${Colors.selectMenu};
  padding: 14px;
  border-radius: 50px;
`;
