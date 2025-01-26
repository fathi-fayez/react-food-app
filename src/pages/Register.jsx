import { Helmet } from "../components/Helmet/Helmet";
import { CommonSection } from "../components/UI/common-section/CommonSection";
import { Row, Container, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useRef } from "react";

export const Register = () => {
  const SignUpNameRef = useRef();
  const SignUpPasswordRef = useRef();
  const SignUpEmailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredName = SignUpNameRef.current.value;
    const enteredPassword = SignUpPasswordRef.current.value;
  };
  return (
    <Helmet title='Sign Up'>
      <CommonSection title='Sign Up' />

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form action='' className='form mb-5' onSubmit={handleSubmit}>
                <div className='form__group'>
                  <input
                    type='text'
                    placeholder='Full Nme'
                    required
                    ref={SignUpNameRef}
                  />
                </div>

                <div className='form__group'>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    required
                    ref={SignUpEmailRef}
                  />
                </div>

                <div className='form__group'>
                  <input
                    type='password'
                    placeholder='Enter your password'
                    required
                    ref={SignUpPasswordRef}
                  />
                </div>

                <button type='submit' className='addToCard__btn'>
                  Submit
                </button>
              </form>

              <Link to='/login'>Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
