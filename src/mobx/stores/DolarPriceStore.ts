import apiCall from "@/config/apiCall";
import { makeObservable, observable, runInAction } from "mobx";

type DolarPriceResponse = {
  USDBRL: {
    code: "USD";
    codein: "BRL";
    name: "Dólar Americano/Real Brasileiro";
    high: "5.14";
    low: "5.1047";
    varBid: "-0.0109";
    pctChange: "-0.21";
    bid: "5.1257";
    ask: "5.127";
    timestamp: "1715878424";
    create_date: "2024-05-16 13:53:44";
  };
};

export class DolarPriceStore {
  dolarPrice: any = {};
  isLoading = false;
  isError = undefined;

  constructor() {
    makeObservable(this, {
      dolarPrice: observable,
      isLoading: observable,
    });
  }

  async getDolarPrice() {
    this.isLoading = true;
    this.isError = undefined;

    try {
      const response = await apiCall.DolarPriceRoute.getDolarPrice();
      runInAction(() => {
        this.dolarPrice = response.USDBRL;
      });

      return this.dolarPrice;
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }
}

export default new DolarPriceStore();
