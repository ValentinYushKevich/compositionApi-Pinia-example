import { Coin } from './coin';

interface FavoriteCoin extends Coin {
  favorite: boolean
}

export default FavoriteCoin;
