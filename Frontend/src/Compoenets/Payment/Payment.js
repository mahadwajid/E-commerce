import { useNavigate } from "react-router-dom";
import '../../Assessts/Payment.css';
import { useContext } from "react";
import { Context } from "../Context";

function Payment(){

  const{cartItems, cartSubTotal}=useContext(Context);




  return(
    <div className="Main-dev">
      <div className="right-dev">
        
        <div className="Method">
        <h1 >PAYMENT</h1>
          <span>Easypaisa</span>
          <span>Credit Card</span>
        </div>

        <div className="Details"> 
          <h3>Shipping Info</h3>
          <form className="fo"> 
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="City" />
            <input  type="text" placeholder="Phone Number" />
           </form>

           <button>Confirm</button>

        </div>


      </div>

      

      <div className="Maindev">
      <h2 className="h2">ORDER SUMMARY</h2>
      {cartItems.map((Items) =>(
        <div className="left-dev" key={Items.id}>

        <div className="Det">
          <div className="img">
            <img src={Items.imageUrl}  alt={Items.title} />
            </div>
            
              <span className="tit"> {Items.title}</span>
              <span>{Items.quantity}</span>
              <span>{Items.price}</span>
              
                    
        </div>

        


      </div>
      

      )
      )}
       <span>Total Price:{cartSubTotal}</span>
      </div>
      



    </div>

  );
}
export default Payment;