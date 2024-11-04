import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart as faSolidHeart,
  faPlus,
  faMinus,
  faStar as faSolidStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import products from "../data/products";
import { useCart } from "../context.js/CartContext";
import {
  fadeInFromBottom,
  fadeInFromLeft,
  fadeInFromRight,
  fadeInFromTop,
} from "../context.js/Keyframes";

// Define keyframe animations
const clickEffect = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const bounceEffect = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

const swingHorizontal = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(10px); }
  50% { transform: translateX(0); }
  75% { transform: translateX(-10px); }
  100% { transform: translateX(0); }
`;

const MainContainer = styled.div`
  max-width: 85%;
  margin: 2rem auto;
  background-color: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 90vh;
  animation: ${fadeInFromTop} 1s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    max-width: 100%;
    margin: 0;
  }
`;

const LeftContainer = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  animation: ${fadeInFromLeft} 2s ease-in-out;

  @media (max-width: 768px) {
    order: 2;
    padding: 0.5rem;
  }
`;

const HeaderContainer = styled.div`
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 5rem;
  margin: 0;
  font-weight: 900;
  color: #b8860b;
  line-height: 1.2;
  letter-spacing: 0.05em;
  background: linear-gradient(135deg, #b8860b, #ffcc80);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  animation: ${fadeInFromLeft} 5s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const PriceContainer = styled.div`
  margin-bottom: 1rem;
