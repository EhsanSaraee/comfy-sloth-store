import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductsProvider } from './Context/products_context';
import { FilterProvider } from './Context/filter_context';
import { CartProvider } from './Context/cart_context';
import { UserProvider } from './Context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const rootElement = document.getElementById('root');

ReactDOM.render(
   <Auth0Provider
      domain="dev-15gd455d.us.auth0.com"
      clientId="2Y6u9FX2OE9zjcM9r56UYOmPMvIC6eOT"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
   >
      <UserProvider>
         <ProductsProvider>
            <FilterProvider>
               <CartProvider>
                  <App />
               </CartProvider>
            </FilterProvider>
         </ProductsProvider>
      </UserProvider>
   </Auth0Provider>,
   rootElement
);
