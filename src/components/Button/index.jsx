/* eslint-disable react/prop-types */

const Button = ({ variant = "button-primary", className = "", children, ...props }) => {
  return (
    <button
    className={`${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
