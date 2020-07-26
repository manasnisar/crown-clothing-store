import React,{useState} from 'react'
import './SignIn.scss'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'


function SignIn() {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    
    const handleSubmit = async event => {
        event.preventDefault();
        try{
            await auth.signInWithEmailAndPassword(email , password);
            setEmail("")
            setPassword('')
        }catch(error){
            console.log(error); 
        }

    }

    const handleChange = event => {
        const {name , value} = event.target
        name === 'email' ? setEmail(value) : setPassword(value)
        
    }

    return (
        <div className='sign-in'>
            <h2 className='title'>Have an account?</h2>
            <span>Sign In here</span>

            <form onSubmit={handleSubmit}>
                <FormInput name='email' label='Email' type="email" value={email} required handleChange={handleChange}/>    
                <FormInput name='password' label='Password' type="password" value={password} required handleChange={handleChange}/>    
                <div className='buttons'>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
                        Sign In With Google
                    </CustomButton>
                </div>
                
            </form>            
        </div>
    )
}

export default SignIn
