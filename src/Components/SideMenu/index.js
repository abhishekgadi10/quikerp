// import React, { useEffect, useState } from "react";
// import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, CalendarOutlined } from "@ant-design/icons";
// import { Menu, Drawer, Button } from "antd";
// import { useLocation, useNavigate } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { Menu, Drawer } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");
  const [collapsed, setCollapsed] = useState(false); // Set initial state to false
  const navigate = useNavigate();

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  // Remove the toggleCollapsed function

  const handleMenuItemClick = (item) => {
    navigate(item.key);
    // No need to close the menu on mobile after clicking an item
  };

  return (
    <div className={`SideMenu ${collapsed ? "collapsed" : ""}`}>
      {/* Remove the Button for mobile view */}

      {/* Desktop view */}
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={handleMenuItemClick}
        selectedKeys={[selectedKeys]}
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="/" icon={<AppstoreOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="/inventory" icon={<ShopOutlined />}>
          Products Management
        </Menu.Item>
        <Menu.Item key="/orders" icon={<ShoppingCartOutlined />}>
          Orders Management
        </Menu.Item>
        <Menu.Item key="/customers" icon={<CalendarOutlined />}>
          Calendar
        </Menu.Item>
      </Menu>

      {/* Mobile view - Drawer */}
      <Drawer
        title="Menu"
        placement="left"
        closable={false}
        onClose={() => setCollapsed(true)}
        visible={!collapsed}
        width={200}
      >
        <Menu
          mode="vertical"
          onClick={handleMenuItemClick}
          selectedKeys={[selectedKeys]}
        >
          <Menu.Item key="/" icon={<AppstoreOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="/inventory" icon={<ShopOutlined />}>
            Products Management
          </Menu.Item>
          <Menu.Item key="/orders" icon={<ShoppingCartOutlined />}>
            Orders Management
          </Menu.Item>
          <Menu.Item key="/customers" icon={<CalendarOutlined />}>
            Calendar
          </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
}

export default SideMenu;
