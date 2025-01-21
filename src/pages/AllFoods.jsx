import { useState } from "react";
import { Helmet } from "../components/Helmet/Helmet";
import { CommonSection } from "../components/UI/common-section/CommonSection";
import ReactPaginate from "react-paginate";
import "../styles/all-foods.css";
import "../styles/pagination.css";

import { Container, Row, Col } from "reactstrap";

import { CiSearch } from "react-icons/ci";

import products from "../assets/fake-data/products";
import { ProductCard } from "../components/UI/product-card/ProductCard";

export const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchedProducts = products.filter((item) => {
    if (searchTerm === "") return item;
    if (item.title.toLowerCase().includes(searchTerm)) {
      return item;
    }
  });

  const [pageNumber, setPageNumber] = useState(0);

  const productPrePage = 8;
  const visitedPage = pageNumber * productPrePage;
  const displayPage = searchedProducts.slice(
    visitedPage,
    visitedPage + productPrePage
  );

  const pageCount = Math.ceil(searchedProducts.length / productPrePage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title='All-Foods'>
      <CommonSection title='All Foods' />

      <section>
        <Container>
          <Row>
            <Col lg='6' mg='6' sm='6'>
              <div className='search__widget  d-flex align-items-center justify-content-between w-50'>
                <input
                  type='text'
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <CiSearch />
                </span>
              </div>
            </Col>

            <Col lg='6' mg='6' sm='6' className='mb-5'>
              <div className='sorting__widget text-end'>
                <select className='w-50'>
                  <option>Default</option>
                  <option value='ascending'>Alphabetically, A-Z</option>
                  <option value='descending'>Alphabetically, Z-A</option>
                  <option value='high-price'>High Price</option>
                  <option value='low-price'>Low Price</option>
                </select>
              </div>
            </Col>

            {displayPage.map((item) => (
              <Col lg='3' mg='4' sm='6' xs='6' key={item.id} className='mb-4'>
                <ProductCard item={item} />
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel='Prev'
                nextLabel='Next'
                containerClassName='paginationBttns'
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
