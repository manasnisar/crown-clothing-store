import React from 'react'
import './Header.scss'
import {connect} from "react-redux"
import {ReactComponent as Logo} from '../../Assets/crown.svg'
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart-selectors'
import {selectCurrentUser} from '../../redux/user/user-selectors'
import {Link} from 'react-router-dom'
import {auth} from '../../../src/firebase/firebase.utils'
import Cart from '../Cart/Cart'
import CartDropdown from '../CartDropdown/CartDropdown'



function Header({currentUser , hidden}) {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    Shop
                </Link>
                <Link className='option' to='/shop'>
                    Contact
                </Link>
                {
                    currentUser ? 
                    <div className='option' onClick={() =>  auth.signOut()}>Sign Out</div>
                    :
                    <Link className='option' to='/signin'>Sign In</Link>
                }
                <Cart/>
            </div>
            {
                hidden ? null : <CartDropdown/>
            }
            
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
        currentUser : selectCurrentUser,
        hidden : selectCartHidden
})


export default connect(
    mapStateToProps
)(Header)
