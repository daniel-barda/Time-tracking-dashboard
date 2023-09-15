import PropTypes from "prop-types";

export const Button = ({ children, isActivity, onSetActivity }) => {
  return (
    <button
      onClick={() => onSetActivity(children)}
      className={isActivity === children ? "button-active" : null}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  isActivity: PropTypes.string,
  onSetActivity: PropTypes.func,
};
