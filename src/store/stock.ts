/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';
import { axios } from '@/services/axiosInstance';
import { Coin } from '@/types/coin';

export const useStockStore = defineStore('stock', {
  state() {
    return {
      allStock: [] as Coin[],
    };
  },
  getters: {
    filteredStock():Coin[] | [] {
      return this.allStock.filter((stock) => stock.CoinInfo);
    },
  },
  actions: {
    async getAllStock():Promise<void> {
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
