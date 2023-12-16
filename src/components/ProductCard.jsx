import React from 'react';
import { styled } from 'styled-components';

const ProductReview = ({reviewText, rating}) => {
    return (
      <ProductReviewWrapper className="product-review">
        <ProductRating className="product-rating">
          <Rating className="rating">{rating}</Rating>
          <Stars className="stars" dangerouslySetInnerHTML={{ __html: "&#9733;".repeat(Math.floor(rating))}}/>
          <ReviewRating className="review-rating">This rating reflects the reviewer's opinion</ReviewRating>
        </ProductRating>
        <ReviewText dangerouslySetInnerHTML={{ __html: reviewText }} />
      </ProductReviewWrapper>
    );
  };

const ProductCard = ({ product }) => {
  return (
    <ProductCardWrapper>
      <ProductIframeWrapper>
        <ProductIframe
          title="craava"
          sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
          style={{ width: '120px', height: '240px' }}
          marginwidth="0"
          marginheight="0"
          frameborder="0"
          src={product.iframeSrc}
          ></ProductIframe>
      </ProductIframeWrapper>
      <ProductDetails>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductReview reviewText={product.reviewText} rating={product.rating}/>
        <ProsCons>
          <h3>Pros:</h3>
          <ul>
          {product.pros.map((pro, index) => (
            <li key={index}>{pro}</li>
          ))}
          </ul>
          <h3>Cons:</h3>
          <ul>
          {product.cons.map((con, index) => (
            <li key={index}>{con}</li>
          ))}
          </ul>
        </ProsCons>
        <DarkButton onClick={ () => window.open(product.buyButtonUrl, '_blank')}>
          Buy Now
        </DarkButton>
      </ProductDetails>
    </ProductCardWrapper>
  );
};

const ProductCardWrapper = styled.div`
    width: 100%;
    padding: 20px;
    border: 1px solid #444;
    background-color: #1f1f1f;
    text-align: left;
`;

const ProductIframeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ProductIframe = styled.iframe`
  /* Styles for iframe */
`;

const ProductDetails = styled.div`
    padding: 20px;
    background-color: #1f1f1f;
    border-radius: 8px;
    margin-top: 10px;
`;

const ProductRating = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Rating = styled.span`
  font-weight: bold;
`;

const Stars = styled.span`
  color: #ffc107;
  margin-left: 8px;
`;

const ReviewRating = styled.span`
  font-size: 14px;
  margin-left: 8px;
  color: green;
`;

const ReviewText = styled.div`
  margin-bottom: 15px;
`;

const ProsCons = styled.div`
  color: #fff;  
  margin-bottom: 15px;
  li {
    color: #fff;
    list-style-type: disc;
    margin-left: 20px;
    margin-bottom: 5px;
  }
`;

const ProductTitle = styled.h3`
  /* Styles for product title */
`;

const ProductReviewWrapper = styled.div`
    color: #fff;
`;

const DarkButton = styled.button`
  padding: 8px 15px;
  background-color: #555;
  color: #fff;
  margin-top: 15px;
  cursor: pointer;
`;

export default ProductCard;
