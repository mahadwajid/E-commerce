import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./../Assessts/Style.css";
import { useNavigate } from 'react-router-dom';
import { Context } from './Context';

import { getproductById } from '../Service/Api';

function Checkout(props) {
    const { productId } = useParams();
    const [productById, setProductById] = useState([]);

    const { handleAddToCart } = useContext(Context);

    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);

    useEffect(() =>{
        window.scrollTo(0 ,0);
        getProductdetails();
        
    },[]);

    const getProductdetails = async () =>{
        try {
            const response = await getproductById(productId);
            setProductById(response.data);
            console.log(productById);
        }catch(error){
            console.log("Data nor found....")

        }
    }

    const handlecheckout = () => {
        navigate("/Payment");
    }

    const totalPrice = useMemo(() => {
        if (productById) {
            return parseInt(productById.price) * quantity;
        }
        return 0;
    }, [productById, quantity]);

    if (!productById) {
        return <div>Image not found</div>;
    }

    const handleIncrease = () => {
        setQuantity(quantity + 1)
    };

    const handleDecrease = () => {
        if (quantity === 0) {
            return 1;
        }
        setQuantity(quantity - 1);

    };

    return (
        <div>
            <div className='Checkout'>
                <div className='Checkout-image-container'>
                    <img src={`http://localhost:5000/${productById.image}`} alt={" "} className='Checkout-image' />
                </div>

                <div className='Checkout-details'>
                    <h2>{productById.productName}</h2>
                    <p>{productById.productDescription}</p>
                    <p>Price: {productById.price}</p>
                    <p>Total Price: {totalPrice}</p>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem', border: '1px solid black', }}>


            <button style={{ width: '3rem', height: '4rem', borderRadius: '1rem 1rem' }} onClick={handleIncrease}> + </button>
            <p style={{ marginTop: '1.4rem' }}>{quantity}</p>
            <button style={{ width: '3rem', height: '4rem', borderRadius: '1rem 1rem' }} onClick={handleDecrease}> - </button>
        </div>
              
                    

                    <div className='Checkout-buttons'>

                        <button  className='btn1' onClick={handlecheckout}> Pay</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
