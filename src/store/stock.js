/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';
import axios from 'axios';

export const useStockStore = defineStore('stock', {
  state() {
    return {
      allStock: [],
    };
  },
  actions: {
    async getAllStock() {
      const response = await axios.get(
        'https://financialmodelingprep.com/api/v3/profile/NVDA?apikey=31a44fedd8986038e864c7f6f577d871',
      );
      this.allStock = response.data;
    },
  },
});
