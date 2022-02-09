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
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
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
