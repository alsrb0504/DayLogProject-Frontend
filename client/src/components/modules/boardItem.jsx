import dummy_image from "../../assets/img/dummy-image.png";

const BoardItem = (props) => {
  return (
    <li>
      <div>
        <img src={dummy_image} alt="일기 사진" />
      </div>

      <div>
        <h3>일기 내용 ...</h3>
        <span>2022, May 15</span>
      </div>
    </li>
  );
};

export default BoardItem;
