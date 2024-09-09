import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const login = () => {
    dispatch({ type: "LOGIN" });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="App">
      {user && <p>Hi {user.name}</p>}
      {!user && <button onClick={login}>Login</button>}
      {user && <button onClick={logout}>Logout</button>}
    </div>
  );
}

export default App;
