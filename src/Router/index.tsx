import {
 Routes, Route, BrowserRouter 
} from 'react-router-dom';

import AuthGuard from './AuthGuard.tsx';
import AuthLayout from '../view/layouts/AuthLayout.tsx';
import Login from '../view/pages/Login';
import Register from '../view/pages/Register';
import Dashboard from '../view/pages/Dashboard';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<AuthGuard />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route path="/" element={<Dashboard />}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
