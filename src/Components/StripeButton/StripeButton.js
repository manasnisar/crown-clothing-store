import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


const StripeButton = ({ price }) => {
    const stripePrice = price * 100;
    const publishableKey = 'pk_test_51H9BqYK7Z410rQ2I1GhsTkj3Q4Nk8LooJzPhgue3anwAJpLJ3zyInsDkP9po2H9IVKUnTPKojK9d9tiTFRHw7kw900MYIzXIBQ';

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return(
        <StripeCheckout
            lable='Pay Now'
            name='Crown Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`You total is $${price}`}
            amount={stripePrice}
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton