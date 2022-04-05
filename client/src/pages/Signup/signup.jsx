import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerActionAsync } from "../../store/actions/auth";

const SignUp = (props) => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);

    dispatch(registerActionAsync(data));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              style={{ border: "1px solid tomato" }}
              type="text"
              {...register("id", { required: true })}
            />
            <br />
            <input
              style={{ border: "1px solid tomato" }}
              type="text"
              {...register("password", { required: true })}
            />
            <br />

            <input
              style={{ border: "1px solid tomato" }}
              type="text"
              {...register("email", { required: true })}
            />
            <br />

            <input
              style={{ border: "1px solid tomato" }}
              type="text"
              {...register("nickname", { required: true })}
            />
            <br />

            <input
              style={{ border: "1px solid tomato" }}
              type="text"
              {...register("name", { required: true })}
            />
            <br />

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
