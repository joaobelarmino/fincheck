import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../app/hooks/useAuth.ts";

interface AuthGradProps {
  isPrivate?: boolean;
}

export default function AuthGuard({isPrivate = false}: AuthGradProps) {
  const {signedIn} = useAuth();

  if (!signedIn && isPrivate) {
    return <Navigate to="/login" replace/>;
  }

  if (signedIn && !isPrivate) {
    return <Navigate to="/" replace/>
  }

  return <Outlet/>
}
