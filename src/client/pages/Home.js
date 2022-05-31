import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

import "../assets/css/fontello.css";
import "../assets/css/settings.css";
import "../assets/css/jquery.fancybox.css";
import "../assets/css/style.css";

export default function Home() {
  const images = [
    { url: "assets/img/slider/slide-1.jpg" },
    { url: "assets/img/slider/slide-2.jpg" },
    { url: "assets/img/slider/slide-3.jpg" },
  ];
  return (
    <div>
      {/*Header: Begin*/}
      <header className="container-fluid clear">
        <div className="row">
          {/*Header Top: Begin*/}
          <div id="header-top" className="clear">
            {/*Header Logo: Begin*/}
            <div
              id="header-logo"
              className="col-sm-push-4 col-md-push-4 col-lg-push-5"
            >
              <img src="assets/img/main-logo.png" alt="main logo" />
            </div>
            {/*Header Logo: End*/}
            {/*Main Navigation: Begin*/}
            <nav
              id="main-menu"
              className="col-sm-pull-4  col-md-pull-4 col-lg-pull-2"
            >
              <ul>
                <li>
                  <span>home</span>
                </li>
                <li>
                  <span>products</span>
                </li>
                <li>
                  <span>contact</span>
                </li>
              </ul>

            </nav>
            {/*Main Navigation: End*/}
            {/*Search and Cart: Begin*/}
            <div className="header-right-wrap">
              <div className="header-right">
                <div className="search-input">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">
                        <i className="icon-search" />
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*Search and Cart: Begin*/}
          </div>
          {/*Header Top: End*/}
        </div>
      </header>
      {/*Header: End*/}
      {/* Main: Begin */}
      <main>
        {/*Main Slider: Begin*/}
        <div className="home-slidershow">
          <SimpleImageSlider
            width="100%"
            height="90vh"
            images={images}
            showBullets={false}
            showNavs={true}
          />
        </div>
        {/*Main Slider: End*/}
        {/* New Product: Begin  */}
        <section className="new-products container">
          <div className="section-header">
            <div className="section-title">
              <h2>new products</h2>
            </div>
            <h3 className="section-subtitle">Treat yourself better</h3>
            <h5 className="section-small-subtitle">
              Looking for the latest? The new stuff’s right here, no guessword
              needed
            </h5>
          </div>
          <div className="row">
            <div className="section-main">
              <ul className="products clear">
                <li className="product clear">
                  <div className="product-thumb">
                    <img src="assets/img/products/home/product-1.jpg" alt="" />
                    <p className="jw-button"> order now</p>
                  </div>
                  <div className="product-details">
                    <div className="product-meta">
                      <h4 className="product-title"> ring</h4>
                      <span className="product-price">$ 10.25</span>
                    </div>
                    <p className="product-description">
                      White or multigrain, with butter, cream cheese, veggie cc,
                      scallion cc, olive cc, sun dried tomato cc, smoked salmon
                    </p>
                  </div>
                </li>
                <li className="product clear">
                  <div className="product-thumb">
                    <img src="assets/img/products/home/product-2.jpg" alt="" />
                    <p className="jw-button"> order now</p>
                  </div>
                  <div className="product-details">
                    <div className="product-meta">
                      <h4 className="product-title"> earring</h4>
                      <span className="product-price">$ 10.25</span>
                    </div>
                    <p className="product-description">
                      White or multigrain, with butter, cream cheese, veggie cc,
                      scallion cc, olive cc, sun dried tomato cc, smoked salmon
                    </p>
                  </div>
                </li>
                <li className="product clear">
                  <div className="product-thumb">
                    <img src="assets/img/products/home/product-3.jpg" alt="" />
                    <p className="jw-button"> order now</p>
                  </div>
                  <div className="product-details">
                    <div className="product-meta">
                      <h4 className="product-title"> ring</h4>
                      <span className="product-price">$ 10.25</span>
                    </div>
                    <p className="product-description">
                      White or multigrain, with butter, cream cheese, veggie cc,
                      scallion cc, olive cc, sun dried tomato cc, smoked salmon
                    </p>
                  </div>
                </li>
                <li className="product clear">
                  <div className="product-thumb">
                    <img src="assets/img/products/home/product-4.jpg" alt="" />
                    <p className="jw-button"> order now</p>
                  </div>
                  <div className="product-details">
                    <div className="product-meta">
                      <h4 className="product-title"> ring</h4>
                      <span className="product-price">$ 10.25</span>
                    </div>
                    <p className="product-description">
                      White or multigrain, with butter, cream cheese, veggie cc,
                      scallion cc, olive cc, sun dried tomato cc, smoked salmon
                    </p>
                  </div>
                </li>
                <li className="product clear">
                  <div className="product-thumb">
                    <img src="assets/img/products/home/product-2.jpg" alt="" />
                    <p className="jw-button"> order now</p>
                  </div>
                  <div className="product-details">
                    <div className="product-meta">
                      <h4 className="product-title"> necklace</h4>
                      <span className="product-price">$ 10.25</span>
                    </div>
                    <p className="product-description">
                      White or multigrain, with butter, cream cheese, veggie cc,
                      scallion cc, olive cc, sun dried tomato cc, smoked salmon
                    </p>
                  </div>
                </li>
                <li className="product clear">
                  <div className="product-thumb">
                    <img src="assets/img/products/home/product-6.jpg" alt="" />
                    <p className="jw-button"> order now</p>
                  </div>
                  <div className="product-details">
                    <div className="product-meta">
                      <h4 className="product-title"> earring</h4>
                      <span className="product-price">$ 10.25</span>
                    </div>
                    <p className="product-description">
                      White or multigrain, with butter, cream cheese, veggie cc,
                      scallion cc, olive cc, sun dried tomato cc, smoked salmon
                    </p>
                  </div>
                </li>
                <li className="product clear">
                  <div className="product-thumb">
                    <img src="assets/img/products/home/product-7.jpg" alt="" />
                    <p className="jw-button"> order now</p>
                  </div>
                  <div className="product-details">
                    <div className="product-meta">
                      <h4 className="product-title"> ring</h4>
                      <span className="product-price">$ 10.25</span>
                    </div>
                    <p className="product-description">
                      White or multigrain, with butter, cream cheese, veggie cc,
                      scallion cc, olive cc, sun dried tomato cc, smoked salmon
                    </p>
                  </div>
                </li>
                <li className="product clear">
                  <div className="product-thumb">
                    <img src="assets/img/products/home/product-8.jpg" alt="" />
                    <p className="jw-button"> order now</p>
                  </div>
                  <div className="product-details">
                    <div className="product-meta">
                      <h4 className="product-title"> earring</h4>
                      <span className="product-price">$ 10.25</span>
                    </div>
                    <p className="product-description">
                      White or multigrain, with butter, cream cheese, veggie cc,
                      scallion cc, olive cc, sun dried tomato cc, smoked salmon
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bottom-button">
              <p className="jw-button">take your tour</p>
            </div>
          </div>
        </section>
        {/* New Product: End */}
        {/* New Featured Product: Begin */}
        <section className="new-featured-product container-fluid">
          <div className="row">
            <div className="meta-wrap">
              <div className="meta">
                <p>
                  <img src="assets/img/since.png" alt="New featured" />
                </p>
                <h2>just added</h2>
                <p>
                  Looking for the latest? The new stuff’s right here, no
                  guesswork needed
                </p>
                <p className="jw-button"> show now</p>
              </div>
            </div>
            <div className="thumb">
              <img
                src="assets/img/products/featured.jpg"
                alt="New featured Product"
              />
            </div>
          </div>
        </section>
        {/* New Featured Product: End */}
        {/* Featured Category List: Begin */}
        <section className="featured-category-wrap container-fluid">
          <div className="section-header">
            <div className="section-title">
              <h2>elegan shop</h2>
            </div>
            <h3 className="section-subtitle">The powerful of beauty</h3>
            <h5 className="section-small-subtitle">
              The Elegan pays tribute to the tradition of fine jewelry in its
              most timeless form. Appealing to both men and women, each model is
              produced in rose or white gold beautifully combining purity and
              elegance.
            </h5>
          </div>
          <div className="row">
            <div className="section-main">
              {/* Featured Categories: Begin */}
              <ul className="featured-categories">
                <li className="featured-category">
                  <img
                    src="assets/img/category/category-1.jpg"
                    alt="Featured Category"
                  />
                  <div className="featured-category-details">
                    <div className="details">
                      <h3 className="title">A timeless love</h3>
                      <p className="description">
                        The Elegan pays tribute to the tradition of fine jewelry
                        in its most timeless form. Appealing to both men and
                        women, each model is produced in rose or white gold
                        beautifully combining purity and elegance.
                      </p>
                      <p className="jw-button">order now</p>
                    </div>
                  </div>
                </li>
                <li className="featured-category">
                  <img
                    src="assets/img/category/category-2.jpg"
                    alt="Featured Category"
                  />
                  <div className="featured-category-details">
                    <div className="details">
                      <h3 className="title">A timeless love</h3>
                      <p className="description">
                        The Elegan pays tribute to the tradition of fine jewelry
                        in its most timeless form. Appealing to both men and
                        women, each model is produced in rose or white gold
                        beautifully combining purity and elegance.
                      </p>
                      <p className="jw-button">order now</p>
                    </div>
                  </div>
                </li>
                <li className="featured-category">
                  <img
                    src="assets/img/category/category-3.jpg"
                    alt="Featured Category"
                  />
                  <div className="featured-category-details">
                    <div className="details">
                      <h3 className="title">A timeless love</h3>
                      <p className="description">
                        The Elegan pays tribute to the tradition of fine jewelry
                        in its most timeless form. Appealing to both men and
                        women, each model is produced in rose or white gold
                        beautifully combining purity and elegance.
                      </p>
                      <p className="jw-button">order now</p>
                    </div>
                  </div>
                </li>
                <li className="featured-category">
                  <img
                    src="assets/img/category/category-4.jpg"
                    alt="Featured Category"
                  />
                  <div className="featured-category-details">
                    <div className="details">
                      <h3 className="title">A timeless love</h3>
                      <p className="description">
                        The Elegan pays tribute to the tradition of fine jewelry
                        in its most timeless form. Appealing to both men and
                        women, each model is produced in rose or white gold
                        beautifully combining purity and elegance.
                      </p>
                      <p className="jw-button">order now</p>
                    </div>
                  </div>
                </li>
                <li className="featured-category">
                  <img
                    src="assets/img/category/category-5.jpg"
                    alt="Featured Category"
                  />
                  <div className="featured-category-details">
                    <div className="details">
                      <h3 className="title">A timeless love</h3>
                      <p className="description">
                        The Elegan pays tribute to the tradition of fine jewelry
                        in its most timeless form. Appealing to both men and
                        women, each model is produced in rose or white gold
                        beautifully combining purity and elegance.
                      </p>
                      <p className="jw-button">order now</p>
                    </div>
                  </div>
                </li>
                <li className="featured-category">
                  <img
                    src="assets/img/category/category-6.jpg"
                    alt="Featured Category"
                  />
                  <div className="featured-category-details">
                    <div className="details">
                      <h3 className="title">A timeless love</h3>
                      <p className="description">
                        The Elegan pays tribute to the tradition of fine jewelry
                        in its most timeless form. Appealing to both men and
                        women, each model is produced in rose or white gold
                        beautifully combining purity and elegance.
                      </p>
                      <p className="jw-button">order now</p>
                    </div>
                  </div>
                </li>
              </ul>
              {/* Featured Categories: End */}
            </div>
          </div>
        </section>
        {/* Featured Category List: End */}
        {/* Blog Posts: Begin */}
        <section className="blog-posts-home container">
          <div className="section-header">
            <div className="section-title">
              <h2>elegan shop</h2>
            </div>
            <h3 className="section-subtitle">Blog Posts</h3>
            <h5 className="section-small-subtitle">
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco .
            </h5>
          </div>
          <div className="row">
            <ul className="blog-posts clear">
              <li className="blog-post">
                <div className="blog-thumb img-hover">
                  <img src="assets/img/blog-1.jpg" alt="blog 1" />
                </div>
                <div className="blog-date">
                  <span>02</span>
                  <p>March</p>
                </div>
                <div className="blog-details">
                  <h4 className="blog-title">Friday Fresh Recipes</h4>
                  <p className="blog-meta">Post by Susan / Comments</p>
                  <p>
                    But the placing of the cap-sheaf to all this blundering
                    business was reserved for the scientific Frederick Cuvier,
                    brother to the famous Baron. In 1836, he published a Natural
                    History of...
                  </p>
                </div>
              </li>
              <li className="blog-post">
                <div className="blog-thumb img-hover">
                  <img src="assets/img/blog-2.jpg" alt="blog 2" />
                </div>
                <div className="blog-date">
                  <span>23</span>
                  <p>March</p>
                </div>
                <div className="blog-details">
                  <h4 className="blog-title">The Story Of Beauty</h4>
                  <p className="blog-meta">Post by Susan / Comments</p>
                  <p>
                    Founded in New York City in 1932, by Mr. Harry – an innate
                    gemologist, an intuitive business man, and a dedicated
                    philanthropist – the brand continues to set the standard for
                    the ultimate...
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* Blog Posts: End */}
        {/* Hero Image: Begin */}
        <section className="hero-image img-hover">
          <div className="hero-image-text">
            <h2>class</h2>
            <img src="assets/img/icon-parallax.png" alt="diamon parallax" />
            <h2>elegance</h2>
          </div>
        </section>
        {/* Hero Image: End */}
        {/* Team Member: Begin */}
        <section className="team-member-wrap container">
          <div className="section-header">
            <div className="section-title">
              <h2>elegan shop</h2>
            </div>
            <h3 className="section-subtitle">Team Members</h3>
            <h5 className="section-small-subtitle">
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco .
            </h5>
          </div>
          <div className="row">
            <div className="team-members clear">
              <div className="team-member">
                <div className="member-thumb">
                  <img src="assets/img/member-1.png" alt="Elegan member" />
                  <div className="member-social">
                    <i className="icon-facebook" />
                    <i className="icon-twitter" />
                    <i className="icon-gplus" />
                  </div>
                </div>
                <div className="member-details">
                  <h4 className="member-name">Camila Ally</h4>
                  <p className="member-description">
                    Whether the flitting attendance of the one still and
                    solitary jet had gradually worked upon Ahab.
                  </p>
                </div>
              </div>
              <div className="team-member">
                <div className="member-thumb">
                  <img src="assets/img/member-2.png" alt="Elegan member" />
                  <div className="member-social">
                    <i className="icon-facebook" />
                    <i className="icon-twitter" />
                    <i className="icon-gplus" />
                  </div>
                </div>
                <div className="member-details">
                  <h4 className="member-name">Lauren Normani</h4>
                  <p className="member-description">
                    Whether the flitting attendance of the one still and
                    solitary jet had gradually worked upon Ahab.
                  </p>
                </div>
              </div>
              <div className="team-member">
                <div className="member-thumb">
                  <img src="assets/img/member-3.png" alt="Elegan member" />
                  <div className="member-social">
                    <i className="icon-facebook" />
                    <i className="icon-twitter" />
                    <i className="icon-gplus" />
                  </div>
                </div>
                <div className="member-details">
                  <h4 className="member-name">Bradon Razer</h4>
                  <p className="member-description">
                    Whether the flitting attendance of the one still and
                    solitary jet had gradually worked upon Ahab.
                  </p>
                </div>
              </div>
              <div className="team-member">
                <div className="member-thumb">
                  <img src="assets/img/member-4.png" alt="Elegan member" />
                  <div className="member-social">
                    <i className="icon-facebook" />
                    <i className="icon-twitter" />
                    <i className="icon-gplus" />
                  </div>
                </div>
                <div className="member-details">
                  <h4 className="member-name">Dinah Jane</h4>
                  <p className="member-description">
                    Whether the flitting attendance of the one still and
                    solitary jet had gradually worked upon Ahab.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Team Member: End */}
        {/* Grayscale Collection: Begin */}
        <section className="grayscale-collection-wrap">
          <div className="collection-header">
            <img src="assets/img/diamond.png" alt="diamond" />
            <h2>collections</h2>
            <p>
              From the acquisition of some of the world's most famous gemstones,
              including the Jonker, Hope, and Winston Legacy Diamonds, to
              adorning generations of famous faces, from Hollywood legends to
              international Heads of State, for over eight decades, the Harry
              Winston name has been synonymous with the best that there is.
            </p>
          </div>
          <div className="collection-wrap container clear">
            <div className="collection clear">
              <img
                src="assets/img/collection/collection-1.png"
                alt="collection"
                className="grayscale"
                id="collection-1"
              />
              <img
                src="assets/img/collection/collection-2-1.jpg"
                alt="collection"
                className="grayscale"
                id="collection-2"
              />
              <img
                src="assets/img/collection/collection-3-1.jpg"
                alt="collection"
                className="grayscale"
                id="collection-3"
              />
              <img
                src="assets/img/collection/collection-5-1.jpg"
                alt="collection"
                className="grayscale"
                id="collection-4"
              />
              <img
                src="assets/img/collection/collection-6-1.jpg"
                alt="collection"
                className="grayscale"
                id="collection-5"
              />
            </div>
          </div>
        </section>
        {/* Grayscale Collection: End */}
        {/* Register Newsletter: Begin */}
        <div className="register-newsletter">
          <div className="container">
            <div className="row">
              <div className="register-wrap">
                <span className="head">newsletter</span>
                <form action="#" method="post">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your email address"
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="submit">
                        submit
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Register Newsletter: End */}
        {/* Contact Section: Begin */}
        <section className="contact-location container">
          <div className="row">
            {/* Contact: Begin */}
            <div className="contact">
              <h3>Contact us</h3>
              <form action="#" method="post">
                <div className="form-group msg_name">
                  <input
                    type="text"
                    className="form-control"
                    id="msg_name"
                    name="msg_name"
                    placeholder="Your name*"
                  />
                </div>
                <div className="form-group msg_email">
                  <input
                    type="email"
                    className="form-control"
                    id="msg_email"
                    name="msg_email"
                    placeholder="Your email*"
                  />
                </div>
                <div className="form-group msg_phone">
                  <input
                    type="text"
                    className="form-control"
                    id="msg_phone"
                    name="msg_phone"
                    placeholder="Your phone"
                  />
                </div>
                <div className="form-group msg_message">
                  <textarea
                    className="form-control"
                    name="msg_message"
                    id="msg_message"
                    placeholder="Comments*"
                    rows={8}
                    defaultValue={""}
                  />
                </div>
                <button type="submit" className="jw-button">
                  send message
                </button>
              </form>
            </div>
            {/* Contact: End */}
            {/* Location: Begin */}
            <div className="location">
              <h3>Location</h3>
              <div className="img-hover">
                <img src="assets/img/location.jpg" alt="Location" />
              </div>
              <p>
                <span className="icon icon-phone" />
                <span className="location-details">0-800-12-345-6 880</span>
              </p>
              <p>
                <span className="icon icon-location" />
                <span className="location-details">
                  257 Charlington Gates Road Morrison, Nr. 568
                </span>
              </p>
              <p>
                <span className="icon icon-email" />
                <span className="location-details">info@netbaseteam.com</span>
              </p>
            </div>
            {/* Location: End */}
          </div>
        </section>
        {/* Contact Section: End */}
      </main>
      {/* Main: End */}
      {/* Footer: Begin */}
      <footer>
        {/* Footer Top: Begin */}
        <div className="footer-top">
          <section className="container">
            <div className="row">
              {/* Footer Columns: Begin */}
              <div className="footer-columns clear">
                {/* Footer Column 1: Begin */}
                <div className="footer-column" id="footer-column-1">
                  <h4 className="footer-logo">
                    <img src="assets/img/main-logo.png" alt="elegan shop" />
                  </h4>
                  <div className="footer-acordion-wrap">
                    <p className="footer-slogan">
                      The Elegan pays tribute to the tradition of fine jewelry
                      in its most timeless form.
                    </p>
                    <div className="footer-contacts">
                      <div className="footer-contact clear">
                        <i className="icon icon-location" />
                        <p className="location-details">
                          257 Charlington Gates Road Morrison, Nr. 568
                        </p>
                      </div>
                      <div className="footer-contact clear">
                        <i className="icon icon-phone" />
                        <p className="location-details">0-800-12-345-6 880</p>
                      </div>
                      <div className="footer-contact clear">
                        <i className="icon icon-email" />
                        <p className="location-details">info@netbaseteam.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Footer Column 1: End */}
                {/* Footer Column 2: Begin */}
                <div className="footer-column" id="footer-column-2">
                  <h4 className="column-title">lastest post</h4>
                  <div className="footer-acordion-wrap">
                    <div className="footer-post clear">
                      <div className="footer-post-thumb">
                        <img
                          src="assets/img/footer-post-1.jpg"
                          alt="Footer post"
                        />
                      </div>
                      <div className="footer-post-details">
                        <h4 className="footer-post-title">Ring diamond</h4>
                        <p className="footer-post-description">
                          Whether the flitting attendanc of the one still and...
                        </p>
                      </div>
                    </div>
                    <div className="footer-post clear">
                      <div className="footer-post-thumb">
                        <img
                          src="assets/img/footer-post-2.jpg"
                          alt="Footer post"
                        />
                      </div>
                      <div className="footer-post-details">
                        <h4 className="footer-post-title">Ring Gold</h4>
                        <p className="footer-post-description">
                          Whether the flitting attendanc of the one still and...
                        </p>
                      </div>
                    </div>
                    <div className="footer-post clear">
                      <div className="footer-post-thumb">
                        <img
                          src="assets/img/footer-post-3.jpg"
                          alt="Footer post"
                        />
                      </div>
                      <div className="footer-post-details">
                        <h4 className="footer-post-title">Earring blue</h4>
                        <p className="footer-post-description">
                          Whether the flitting attendanc of the one still and...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Footer Column 2: End */}
                {/* Footer Column 3: Begin */}
                <div className="footer-column" id="footer-column-3">
                  <h4 className="column-title">opening times</h4>
                  <div className="footer-acordion-wrap">
                    <p>
                      <span className="date">Monday</span>
                      <span className="time">1pm - 10pm</span>
                    </p>
                    <p>
                      <span className="date">Tuesday</span>
                      <span className="time">1pm - 10pm</span>
                    </p>
                    <p>
                      <span className="date">Wednesday</span>
                      <span className="time">1pm - Midnight</span>
                    </p>
                    <p>
                      <span className="date">Thursday</span>
                      <span className="time">1pm - 10pm</span>
                    </p>
                    <p>
                      <span className="date">Friday</span>
                      <span className="time">1pm - Midnight</span>
                    </p>
                    <p>
                      <span className="date">Saturday</span>
                      <span className="time">Closed</span>
                    </p>
                    <p>
                      <span className="date">Sunday</span>
                      <span className="time">1pm - 10pm</span>
                    </p>
                  </div>
                </div>
                {/* Footer Column 3: End */}
                {/* Footer Column 4: Begin */}
                <div className="footer-column" id="footer-column-4">
                  <h4 className="column-title">flickr photos</h4>
                  <div className="footer-acordion-wrap">
                    <div className="footer-flickr">
                      <img src="assets/img/flickr/flickr-1.jpg" alt="flickr" />
                    </div>
                    <div className="footer-flickr">
                      <img src="assets/img/flickr/flickr-2.jpg" alt="flickr" />
                    </div>
                    <div className="footer-flickr">
                      <img src="assets/img/flickr/flickr-3.jpg" alt="flickr" />
                    </div>
                    <div className="footer-flickr">
                      <img src="assets/img/flickr/flickr-4.jpg" alt="flickr" />
                    </div>
                    <div className="footer-flickr">
                      <img src="assets/img/flickr/flickr-4.jpg" alt="flickr" />
                    </div>
                    <div className="footer-flickr">
                      <img src="assets/img/flickr/flickr-5.jpg" alt="flickr" />
                    </div>
                    <div className="footer-flickr">
                      <img src="assets/img/flickr/flickr-7.jpg" alt="flickr" />
                    </div>
                    <div className="footer-flickr">
                      <img src="assets/img/flickr/flickr-8.jpg" alt="flickr" />
                    </div>
                    <div className="footer-flickr">
                      <img src="assets/img/flickr/flickr-1.jpg" alt="flickr" />
                    </div>
                    <div className="footer-flickr">
                      <img src="assets/img/flickr/flickr-2.jpg" alt="flickr" />
                    </div>
                    <div className="footer-flickr">
                      <img src="assets/img/flickr/flickr-3.jpg" alt="flickr" />
                    </div>
                    <div className="footer-flickr">
                      <img src="assets/img/flickr/flickr-4.jpg" alt="flickr" />
                    </div>
                  </div>
                </div>
                {/* Footer Column 4: End */}
              </div>
              {/* Footer Columns: End */}
              {/* Footer Social Connect: Begin */}
              <div className="footer-social">
                <i className="icon-facebook" />
                <i className="icon-twitter" />
                <i className="icon-gplus" />
                <i className="icon-linkedin-rect" />
                <i className="icon-pinterest-squared" />
              </div>
              {/* Footer Social Connect: End */}
            </div>
          </section>
        </div>
        {/* Footer Top: End */}
        {/* Footer bottom: Begin */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="footer-copyright">
                <span>Central - Copyright © </span>
                <span className="footer-bottom-color">Netbaseteam.com.</span>
                <span>All Rights Reserved.</span>
              </div>
              <div className="footer-payment-method">
                <img src="assets/img/footer-payment.png" alt="Payment" />
              </div>
            </div>
          </div>
          <i className="icon-up-open" /> Top
        </div>
        {/* Footer bottom: End */}
      </footer>
      {/* Footer: End */}
    </div>
  );
}
