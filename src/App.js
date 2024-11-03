import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { CartProvider } from "./context.js/CartContext";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Checkout from "./pages/CheckOut";
import ItemCard from "./pages/ItemCard";
import PaymentPage from "./pages/PayementPage";

const Container = styled.div`
  padding: 2rem 6rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
    width: 100%;
  }
`;

function App() {
  return (
    <Container>
      <CartProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/item/:id" element={<ItemCard />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </Container>
  );
}

export default App;
