import React, { useState } from "react";
import "./LoginPage.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ErrorText from "./ErrorText";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Adduserdata } from "./Store/Slices/UserSlice";
import AccountStructure from "./AccountStructure";

const LoginPage = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [currectAccount, setCurrentAccount] = useState([]);
  const userInformations = useSelector((user) => user.Userdatas.userDatas);
  console.log("User iformations from slice :", userInformations);
  const initialValue = {
    enteredusername: "",
    enteredpassword: "",
  };
  const validationSchema = Yup.object({
    enteredusername: Yup.string().required("Required !"),
    enteredpassword: Yup.string().required("Requied !"),
  });

  const Login = (values) => {
    localStorage.setItem(values.enteredusername, values.enteredpassword);
    console.log(
      "Entered values : ",
      values.enteredusername,
      values.enteredpassword
    );
    const userInfoArr = userInformations.filter(
      (i) =>
        i.username == values.enteredusername &&
        i.password == values.enteredpassword
    );
    setCurrentAccount();
    console.log("Current Account :", userInfoArr);
    console.log("Confirmed account :", currectAccount);
    setIsLogedIn(true);
  };

  const LogoutHandler = (values) => {
    localStorage.removeItem(values.enteredusername, values.enteredpassword);
    setIsLogedIn(false);
  };

  return (
    <>
      {isLogedIn ? (
        <div>
          <div>
            <button onClick={LogoutHandler} className="log-out-btn">
              Logout
            </button>
          </div>

          <div>
            <AccountStructure />
          </div>
        </div>
      ) : (
        <div className="main-content-page">
          <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={Login}
          >
            {(formik) => {
              console.log("formik :", formik);
              return (
                <Form className="Form-containor">
                  <div className="login-heading">Login</div>
                  <div className="inputs-containor">
                    <div className="input-containor">
                      <label htmlFor="username">User name</label>
                      <Field type="text" id="username" name="enteredusername" />
                      <ErrorMessage
                        name="enteredusername"
                        component={ErrorText}
                      />
                    </div>
                    <div className="input-containor">
                      <label htmlFor="password">Password</label>
                      <Field type="text" id="password" name="enteredpassword" />
                      <ErrorMessage
                        name="enteredpassword"
                        component={ErrorText}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={!formik.isValid}
                    className="login-btn"
                  >
                    Login
                  </button>
                  <div className="if-account">
                    If you dont have an account Create an account.
                  </div>
                  <Link to="/Signup">
                    <button className="signup-btn">Signup</button>
                  </Link>
                </Form>
              );
            }}
          </Formik>
        </div>
      )}
    </>
  );
};

export default LoginPage;
