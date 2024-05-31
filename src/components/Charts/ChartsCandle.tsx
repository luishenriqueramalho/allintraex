import React, { useEffect, useState } from "react";
import { Colors } from "@/utils/colors";
import styled from "styled-components/native";
import { CandleStickChart } from "react-native-charts-wrapper";
import { processColor } from "react-native";

export const Container = styled.View`
  width: 100%;
  height: 125px;
  background-color: ${Colors.backgroundGraphic};
`;

const ChartsCandle: React.FC = ({ dataPrice }) => {
  const [candles, setCandles] = useState<any[]>([]);

  useEffect(() => {
    if (dataPrice) {
      const newDataPoint = {
        timestamp: new Date(dataPrice.E).getTime(),
        shadowH: parseFloat(dataPrice.k.h),
        shadowL: parseFloat(dataPrice.k.l),
        open: parseFloat(dataPrice.k.o),
        close: parseFloat(dataPrice.k.c),
      };

      setCandles((prevData) => {
        const newData = [...prevData, newDataPoint];
        if (newData.length > 20) {
          return newData.slice(newData.length - 20);
        }
        return newData;
      });
    }
  }, [dataPrice]);

  return (
    <Container>
      <CandleStickChart
        style={{ flex: 1 }}
        data={{
          dataSets: [
            {
              values: candles,
              config: {
                highlightColor: processColor("transparent"),
                shadowColor: processColor("black"),
                shadowWidth: 1,
                increasingColor: processColor("green"),
                increasingPaintStyle: "FILL",
                decreasingColor: processColor("red"),
                decreasingPaintStyle: "FILL",
              },
            },
          ],
        }}
        xAxis={{
          enabled: false,
        }}
        yAxis={{
          left: { enabled: false },
          right: { enabled: false },
        }}
        marker={{
          enabled: false,
        }}
        highlightPerTapEnabled={false}
        highlightPerDragEnabled={false}
      />
    </Container>
  );
};

export default ChartsCandle;
