import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some products</p>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ? 'orange' : 'red'}>Order Sammary: {cart.length}</h2>
            {message}
            {
                cart.map(tshirt => <p 
                    key={tshirt._id}
                    >{tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
                    </p> )
            }
        </div>
    );
};

export default Cart;