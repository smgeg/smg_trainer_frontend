import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Avatar } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const { Header, Sider, Content } = Layout;
const AppRoute = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout dir="rtl" theme="light">
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="text-center">
          <Avatar className="mb-3" size={96} icon={<UserOutlined />}></Avatar>
          <a href="#" className="text-decoration-none text-black">
            <h5>Ahmed Taher</h5>
          </a>
          <p>Sales</p>
        </div>
        <Menu
          theme="light"
          mode="inline"
          lang="ar"
          defaultSelectedKeys={["/trainers"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "الرئيسية",
            },
            {
              key: "/trainers",
              icon: <VideoCameraOutlined />,
              label: "المتدربين",
              onClick: <Link to="/trainers"></Link>,
            },
            {
              key: "/programs",
              icon: <UploadOutlined />,
              label: "البرامج",
              onClick: <Link to="/programs"></Link>,
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppRoute;
