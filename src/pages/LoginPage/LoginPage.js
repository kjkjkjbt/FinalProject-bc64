import React from "react";
import { Button, Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { getUserLogin } from "../../redux/reducers/userSlice";
import { NavLink, useNavigate } from "react-router-dom";
import login_animation from "../../assets/login_animation.json";
import Lottie from "lottie-react";
import { localService } from "../../services/LocalService";
import { authService } from "../../services/AuthService";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values) => {
    const loginAccount = async () => {
      try {
        const res = await authService().sigIn(values);
        message.success("Login successful");
        dispatch(getUserLogin(res.data.content));
        localService.set(res.data.content);
        navigate("/");
      } catch (error) {
        message.error("You entered the wrong account or password!");
      }
    };

    loginAccount();
  };

  // ----------------------------------------------------------------
  return (
    <section className="h-screen bg-center bg-cover bg-login">
      <div className="flex justify-between items-center h-full">
        <div className="w-1/2 lg:block hidden">
          <NavLink to="/">
            <Lottie animationData={login_animation} loop={true} />
          </NavLink>
        </div>

        <div className="lg:w-1/2 w-full flex items-center">
          <div className="w-[400px] h-max mx-auto  rounded-3xl bg-white">
            <h2 className="text-center text-3xl font-semibold pt-5">Login</h2>
            <Form
              className="p-5 "
              name="basic"
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email !",
                  },
                  {
                    type: "email",
                    message: "Email is not correct !",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password !",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  span: 24,
                }}
                className="text-right"
              >
                <Button
                  className="bg-rose-500 w-full text-center hover:bg-rose-400 "
                  type="primary"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  span: 24,
                }}
                className="text-center"
              >
                <NavLink
                  to={"/register"}
                  className="text-blue-500 hover:text-blue-400 duration-150 underline"
                >
                  Do you have account?
                </NavLink>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
