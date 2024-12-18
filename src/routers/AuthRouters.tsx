/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "../screens/auth/LoginScreen";

const AuthRouter = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col d-none d-lg-block text-center"
          style={{ marginTop: "15%" }}
        >
          <img src="/logo.png" alt="" />
        </div>

        <div className="col content-center">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginScreen />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default AuthRouter;