`;

const Price = styled.p`
  font-size: 2.2rem;
  color: #2e7d32;
  font-weight: 700;
  border: 2px solid #2e7d32;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  display: inline-block;
  margin: 0 auto;
  text-align: center;
  background-color: #f1f8e9;
  transition: background-color 0.3s ease, color 0.3s ease;
  animation: ${swingHorizontal} 9s infinite ease-in-out;

  &:hover {
    background-color: #2e7d32;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const DescriptionLeftContainer = styled.div`
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.6;
  background: linear-gradient(135deg, #20b2aa, #2e8b57);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  background-color: #f9fbe7;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0.5rem 0;
  transition: background-color 0.3s ease;
  font-style: italic;

  &:hover {
    background-color: #e8f5e9;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const BuyButton = styled.button`
  background: linear-gradient(135deg, #20b2aa, #2e8b57);
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(135deg, #2e8b57, #20b2aa);
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    animation: ${clickEffect} 0.3s ease;
    transform: translateY(0);
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const FavoriteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.8rem;
  color: ${({ isFavorite }) => (isFavorite ? "#e63946" : "#333")};
  transition: color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
  margin-left: auto;

  &:hover {
    color: #e63946;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const MiddleContainer = styled.div`
  flex: 1.5;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: #d1ecf1;
  height: 70vh;
  border-top-left-radius: 15rem;
  border-top-right-radius: 15rem;
  position: relative;
  animation: ${fadeInFromBottom} 1s ease-in-out;

  @media (max-width: 768px) {
    order: 1;
    height: auto;
    border-radius: 2rem;
  }
`;

const BackgroundContainer = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 0;
    border-radius: 2rem;
    border: 2px solid #ff9800;
  }
`;

const ImageContainer = styled.div`
  width: 20rem;
  height: 25rem;
  position: absolute;
  bottom: -80px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    height: auto;
    bottom: 0;
    transform: none;
    left: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

const SmallCircle = styled.div`
  animation: ${fadeInFromTop} 4s ease-in-out;
  position: absolute;
  width: 50px;
  height: 50px;
  top: 10%;
  left: 4%;
  z-index: 1;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const MediumCircle = styled(SmallCircle)`
  width: 60px;
  height: 60px;
  top: 30%;
  left: 20%;
  z-index: 1;
  animation: ${fadeInFromLeft} 4s ease-in-out;
`;

const LargeCircle = styled(SmallCircle)`
  width: 80px;
  height: 80px;
  top: 85%;
  left: 3%;
  z-index: 1;
  border: 1px solid #ff9800;
  animation: ${swingHorizontal} 9s infinite ease-in-out;
`;

const ExtraSmallCircle = styled(SmallCircle)`
  width: 30px;
  height: 30px;
  top: 70%;
  left: 10%;
  z-index: 1;
  animation: ${fadeInFromBottom} 1s ease-in-out;
`;

const ExtraLargeCircle = styled(SmallCircle)`
  width: 25px;
  height: 25px;
  top: 40%;
  left: 80%;
  z-index: 1;
  animation: ${swingHorizontal} 9s infinite ease-in-out;
`;

const AdditionalCircle1 = styled(SmallCircle)`
  width: 60px;
  height: 60px;
  top: 15%;
  left: 75%;
  z-index: 1;
`;

const AdditionalCircle2 = styled(SmallCircle)`
  width: 90px;
  height: 90px;
  top: 60%;
  left: 20%;
`;

const RightContainer = styled.div`
  flex: 1.2;
  padding: 1rem;
  display: flex;
  padding-bottom: 0;
  flex-direction: column;
  justify-content: flex-end;
  height: 70vh;
  animation: ${fadeInFromRight} 3s ease-in-out;

  @media (max-width: 768px) {
    order: 3;
    padding: 0.5rem;
    height: auto;
  }
`;

const ExpandableDescription = styled.div`
  margin-bottom: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem;
  border-radius: 10px;
  background-color: #e0f7fa;
  border: 2px solid #ffff;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #b2ebf2;
    transform: translateY(-2px);
  }
`;

const DescriptionRightTitle = styled.span`
  font-size: 1rem;
  color: #00796b;
  font-weight: bold;
`;

const LongDescription = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  color: #b8860b;
  font-style: italic;
  margin-left: 0.4rem;
`;

const RatingStarsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.7rem;
  margin-bottom: 0.5rem;
  padding: 0.4rem;
  background-color: #fff3e0;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Rating = styled.span`
  font-size: 1rem;
  color: #ffb300;
  display: flex;
  align-items: center;
  margin-right: 10rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const RatingNumber = styled.span`
  font-size: 1rem;
  color: #333;
  font-weight: bold;
  background-color: #ffe082;
  padding: 0.1rem 0.6rem;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const IngredientsContainer = styled.div`
  font-size: 1rem;
  color: #333;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  background-color: #f1f8e9;
`;

const IngredientsDataContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  margin-left: 0.2rem;
  font-size: 1rem;
  font-weight: 500;
  color: #b8860b;
  font-style: italic;
`;

const IngredientsImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.5rem;


    @media (max-width: 600px) {
gap: 2rem;
  }
  
`;

const SmallImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 10px;
  border: 2px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

    @media (max-width: 600px) {
    margin-right 2rem;
  }
`;

const DescriptionRightContainer = styled.div`
  padding: 1rem;
  background-color: #e8f5e9;
  border-radius: 10px;
  padding-bottom: 0;
`;

const DescriptionRight = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  color: #b8860b;
  font-style: italic;
`;

const CartIcon = styled(FontAwesomeIcon)`
  animation: ${({ animate }) => (animate ? bounceEffect : "none")} 0.5s ease;
`;

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <>
      {[...Array(fullStars)].map((_, index) => (
        <FontAwesomeIcon key={`full-${index}`} icon={faSolidStar} />
      ))}
      {halfStar === 1 && <FontAwesomeIcon icon={faStarHalfAlt} />}
      {[...Array(emptyStars)].map((_, index) => (
        <FontAwesomeIcon key={`empty-${index}`} icon={faRegularStar} />
      ))}
    </>
  );
};

const ItemCard = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  const [animateIcon, setAnimateIcon] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAnimateIcon(true);
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => setAnimateIcon(false), 500);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.info(
      `${product.name} ${!isFavorite ? "added to" : "removed from"} favorites!`,
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <MainContainer>
        <LeftContainer>
          <HeaderContainer>
            <Title>{product.name}</Title>
          </HeaderContainer>
          <PriceContainer>
            <Price>${product.price.toFixed(2)}</Price>
          </PriceContainer>
          <DescriptionLeftContainer>
            <Description>{product.description}</Description>
          </DescriptionLeftContainer>
          <ButtonContainer>
            <BuyButton onClick={() => handleAddToCart(product)}>
              <CartIcon icon={faShoppingCart} animate={animateIcon} />
              Add to Cart
            </BuyButton>
            <FavoriteButton onClick={toggleFavorite} isFavorite={isFavorite}>
              <FontAwesomeIcon
                icon={isFavorite ? faSolidHeart : faRegularHeart}
              />
            </FavoriteButton>
          </ButtonContainer>
        </LeftContainer>
        <MiddleContainer>
          <SmallCircle />
          <MediumCircle />
          <LargeCircle />
          <ExtraSmallCircle />
          <ExtraLargeCircle />
          <AdditionalCircle1 />
          <AdditionalCircle2 />
          <BackgroundContainer>
            <ImageContainer>
              <Image src={product.image} alt={product.name} />
            </ImageContainer>
          </BackgroundContainer>
        </MiddleContainer>
        <RightContainer>
          <ExpandableDescription onClick={() => toggleSection("description")}>
            <DescriptionRightTitle>Description</DescriptionRightTitle>
            <FontAwesomeIcon
              icon={activeSection === "description" ? faMinus : faPlus}
            />
          </ExpandableDescription>
          {activeSection === "description" && (
            <LongDescription>{product.longDescription}</LongDescription>
          )}
          <ExpandableDescription onClick={() => toggleSection("ratings")}>
            <DescriptionRightTitle>Rating</DescriptionRightTitle>
            <FontAwesomeIcon
              icon={activeSection === "ratings" ? faMinus : faPlus}
            />
          </ExpandableDescription>
          {activeSection === "ratings" && (
            <RatingStarsContainer>
              <Rating>{renderStars(product.rating)}</Rating>
              <RatingNumber>{product.rating.toFixed(1)}</RatingNumber>
            </RatingStarsContainer>
          )}
          <IngredientsContainer>
            <ExpandableDescription onClick={() => toggleSection("ingredients")}>
              <DescriptionRightTitle>Ingredients</DescriptionRightTitle>
              <FontAwesomeIcon
                icon={activeSection === "ingredients" ? faMinus : faPlus}
              />
            </ExpandableDescription>
            {activeSection === "ingredients" && (
              <>
                <IngredientsDataContainer>
                  {product.ingredients &&
                    Array.isArray(product.ingredients) &&
                    product.ingredients.map((ingredient, index) => (
                      <span key={index}>{ingredient}</span>
                    ))}
                </IngredientsDataContainer>
              </>
            )}

            <IngredientsImagesContainer>
              {product.ingredientImages.map((img, index) => (
                <div key={index}>
                  <SmallImage src={img} alt={`Ingredient ${index + 1}`} />
                </div>
              ))}
            </IngredientsImagesContainer>
          </IngredientsContainer>

          <DescriptionRightContainer>
            <DescriptionRight>{product.description}</DescriptionRight>
          </DescriptionRightContainer>
        </RightContainer>
      </MainContainer>
      <ToastContainer />
    </>
  );
};

export default ItemCard;
