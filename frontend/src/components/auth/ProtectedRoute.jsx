import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '@/utils/store/slices/userSlice';

const ProtectedRoute = ({ children }) => {
  const user = useSelector(selectUser);

  // If user is logged in and tries to access auth pages, redirect to home
  if (user) {
    return <Navigate to="/" replace />;
  }

  // If user is not logged in, allow access to auth pages
  return children;
};

export default ProtectedRoute; 