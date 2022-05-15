import logo_image from "../../assets/img/logo-bold.svg";

const BoardItem = (props) => {
  return (
    <li className="board-item">
      <div className="board-item-image-container">
        {/* 이미지 존재 여부에 따라 img를 다르게 만들어야 함. */}
        <img
          className="board-item-image board-item-image-logo"
          src={logo_image}
          alt="일기 사진"
        />
      </div>

      <div className="board-item-text">
        <h3>
          일기 내용 ... 일기 내용 ... 일기 내용 ... 일기 내용 ... 일기 내용 ...
        </h3>
        <span>2022, May 15</span>
      </div>
    </li>
  );
};

export default BoardItem;
