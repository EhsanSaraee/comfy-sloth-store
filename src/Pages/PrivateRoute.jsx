import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children, ...rest }) => {
   const { user } = useAuth0();
   return user ? children : <Navigate {...rest} to="/" />;
};

export default PrivateRoute;
