import { Outlet } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
