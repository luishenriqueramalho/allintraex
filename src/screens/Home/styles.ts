import { Colors } from "@/utils/colors";
import { scale } from "@/utils/global";
import styled from "styled-components/native";

export const Header = styled.View`
  margin-horizontal: ${scale(24)}px;
  margin-top: ${scale(50)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const StrategyVw = styled.TouchableOpacity`
  width: 50%;
  align-items: center;
`;

export const FeedVw = styled.TouchableOpacity`
  width: 50%;
  align-items: center;
`;

export const TitleTab = styled.Text<{ isSelected: boolean }>`
  font-size: ${scale(16)}px;
  color: ${({ isSelected }) =>
    isSelected ? Colors.pinkButton : Colors.textTab};
`;

export const Line = styled.View`
  height: 1.5px;
  background-color: ${Colors.textTab};
  margin-top: ${scale(13)}px;
`;

export const RowSelect = styled.View`
  flex-direction: row;
  margin-top: ${scale(20)}px;
  justify-content: space-between;
`;

export const RollOptions = styled.View`
  width: 90%;
  flex-direction: row;
`;

export const ButtonOption = styled.TouchableOpacity`
  background-color: ${Colors.buttonHeader};
  padding-vertical: ${scale(8)}px;
  padding-horizontal: ${scale(18)}px;
  border-radius: ${scale(15)}px;
  margin-right: ${scale(10)}px;
`;

export const TitleButton = styled.Text`
  font-size: ${scale(13)}px;
  color: ${Colors.titleButton};
`;

export const PlusAdd = styled.TouchableOpacity`
  width: 10%;
  align-items: center;
  justify-content: center;
`;

export const Plus = styled.Text`
  font-size: ${scale(22)}px;
  color: ${Colors.white};
`;

// Strategy
export const ContainerSt = styled.View`
  margin-top: ${scale(30)}px;
`;

export const CardSt = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 48%;
  background-color: ${Colors.buttonHeader};
  border-radius: ${scale(10)}px;
  margin-bottom: ${scale(24)}px;
`;

export const CardHeaderSt = styled.View`
  padding: ${scale(10)}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProfitSt = styled.View`
  background-color: ${Colors.inforCard};
  border-radius: ${scale(10)}px;
  padding-horizontal: ${scale(18)}px;
  padding-vertical: ${scale(2)}px;
`;

export const NameProfitSt = styled.Text`
  font-size: ${scale(12)}px;
  color: ${Colors.titleButton};
`;

export const CardGraphicSt = styled.View`
  height: 80px;
  justify-content: center;
  align-items: center;
`;

export const Active = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${scale(6)}px;
`;

export const ActiveBold = styled.Text`
  font-size: ${scale(13)}px;
  font-weight: bold;
  color: ${Colors.white};
`;

export const ActiveRegular = styled.Text`
  font-size: ${scale(11)}px;
  color: ${Colors.activeRegular};
`;

export const CardInfoSt = styled.View`
  padding-horizontal: ${scale(5)}px;
`;

export const Prices = styled.View`
  margin-top: ${scale(20)}px;
`;

export const PricePrimary = styled.Text`
  font-size: ${scale(20)}px;
  font-weight: bold;
  color: ${Colors.white};
`;

export const PriceSecundary = styled.Text`
  font-size: ${scale(12)}px;
  font-weight: bold;
  color: ${Colors.textSecundary};
  margin-top: ${scale(5)}px;
`;

export const CardShareSt = styled.View`
  padding-horizontal: ${scale(10)}px;
  padding-vertical: ${scale(10)}px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${scale(13)}px;
`;

export const You = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleYou = styled.Text`
  font-size: ${scale(12)}px;
  color: ${Colors.white};
  margin-left: ${scale(5)}px;
`;

export const Profile = styled.Image`
  width: ${scale(25)}px;
  height: ${scale(25)}px;
`;
