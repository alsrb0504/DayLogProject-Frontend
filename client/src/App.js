import logo from "./logo.svg";
import "./App.scss";
import axios from "axios";
import { useForm } from "react-hook-form";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          <div className="col-sm-1">1</div>
        </div>
        <div className="col-sm-2">
          <div className="red">he</div>
        </div>

        <div className="col-sm-3">1</div>
        <div className="col-sm-4">1</div>

        <div>
          <div className="col-md-1">1</div>
        </div>
        <div className="col-md-2">
          <div className="red">he</div>
        </div>

        <div className="col-md-3">1</div>
        <div className="col-md-4">1</div>
        <div className="col-md-8">1</div>
      </div>

      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}

      {/* <TestLoginForm /> */}
      {/* </header> */}
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
