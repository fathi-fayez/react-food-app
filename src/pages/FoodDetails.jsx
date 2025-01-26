import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "../components/Helmet/Helmet";
import { CommonSection } from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { ProductCard } from "../components/UI/product-card/ProductCard";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import "../styles/product-details.css";

export const FoodDetails = () => {
  const [tap, setTap] = useState("desc");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteeredEmail] = useState("");
  const [reviewMsg, setReviewMsg] = useState("");
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, category, desc, image01 } = product;
  const relatedProducts = products.filter(
    (item) => item.category === product.category && item.id !== id
  );
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title='product-details'>
      <CommonSection title={title} />

      <section>
        <Container>
          <Row>
            <Col lg='2' md='2'>
              <div className='product__images'>
                <div
                  className='img__item mb-3'
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img src={product.image01} alt='' className='w-50' />
                </div>

                <div
                  className='img__item mb-3'
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img src={product.image02} alt='' className='w-50' />
                </div>

                <div
                  className='img__item mb-3'
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img src={product.image03} alt='' className='w-50' />
                </div>
              </div>
            </Col>

            <Col lg='4' md='4'>
              <div className='product__main-img'>
                <img src={previewImg} alt='' className='w-100' />
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className='single__product-content'>
                <h2 className='product__title mb-3'>{title}</h2>
                <span className='product__price'>
                  Price: <span>${price}</span>
                </span>
                <p className='category mb-5'>
                  Category: <span>{category}</span>
                </p>
                <button className='addToCard__btn' onClick={addToCart}>
                  Add to cart
                </button>
              </div>
            </Col>

            <Col lg='12'>
              <div className='taps d-flex align-items-center gap-3 py-2'>
                <h6
                  className={`${tap === "desc" ? "tap__active" : ""}`}
                  onClick={() => setTap("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tap === "rev" ? "tap__active" : ""}`}
                  onClick={() => setTap("rev")}
                >
                  Review
                </h6>
              </div>

              {tap === "desc" ? (
                <div className='tap__content'>
                  <p>{desc}</p>
                </div>
              ) : (
                <div className='tap__form mb-3 mt-5'>
                  <div className='review'>
                    <p className='user__name mb-0'>Ahmad Mohamed</p>
                    <p className='user__email'>ahmadmohamed@gmail.com</p>
                    <p className='feedback__text'>great product</p>
                  </div>

                  <div className='review'>
                    <p className='user__name mb-0'>Ahmad Mohamed</p>
                    <p className='user__email'>ahmadmohamed@gmail.com</p>
                    <p className='feedback__text'>great product</p>
                  </div>

                  <form action='' className='form' onSubmit={handleSubmit}>
                    <div className='form__group'>
                      <input
                        type='text'
                        placeholder='Enter your name'
                        required
                        onChange={(e) => setEnteredName(e.target.value)}
                      />
                    </div>

                    <div className='form__group'>
                      <input
                        type='text'
                        placeholder='Enter your email'
                        required
                        onChange={(e) => setEnteeredEmail(e.target.value)}
                      />
                    </div>

                    <div className='form__group'>
                      <textarea
                        rows={5}
                        type='text'
                        placeholder='Enter your review'
                        required
                        onChange={(e) => setReviewMsg(e.target.value)}
                      />
                    </div>

                    <button type='submit' className='addToCard__btn'>
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>

            <Col lg='12' className='mb-5'>
              <h4 className='related__product-title'>You might also light</h4>
            </Col>

            {relatedProducts.map((item) => (
              <Col lg='3' mg='4' sm='6' xs='6' key={item.id} className='mb-4'>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
