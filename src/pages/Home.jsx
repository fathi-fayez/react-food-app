import { Helmet } from "../components/Helmet/Helmet";
import { Category } from "../components/UI/category/Category";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { FaCircleCheck } from "react-icons/fa6";
import { useState, useEffect } from "react";
import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";
import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import whyImg from "../assets/images/location.png";
import networkImg from "../assets/images/network.png";

import { TestimonialSlider } from "../components/UI/slider/TestimonialSlider";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import products from "../assets/fake-data/products";
import { ProductCard } from "../components/UI/product-card/ProductCard";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, sequi.",
  },
  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, sequi.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, sequi.",
  },
];

// Icons
import { IoIosArrowForward } from "react-icons/io";
import { FaCarRear } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
export const Home = () => {
  // States For Home Page
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);
  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);
  return (
    <Helmet title='Home'>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='hero__content'>
                <h5 className='mb-3 '>Easy way to make an order</h5>

                <h1 className='hero__title mb-3 '>
                  <span>HUNGRY?</span> Just wait <br /> food at
                  <span> your doof</span>
                </h1>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                  eligendi est facilis sint? Dolores, ratione!
                </p>
              </div>

              <div className='hero__btns d-flex aligm-items-center gap-5 mt-4'>
                <button className='order__btn d-flex align-items-center justify-content-between'>
                  Order now <IoIosArrowForward />
                </button>

                <button className='all__foods-btn d-flex align-items-center justify-content-between'>
                  <Link to='/foods'>See all foods</Link>
                </button>
              </div>

              <div className='hero__service d-flex align-items-center gap-5 mt-5'>
                <p className='d-flex align-items-center'>
                  <span>
                    <FaCarRear /> No shipping charge
                  </span>
                </p>

                <p className='d-flex align-items-center'>
                  <span>
                    <IoShieldCheckmarkOutline />
                    100% secure checkout
                  </span>
                </p>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className='img'>
                <img src={heroImg} alt='hero-img' className='w-100' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h5 className='feature__subtitle mb-4'>What we serve</h5>
              <h2 className='feature__title'>Just sit back at home</h2>
              <h2 className='feature__title'>
                we will <span>take care</span>
              </h2>
              <p className='feature__text mb-1 mt-4'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
                quis.
              </p>

              <p className='feature__text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
                quis.
              </p>
            </Col>
            {featureData.map((item, index) => (
              <Col lg='4' md='6' sm='6' key={index} className='mt-5'>
                <div className='feature__item text-center px-5 py-3'>
                  <img
                    src={item.imgUrl}
                    alt='feature-image'
                    className='w-25 mb-3'
                  />
                  <h5 className='fw-bold mb-3'>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
            <Col lg='4' md='4'></Col>
            <Col lg='4' md='4'></Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2>Popular Foods</h2>
            </Col>

            <Col lg='12'>
              <div className='food__category d-flex aligm-center justify-content-center'>
                <button
                  className={`all__btn ${
                    category === "ALL" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>

                <button
                  className={`d-flex aligm-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt='' />
                  Burger
                </button>

                <button
                  className={`d-flex aligm-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt='' />
                  Pizaa
                </button>

                <button
                  className={`d-flex aligm-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt='' />
                  Bread
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-5'>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <img src={whyImg} alt='why-tasty-treat' className='w-100' />
            </Col>
            <Col lg='6' md='6'>
              <div className='why__tasty-treat'>
                <h2 className='tasty__treat-title'>
                  Why <span>Tasty Treat</span>
                </h2>
                <p className='tasty__treat-desc'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda molestias et deserunt. Accusamus porro aliquid
                  veniam beatae laboriosam iure, dignissimos, perspiciatis
                  corporis distinctio reiciendis similique, voluptates deleniti
                  laborum pariatur quibusdam.
                </p>

                <ListGroup className='mt-4'>
                  <ListGroupItem className='border-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'>
                      <FaCircleCheck />
                      Fresh and tasty foods
                    </p>

                    <p className='choose__us-desc'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis, maiores.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className='border-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'>
                      <FaCircleCheck />
                      Quality support
                    </p>
                    <p className='choose__us-desc'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis, maiores.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className='border-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'>
                      <FaCircleCheck />
                      Order from any location
                    </p>
                    <p className='choose__us-desc'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis, maiores.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2>Hot Pizza</h2>
            </Col>

            {hotPizza.map((item) => (
              <Col lg='3' md='4' key={item.id} className='mt-5'>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='testimonial'>
                <h5 className='testimonial__subtitle mb-4'>Testimonial</h5>

                <h2 className='testimonial__title mb-4'>
                  What our <span>customers</span> are saying
                </h2>

                <p className='testimonial__desc'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Possimus vitae sit eos aliquid voluptatem? Possimus provident
                  hic at voluptatibus ad?
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg='6' md='6'>
              <img src={networkImg} alt='testimonial-img' className='w-100' />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
