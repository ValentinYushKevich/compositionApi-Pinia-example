/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';
import { axios } from '@/services/axiosInstance';

export const useStockStore = defineStore('stock', {
  state() {
    return {
      allStock: [],
    };
  },
  getters: {
    filteredStock() {
      return this.allStock.filter((stock) => stock.symbol);
    },
  },
  actions: {
    async getAllStock() {
      // eslint-disable-next-line arrow-body-style
      const response = await axios.get('/pricemultifull?fsyms=BTC,ETH&tsyms=USD,EUR');
      console.log(response.data.RAW);
      this.allStock = response.data.RAW;
    },
  },
});
