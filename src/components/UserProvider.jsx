import React, { useState } from "react";
import UserContext from "../context/UserContext";

function UserProvider(props) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = (userData, token) => {
    console.log(`User ${userData}`);
    console.log(`Token ${token}`);
    setUser(userData);
    setToken(token);

    
  };

  const logout = () => {
    setUser(null);
    setToken(null);

    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ user, login, logout, token }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;
