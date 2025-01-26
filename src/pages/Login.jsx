import { Helmet } from "../components/Helmet/Helmet";
import { CommonSection } from "../components/UI/common-section/CommonSection";
import { Row, Container, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useRef } from "react";

export const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredName = loginNameRef.current.value;
    const enteredPassword = loginPasswordRef.current.value;
  };
  return (
    <Helmet title='Login'>
      <CommonSection title='Login' />

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form action='' className='form mb-5' onSubmit={handleSubmit}>
                <div className='form__group'>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    required
                    ref={loginNameRef}
                  />
                </div>

                <div className='form__group'>
                  <input type='password' placeholder='Enter your password' />
                </div>

                <button type='submit' className='addToCard__btn'>
                  Login
                </button>
              </form>

              <Link to='/register'>
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
