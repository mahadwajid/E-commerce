import { useEffect } from "react";
import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Data from "../Common/Data/Data";

export const Context = createContext();

const AppContext = ({ children }) => {

    const[data,setdata]=useState(Data);
    const [products, setProducts] = useState();
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const [quantity, setQuantity] = useState(1);
    // const location = useLocation();

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [location]);

    useEffect(() => {
        let count = 0;
        cartItems?.map((item) => (count += item.quantity));
        setCartCount(count);

        let subTotal = 0;
        cartItems.map(
            (item) =>
                (subTotal += item.price * item.quantity)
        );
        setCartSubTotal(subTotal);
    }, [cartItems]);

    const handleAddToCart = (product, quantity) => {
        let items = [...cartItems];
        let index = items.findIndex((p) => p.id === product.id);
        if (index !== -1) {
          items[index].quantity += quantity;
        } else {
          product.quantity = quantity;
          items = [...items, product];
        }
        setCartItems(items);
      };

    const handleRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items?.filter((p) => p.id !== product?.id);
        setCartItems(items);
    };

    const handleCartProductQuantity = (type, product) => {
        let items = [...cartItems];
        let index = items.findIndex((p) => p.id === product.id);
        if (type === "inc") {
          items[index].quantity += 1;
        } else if (type === "dec") {
          if (items[index].quantity === 1) return;
          items[index].quantity -= 1;
        }
        setCartItems(items);
      };


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
        <Context.Provider
            value={{
                data,
                setdata,
                products,
                setProducts,
                cartItems,
                setCartItems,
                handleAddToCart,
                cartCount,
                handleRemoveFromCart,
                showCart,
                setShowCart,
                handleCartProductQuantity,
                cartSubTotal,
                quantity,
                setQuantity,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default AppContext;