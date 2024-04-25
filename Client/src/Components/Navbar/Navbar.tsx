import React, { useState } from "react";
import "./Navbar.css";
import { DownOutlined, SmileOutlined, SearchOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space, Input } from "antd";
import { Link } from "react-router-dom";
import DeleteCookie from "../../hooks/DeleteCookie";
const { Search } = Input;

const onSearch = (value: string) => console.log(value);
const signOut = () => {
  console.log('signout')
  DeleteCookie('Email')
  DeleteCookie('AuthToken')
  window.location.reload()

}
const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">
        Food<span style={{ color: "#FF9F0D" }}>tuck</span>
      </span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <div className="nav-item">
          <a>
            <Link to="/">Home</Link>
          </a>
          <a>
            <Link to="/404">Menu</Link>
          </a>
          <a href="/404">Blog</a>
          <a href="/404">
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space className="space">
                  Pages
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </a>
          <a href="/404">About</a>
          <Link to="/Shop">Shop</Link>
          <a href="/404">Contact</a>
        </div>
        <div
          className="container-search "
          //  style={{margin:{md:"500px",sm:"auto"}}}
        >
          <form action="" className="search-bar">
            <input type="search" placeholder="Search..." />
            <button type="submit">
              <SearchOutlined
                style={{
                  color: "#FF9F0D",
                  marginRight: "3px",
                }}
              />
            </button>
            
          </form>
          <button className="signout" onClick={signOut}>SIGN OUT</button>
        </div>
      </div>

      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
