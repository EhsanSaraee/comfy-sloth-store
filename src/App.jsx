import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import {
   About,
   Cart,
   Checkout,
   Error,
   Home,
   Products,
   SingleProduct,
} from "./Pages";

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
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </BrowserRouter>
   );
};

export default App;
