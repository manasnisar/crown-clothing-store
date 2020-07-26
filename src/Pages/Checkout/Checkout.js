import React from 'react'
import './Checkout.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems} from '../../redux/cart/cart-selectors'
import {selectCartTotal} from '../../redux/cart/cart-selectors'
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem'
import StripeButton from '../../Components/StripeButton/StripeButton'




const Checkout = ({cartItems , total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>   
            )
        }
        <div className='total-container'>
            <div className='total'>Total</div>
            <div className='total'>${total}</div>
        </div>
        <div className='test-warning'>
            *Please use the following test credit card for payments*
            <br/>
            4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
        </div>
        <StripeButton price={total}/>

    </div>
)

const mapStatetoProps = createStructuredSelector({
    cartItems : selectCartItems,
    total : selectCartTotal
})

export default connect(
    mapStatetoProps
 )(Checkout)