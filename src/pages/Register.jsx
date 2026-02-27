import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./register.css";


export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    if (!form.name || !form.email || !form.role || !form.username || !form.password) {
      alert("Please fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find(
      (u) => u.username === form.username
    );

    if (userExists) {
      alert("Username already exists");
      return;
    }

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");
    navigate("/login");
  };

  return (
    <>
      <NavBar />
      <div className="register-container">
        <div className="register-card">
          <h2>Create Account</h2>

          <input name="name" placeholder="Full Name" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />

          <select name="role" onChange={handleChange}>
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="manager">Manager</option>
            <option value="admin">Admin</option>
          </select>

          <input name="username" placeholder="Username" onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />

          <button onClick={handleRegister}>Register</button>
        </div>
      </div>
    </>
  );
}