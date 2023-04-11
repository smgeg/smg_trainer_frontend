import React, { useContext, useState } from "react";
import Avatar from "react-avatar";
import { Dropdown } from "react-bootstrap";
import UserContext from "../../context/UserContext";

function UserAvatar() {
  const { logout } = useContext(UserContext);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuSelect = () => {
    setShowMenu(false);
  };

  const handleLogout = () => {
    logout();
    window.location.reload();
  };
  return (
    <div>
      <Dropdown className="avatar-dropdown">
        <Avatar
          name={"Ayman Saad"}
          size={48}
          round={24}
          onClick={handleMenuToggle}
          style={{ cursor: "pointer" }}
          id="dropdown-autoclose-true"
        />
        <div>
          <Dropdown.Menu show={showMenu} onSelect={handleMenuSelect}>
            <Dropdown.Item href="/profile">صفحتي</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>تسجيل الخروج</Dropdown.Item>
          </Dropdown.Menu>
        </div>
      </Dropdown>
    </div>
  );
}

export default UserAvatar;
