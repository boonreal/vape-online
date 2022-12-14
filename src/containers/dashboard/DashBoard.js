import {
  DatabaseFilled,
  DownOutlined,
  HomeFilled,
  LogoutOutlined,
  SettingFilled,
  UserOutlined,
} from "@ant-design/icons";
import Logo from "assets/images/logo-giuseart.png";
import "./DashBoard.scss";
import { Breadcrumb, Dropdown, Input, Layout, Menu, Modal, Space } from "antd";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import routes from "coreAuthent/constants/routes";
import { clearLocal, getObjectLocal } from "coreAuthent/utils/localStorage";
import avatarDefault from "assets/images/avatar.png";
import { auth } from "coreAuthent/constants/constant";
import { BASE_URL } from "config";

const { Header, Content, Footer, Sider } = Layout;

const DashBoard = () => {
  const [userInfo, setUserInfo] = useState(() => {
    const userInfoLocal = localStorage.getItem(auth.USER_INFO);
    if (userInfoLocal) {
      return getObjectLocal(auth.USER_INFO);
    } else {
      return {};
    }
  });

  const [isModalLogout, setIsModalLogout] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const showModalLogout = () => {
    setIsModalLogout(true);
  };

  const handleOkLogout = () => {
    handleLogout();
  };

  const handleCancelLogout = () => {
    setIsModalLogout(false);
  };

  const handleLogout = () => {
    setIsModalLogout(false);
    navigate(routes.login);
    clearLocal();
  };

  const menu = (
    <Menu
      items={[
        {
          label: (
            <Link to={`${routes.dashboard}${routes.profile}`}>
              Trang cá nhân
            </Link>
          ),
          key: "0",
          icon: <UserOutlined />,
        },
        {
          type: "divider",
        },
        {
          label: (
            <p className="btn_logout" onClick={showModalLogout}>
              Đăng xuất
            </p>
          ),
          key: "1",
          icon: <LogoutOutlined />,
        },
      ]}
    />
  );

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          className="dashboard__aside"
        >
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item icon={<HomeFilled />} key={"1"}>
              <Link defaultChecked={true} to={`${routes.dashboard}`}>
                Trang chủ
              </Link>
            </Menu.Item>
            <Menu.Item icon={<DatabaseFilled />} key={"2"}>
              <Link to={`${routes.dashboard}${routes.posts}`}>Bài viết</Link>
            </Menu.Item>
            <Menu.Item icon={<SettingFilled />} key={"3"}>
              <Link to={`${routes.dashboard}${routes.setting}`}>Cài đặt</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="dashboard-header" style={{ padding: 0 }}>
            <div className="dashboard-header__search"></div>
            <div className="dashboard-header__user">
              <Dropdown overlay={menu} trigger={["click"]}>
                <div
                  className="wrapper_user"
                  onClick={(e) => e.preventDefault()}
                >
                  <Space>
                    <img
                      className="user_avatar"
                      src={
                        userInfo.anh_dai_dien
                          ? `${BASE_URL}${userInfo.anh_dai_dien}`
                          : avatarDefault
                      }
                      alt="avatar"
                    />
                    {userInfo.ten_tai_khoan}
                    <DownOutlined />
                  </Space>
                </div>
              </Dropdown>
            </div>
          </Header>
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>
                <NavLink to={routes.profile}>User</NavLink>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              Bill is a cat.
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Dashboard ©2022 Created by BuiTrung
          </Footer>
        </Layout>
      </Layout>
      <Modal
        title="Xác nhận"
        open={isModalLogout}
        onOk={handleOkLogout}
        onCancel={handleCancelLogout}
      >
        <p>Bạn có chắc chắn muốn đăng xuất?</p>
      </Modal>
    </>
  );
};

export default DashBoard;
