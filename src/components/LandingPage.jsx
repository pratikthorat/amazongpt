import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
`;

export const Footer = () => (
  <FooterContainer>© 2023 AmazonGPT. All rights reserved.</FooterContainer>
);

const SectionContainer = styled.div`
  padding: 40px 20px;
  background-color: #fff;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: #333;
  font-size: 2em;
  margin-bottom: 30px;
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

const Step = styled.div`
  background-color: #f4f4f4;
  padding: 15px 20px;
  border-radius: 8px;
  width: 80%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StepTitle = styled.h3`
  color: #ff9900;
  font-size: 1.5em;
`;

const StepDescription = styled.p`
  color: #666;
  font-size: 1em;
`;

const Button = styled.a`
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  margin-top: 10px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1em;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

export const HowItWorksSection = () => (
  <SectionContainer>
    <SectionTitle>How It Works</SectionTitle>
    <StepContainer>
      <Step>
        <StepTitle>Step 1: Sign Up</StepTitle>
        <StepDescription>
            Click on below amazon banner to open Amazon.in via our official affiliate link to track your purchases and cashback.
        </StepDescription>
        <iframe src="//c.amazon-adsystem.com/aax2/assoc_lra.html?tag=megha1706-21&amp;c=100&amp;src=302&amp;sz=300x250" width="300" height="250" border="0" marginwidth="0" style={{ border: 'none', marginTop: '16px' }} frameborder="0" title="amazon2"></iframe>
      </Step>

      <Step>
        <StepTitle>Step 2: Find Your Product</StepTitle>
        <StepDescription>
          Browse Amazon through our affiliate link. Find the products you love
          and make your purchase as usual.
        </StepDescription>
      </Step>

      <Step>
        <StepTitle>Step 3: Claim Your Virtual credit - GEMS</StepTitle>
        <StepDescription>
          After purchase, visit our Claim GEMS google form and fill out the form
          to claim your virtual credit - GEMS. Make sure to provide all necessary details of
          your purchase.
        </StepDescription>
        <Button href="https://forms.gle/ynVvk97eM9quF6Ci9" target="_blank">Claim GEMS Cashback</Button>
      </Step>

      <Step>
        <StepTitle>Step 4: Cashback Approval</StepTitle>
        <StepDescription>
          Once we verify the purchase, the GEMS cashback will be approved and
          credited to your account. You can redeem it as per the available
          options.
        </StepDescription>
      </Step>

      <Step>
        <StepTitle>Step 5: Enjoy Your Savings</StepTitle>
        <StepDescription>
          Use your virtual cashback - GEMS as you wish - transfer it to your bank account via UPI,
          get it as amazon gift card, or use it for future purchases.
        </StepDescription>
      </Step>
    </StepContainer>
  </SectionContainer>
);

const HeroContainer = styled.div`
  background-color: #f4f4f4;
  text-align: center;
  padding: 50px 20px;
`;

const Headline = styled.h1`
  color: #333;
  font-size: 2.5em;
`;

const Subheadline = styled.p`
  color: #666;
  font-size: 1.2em;
`;

const CTAButton = styled.button`
  background-color: #ff9900;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  margin-top: 20px;
  cursor: pointer;
`;

export const HeroSection = () => (
  <HeroContainer>
    <Headline>Earn Cashback on Every Amazon Purchase!</Headline>
    <Subheadline>
      Shop through our platform and save on every purchase
    </Subheadline>
    <CTAButton onClick={() => window.open("https://www.amazon.in/ref=assoc_aax_fallback_300x250?tag=megha1706-21&linkCode=ur8", '_blank')}>Start Shopping on Amazon.in</CTAButton>
  </HeroContainer>
);

function LandingPage() {
  return (
    <div>
      <HeroSection />
      <HowItWorksSection />
      {/* <Footer /> */}
    </div>
  );
}

export default LandingPage;
