import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Navbar, Sidebar } from './Components';
import {
   About,
   Cart,
   Checkout,
   Error,
   Home,
   PrivateRoute,
   Products,
   SingleProduct,
} from './Pages';

const App = () => {
   return (
      <BrowserRouter>
         <Navbar />
         <Sidebar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route
               path="/checkout"
               element={
                  <PrivateRoute>
                     <Checkout />
                  </PrivateRoute>
               }
            />
            <Route path="*" element={<Error />} />
         </Routes>
         <Footer />
      </BrowserRouter>
   );
};

export default App;
