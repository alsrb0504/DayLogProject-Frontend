import logo from "./logo.svg";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <TestLoginForm />
      </header>
    </div>
  );
}

export default App;

const TestLoginForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const onError = (e) => {
    console.error(e);
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <input
          type="text"
          {...register("username", {
            minLength: {
              value: 5,
              messaage: "username must be longth than 5 characters.",
            },
          })}
        />
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

        <input type="submit" />
      </form>
    </>
  );
};
