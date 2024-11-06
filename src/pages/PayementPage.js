import React from "react";
import styled from "styled-components";
import { useCart } from "../context.js/CartContext";

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Layout = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PaymentSection = styled.div`
  flex: 1;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  font-size: 1rem;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-color: #20b2aa;
  }
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  font-size: 1rem;
  background-color: white;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-color: #20b2aa;
  }
`;

const SubmitButton = styled.button`
  background-color: #20b2aa;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2e8b57;
  }
`;

const OrderSummary = styled.div`
  flex: 1;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const OrderList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const OrderItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

const ItemDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 0.25rem;
  object-fit: cover;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.span`
  font-weight: bold;
  color: #333;
`;

const ItemDescription = styled.span`
  font-size: 0.875rem;
  color: #666;
`;

const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #666;
`;

const QuantityInput = styled.input`
  width: 50px;
  padding: 0.25rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  text-align: center;
`;

const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ff0000;
  cursor: pointer;
  font-size: 0.875rem;
  margin-left: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const ItemPrice = styled.span`
  font-weight: bold;
  color: #333;
`;

const ItemRating = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #ffcc00;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 2px solid #ddd;
`;

const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Discount = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  color: #ff0000;
`;

const EstimatedDelivery = styled.div`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #666;
`;

export default function PaymentPage() {
  const { cartItems, updateCartItemQuantity, removeCartItem } = useCart();

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal; // No discount applied
  };

  const calculateSavings = () => {
    const originalTotal = cartItems.reduce(
      (sum, item) => sum + (item.originalPrice || item.price) * item.quantity,
      0
    );
    return originalTotal - calculateTotal();
  };

  const subtotal = calculateSubtotal();
  const total = calculateTotal();
  const savings = calculateSavings();

  return (
    <Container>
      <Layout>
        <MainContent>
          <PaymentSection>
            <Title>Select Payment Method</Title>
            <Form>
              <Select>
                <option value="creditCard">Credit Card</option>
                <option value="ideal">iDEAL</option>
                <option value="paypal">PayPal</option>
                <option value="bankTransfer">Bank Transfer</option>
                <option value="klarna">Klarna</option>
              </Select>
              <Input type="text" placeholder="Card Number" required />
              <Input type="text" placeholder="Expiry Date (MM/YY)" required />
              <Input type="text" placeholder="CVV" required />
              <SubmitButton type="submit">Pay</SubmitButton>
            </Form>
          </PaymentSection>

          <OrderSummary>
            <Title>Order Summary</Title>
            <OrderList>
              {cartItems.map((item) => (
                <OrderItem key={item.id}>
                  <ItemDetails>
                    <ItemImage src={item.image} alt={item.name} />
                    <ItemInfo>
                      <ItemName>{item.name}</ItemName>
                      <ItemDescription>{item.description}</ItemDescription>
                      <ItemQuantity>
                        Quantity:
                        <QuantityInput
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            updateCartItemQuantity(item.id, e.target.value)
                          }
                          min="1"
                        />
                        <RemoveButton onClick={() => removeCartItem(item.id)}>
                          Remove
                        </RemoveButton>
                      </ItemQuantity>
                      <ItemRating>Rating: ★★★★☆</ItemRating>
                    </ItemInfo>
                  </ItemDetails>
                  <ItemPrice>
                    €{(item.price * item.quantity).toFixed(2)}
                  </ItemPrice>
                </OrderItem>
              ))}
            </OrderList>
            <Subtotal>
              <span>Subtotal</span>
              <span>€{subtotal.toFixed(2)}</span>
            </Subtotal>
            <Discount>
              <span>Discount</span>
              <span>-€{savings.toFixed(2)}</span>
            </Discount>
            <Total>
              <span>Total</span>
              <span>€{total.toFixed(2)}</span>
            </Total>
            <EstimatedDelivery>
              Estimated Delivery: {new Date().toLocaleDateString()}
            </EstimatedDelivery>
          </OrderSummary>
        </MainContent>
      </Layout>
    </Container>
  );
}
