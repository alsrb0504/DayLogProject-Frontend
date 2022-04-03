const Button = ({ text, type, size, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button onClick={handleClick} className={`${type} ${size}`}>
      {text}
    </button>
  );
};

export default Button;
