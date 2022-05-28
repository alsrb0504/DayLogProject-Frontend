import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import plus_icon from "../../../assets/icons/add-btn.svg";
import InputContainer from "../../../components/modules/inputContainer";
import default_profile from "../../../assets/img/default-profile.jpeg";
import Button from "../../../components/modules/button";
import { useRef } from "react";
import { UpdateProfileAsync } from "../../../store/actions/auth";

const MypageEdit = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fileRef = useRef(null);

  const name = useSelector((state) => state.auth.name);
  const email = useSelector((state) => state.auth.email);
  const nickname = useSelector((state) => state.auth.nickname);
  const profile_image_url = useSelector(
    (state) => state.auth.profile_image_url
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name,
      email,
      nickname,
      profile_image_url,
    },
  });

  const moveBack = () => {
    navigate("/mypage");
  };

  const profileInputClick = () => {
    fileRef.current.click();
  };

  const onSubmit = (e) => {
    // 확인용 콘솔 로그
    console.log(profile_image_url);
    console.log(e);
    console.log(fileRef.current.value);

    // profile_image 가 input 넣어도 바뀌지 않음.
    // 전달할 때, profile_image_url || fileRef.current.value
    const user_info = {
      name: e.name,
      email: e.email,
      nickname: e.nickname,
      profile_image: fileRef.current.value || profile_image_url,
    };

    dispatch(UpdateProfileAsync(user_info));
  };

  return (
    <>
      <form className="mypage-edit-form" onSubmit={handleSubmit(onSubmit)}>
        <section className="mypage-profile mypage-edit">
          <div className="mypage-profile-img-container">
            <img
              className="mypage-profile-image"
              src={profile_image_url ? profile_image_url : default_profile}
              alt=""
            />
            <img
              className="mypage-profile-add-icon"
              src={plus_icon}
              alt="플러스 아이콘"
              onClick={profileInputClick}
            />
            <input
              className="profile-img-input"
              type="file"
              accept="image/*"
              {...register("profile_image_url")}
              // 순서 register 다음에 ref 연결해야 함.
              ref={fileRef}
            />
          </div>
          <input
            className="mypage-profile-nickname mypage-edit-nickname"
            type="text"
            {...register("nickname", {
              required: "true",
            })}
          />
        </section>

        <InputContainer
          children={
            <>
              <input
                type="input"
                placeholder={name}
                {...register("name", {
                  required: "이름 입력",
                  maxLength: {
                    value: 10,
                  },
                  minLength: {
                    value: 1,
                  },
                })}
              />
            </>
          }
          size="col-sm-3 col-md-4"
          label="이름"
          error={errors.name && "input-error"}
        />

        <InputContainer
          children={
            <>
              <input
                type="email"
                placeholder={email}
                {...register("email", {
                  required: "이메일 입력",
                })}
              />
            </>
          }
          size="col-sm-3 col-md-4"
          label="이메일"
          error={errors.email && "input-error"}
        />
      </form>
      <div className="mypage-edit-btn-section">
        <Button
          className="mypage-edit-btn"
          text="취소"
          color="btn-secondary"
          size="btn-40 col-sm-1"
          onClick={moveBack}
        />
        <Button
          className="mypage-edit-btn"
          text="저장"
          color="btn-primary"
          size="btn-40 col-sm-1"
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </>
  );
};
export default MypageEdit;
