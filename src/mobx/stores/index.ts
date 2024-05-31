import noticeStore, { NoticeStore } from "@/mobx/stores/NoticeStore";
import cryptoPriceStore, { CryptoPriceStore } from "./CryptoPriceStore";
import dolarPriceStore, { DolarPriceStore } from "./DolarPriceStore";

export type RootStore = {
  noticeStore: NoticeStore;
  cryptoPriceStore: CryptoPriceStore;
  dolarPriceStore: DolarPriceStore;
};

const rootStore: RootStore = {
  noticeStore,
  cryptoPriceStore,
  dolarPriceStore,
};

export default rootStore;
