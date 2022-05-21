import { useSelector } from "react-redux";
import EmptyText from "../modules/emptyText";
import Todolist from "../modules/todolist";

import dummy_badge from "../../assets/img/dummy-badge.svg";

const TodoSection = ({ todos, is_home }) => {
  const badge = useSelector((state) => state.badge.challenge_badge);

  console.log(badge);

  return (
    <section className="todo-section">
      {/* 도전 중인 뱃지 있다면 표시 */}
      {badge.badge_name && is_home && (
        <div className="home-badge-container">
          <div className="badge-image-container">
            {/* 뱃지 테스트 완료 후, 삭제 */}
            <img
              src={badge.badge_url ? badge.badge_url : dummy_badge}
              alt="뱃지 이미지"
            />
          </div>
          <div className="badge-info">
            <span>{badge.badge_name}</span>
            <span>
              {badge.goal_count} / {badge.final_count}
            </span>
          </div>
        </div>
      )}
      {/* 투두리스트 섹션 */}
      {todos && <Todolist todos={todos} />}
      {!todos && (
        <EmptyText text="오늘의 할 일이 없습니다.<br/>할 일을 추가해보세요." />
      )}
    </section>
  );
};

export default TodoSection;
