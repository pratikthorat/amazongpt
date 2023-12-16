import React from 'react';
import { styled } from 'styled-components';

const ProductReview = () => {
    return (
      <ProductReviewWrapper className="product-review">
        <ProductRating className="product-rating">
          <Rating className="rating">4.5</Rating>
          <Stars className="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</Stars>
          <ReviewRating className="review-rating">This rating reflects the reviewer's opinion</ReviewRating>
        </ProductRating>
        {/* Add other content within the product review */}
      </ProductReviewWrapper>
    );
  };

const ProductCard = ({ product }) => {
  return (
    <ProductCardWrapper>
        <ProductIframe
          title="craava"
          sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
          style={{ width: '120px', height: '240px' }}
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          frameborder="0"
          src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=megha1706-21&language=en_IN&marketplace=amazon&region=IN&placement=B09R21F8HV&asins=B09R21F8HV&linkId=d3a29fa382c9ffb3f05b984e2f6191c9&show_border=true&link_opens_in_new_window=true"
        ></ProductIframe>
      <ProductDetails>
        <ProductTitle>Craava Pull Up Bar Doorway for Home Workout No Screws Chin Up Bar with Locking Mechanism Max Load 200Kg Adjustable (70 to 100 CM)</ProductTitle>
        <ProductReview>
          {/* Your product review content here */}
        </ProductReview>
        <ProsCons>
          {/* Your pros and cons content here */}
        </ProsCons>
        <DarkButton href="https://amzn.to/47QOqxv">
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
  /* Star color */
`;

const ReviewRating = styled.div`
  font-size: 14px;
  margin-left: 8px;
  color: green;
`;

const ReviewText = styled.div`
  margin-bottom: 15px;
`;

const ProsCons = styled.div`
  margin-bottom: 15px;
`;

const ProductTitle = styled.h3`
  /* Styles for product title */
`;

const ProductReviewWrapper = styled.div`
    color: #fff;
`;

const DarkButton = styled.button`
  padding: 8px 15px;
  border: 1px solid #444;
  background-color: #555;
  color: #fff;
  text-decoration: none;
  display: inline-block;
  margin-top: 15px;
  border-radius: 5px;
`;

export default ProductCard;
