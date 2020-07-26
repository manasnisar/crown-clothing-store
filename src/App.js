import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/HomePage'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {Switch , Route , Redirect} from 'react-router-dom'
import ShopPage from "./Pages/Shop/ShopPage"
import Header from './Components/Header/Header'
import SignInAndSignUp from './Pages/SignIn-Signup/SignInAndSignUp'
import {auth , createUserProfileDocument} from "../src/firebase/firebase.utils"
import {setCurrentUser} from './redux/user/user-actions'
import { selectCurrentUser } from './redux/user/user-selectors';
import Checkout from './Pages/Checkout/Checkout'




class App extends React.Component {


unsubscribeFromAuth = null

componentDidMount() {
  const {setCurrentUser} = this.props
  this.unsubscribeFromAuth =  auth.onAuthStateChanged( async userAuth => {
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth)
      userRef.onSnapshot(snapShot => {
        setCurrentUser({
            id : snapShot.id,
            ...snapShot.data()
          });
        })
    }else{
      setCurrentUser(userAuth)
    }
  })
}


componentWillUnmount (){
  this.unsubscribeFromAuth()
}



  render(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/> 
        <Route path='/shop' component={ShopPage}/>
        
        <Route exact path='/signin' render={() => this.props.currentUser ? 
          (<Redirect to='/'/>) :
          (<SignInAndSignUp/>)} 
          />
        <Route exact path='/checkout' component={Checkout}/>
      </Switch>

    </div>

  );
  }
}

const mapStateToProps =createStructuredSelector({
    currentUser : selectCurrentUser
  
})

const mapDispatchToProps = dispatch => {
  return{
  setCurrentUser : (user) => dispatch(setCurrentUser(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
