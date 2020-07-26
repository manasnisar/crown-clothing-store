import React from 'react'
import './CartDropdown.scss'
import CustomButton from '../CustomButton/CustomButton'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import CartItem from '../CartItem/CartItem'
import {selectCartItems} from '../../redux/cart/cart-selectors'
import {toggleCartHidden} from '../../redux/cart/cart-actions'

const CartDropdown = ({cartItems , history , dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>)) :
                <span className='empty-message'>Cart is empty</span>
            }
        </div>
        <CustomButton onClick={() =>  {
            history.push('/checkout')
            dispatch(toggleCartHidden())
        }}
        >Checkout</CustomButton>
    </div>
)

const mapStateToPops = createStructuredSelector({
    cartItems : selectCartItems
})

export default withRouter(connect(
    mapStateToPops
)(CartDropdown))