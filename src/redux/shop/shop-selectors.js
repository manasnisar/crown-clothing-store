import {createSelector} from 'reselect'


const selectShop = state => state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.shopItems
)

export const selectCollectionsForPreview = createSelector(
    [selectShopItems],
    shopItems => Object.keys(shopItems).map(key =>  shopItems[key])
)

export const selectCollection = collectionUrlParam => 
createSelector(
    [selectShopItems],
    shopItems => shopItems[collectionUrlParam]
    )