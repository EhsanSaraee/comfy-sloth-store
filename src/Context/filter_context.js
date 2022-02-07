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
   grid_view: false,
   sort: 'price-lowest',
   filters: {
      text: '',
      company: 'all',
      category: 'all',
      color: 'all',
      min_price: 0,
      max_price: 0,
      price: 0,
      shipping: false,
   },
};

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
   const { products } = useProductsContext();
   const [state, dispatch] = useReducer(reducer, initialState);

   useEffect(() => {
      dispatch({ type: LOAD_PRODUCTS, payload: products });
   }, [products]);

   useEffect(() => {
      dispatch({ type: FILTER_PRODUCTS });
      dispatch({ type: SORT_PRODUCTS });
   }, [products, state.sort, state.filters]);

   const setGridView = () => dispatch({ type: SET_GRIDVIEW });

   const setListView = () => dispatch({ type: SET_LISTVIEW });

   const updateSort = (event) => {
      const value = event.target.value;
      dispatch({ type: UPDATE_SORT, payload: value });
   };

   const updateFilters = (event) => {
      let name = event.target.name;
      let value = event.target.value;
      if (name === 'category') {
         value = event.target.textContent;
      }
      dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
   };

   const clearFilters = () => {};

   return (
      <FilterContext.Provider
         value={{
            ...state,
            setGridView,
            setListView,
            updateSort,
            updateFilters,
            clearFilters,
         }}
      >
         {children}
      </FilterContext.Provider>
   );
};
// make sure use
export const useFilterContext = () => useContext(FilterContext);
