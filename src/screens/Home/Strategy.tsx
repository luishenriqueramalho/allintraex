import React, { useEffect, useState } from "react";
import { View } from "react-native";
import {
  Active,
  ActiveBold,
  ActiveRegular,
  CardGraphicSt,
  CardHeaderSt,
  CardInfoSt,
  CardShareSt,
  CardSt,
  ContainerSt,
  NameProfitSt,
  PricePrimary,
  PriceSecundary,
  Prices,
  Profile,
  ProfitSt,
  TitleYou,
  You,
} from "./styles";
import ProfilePicture from "@/assets/imgs/profile-picture.png";
import { Scroll } from "@/utils/global";
import { BinanceSocket } from "@/config/websocketConfig";
import ChartsArea from "@/components/Charts/ChartsArea";
import { Online } from "@/assets/svg/Online";

const formatCurrency = (value) => {
  return `$ ${parseFloat(value).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

const CardComponent: React.FC<{ criptoData: any }> = ({ cryptoData }) => {
  const price = cryptoData?.k?.c
    ? formatCurrency(cryptoData.k.c)
    : "Loading...";

  return (
    <CardSt>
      <CardHeaderSt>
        <ProfitSt>
          <NameProfitSt>15% Profit</NameProfitSt>
        </ProfitSt>
        <View>
          <Online />
        </View>
      </CardHeaderSt>
      <CardGraphicSt>
        <ChartsArea dataPrice={cryptoData} />
      </CardGraphicSt>
      <CardInfoSt>
        <Active>
          <ActiveBold>
            {cryptoData ? cryptoData?.k?.s : "Loading..."}
          </ActiveBold>
          <ActiveRegular>
            {cryptoData ? cryptoData?.k?.s : "Loading..."}
          </ActiveRegular>
        </Active>
        <Prices>
          <PricePrimary>{price}</PricePrimary>
          <PriceSecundary>$ 495k / 1k investors</PriceSecundary>
        </Prices>
      </CardInfoSt>
      <CardShareSt>
        <You>
          <Profile source={ProfilePicture} />
          <TitleYou>Você</TitleYou>
        </You>
        <You>
          <Profile source={ProfilePicture} />
          <Profile source={ProfilePicture} />
          <Profile source={ProfilePicture} />
        </You>
      </CardShareSt>
    </CardSt>
  );
};

const Strategy: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<any>(null);

  useEffect(() => {
    const symbolData = "btcusdt";
    const interval = "1m";
    const binanceSocket = new BinanceSocket(symbolData, interval);

    binanceSocket.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setCryptoData(data);
    };

    return () => {
      binanceSocket.close();
    };
  }, []);

  return (
    <ContainerSt>
      <Scroll>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginBottom: 40,
          }}
        >
          <CardComponent cryptoData={cryptoData} />
          <CardComponent cryptoData={cryptoData} />
          <CardComponent cryptoData={cryptoData} />
          <CardComponent cryptoData={cryptoData} />
          <CardComponent cryptoData={cryptoData} />
          <CardComponent cryptoData={cryptoData} />
        </View>
      </Scroll>
    </ContainerSt>
  );
};

export default Strategy;
