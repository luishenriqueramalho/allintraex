export class BinanceSocket {
  private ws: WebSocket;

  constructor(public symbol: string, public interval: string) {
    this.ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_${interval}`
    );
    this.ws.onmessage = this.onMessage;
    this.ws.onerror = this.onError;
    this.ws.onclose = this.onClose;
  }

  private onMessage = (event: MessageEvent) => {
    const data = JSON.parse(event.data);
    //console.log("WebSocket message received:", data);
  };

  private onError = (event: Event) => {
    console.error("WebSocket error:", event);
  };

  private onClose = (event: CloseEvent) => {
    //console.log("WebSocket closed:", event);
  };

  public close() {
    this.ws.close();
  }
}
