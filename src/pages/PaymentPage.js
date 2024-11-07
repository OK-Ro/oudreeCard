import React, { useState } from "react";
import styled from "styled-components";
import { useCart } from "../context.js/CartContext";
import {
  FaCreditCard,
  FaLock,
  FaPaypal,
  FaCheckCircle,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaUniversity,
  FaShoppingCart,
  FaTruck,
  FaRegClock,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCity,
  FaGlobe,
  FaFlag,
  FaBuilding,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: #f0f4f8;

  @media (max-width: 1024px) {
    padding: 1rem;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
  }
`;

const Layout = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const PaymentSection = styled(motion.div)`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  transition: all 0.3s ease-in-out;
`;

const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
  }

  &::placeholder {
    color: #999;
  }
`;

const CardNumberInput = styled.div`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    padding: 1rem 3rem 1rem 1rem;
    border: 1px solid ${(props) => (props.isValid ? "#4CAF50" : "#ddd")};
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: ${(props) => (props.isValid ? "#f0fff0" : "white")};

    &:focus {
      outline: none;
      border-color: #4a90e2;
      box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
    }
  }

  .card-icon {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.5rem;
    color: ${(props) => (props.isValid ? "#4CAF50" : "#999")};
  }
`;

const PaymentMethodCard = styled(motion.div)`
  border: 1px solid ${(props) => (props.selected ? "#4a90e2" : "#ddd")};
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  background: ${(props) =>
    props.selected ? "linear-gradient(135deg, #4a90e2, #357ABD)" : "white"};
  color: ${(props) => (props.selected ? "white" : "#333")};
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .payment-icon {
    font-size: 1.5rem;
    color: ${(props) => (props.selected ? "white" : "#4a90e2")};
  }
`;

const OrderSummary = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const OrderItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 1rem;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.h4`
  margin: 0;
  color: #333;
  font-size: 1rem;
`;

const ItemPrice = styled.div`
  font-weight: bold;
  color: #4a90e2;
  font-size: 1rem;
`;

const TotalSection = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: ${(props) => (props.final ? "1.2rem" : "1rem")};
  font-weight: ${(props) => (props.final ? "bold" : "normal")};
  color: ${(props) => (props.final ? "#4a90e2" : "#333")};
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(135deg, #4a90e2, #357abd);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  cursor: pointer;
  font-weight: 700;
  font-size: 1rem;
  width: 100%;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: linear-gradient(135deg, #357abd, #4a90e2);
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const DeliveryInfo = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  background: #f7fafc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #555;

  svg {
    color: #4a90e2;
    font-size: 1.5rem;
  }
`;

const BankSelectWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

const StyledBankSelect = styled.select`
  width: 100%;
  padding: 1rem;
  padding-left: 3rem;
  appearance: none;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #4a90e2;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
  }

  option {
    padding: 1rem;
    background: white;
    color: #333;
  }
`;

const BankIcon = styled(FaUniversity)`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #4a90e2;
  font-size: 1.2rem;
  pointer-events: none;
`;

const SelectArrow = styled.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #4a90e2;
  pointer-events: none;

  &::before {
    content: "▼";
    font-size: 0.8rem;
  }
`;

const DeliveryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InputWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  padding-left: 3rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
  }

  &::placeholder {
    color: #999;
  }
`;

const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #4a90e2;
  font-size: 1.2rem;
`;

const paymentMethods = {
  creditCard: {
    icon: <FaCreditCard className="payment-icon" />,
    title: "Credit Card",
    description: "Pay securely with your credit or debit card",
  },
  paypal: {
    icon: <FaPaypal className="payment-icon" />,
    title: "PayPal",
    description: "Fast and secure payment with PayPal",
  },
  ideal: {
    icon: <FaUniversity className="payment-icon" />,
    title: "iDEAL",
    description: "Direct payment through your Dutch bank",
  },
};

const dutchBanks = [
  {
    id: "ing",
    name: "ING Bank",
    logo: "https://logo.clearbit.com/ing.com",
    description: "Direct online banking with ING",
  },
  {
    id: "abn",
    name: "ABN AMRO",
    logo: "https://logo.clearbit.com/abnamro.nl",
    description: "Secure payment via ABN AMRO",
  },
  {
    id: "rabo",
    name: "Rabobank",
    logo: "https://logo.clearbit.com/rabobank.nl",
    description: "Pay easily with Rabobank",
  },
  {
    id: "sns",
    name: "SNS Bank",
    logo: "https://logo.clearbit.com/snsbank.nl",
    description: "Quick payment through SNS",
  },
  {
    id: "asn",
    name: "ASN Bank",
    logo: "https://logo.clearbit.com/asnbank.nl",
    description: "Sustainable banking with ASN",
  },
  {
    id: "triodos",
    name: "Triodos Bank",
    logo: "https://logo.clearbit.com/triodos.nl",
    description: "Ethical banking with Triodos",
  },
];

const DeliverySection = styled(motion.div)`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
`;

export default function PaymentPage() {
  const { cartItems } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [cardNumber, setCardNumber] = useState("");
  const [cardType, setCardType] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [selectedBank, setSelectedBank] = useState("");
  const [loading, setLoading] = useState(false);

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const calculateShipping = () => {
    return calculateSubtotal() > 50 ? 0 : 4.99;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  const detectCardType = (number) => {
    if (number.startsWith("4")) {
      return { type: "visa", icon: FaCcVisa };
    }
    if (/^5[1-5]/.test(number)) {
      return { type: "mastercard", icon: FaCcMastercard };
    }
    if (/^3[47]/.test(number)) {
      return { type: "amex", icon: FaCcAmex };
    }
    return null;
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 0) {
      value = value.match(/.{1,4}/g).join(" ");
    }
    setCardNumber(value);
    const detected = detectCardType(value.replace(/\s/g, ""));
    setCardType(detected);
    setIsValid(value.replace(/\s/g, "").length >= 16);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      switch (paymentMethod) {
        case "creditCard":
          console.log("Processing credit card payment...");
          break;
        case "paypal":
          window.location.href = `https://www.paypal.com/checkoutnow?token=${encodeURIComponent(
            "SAMPLE_TOKEN"
          )}`;
          break;
        case "ideal":
          if (!selectedBank) {
            alert("Please select a bank");
            return;
          }
          window.location.href = `https://ideal.example.com/pay?bank=${selectedBank}&amount=${calculateTotal().toFixed(
            2
          )}`;
          break;
        default:
          console.error("Unhandled payment method:", paymentMethod);
          alert("Payment method not supported.");
          break;
      }
    } catch (error) {
      console.error("Payment error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <PaymentSection>
          <SectionTitle>
            <FaLock style={{ marginRight: "0.5rem" }} />
            Secure Payment
          </SectionTitle>

          <AnimatePresence>
            {Object.entries(paymentMethods).map(([key, method]) => (
              <PaymentMethodCard
                key={key}
                selected={paymentMethod === key}
                onClick={() => setPaymentMethod(key)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {method.icon}
                <div>
                  <h3>{method.title}</h3>
                  <p>{method.description}</p>
                </div>
                {paymentMethod === key && (
                  <FaCheckCircle
                    style={{ marginLeft: "auto", fontSize: "1.5rem" }}
                  />
                )}
              </PaymentMethodCard>
            ))}
          </AnimatePresence>

          <Form onSubmit={handleSubmit}>
            {paymentMethod === "creditCard" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CardNumberInput isValid={isValid}>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    placeholder="Card Number"
                    maxLength="19"
                    required
                  />
                  {cardType ? (
                    <cardType.icon className="card-icon" />
                  ) : (
                    <FaCreditCard className="card-icon" />
                  )}
                </CardNumberInput>
                <InputGroup>
                  <Input type="text" placeholder="MM/YY" required />
                  <Input type="text" placeholder="CVV" required maxLength="4" />
                </InputGroup>
                <Input type="text" placeholder="Cardholder Name" required />
              </motion.div>
            )}

            {paymentMethod === "ideal" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <BankSelectWrapper>
                  <BankIcon />
                  <StyledBankSelect
                    value={selectedBank}
                    onChange={(e) => setSelectedBank(e.target.value)}
                    selected={selectedBank !== ""}
                    required
                  >
                    <option value="">Select your bank</option>
                    {dutchBanks.map((bank) => (
                      <option key={bank.id} value={bank.id}>
                        {bank.name}
                      </option>
                    ))}
                  </StyledBankSelect>
                  <SelectArrow />
                </BankSelectWrapper>
              </motion.div>
            )}

            <DeliverySection
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <SectionTitle>
                <FaTruck style={{ marginRight: "0.5rem" }} />
                Delivery Information
              </SectionTitle>

              <DeliveryGrid>
                <InputWrapper>
                  <InputIcon>
                    <FaUser />
                  </InputIcon>
                  <StyledInput type="text" placeholder="First Name" required />
                </InputWrapper>

                <InputWrapper>
                  <InputIcon>
                    <FaUser />
                  </InputIcon>
                  <StyledInput type="text" placeholder="Last Name" required />
                </InputWrapper>

                <InputWrapper>
                  <InputIcon>
                    <FaEnvelope />
                  </InputIcon>
                  <StyledInput
                    type="email"
                    placeholder="Email Address"
                    required
                  />
                </InputWrapper>

                <InputWrapper>
                  <InputIcon>
                    <FaPhone />
                  </InputIcon>
                  <StyledInput type="tel" placeholder="Phone Number" required />
                </InputWrapper>
              </DeliveryGrid>

              <InputWrapper>
                <InputIcon>
                  <FaMapMarkerAlt />
                </InputIcon>
                <StyledInput
                  type="text"
                  placeholder="Street Address"
                  required
                />
              </InputWrapper>

              <DeliveryGrid>
                <InputWrapper>
                  <InputIcon>
                    <FaCity />
                  </InputIcon>
                  <StyledInput type="text" placeholder="City" required />
                </InputWrapper>

                <InputWrapper>
                  <InputIcon>
                    <FaGlobe />
                  </InputIcon>
                  <StyledInput type="text" placeholder="Postal Code" required />
                </InputWrapper>

                <InputWrapper>
                  <InputIcon>
                    <FaFlag />
                  </InputIcon>
                  <StyledInput type="text" placeholder="Country" required />
                </InputWrapper>

                <InputWrapper>
                  <InputIcon>
                    <FaBuilding />
                  </InputIcon>
                  <StyledInput
                    type="text"
                    placeholder="Apartment, suite, etc. (optional)"
                  />
                </InputWrapper>
              </DeliveryGrid>
            </DeliverySection>

            <SubmitButton
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? (
                "Processing..."
              ) : (
                <>
                  <FaShoppingCart />
                  Pay €{calculateTotal().toFixed(2)}
                </>
              )}
            </SubmitButton>
          </Form>

          <DeliveryInfo>
            <FaTruck />
            <div>
              <strong>Free Delivery</strong> on orders over €50
              <br />
              <FaRegClock
                style={{ display: "inline", marginRight: "0.5rem" }}
              />
              Estimated delivery: 2-4 business days
            </div>
          </DeliveryInfo>
        </PaymentSection>

        <OrderSummary
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SectionTitle>
            <FaShoppingCart style={{ marginRight: "0.5rem" }} />
            Order Summary
          </SectionTitle>

          {cartItems.map((item) => (
            <OrderItem key={item.id}>
              <ItemImage src={item.image} alt={item.name} />
              <ItemDetails>
                <ItemName>{item.name}</ItemName>
                <div>Quantity: {item.quantity}</div>
              </ItemDetails>
              <ItemPrice>€{(item.price * item.quantity).toFixed(2)}</ItemPrice>
            </OrderItem>
          ))}

          <TotalSection>
            <TotalRow>
              <span>Subtotal</span>
              <span>€{calculateSubtotal().toFixed(2)}</span>
            </TotalRow>
            <TotalRow>
              <span>Shipping</span>
              <span>€{calculateShipping().toFixed(2)}</span>
            </TotalRow>
            <TotalRow final>
              <span>Total</span>
              <span>€{calculateTotal().toFixed(2)}</span>
            </TotalRow>
          </TotalSection>
        </OrderSummary>
      </Layout>
    </Container>
  );
}
