import { Colors } from "@/utils/colors";
import { scale } from "@/utils/global";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin-top: ${scale(30)}px;
`;

export const Card = styled.View`
  background-color: ${Colors.backgroundChart};
  padding-vertical: ${scale(15)}px;
  padding-horizontal: ${scale(10)}px;
  border-radius: ${scale(10)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${scale(10)}px;
`;

export const Left = styled.View`
  flex-direction: row;
`;

export const NameCrypto = styled.Text`
  font-size: ${scale(18)}px;
  font-weight: bold;
  color: ${Colors.white};
  margin-left: ${scale(8)}px;
`;

export const PriceCrypto = styled.Text`
  font-size: ${scale(18)}px;
  color: ${Colors.white};
`;

export const Search = styled.TextInput`
  height: ${scale(40)}px;
  border-width: 1px;
  padding: ${scale(10)}px;
  border-color: ${Colors.backgroundChart};
  border-radius: ${scale(5)}px;
  background-color: ${Colors.backgroundChart};
  margin-top: ${scale(20)}px;
  color: ${Colors.white};
`;
