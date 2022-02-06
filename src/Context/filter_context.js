import { useEffect, useContext, useReducer, createContext } from 'react';
import reducer from '../Reducers/filter_reducer';
import {
   LOAD_PRODUCTS,
   SET_GRIDVIEW,
   SET_LISTVIEW,
   UPDATE_SORT,
   SORT_PRODUCTS,
   UPDATE_FILTERS,
   FILTER_PRODUCTS,
   CLEAR_FILTERS,
} from '../actions';
import { useProductsContext } from './products_context';

const initialState = {
   all_products: [],
   filtered_products: [],
   grid_view: true,
};

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
   const { products } = useProductsContext();
   const [state, dispatch] = useReducer(reducer, initialState);

   useEffect(() => {
      dispatch({ type: LOAD_PRODUCTS, payload: products });
   }, [products]);

   const setGridView = () => dispatch({ type: SET_GRIDVIEW });

   const setListView = () => dispatch({ type: SET_LISTVIEW });

   return (
      <FilterContext.Provider value={{ ...state, setGridView, setListView }}>
         {children}
      </FilterContext.Provider>
   );
};
// make sure use
export const useFilterContext = () => useContext(FilterContext);
