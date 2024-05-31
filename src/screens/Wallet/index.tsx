import NavigationBar from "@/components/NavigationBar";
import { useStore } from "@/mobx/store";
import { Scroll, Wrapper } from "@/utils/global";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import {
  Card,
  Container,
  Left,
  NameCrypto,
  PriceCrypto,
  Search,
} from "./styles";
import { Bitcoin } from "@/assets/svg";

const Wallet: React.FC = () => {
  const { cryptoPriceStore } = useStore();
  const [allPrices, setAllPrices] = useState([]);
  const [displayedPrices, setDisplayedPrices] = useState([]);
  const [isPrices, setIsPrices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    try {
      const response = await cryptoPriceStore.getPriceCrypto();
      setAllPrices(response);
      setDisplayedPrices(response.slice(0, 20));
      /* const filteredData = response
        .slice(0, 20)
        .filter((crypto) =>
          crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
        );
      setIsPrices(filteredData); */
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filteredData = allPrices
      .filter((crypto) =>
        crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice(0, 20);
    setDisplayedPrices(filteredData);
  }, [searchTerm, allPrices]);

  const formatPrice = (price) => {
    const numberPrice = parseFloat(price);
    const decimalPlaces = numberPrice < 1 ? 8 : 2;

    return numberPrice.toLocaleString("en-US", {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    });
  };

  return (
    <>
      <NavigationBar title="Carteiras" />
      <Wrapper>
        <Search
          placeholder="Buscar criptomoeda..."
          onChangeText={setSearchTerm}
          returnKeyType="search"
        />
        <Scroll>
          <Container>
            {displayedPrices &&
              displayedPrices.map((place, index) => (
                <Card key={index}>
                  <Left>
                    <Bitcoin />
                    <NameCrypto>{place?.symbol}</NameCrypto>
                  </Left>
                  <PriceCrypto>$ {formatPrice(place?.price)}</PriceCrypto>
                </Card>
              ))}
          </Container>
        </Scroll>
      </Wrapper>
    </>
  );
};

export default Wallet;
