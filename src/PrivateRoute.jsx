// PrivateRoute.jsx
import { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './signIn/AuthContext';

const PrivateRoute = ({ element, ...rest }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/signin" />
  );
};

export default PrivateRoute;
