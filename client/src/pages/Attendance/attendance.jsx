import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestQAAsync } from "../../store/actions/qa";
import GlobalHeader from "../../components/modules/globalHeader";

const Attendance = (props) => {
  const dispatch = useDispatch();

  const question = useSelector((state) => state.qa.question);
  const choices = useSelector((state) => state.qa.choices);

  useEffect(() => {
    dispatch(RequestQAAsync());
  }, [dispatch]);

  return (
    <div>
      <GlobalHeader />
      <main>
        <div>{question}</div>

        <ul>
          {choices.map((choice) => (
            <li key={choice.index}>
              <p>{choice.text}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Attendance;
