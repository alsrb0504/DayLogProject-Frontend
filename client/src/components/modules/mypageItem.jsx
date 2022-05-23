const MyPageItem = ({ text, onClick }) => {
  return (
    <li className="mypage-menu-item" onClick={onClick}>
      <span>{text}</span>
    </li>
  );
};

export default MyPageItem;
