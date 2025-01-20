import { Container } from "reactstrap";
import PropTypes from "prop-types";
import "../../../styles/common-section.css";

export const CommonSection = (props) => {
  CommonSection.propTypes = {
    title: PropTypes.string.isRequired,
  };

  return (
    <section className='common__section'>
      <Container>
        <h2 className='text-white'>{props.title}</h2>
      </Container>
    </section>
  );
};
