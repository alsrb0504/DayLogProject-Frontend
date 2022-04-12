const Button = ({ text, type, color, size, onClick }) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <button type={type} onClick={handleClick} className={`${color} ${size}`}>
      {text}
    </button>
  );
};

export default Button;
