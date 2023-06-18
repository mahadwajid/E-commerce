import React, { useContext, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./../Assessts/Style.css";
import Counter from './Counter';
import { useNavigate } from 'react-router-dom';
import { Context } from './Context';
import { Link } from 'react-router-dom';

function Checkout(props) {
    const { productId } = useParams();
    const imageDetails = props.images.find((image) => image.id === productId);
    const { handleAddToCart } = useContext(Context);

    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);

    const handlecheckout = () => {
        navigate("/Payment");
    }

    const totalPrice = useMemo(() => {
        if (imageDetails) {
            return parseInt(imageDetails.price) * quantity;
        }
        return 0;
    }, [imageDetails, quantity]);

    if (!imageDetails) {
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
                    <img src={imageDetails.imageUrl} alt={imageDetails.title} className='Checkout-image' />
                </div>

                <div className='Checkout-details'>
                    <h2>{imageDetails.title}</h2>
                    <p>Price: {imageDetails.price}</p>
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
