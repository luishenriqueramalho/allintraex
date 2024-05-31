import Charts from "@/components/Charts";
import { BinanceSocket } from "@/config/websocketConfig";
import { Scroll } from "@/utils/global";
import React, { useEffect } from "react";

const Dashboard: React.FC = () => {
  useEffect(() => {
    const symbol = "btcusdt";
    const interval = "1m";
    const binanceSocket = new BinanceSocket(symbol, interval);

    return () => {
      binanceSocket.close();
    };
  }, []);

  return (
    <>
      <Scroll>
        <Charts symbol="btcusdt" />
        <Charts symbol="dogeusdt" />
        <Charts symbol="ethusdt" />
        <Charts symbol="ltcusdt" />
      </Scroll>
    </>
  );
};

export default Dashboard;
