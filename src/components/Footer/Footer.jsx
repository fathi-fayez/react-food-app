import { Container, Col, Row, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";
import { Link } from "react-router-dom";
// Icons
import { RiSendPlaneLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiSitecore } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className='logo footer__logo text-start'>
              <img src={logo} alt='logo' />
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
                fuga illo fugiat.
              </p>
            </div>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Delivery Time</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Contact</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <p>Location: Maadi, Cairo, Egypt</p>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Phone: 01550395381</span>
              </ListGroupItem>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Email: fathifayez155@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className='footer__title'>Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className='newsletter'>
              <input
                type='email'
                name=''
                id=''
                placeholder='Enter Your Email'
              />
              <span>
                <RiSendPlaneLine />
              </span>
            </div>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col lg='6' md='6'>
            <p className='copyright__text'>
              Copyright - 2025, website made by Fathi Fayez. All Rights Reserved
            </p>
          </Col>
          <Col lg='6' md='6'>
            <div className='social__links d-flex align-items-center gap-4 justify-content-end'>
              <p className='m-0'>Follow:</p>
              <span>
                <Link to='https://www.facebook.com/profile.php?id=100005083479476'>
                  <FaFacebook />
                </Link>
              </span>
              <span>
                <Link to='https://www.linkedin.com/in/fathifayez'>
                  <FaLinkedin />
                </Link>
              </span>
              <span>
                <Link to='https://github.com/fathi-fayez'>
                  <FaGithub />
                </Link>
              </span>
              <span>
                <Link to='https://my-portfolio-brown-seven-19.vercel.app/'>
                  <SiSitecore />
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
