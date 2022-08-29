import { HomePage } from "./components/pages/HomePage";
import { Routes, Route } from 'react-router-dom';
import { NotFound } from "./components/NotFound";
import { Shop } from "./components/pages/Shop";
import { ProductDetail } from "./components/ProductDetail";
 
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
