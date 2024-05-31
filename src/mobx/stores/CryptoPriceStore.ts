import apiCall from "@/config/apiCall";
import { makeObservable, observable, runInAction } from "mobx";

export class CryptoPriceStore {
  priceCrypto: any = [];
  isLoading = false;
  isError = undefined;

  constructor() {
    makeObservable(this, {
      priceCrypto: observable,
      isLoading: observable,
      isError: observable,
    });
  }

  async getPriceCrypto() {
    this.isLoading = true;
    this.isError = undefined;

    try {
      const response = await apiCall.CryptosPriceRoute.getPricesCrypto();
      runInAction(() => {
        this.priceCrypto = response;
      });

      return this.priceCrypto;
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }
}

export default new CryptoPriceStore();
