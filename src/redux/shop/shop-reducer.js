import ShopData from './ShopData'

const initialState = {
    shopItems : ShopData
}

const shopReducer = (state = initialState , action) => {
    switch(action.type){
        default:
            return state
    }
}

export default shopReducer