import React, { useEffect } from "react";
import { Button, DatePicker, Form, Input, Select, message } from "antd";
import register_animation from "../../assets/animation_auth.json";
import Lottie from "lottie-react";
import { NavLink, useNavigate } from "react-router-dom";
import { authService } from "../../services/AuthService";
import { localService } from "../../services/LocalService";

export default function SignupPage() {
  const [form] = Form.useForm();
  const { Option } = Select;
  const navigate = useNavigate();
  let user = localService.get();
  let params = window.location;

  useEffect(() => {
    if (user) {
      navigate(-1);
    } else {
      navigate("/register");
    }
  }, [user]);

  // handle
  const onFinish = (values) => {
    const valuesRegister = {
      ...values,
      birthday: values["birthday"].format("DD-MM-YYYY"),
    };

    const registerAPI = async () => {
      try {
        const res = await authService().sigUp(valuesRegister);
        navigate("/login");
        message.success("register Successful");
      } catch (error) {
        message.error(error.response.data.content);
      }
    };

    registerAPI();
  };

  // ----------------------------------------------------------------
  return (
    <section className="h-screen bg-center bg-cover bg-login">
      <div className="flex justify-between items-center h-full">
        <div className="w-1/2 lg:block hidden">
          <NavLink to="/">
            <Lottie animationData={register_animation} loop={true} />
          </NavLink>
        </div>

        <div className="lg:w-1/2 w-full flex items-center">
          <div className="w-[400px] h-max mx-auto  rounded-3xl bg-white">
            <h2 className="text-center text-3xl font-semibold pt-5">
              Register
            </h2>

            <Form
              form={form}
              name="register"
              onFinish={onFinish}
              initialValues={{
                residence: ["zhejiang", "hangzhou", "xihu"],
                prefix: "86",
              }}
              className="w-full p-5"
              scrollToFirstError
              layout="vertical"
              wrapperCol={24}
              labelCol={24}
              autoComplete="off"
            >
              <Form.Item
                name="name"
                label="Full name"
                tooltip="What do you want others to call you?"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tài khoản !",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: "email",
                    message: "email is not correct !",
                  },
                  {
                    required: true,
                    message: "type your email, please !",
                  },
                ]}
                hasFeedback
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                  {
                    min: 8,
                    message: "password must be included at least 8 characters",
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <div className="grid grid-cols-2">
                <Form.Item
                  name="birthday"
                  label="Birthday"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <DatePicker format="DD/MM/YYYY" />
                </Form.Item>

                <Form.Item
                  name="gender"
                  label="Gender"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    placeholder="Select a option and change input text above"
                    allowClear
                  >
                    <Option value={true}>male</Option>
                    <Option value={false}>female</Option>
                  </Select>
                </Form.Item>
              </div>

              <Form.Item
                wrapperCol={{
                  span: 24,
                }}
                className="text-center"
              >
                <Button
                  className="bg-rose-500 w-full text-center hover:bg-rose-400 "
                  type="primary"
                  htmlType="submit"
                >
                  Register
                </Button>
              </Form.Item>

              <div className="text-center">
                <button className="text-blue-500 text-center">
                  <NavLink className="underline" to={"/login"}>
                    Do you have an account?
                  </NavLink>
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
