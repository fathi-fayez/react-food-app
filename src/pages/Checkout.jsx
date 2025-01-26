import { Helmet } from "../components/Helmet/Helmet";
import { CommonSection } from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useSelector } from "react-redux";
import { useState } from "react";
import "../styles/checkout.css";

export const Checkout = () => {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;
  const totalAmount = cartTotalAmount + shippingCost;
  const shippingInfo = [];

  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteeredEmail] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredCuntry, setEnteredCountry] = useState("");
  const [enteredCity, setEnteredCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userShippingAddres = {
      name: enteredName,
      email: enteredEmail,
      number: enteredNumber,
      country: enteredCuntry,
      city: enteredCity,
      postalCode: postalCode,
    };
    shippingInfo.push(userShippingAddres);
    console.log(shippingInfo);
  };

  return (
    <Helmet title='checkout'>
      <CommonSection title='checkout' />

      <section>
        <Container>
          <Row>
            <Col lg='8' md='6'>
              <h6 className='mb-4'>Shipping address</h6>

              <form
                action=''
                className='checkout__form'
                onSubmit={handleSubmit}
              >
                <div className='form__group'>
                  <input
                    type='text'
                    id='name'
                    placeholder='Enter your name'
                    required
                    onChange={(e) => setEnteredName(e.target.value)}
                  />
                </div>

                <div className='form__group'>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    required
                    onChange={(e) => setEnteeredEmail(e.target.value)}
                  />
                </div>

                <div className='form__group'>
                  <input
                    type='number'
                    placeholder='Phone number'
                    required
                    onChange={(e) => setEnteredNumber(e.target.value)}
                  />
                </div>

                <div className='form__group'>
                  <input
                    type='text'
                    placeholder='Country'
                    required
                    onChange={(e) => setEnteredCountry(e.target.value)}
                  />
                </div>

                <div className='form__group'>
                  <input
                    type='text'
                    placeholder='City'
                    required
                    onChange={(e) => setEnteredCity(e.target.value)}
                  />
                </div>

                <div className='form__group'>
                  <input
                    type='number'
                    placeholder='Postal code'
                    required
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
                <button className='addToCard__btn'>Payment</button>
              </form>
            </Col>
            <Col lg='4' md='6'>
              <div className='checkout__bill'>
                <h6 className='d-flex justify-content-between align-items-center mb-3'>
                  Subtotal: <span>$ {cartTotalAmount}</span>
                </h6>
                <h6 className='d-flex justify-content-between align-items-center mb-3'>
                  Shipping: <span>$ {shippingCost}</span>
                </h6>
                <div className='checkout__total'>
                  <h5 className='d-flex justify-content-between align-items-center'>
                    Total: <span>$ {totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
