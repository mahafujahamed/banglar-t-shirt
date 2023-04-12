import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
    const tshirts = useLoaderData();
    return (
        <div className='home-container'>
           <div className='tshirt-container'>
           {
            tshirts.map(tshirt => <Tshirt
            key = {tshirt._id}
            tshirt = {tshirt}
            ></Tshirt>)
           }
           </div>
           <div className='cart-container'>
            <Cart></Cart>
           </div>
        </div>
    );
};

export default Home;