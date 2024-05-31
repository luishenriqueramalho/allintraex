import { Colors } from "@/utils/colors";
import { scale } from "@/utils/global";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  background-color: ${Colors.backgroundChart};
  border-radius: ${scale(10)}px;
  margin-top: ${scale(40)}px;
  padding: ${scale(15)}px;
`;

export const Todo = styled.View`
  width: 100%;
  height: 125px;
  background-color: blueviolet;
`;

export const GraficTime = styled.View`
  flex-direction: row;
  margin-top: ${scale(13)}px;
  margin-horizontal: ${scale(9)}px;
`;

export const GraficType = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const SelectTimer = styled.Text`
  font-size: ${scale(14)}px;
  color: ${Colors.white};
`;

export const TimeType = styled.View`
  width: 60%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const InfoCripto = styled.View`
  flex-direction: row;
  margin-top: ${scale(20)}px;
  margin-horizontal: ${scale(9)}px;
`;

export const CriptoDetail = styled.View`
  width: 50%;
  flex-direction: row;
  align-items: center;
`;

export const InfoCriptoDetail = styled.View``;

export const NameCripto = styled.Text`
  font-size: ${scale(16)}px;
  font-weight: bold;
  color: ${Colors.white};
  margin-left: ${scale(6)}px;
`;

export const CodeNameCripto = styled.Text`
  font-size: ${scale(14)}px;
  color: ${Colors.white};
  margin-left: ${scale(6)}px;
`;

export const CriptoPrice = styled.View`
  width: 50%;
  align-items: flex-end;
`;

export const PriceCripto = styled.Text`
  font-size: ${scale(18)}px;
  font-weight: bold;
  color: ${Colors.white};
`;

export const PriceCriptoConvert = styled.Text`
  font-size: ${scale(14)}px;
  color: ${Colors.white};
`;

export const RiseFall = styled.View`
  width: 15%;
  align-items: flex-end;
`;

export const Percentage = styled.Text`
  font-size: ${scale(12)}px;
  color: ${Colors.fall};
`;
