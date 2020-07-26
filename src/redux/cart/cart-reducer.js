import {TOGGLE_CART_HIDDEN , ADD_ITEM_TO_CART , REMOVE_ITEM_FROM_CART , DECREASE_ITEM} from './cart-constants'
import {addItemToCart} from './cart-util'
import {decreaseItem} from './cart-util'

const initialState  = {
    hidden : true,
    cartItems : []
}

const cartReducer = (state = initialState , action) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden : !state.hidden
            }
        case ADD_ITEM_TO_CART:
            return{
                ...state,
                cartItems : addItemToCart( state.cartItems , action.payload)
            }
        case REMOVE_ITEM_FROM_CART:
            return{
                ...state,
                cartItems : state.cartItems.filter( cartItem => cartItem.id !== action.payload.id)
            }
        case DECREASE_ITEM:
            return{
                ...state,
                cartItems : decreaseItem(state.cartItems , action.payload)
            }
        default:
            return state
    }
}

export default cartReducer