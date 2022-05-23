import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestQAAsync } from "../../store/actions/qa";
import GlobalHeader from "../../components/modules/globalHeader";
import ChoiceItem from "../../components/modules/choiceItem";
import ChoiceResultPopup from "../../components/modules/choiceResultPopup";
import AttendancePopup from "../../components/modules/attendancePopup";
import OverLay from "../../components/modules/overLay";
import { SetAuthHeader } from "../../services/auth";

const Attendance = (props) => {
  const dispatch = useDispatch();

  const question = useSelector((state) => state.qa.question);
  const choices = useSelector((state) => state.qa.choices);

  const [choiceToggle, setChoiceToggle] = useState(false);
  const [attendanceToggle, setAttendanceToggle] = useState(false);

  useEffect(() => {
    SetAuthHeader();
    dispatch(RequestQAAsync());
  }, [dispatch]);

  const openChoicePopup = () => {
    setChoiceToggle(true);
  };

  const closeChoicePopup = () => {
    setChoiceToggle(false);
    setAttendanceToggle(true);
  };

  return (
    <div className="attendance">
      {choiceToggle && (
        <>
          <OverLay />
          <ChoiceResultPopup closeChoicePopup={closeChoicePopup} />
        </>
      )}

      {attendanceToggle && (
        <>
          <OverLay />
          <AttendancePopup />
        </>
      )}

      <GlobalHeader />
      <main className="attendance-main">
        <div className="question">{question}</div>

        <ul className="choice-container">
          {choices.map((choice) => (
            <ChoiceItem
              key={choice.index}
              choice={choice}
              openChoicePopup={openChoicePopup}
            />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Attendance;
