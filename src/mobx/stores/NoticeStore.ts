import apiCall from "@/config/apiCall";
import { makeObservable, observable, runInAction } from "mobx";

export class NoticeStore {
  notice: any = [];
  isLoading = false;
  isError = undefined;

  constructor() {
    makeObservable(this, {
      notice: observable,
      isLoading: observable,
    });
  }

  async getNotices() {
    this.isLoading = true;
    this.isError = undefined;

    try {
      const response = await apiCall.NoticesRoute.getNotices();
      runInAction(() => {
        this.notice = response.items;
      });

      return this.notice;
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }
}

export default new NoticeStore();
