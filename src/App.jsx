import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import "./App.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {
  useEffect(() => {
    document.title = "Game Over";
  }, []);
  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
        <Navbar />
        <Routes>
          <Route path="/" element= {<ItemListContainer/>}/>
          <Route path="/categoria/:categoria" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
