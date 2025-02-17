/* eslint-disable react/prop-types */

const Button = ({
  name,
  variant = "button-primary",
  Icon,
  className = "",
  children,
  ...props
}) => {
  return (
    <button className={`${variant} ${className}`} {...props}>
      {Icon && <Icon />}
      {name}
      {children}
    </button>
  );
};

export default Button;
