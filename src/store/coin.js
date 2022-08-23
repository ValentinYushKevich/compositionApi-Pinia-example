/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';
import { axios } from '@/services/axiosInstance.ts';

export const useCoinStore = defineStore('coin', {
  state() {
    return {
      localCoinId: null,
      coinFullInfo: null,
    };
  },
  getters: {
    coinDisplayInfo() {
      return this.coinFullInfo?.DISPLAY[this.localCoinId].USD || {};
    },
    coinRawInfo() {
      return this.coinFullInfo?.RAW[this.localCoinId].USD || {};
    },
  },
  actions: {
    async getCoinInfo(coinId) {
      try {
        this.localCoinId = coinId;
        const response = await axios.get(`/pricemultifull?fsyms=${coinId}&tsyms=USD`);
        console.log('response.data', response.data);
        this.coinFullInfo = response.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
});
