import {
    PieChartOutlined,
    NotificationOutlined,
    DesktopOutlined,
    UserOutlined,
  } from "@ant-design/icons";
  import { Breadcrumb, Layout, Menu, theme } from "antd";
  import { useEffect, useState } from "react";
  import { NavLink } from "react-router-dom";
  import { localService } from "../services/LocalService";
  const { Header, Content, Footer, Sider } = Layout;
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem(
      <NavLink to="/admin/user">User management</NavLink>,
      "1",
      <PieChartOutlined />
    ),
    getItem(
      <NavLink to="/admin/booking">Reservation Management</NavLink>,
      "2",
      <DesktopOutlined />
    ),
    getItem(
      <NavLink to="/admin/room-info">Department Manager</NavLink>,
      "3",
      <NotificationOutlined />
    ),
  ];
  const LayoutAdmin = ({ Component }) => {
    const [collapsed, setCollapsed] = useState(false);
    let user = localService.get();
    useEffect(() => {
      if (!user || user.user.role === "USER") {
        window.location.href = "/";
      }
    }, []);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    return (
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div
            style={{
              height: 32,
              margin: 16,
              background: "rgba(255, 255, 255, 0.2)",
              textAlign: "center",
            }}
          >
            <NavLink className="text-xl text-white" to="/">
              Home 
            </NavLink>
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <h1
              className="font-medium text-black pl-2 mx-auto flex justify-center items-center"
              style={{ fontSize: "25px" }}
            >
              DASHBOARD
            </h1>
          </Header>
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "10px 0",
              }}
            ></Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <Component />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
             AdminPage
            <a
              className="pl-2"
              href="https://www.facebook.com/profile.php?id=100015632687823"
            >
              https://www.facebook.com/profile.php?id=100015632687823
            </a>
          </Footer>
        </Layout>
      </Layout>
    );
  };
  export default LayoutAdmin;
  