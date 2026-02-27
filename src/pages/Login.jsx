import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!role || !username || !password) {
      alert("Please fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matched = users.find(
      (u) => u.username === username && u.password === password && u.role === role
    );

    if (matched) {
      const { password: _pw, ...safeUser } = matched;
      localStorage.setItem("loggedInUser", JSON.stringify(safeUser));
      // always send new logins to the public home page - navbar will
      // render the appropriate links for the role
      navigate("/");
      return;
    }

    // Fallback demo credentials (keeps existing behavior for quick testing)
    if (role === "student" && username === "student" && password === "123") {
      localStorage.setItem("loggedInUser", JSON.stringify({ username: "student", role: "student" }));
      navigate("/");
      return;
    }

    if (role === "admin" && username === "admin" && password === "123") {
      localStorage.setItem("loggedInUser", JSON.stringify({ username: "admin", role: "admin" }));
      navigate("/");
      return;
    }

    if (role === "manager" && username === "manager" && password === "123") {
      localStorage.setItem("loggedInUser", JSON.stringify({ username: "manager", role: "manager" }));
      navigate("/");
      return;
    }

    alert("Invalid Credentials");
  };

  // if already logged in, shortcut to home
  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("loggedInUser"));
    if (u) navigate("/");
  }, [navigate]);

  return (
    <>  
      <NavBar />
      <div className="login-container">
        <div className="login-card">
          <h1>Learning Progress Tracker</h1>

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
        </select>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        <div className="demo-info">
          <p><strong>Demo Credentials:</strong></p>
          <p>Student → student / 123</p>
          <p>Admin → admin / 123</p>
          <p>Manager → manager / 123</p>
        </div>
      </div>
    </div>
    </>  
  );
}