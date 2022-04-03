const Button = ({ text, type, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button onClick={handleClick} className={type}>
      {text}
    </button>
  );
};

export default Button;
