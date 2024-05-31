import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  CodeNameCripto,
  Container,
  CriptoDetail,
  CriptoPrice,
  GraficTime,
  GraficType,
  InfoCripto,
  InfoCriptoDetail,
  NameCripto,
  Percentage,
  PriceCripto,
  PriceCriptoConvert,
  RiseFall,
  SelectTimer,
  TimeType,
  Todo,
} from "./styles";
import { Bitcoin, GraphicArea, GraphicCandle, GraphicLine } from "@/assets/svg";
import { BinanceSocket } from "@/config/websocketConfig";
import ChartsLine from "./ChartsLine";
import ChartsArea from "./ChartsArea";
import ChartsCandle from "./ChartsCandle";
import { useStore } from "@/mobx/store";

const Cryptos = [
  { btcusdt: "BTC Bitcoin" },
  { dogeusdt: "DOGE Dogecoin" },
  { ethusdt: "ETH Ethereum" },
  { ltcusdt: "LTC Litecoin" },
];

const Charts: React.FC = ({ symbol }) => {
  const { dolarPriceStore } = useStore();
  const [isDolar, setIsDolar] = useState();
  const [cryptoData, setCryptoData] = useState<any>(null);
  const [selectedChart, setSelectedChart] = useState<
    "line" | "candle" | "area"
  >("line");

  useEffect(() => {
    const symbolData = symbol ? symbol : "btcusdt";
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

  const getCryptoName = (symbol) => {
    const flatCryptos = Object.assign({}, ...Cryptos);
    return flatCryptos[symbol.toLowerCase()] || "Unknown Symbol";
  };

  const formatPrice = (price) => {
    const numberPrice = parseFloat(price);
    return numberPrice.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const calculateConvertedPrice = (price) => {
    const conversionRate = isDolar.ask;
    const convertedPrice = parseFloat(price) * conversionRate;
    return convertedPrice.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleChartTypeChange = (chartType: "line" | "candle" | "area") => {
    setSelectedChart(chartType);
  };

  const fetchData = async () => {
    try {
      const response = await dolarPriceStore.getDolarPrice();
      setIsDolar(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dolarPriceStore]);

  return (
    <>
      <Container>
        {selectedChart === "line" && <ChartsLine dataPrice={cryptoData} />}
        {selectedChart === "candle" && <ChartsCandle dataPrice={cryptoData} />}
        {selectedChart === "area" && <ChartsArea dataPrice={cryptoData} />}
        <GraficTime>
          <GraficType>
            <TouchableOpacity onPress={() => handleChartTypeChange("line")}>
              <GraphicLine />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleChartTypeChange("candle")}>
              <GraphicCandle />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleChartTypeChange("area")}>
              <GraphicArea />
            </TouchableOpacity>
          </GraficType>
        </GraficTime>
        <InfoCripto>
          <CriptoDetail>
            <Bitcoin />
            <InfoCriptoDetail>
              <NameCripto>
                {cryptoData ? getCryptoName(cryptoData.k.s) : "Loading..."}
              </NameCripto>
              <CodeNameCripto>
                {cryptoData ? cryptoData.k.s : "Loading..."}
              </CodeNameCripto>
            </InfoCriptoDetail>
          </CriptoDetail>
          <CriptoPrice>
            <PriceCripto>
              {cryptoData ? `$ ${formatPrice(cryptoData.k.c)}` : "Loading..."}
            </PriceCripto>
            <PriceCriptoConvert>
              {cryptoData
                ? calculateConvertedPrice(cryptoData.k.c)
                : "Calculando..."}
            </PriceCriptoConvert>
          </CriptoPrice>
        </InfoCripto>
      </Container>
    </>
  );
};

export default Charts;
