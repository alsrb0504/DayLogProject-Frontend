import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestQAAsync } from "../../store/actions/qa";
import GlobalHeader from "../../components/modules/globalHeader";
import ChoiceItem from "../../components/modules/choiceItem";
import ChoiceResultPopup from "../../components/modules/choiceResultPopup";

const Attendance = (props) => {
  const dispatch = useDispatch();

  const question = useSelector((state) => state.qa.question);
  const choices = useSelector((state) => state.qa.choices);

  useEffect(() => {
    dispatch(RequestQAAsync());
  }, [dispatch]);

  return (
    <div className="attendance">
      <ChoiceResultPopup />

      <GlobalHeader />
      <main className="attendance-main">
        <div className="question">{question}</div>

        <ul className="choice-container">
          {choices.map((choice) => (
            <ChoiceItem key={choice.index} choice={choice} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Attendance;
