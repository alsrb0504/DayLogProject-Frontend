const Button = ({ text, type, color, size, onClick, className }) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${color} ${size} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
