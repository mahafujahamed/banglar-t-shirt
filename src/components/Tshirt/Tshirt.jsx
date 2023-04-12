import React from 'react';
import './Tshirt.css';

const Tshirt = ({tshirt}) => {
    const {picture, name, price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
        </div>
    );
};

export default Tshirt;