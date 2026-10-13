import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardDispatcher from './pages/DashboardDispatcher';
import MyCourses from './pages/student/MyCourses';
import Schedules from './pages/student/Schedules';
import OnlineClasses from './pages/student/OnlineClasses';
import Assignments from './pages/student/Assignments';
import Grades from './pages/student/Grades';
import ManageStudents from './pages/teacher/ManageStudents';
import ManageCourses from './pages/teacher/ManageCourses';
import ManageAssignments from './pages/teacher/ManageAssignments';
import ManageGrades from './pages/teacher/ManageGrades';
import DashboardLayout from './components/DashboardLayout';
import { UserProvider } from './components/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="courses" element={<Courses />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardDispatcher />} />
            
            {/* Student Routes */}
            <Route path="courses" element={<MyCourses />} />
            <Route path="schedules" element={<Schedules />} />
            <Route path="online-classes" element={<OnlineClasses />} />
            <Route path="assignments" element={<Assignments />} />
            <Route path="grades" element={<Grades />} />

            {/* Teacher Routes */}
            <Route path="manage-students" element={<ManageStudents />} />
            <Route path="manage-courses" element={<ManageCourses />} />
            <Route path="manage-assignments" element={<ManageAssignments />} />
            <Route path="manage-grades" element={<ManageGrades />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
