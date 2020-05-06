import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop =>  shop.collections
)

// currying is being used in this selector 
export const selectCollection = collectionUrlParam => 
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );