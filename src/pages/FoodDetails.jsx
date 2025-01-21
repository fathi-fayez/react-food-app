import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "../components/Helmet/Helmet";
import { CommonSection } from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import img01 from "../assets/images/bread(1).png";

import "../styles/product-details.css";

export const FoodDetails = () => {
  const [tap, setTap] = useState("desc");

  const { id } = useParams();

  const product = products.find((item) => item.id === id);

  const [previewImg, setPreviewImg] = useState(product.image01);
  return (
    <Helmet title='product-details'>
      <CommonSection title='product 01' />

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
                <h2 className='product__title mb-3'>Pizza with mashroum</h2>
                <span className='product__price'>
                  Price: <span>$30</span>
                </span>
                <p className='category mb-5'>
                  Category: <span>Burger</span>
                </p>
                <button className='addToCard__btn'>Add to cart</button>
              </div>
            </Col>

            <Col lg='12'>
              <div className='taps d-flex align-items-center gap-3 py-2'>
                <h6 className='tap__active'>Description</h6>
                <h6>Review</h6>
              </div>

              <div className='tap__content'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa, doloribus. Ea debitis sequi dolor velit voluptatibus
                  sunt fugit rerum eum dolore alias. Magni dicta, iste sunt
                  suscipit inventore quidem nemo quas, unde velit quia ratione
                  aspernatur eveniet sapiente, sed illo.
                </p>
              </div>

              <div className='tap__form mb-3'>
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

                <form action='' className='form'>
                  <div className='form__group'>
                    <input type='text' placeholder='Enter your name' />
                  </div>

                  <div className='form__group'>
                    <input type='text' placeholder='Enter your name' />
                  </div>

                  <div className='form__group'>
                    <textarea
                      rows={5}
                      type='text'
                      placeholder='Enter your name'
                    />
                  </div>

                  <button type='submit' className='addToCard__btn'>
                    Submit
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
