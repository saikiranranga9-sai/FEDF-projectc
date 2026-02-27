import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./components/ProtectedRoute";

/* Student */
import StudentDashboard from "./student/StudentDashboard";
import ViewModules from "./student/ViewModules";
import TrackProgress from "./student/TrackProgress";
import UpdateProgress from "./student/UpdateProgress";
import TakeTest from "./student/TakeTest";

/* Admin */
import AdminDashboard from "./admin/AdminDashboard";
import AddModule from "./admin/AddModule";
import ViewAdminModules from "./admin/ViewModules";
import DeleteModule from "./admin/DeleteModule";

/* Manager */
import ManagerDashboard from "./manager/ManagerDashboard";
import ViewReports from "./manager/ViewReports";
import Analytics from "./manager/Analytics";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* STUDENT ROUTES */}
        <Route
          path="/student"
          element={
            <ProtectedRoute allowedRole="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/modules"
          element={
            <ProtectedRoute allowedRole="student">
              <ViewModules />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/progress"
          element={
            <ProtectedRoute allowedRole="student">
              <TrackProgress />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/update"
          element={
            <ProtectedRoute allowedRole="student">
              <UpdateProgress />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/test"
          element={
            <ProtectedRoute allowedRole="student">
              <TakeTest />
            </ProtectedRoute>
          }
        />

        {/* ADMIN ROUTES */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/add"
          element={
            <ProtectedRoute allowedRole="admin">
              <AddModule />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/view"
          element={
            <ProtectedRoute allowedRole="admin">
              <ViewAdminModules />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/delete"
          element={
            <ProtectedRoute allowedRole="admin">
              <DeleteModule />
            </ProtectedRoute>
          }
        />

        {/* MANAGER ROUTES */}
        <Route
          path="/manager"
          element={
            <ProtectedRoute allowedRole="manager">
              <ManagerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manager/reports"
          element={
            <ProtectedRoute allowedRole="manager">
              <ViewReports />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manager/analytics"
          element={
            <ProtectedRoute allowedRole="manager">
              <Analytics />
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;