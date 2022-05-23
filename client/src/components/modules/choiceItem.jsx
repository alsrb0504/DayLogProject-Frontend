import { useDispatch } from "react-redux";
import { ResultQAAsync } from "../../store/actions/qa";

const ChoiceItem = ({ choice, openChoicePopup }) => {
  const dispatch = useDispatch();

  const selectChoice = () => {
    dispatch(ResultQAAsync(choice.index));
    openChoicePopup();
  };

  return (
    <li className="choice-item" onClick={selectChoice}>
      <p>{choice.text}</p>
    </li>
  );
};

export default ChoiceItem;
