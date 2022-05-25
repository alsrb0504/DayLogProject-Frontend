import { useSelector } from "react-redux";
import default_profile from "../../../assets/img/default-profile.jpeg";
import { useForm } from "react-hook-form";
import InputContainer from "../../../components/modules/inputContainer";

import plus_icon from "../../../assets/icons/add-btn.svg";

const MypageEdit = (props) => {
  const name = useSelector((state) => state.auth.name);
  const email = useSelector((state) => state.auth.email);
  const nickname = useSelector((state) => state.auth.nickname);
  const profile_image = useSelector((state) => state.auth.profile_image_url);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name,
      email,
      nickname,
      profile_image,
    },
  });

  return (
    <>
      <section className="mypage-profile">
        <div className="mypage-profile-img-container">
          <img
            className="mypage-profile-image"
            src={profile_image ? profile_image : default_profile}
            alt=""
          />
          <img
            className="mypage-profile-add-icon"
            src={plus_icon}
            alt="플러스 아이콘"
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
        label="이메일"
        error={errors.email && "input-error"}
      />
    </>
  );
};
export default MypageEdit;
