import { HomePage } from "./components/pages/HomePage";
import { Routes, Route } from 'react-router-dom';
import { NotFound } from "./components/NotFound";
import { Shop } from "./components/pages/Shop";
import { ProductDetail } from "./components/ProductDetail";
import { Cart } from "./components/pages/Cart";
import { Checkout } from "./components/pages/Checkout";
import { CheckoutSuccess } from "./components/pages/CheckoutSuccess";
import { CheckoutCancel } from "./components/pages/CheckoutCancel";
 
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment-success" element={<CheckoutSuccess />} />
        <Route path="/payment-cancelled" element={<CheckoutCancel />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
