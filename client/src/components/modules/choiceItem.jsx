const ChoiceItem = ({ choice }) => {
  return (
    <li className="choice-item">
      <p>{choice.text}</p>
    </li>
  );
};

export default ChoiceItem;
