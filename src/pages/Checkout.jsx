// import products from "../assets/fake-data/products";
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
import { Helmet } from "../components/Helmet/Helmet";
import { CommonSection } from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
// import { RiDeleteBin5Line } from "react-icons/ri";
// import { useSelector } from "react-redux";
// import { cartActions } from "../store/shopping-cart/cartSlice";
// import { Link } from "react-router-dom";

export const Checkout = () => {
  return (
    <Helmet title='checkout'>
      <CommonSection title='checkout' />

      <section>
        <Container>
          <Row>
            <Col lg='8' md='6'>
              <h6 className='mb-4'>Shipping address</h6>
              <form action='' className='checkout__form'>
                <div className='form__group'>
                  <input type='text' id='name' placeholder='Enter your name' />
                </div>

                <div className='form__group'>
                  <input
                    type='email'
                    id='name'
                    placeholder='Enter your email'
                  />
                </div>
              </form>
            </Col>
            <Col lg='4' md='6'></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
