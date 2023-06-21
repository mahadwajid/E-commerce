import { useNavigate } from "react-router-dom";
import '../../Assessts/Payment.css';
import { useContext } from "react";
import { Context } from "../Context";

function Payment(){

  const{cartItems, cartSubTotal}=useContext(Context);




  return(
    <div class="master-container">
<div class="card cart">
  <label class="title-Payment">Your cart</label>
  <div class="products">
    {cartItems.map((item) => (
      <div class="product">
        <img fill="none"
          viewBox="0 0 60 60"
          height="60"
          width="60"
        src={`http://localhost:5000/${item.image}`} alt={item.name} />

        <div>
          <span>{item.productName}</span>
          <p>{item.productDescription}</p>
        </div>
        {/* <div class="quantity">
         
        </div> */}
        <label class="price small">RS{item.price}</label>
      </div>
    ))}
  </div>
</div>


  <div class="card coupons">
    <label class="title">Apply coupons</label>
    <form class="form">
        <input type="text" placeholder="Apply your coupons here" class="input_field" />
        <button>Apply</button>
    </form>
  </div>



  <div class="card checkout">
    
    <label class="title">Checkout</label>
    <div class="details">
      <span>Your cart subtotal:</span>
      <span>{cartSubTotal}</span>
      <span>Discount through applied coupons:</span>
      <span>0.0</span>
      <span>Shipping fees:</span>
      <span>0.0</span>
    </div>
    <div class="checkout--footer">
      <label class="price"><sup>Rs</sup>{cartSubTotal}</label>
      <button class="checkout-btn">Checkout</button>
    </div>
  </div>
</div>

  );
}
export default Payment;