import PropTypes from "prop-types";

export const Helmet = (props) => {
  document.title = "Food ordering app -" + props.title;
  return <div className='w-100'>{props.children}</div>;
};

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
