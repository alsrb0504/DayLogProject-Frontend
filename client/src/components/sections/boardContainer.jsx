import AddBoardItem from "../modules/addBoardItem";
import BoardItem from "../modules/boardItem";

const BoardContainer = ({ diary_list, needAdd }) => {
  // redux에서 정보 받아오고, props로 최신순, 좋아요 순, 마이페이지 같은 것들 받아옴.

  return (
    <main className="board-main">
      <ul className="board-container">
        {needAdd && <AddBoardItem />}

        {diary_list.map((diary) => (
          <BoardItem key={diary.diary_no} diary={diary} />
        ))}
      </ul>
    </main>
  );
};

export default BoardContainer;
