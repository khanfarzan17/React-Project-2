import React, { useState, useEffect } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleAuthentication = (e) => {
    e.preventDefault();
    if (isRegistered) {
      const existingUser = users.find(
        (u) => u.email === email && u.password === password
      );
      if (existingUser) {
        setIsLoggedIn(true);
      } else {
        alert("Invalid email or password.");
      }
    } else {
      const newUser = { email, password };
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setIsRegistered(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="container">
      <div>
        {isLoggedIn ? (
          <div>
            <h2>
              Welcome {email}
              <span>
                <p>Your password is {password}</p>
              </span>
            </h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <h2>{isRegistered ? "Login" : "Register"}</h2>
            <form onSubmit={handleAuthentication}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">
                {isRegistered ? "Login" : "Register"}
              </button>
            </form>
            <p>
              {isRegistered
                ? "Already registered? Please login."
                : "Don't have an account? Please register."}
            </p>
            <button onClick={() => setIsRegistered(!isRegistered)}>
              {isRegistered ? "Login" : "Register"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
