import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// will remove later
import { useUserContext } from '../Context/user_context';

const PrivateRoute = ({ children, ...rest }) => {
   const { myUser } = useUserContext();
   return myUser ? children : <Navigate {...rest} to="/" />;
};

export default PrivateRoute;
