import {Navigate, Outlet} from "react-router-dom";

interface AuthGradProps {
  isPrivate?: boolean;
}

export default function AuthGuard({isPrivate = false}: AuthGradProps) {
  const signedIn = false;

  if(!signedIn && isPrivate) {
    return <Navigate to="/login" replace />;
  }

  if(signedIn && !isPrivate) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
