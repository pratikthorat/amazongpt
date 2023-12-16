import './App.css';
import ProductCard from './components/ProductCard';
import { productData } from './productData/data';

function App() {
  return (
    <body class="dark-theme">
      <header class="cred-header">
        <div class="cred-header-container">
          <div class="cred-logo">
            <img src="./logo.png" alt="CRED logo" />
          </div>
          <div class="cred-search-bar">
            <h1>Amazon Product Recommender GPT</h1>
            {/* <input type="search" placeholder="Search for products" class="dark-input" />
            <button type="submit" class="dark-button">Search</button> */}
          </div>
        </div>
      </header>
      <main class="cred-main">
        <div class="cred-product-list">
          <div class="cred-product-card">
          <div class="cred-product-image">
            <iframe src="//c.amazon-adsystem.com/aax2/assoc_lra.html?tag=megha1706-21&amp;c=100&amp;src=302&amp;sz=300x250" width="300" height="250" scrolling="no" border="0" marginwidth="0" style={{ border: 'none' }} frameborder="0" title="amazon"></iframe>
            </div>
            <div class="product-details">
              <h3>As an Official Amazon Associate, I earn from qualifying purchases.</h3>
              <div class="product-review">
                <div class="review-text">
                <h1>Why Amazon Reigns Supreme: The Ultimate Shopping Destination</h1>
          <p>In today's fast-paced world, convenience and accessibility are paramount. When it comes to online shopping, Amazon stands out as the undisputed king, offering an unparalleled shopping experience that caters to every need and preference.</p>
          <p>From its vast selection of products to its user-friendly interface and lightning-fast delivery, Amazon has revolutionized the way we shop. Whether you're looking for the latest gadgets, trendy apparel, or everyday essentials, Amazon has it all, and at prices that are hard to beat.</p>
          <div class="advantages">
              <h2>The Advantages of Shopping on Amazon</h2>
              <ul>
                  <li>Unparalleled Product Selection: Amazon boasts an extensive catalog of products spanning every imaginable category, from electronics and home goods to fashion and beauty.</li>
                  <li>Seamless User Experience: Navigating Amazon's website and app is a breeze. The intuitive search function, user-friendly interface, and detailed product descriptions make it easy to find what you're looking for.</li>
                  <li>Competitive Pricing: Amazon consistently offers competitive prices on a wide range of products, ensuring you get the best value for your money.</li>
                  <li>Reliable and Fast Delivery: Amazon is renowned for its efficient and timely delivery services, with options to suit your schedule and preferences.</li>
                  <li>Customer-Centric Approach: Amazon puts customer satisfaction at the forefront, offering a comprehensive customer support system and generous return policies.</li>
              </ul>
          </div>
          <p>Amazon's dominance in the e-commerce landscape is no coincidence. It has consistently adapted to evolving consumer needs and preferences, staying ahead of the curve and setting the benchmark for online shopping.</p>
          <p>Whether you're a seasoned online shopper or a newcomer to the digital world, Amazon offers an unmatched shopping experience that is both convenient and rewarding. So, the next time you're looking to make a purchase, consider Amazon first. You won't be disappointed.</p>
          <div class="cta">
              <p>Start Shopping on Amazon</p>
               <div class="cred-product-image">
               <iframe src="//c.amazon-adsystem.com/aax2/assoc_lra.html?tag=megha1706-21&amp;c=100&amp;src=302&amp;sz=300x250" width="300" height="250" scrolling="no" border="0" marginwidth="0" style={{ border: 'none' }} frameborder="0" title="amazon2"></iframe>
               </div>
          </div>
                </div>
              </div>
            </div>
          </div>
          {productData.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </main>
      <footer class="cred-footer">
        <div class="cred-footer-container">
          <p>&copy; 2023 Amazon Product Recommender GPT</p>
          {/* <ul class="cred-social-media">
            <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
          </ul> */}
        </div>
      </footer>
    </body>
  );
}

export default App;
