import { Link, useNavigate, useLocation } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const role = user?.role;
  const location = useLocation();

  const showRoleLinks = role && location.pathname.startsWith(`/${role}`);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <h2 className="logo">LearnTrack</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        {!role && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}

        {showRoleLinks && role === "student" && (
          <>
            <Link to="/student">Dashboard</Link>
            <Link to="/student/modules">Modules</Link>
            <Link to="/student/progress">Progress</Link>
            <Link to="/student/test">Test</Link>
          </>
        )}
        {showRoleLinks && role === "admin" && (
          <>
            <Link to="/admin">Dashboard</Link>
            <Link to="/admin/add">Add Module</Link>
            <Link to="/admin/view">View Modules</Link>
            <Link to="/admin/delete">Delete Module</Link>
          </>
        )}
        {showRoleLinks && role === "manager" && (
          <>
            <Link to="/manager">Dashboard</Link>
            <Link to="/manager/reports">Reports</Link>
            <Link to="/manager/analytics">Analytics</Link>
          </>
        )}

        {role && (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}