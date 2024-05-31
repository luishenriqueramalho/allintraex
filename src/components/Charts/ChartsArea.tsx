import React, { useEffect, useState } from "react";
import { Defs, LinearGradient, Stop } from "react-native-svg";
import styled from "styled-components/native";
import { AreaChart } from "react-native-svg-charts";
import * as shape from "d3-shape";

export const Container = styled.View`
  width: 100%;
  height: 80px;
`;

const ChartsArea: React.FC = ({ dataPrice }) => {
  const [cryptoArea, setCryptoArea] = useState<any[]>([]);

  useEffect(() => {
    if (dataPrice) {
      const newDataPoint = {
        timestamp: new Date(dataPrice.E),
        price: parseFloat(dataPrice.k.c),
      };

      setCryptoArea((prevData) => {
        const newData = [...prevData, newDataPoint];
        if (newData.length > 30) {
          return newData.slice(newData.length - 30);
        }
        return newData;
      });
    }
  }, [dataPrice]);

  const data = cryptoArea.map((c) => c.price);

  const Gradient = () => (
    <Defs key={"gradient"}>
      <LinearGradient id={"gradient"} x1={"0%"} y1={"0%"} x2={"0%"} y2={"100%"}>
        <Stop offset={"0%"} stopColor={"#14C2AC"} stopOpacity={0.8} />
        <Stop offset={"100%"} stopColor={"#053752"} stopOpacity={0.2} />
      </LinearGradient>
    </Defs>
  );

  return (
    <Container>
      <AreaChart
        style={{ flex: 1 }}
        data={data}
        svg={{ fill: "url(#gradient)" }}
        contentInset={{ top: 20, bottom: 20 }}
        curve={shape.curveLinear}
      >
        <Gradient />
      </AreaChart>
    </Container>
  );
};

export default ChartsArea;
