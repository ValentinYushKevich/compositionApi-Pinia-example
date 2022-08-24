/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';
import { axios } from '@/services/axiosInstance';
import { SingleCoin } from '@/types/singleCoin';
import { Coin } from '@/types/coin';

export const useCoinStore = defineStore('coin', {
  state() {
    return {
      localCoinId: null as null | string,
      coinFullInfo: {} as SingleCoin,
    };
  },
  getters: {
    coinDisplayInfo(): any {
      if (this.localCoinId) return this.coinFullInfo?.DISPLAY[this.localCoinId].USD;
      return {};
    },
    coinRawInfo(): any {
      if (this.localCoinId) return this.coinFullInfo?.RAW[this.localCoinId].USD;
      return {};
    },
  },
  actions: {
    async getCoinInfo(coinId: string | string[]) {
      try {
        this.localCoinId = Array.isArray(coinId) ? coinId[0] : coinId;
        const response = await axios.get(`/pricemultifull?fsyms=${coinId}&tsyms=USD`);
        console.log('response.data', response.data);
        this.coinFullInfo = response.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
});
