import { useUser } from '../components/UserContext';
import StudentDashboard from './student/Dashboard';
import TeacherDashboard from './teacher/Dashboard';

const DashboardDispatcher = () => {
  const { user } = useUser();
  const isTeacher = user.role?.toLowerCase() === 'teacher';

  return isTeacher ? <TeacherDashboard /> : <StudentDashboard />;
};

export default DashboardDispatcher;
