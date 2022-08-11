/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';
import { axios } from '@/services/axiosInstance';

export const useCoinStore = defineStore('coin', {
  state() {
    return {
      coinFullInfo: null,
    };
  },
  getters: {
    coinDisplayInfo() {
      return this.coinFullInfo.DISPLAY.BTC.USD;
    },
    coinRawInfo() {
      return this.coinFullInfo.RAW.BTC.USD;
    },
  },
  actions: {
    async getCoinInfo(coinId) {
      try {
        const response = await axios.get(`/pricemultifull?fsyms=${coinId}&tsyms=USD`);
        console.log('response.data', response.data);
        this.coinFullInfo = response.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
});
