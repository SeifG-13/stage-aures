import React, { useState } from "react";
import "./Navbar.css";
import { DownOutlined, SmileOutlined, SearchOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space, Input } from "antd";
import Link1 from "antd/es/typography/Link";
import { Link } from "react-router-dom";

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

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
            <Link to="/Menu">Menu</Link>
          </a>
          <a href="/service">Blog</a>
          <a href="/service">
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space className="space">
                  Pages
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </a>
          <a href="/service">About</a>
          <a href="/service">Shop</a>
          <a href="/contact">Contact</a>
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
