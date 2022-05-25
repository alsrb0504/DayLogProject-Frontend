import { useSelector } from "react-redux";
import GlobalHeader from "../../../components/modules/globalHeader";
import default_profile from "../../../assets/img/default-profile.jpeg";
import { useForm } from "react-hook-form";
import InputContainer from "../../../components/modules/inputContainer";

const MypageEdit = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const name = useSelector((state) => state.auth.name);
  const email = useSelector((state) => state.auth.email);
  const nickname = useSelector((state) => state.auth.nickname);
  const profile_image = useSelector((state) => state.auth.profile_image_url);

  return (
    <>
      <section className="mypage-profile">
        <div className="mypage-profile-img-container">
          <img src={profile_image ? profile_image : default_profile} alt="" />
        </div>
        <h3 className="mypage-profile-nickname">{nickname}</h3>
      </section>

      <InputContainer
        children={
          <>
            <input
              type="input"
              placeholder={name}
              value={name}
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
              value={email}
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
