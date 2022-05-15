import AddBoardItem from "../modules/addBoardItem";
import BoardItem from "../modules/boardItem";

const BoardContainer = ({ boards, needAdd }) => {
  // redux에서 정보 받아오고, props로 최신순, 좋아요 순, 마이페이지 같은 것들 받아옴.

  return (
    <main className="board-main">
      <ul className="board-container">
        {needAdd && <AddBoardItem />}

        {boards.map((item, idx) => (
          <BoardItem key={idx} />
        ))}
        {/* <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem /> */}
      </ul>
    </main>
  );
};

export default BoardContainer;
