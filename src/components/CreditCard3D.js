import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CardContainer = styled(motion.div)`
  width: 400px;
  height: 250px;
  perspective: 1000px;
  margin: 2rem auto;
`;

const Card = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  border-radius: 20px;
  background: linear-gradient(135deg, #20b2aa, #2e8b57);
  padding: 2rem;
  color: white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`;

const CardNumber = styled.div`
  font-size: 1.8rem;
  letter-spacing: 4px;
  margin-top: 4rem;
  font-family: "Courier New", monospace;
`;

const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;

const CardHolder = styled.div`
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 2px;
`;

const CardExpiry = styled.div`
  font-size: 0.9rem;
  letter-spacing: 2px;
`;

const CardLogo = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 2rem;
`;

export default function CreditCard3D({
  cardNumber,
  cardHolder,
  expiry,
  cardType,
}) {
  return (
    <CardContainer>
      <Card
        initial={{ rotateY: 0 }}
        whileHover={{ rotateY: 15 }}
        transition={{ duration: 0.5 }}
      >
        <CardLogo>{cardType?.icon || "💳"}</CardLogo>
        <CardNumber>{cardNumber || "•••• •••• •••• ••••"}</CardNumber>
        <CardDetails>
          <CardHolder>{cardHolder || "CARD HOLDER"}</CardHolder>
          <CardExpiry>{expiry || "MM/YY"}</CardExpiry>
        </CardDetails>
      </Card>
    </CardContainer>
  );
}
