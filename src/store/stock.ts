/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';
import { axios } from '@/services/axiosInstance';
import { Coin } from '@/types/coin';
import FavoriteCoin from '@/types/favoriteCoin';

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
        this.allStock = response.data.Data.map((coin: Coin, i:number):FavoriteCoin => ({
          ...coin,
          favorite: i % 2 === 0,
        }));
        console.log('allStock', this.allStock);
      } catch (e) {
        console.log(e);
      }
    },
  },
});
