import { useNavigate } from "react-router-dom";
import '../../Assessts/Payment.css';
import { useContext } from "react";
import { Context } from "../Context";

function Payment(){

  const{cartItems, cartSubTotal}=useContext(Context);




  return(
    <div className="container-1">
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
        src={`https://mydata-rumz.onrender.com/${item.image}`} alt={item.name} />

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

{/* Payment */}

<main class="page payment-page">
    <section class="payment-form dark">
      <div class="container">
        <form>
          <div class="products">
            <h3 class="title">Checkout</h3>
             {cartItems.map((key)=>(
              <div>
               <div class="item">
               <span class="price">$200</span>
               <p class="item-name">{key.productName}</p>
               <p class="item-description">{key.productDescription}</p>
             </div>
             </div>
             ))}

            <div class="total">Total<span class="price">{cartSubTotal}</span></div>
          </div>

          
          <div class="card-details">
            <h3 class="title">Credit Card Details</h3>
            <div class="row">
              <div class="form-group col-sm-7">
                <label for="card-holder">Card Holder</label>
                <input id="card-holder" type="text" class="form-control" placeholder="Card Holder" aria-label="Card Holder" aria-describedby="basic-addon1" />
              </div>
              <div class="form-group col-sm-5">
                <label for="">Expiration Date</label>
                <div class="input-group expiration-date">
                  <input type="text" class="form-control" placeholder="MM" aria-label="MM" aria-describedby="basic-addon1" />
                  <span class="date-separator">/</span>
                  <input type="text" class="form-control" placeholder="YY" aria-label="YY" aria-describedby="basic-addon1" />
                </div>
              </div>
              <div class="form-group col-sm-8">
                <label for="card-number">Card Number</label>
                <input id="card-number" type="text" class="form-control" placeholder="Card Number" aria-label="Card Holder" aria-describedby="basic-addon1" />
              </div>
              <div class="form-group col-sm-4">
                <label for="cvc">CVC</label>
                <input id="cvc" type="text" class="form-control" placeholder="CVC" aria-label="Card Holder" aria-describedby="basic-addon1" />
              </div>
              <div class="form-group col-sm-12">
                <button type="button" class="btn btn-primary btn-block">Proceed</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  </main>





</div>

  );
}
export default Payment;