import { useEffect, useContext, useReducer, createContext } from 'react';
import reducer from '../Reducers/cart_reducer';
import {
   ADD_TO_CART,
   REMOVE_CART_ITEM,
   TOGGLE_CART_ITEM_AMOUNT,
   CLEAR_CART,
   COUNT_CART_TOTALS,
} from '../actions';

const initialState = {
   cart: [],
   total_items: 0,
   total_amount: 0,
   shipping_fee: 534,
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);

   const addToCart = (id, color, product, amount) => {
      dispatch({ type: ADD_TO_CART, payload: { id, color, product, amount } });
   };

   return (
      <CartContext.Provider value={{ ...state, addToCart }}>
         {children}
      </CartContext.Provider>
   );
};
// make sure use
export const useCartContext = () => useContext(CartContext);
