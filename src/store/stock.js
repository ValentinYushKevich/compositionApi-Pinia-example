/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';
import { axios } from '@/services/axiosInstance.ts';

export const useStockStore = defineStore('stock', {
  state() {
    return {
      allStock: [],
    };
  },
  getters: {
    filteredStock() {
      return this.allStock.filter((stock) => stock.CoinInfo);
    },
  },
  actions: {
    async getAllStock() {
      try {
        const response = await axios.get('/top/totalvolfull?limit=40&tsym=USD');
        console.log('response.data', response.data.Data);
        this.allStock = response.data.Data;
      } catch (e) {
        console.log(e);
      }
    },
  },
});
