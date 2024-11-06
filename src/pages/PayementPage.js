import React, { useState } from "react";
import styled from "styled-components";
import { useCart } from "../context.js/CartContext";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
  padding: 10rem;
  background-color: #f0f4f8;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 1rem;
  }
`;

const Layout = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;

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
  background-color: #ffffff;
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
  color: #20b2aa;
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
  background: linear-gradient(135deg, #20b2aa, #2e8b57);
  color: #fff;
  padding: 0.75rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(135deg, #2e8b57, #20b2aa);
    transform: scale(1.05);
  }
`;

const OrderSummary = styled.div`
  flex: 1;
  background-color: #ffffff;
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
  color: #2e8b57;
  background-color: #e0f7fa;
  padding: 0.75rem;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export default function PaymentPage() {
  const { cartItems, updateCartItemQuantity, removeCartItem } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

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

  const calculateEstimatedDelivery = () => {
    const today = new Date();
    const deliveryDays = 5; // Assume 5 business days for delivery
    let deliveryDate = new Date(today);

    for (let i = 0; i < deliveryDays; i++) {
      deliveryDate.setDate(deliveryDate.getDate() + 1);
      // Skip weekends
      if (deliveryDate.getDay() === 0 || deliveryDate.getDay() === 6) {
        i--;
      }
    }

    return deliveryDate.toLocaleDateString();
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const renderPaymentFields = () => {
    switch (paymentMethod) {
      case "creditCard":
        return (
          <>
            <Input type="text" placeholder="Card Number" required />
            <Input type="text" placeholder="Expiry Date (MM/YY)" required />
            <Input type="text" placeholder="CVV" required />
            <p>Enter your credit card details to proceed with the payment.</p>
          </>
        );
      case "ideal":
        return (
          <>
            <Select>
              <option value="">Select your bank</option>
              <option value="abn">ABN AMRO</option>
              <option value="ing">ING</option>
              <option value="rabobank">Rabobank</option>
              <option value="sns">SNS Bank</option>
              <option value="asn">ASN Bank</option>
            </Select>
            <p>
              You will be redirected to your bank's iDEAL page to complete the
              payment.
            </p>
          </>
        );
      case "paypal":
        return (
          <p>
            You will be redirected to PayPal to complete the payment. Please
            ensure you have a PayPal account.
          </p>
        );
      case "bankTransfer":
        return (
          <p>
            Please transfer the total amount to the following bank account:
            <br />
            <strong>IBAN:</strong> NL91ABNA0417164300
            <br />
            <strong>BIC:</strong> ABNANL2A
            <br />
            Include your order number in the payment reference.
          </p>
        );
      case "klarna":
        return (
          <p>
            You will be redirected to Klarna to complete the payment. Enjoy the
            flexibility of paying later.
          </p>
        );
      default:
        return null;
    }
  };

  const subtotal = calculateSubtotal();
  const total = calculateTotal();
  const savings = calculateSavings();
  const estimatedDelivery = calculateEstimatedDelivery();

  return (
    <Container>
      <Layout>
        <MainContent>
          <PaymentSection>
            <Title>Select Payment Method</Title>
            <Form>
              <Select
                value={paymentMethod}
                onChange={handlePaymentMethodChange}
              >
                <option value="creditCard">Credit Card</option>
                <option value="ideal">iDEAL</option>
                <option value="paypal">PayPal</option>
                <option value="bankTransfer">Bank Transfer</option>
                <option value="klarna">Klarna</option>
              </Select>
              {renderPaymentFields()}
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
            {cartItems.length > 0 && (
              <EstimatedDelivery>
                Estimated Delivery: {estimatedDelivery}
              </EstimatedDelivery>
            )}
          </OrderSummary>
        </MainContent>
      </Layout>
    </Container>
  );
}
