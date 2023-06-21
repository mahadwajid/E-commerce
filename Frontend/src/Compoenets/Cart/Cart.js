import { useContext } from "react";
import { Context } from "../Context";
import '../../Assessts/Cart.css';
import { useNavigate } from "react-router-dom";
import {RiDeleteBin6Fill} from 'react-icons/ri';


function Cart() {
  const { cartItems, handleAddToCart, handleRemoveFromCart, handleCartProductQuantity } = useContext(Context);
  const Navigate=useNavigate();

  const Navigatepayment=()=>{
    Navigate('/Payment');
  }

  return (

    <div>
      <div className="Head">
      <h1>CART</h1>
      <p>
      "Your one-stop destination for effortless shopping - Add to Cart and experience convenience at its best!
      </p>
      </div>
    <div className="cart-products">
      {cartItems.map((item) => (
        <div className="search-result-item" key={item._id} onClick={() => {}}>
          <div className="image-container">
            <img src={`https://mydata-6mhq.onrender.com/${item.image}`} alt={item.name} />
          </div>
          <div>
            <div className="prod-details">
            <span className="name">{item.name}</span>
              <div className="quantity-buttons">
                <span onClick={() => handleCartProductQuantity("dec", item)}>-</span>
                <span>{item.quantity}</span>
                <span onClick={() => handleCartProductQuantity("inc", item)}>+</span>
              </div>
              <span className="highlight">  
                  Price:{item.price * item.quantity}
                </span>    
                <div>
                <button onClick={() =>handleRemoveFromCart(item) }  ><RiDeleteBin6Fill size={25} /> </button>
                </div>

                




            </div>
          </div>
        </div>
      ))}

      <div className="Pay">
      <div className="total-price">
                 Total:{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
                </div>

                <div>
                  <button  className="bt" onClick={Navigatepayment}>
                    Payment
                  </button>
                </div>

      </div>

          
    </div>
    </div>
  );
}

export default Cart;
