import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import ReactSpinner from '../../../Sheared/ReactSpinner';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L3j4dCDkSqcC7zUeqBcRzewMf1jmxGimQf75NHeBjlRipVMDqXFWzdC63cn8z8mjbuJPsVuWKwjgJHFmQdi6MLR003EhBmPVP');


const PaymentOrder = () => {
    const { id } = useParams();

    const url = `https://stark-retreat-48209.herokuapp.com/purchase/${id}`;

    const { data: data, isLoading, refetch } = useQuery(['purchase', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <ReactSpinner/>
    }
    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {data.userName}</p>
                    <h2 class="card-title">Please Pay for {data.name}</h2>
                    <p>About<span className='text-orange-700'>{data.description}</span></p>
                    <p>You Have to pay For {data.quantity} Items</p>
                    <p>Please pay: ${data.price * data.quantity}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm data={data}  refetch={refetch}/>
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default PaymentOrder;