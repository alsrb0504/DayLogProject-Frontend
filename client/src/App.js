import "./App.scss";
import axios from "axios";
import { useForm } from "react-hook-form";

import Button from "./components/button";

function App() {
  const onClick = () => {
    alert("hi");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            {/* <button className="col-sm-1">1</button> */}
            <button className="btn-primary">로그인</button>
            <button className="btn-secondary">회원가입</button>
            <button className="btn-tertiary">체크</button>
            <button className="btn-outlined">아웃라인</button>

            <Button text={"회원가입"} type={"btn-primary"} onClick={onClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

const TestLoginForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // GET 요청
    // axios.get("/api").then((res) => {
    //   console.log(res.data);
    // });

    // POST 요청
    axios
      .post("/api/login", {
        id: "id",
        passwd: "passwd",
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  const onError = (e) => {
    console.error(e);
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <input type="text" {...register("username")} />
        <input
          type="password"
          {...register("password", {
            minLength: {
              value: 4,
              message: "password must be longth than 4 characters.",
            },
          })}
        />
        <br />

        <input type="submit" value={"로그인"} />
      </form>
    </>
  );
};
