import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useProducts } from "./Contexts/ProductsProvider";

import {
  Cart,
  Checkout,
  ErrorPage,
  Footer,
  Header,
  Home,
  Loading,
  Products,
  Profile,
  SingleProduct,
  Success,
  Wishlist,
} from "./Pages";

function App() {
  const { fetchCategoriesAgain, fetchProductsAgain } = useProducts();

  useEffect(() => {
    fetchProductsAgain();
    fetchCategoriesAgain();
  }, []);

  return (
    <div className="App">
      <Loading />
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/api/products/:prodId" element={<SingleProduct />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
