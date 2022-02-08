import { useContext, useEffect, useState, createContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
   const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
   const [myUser, setMyUser] = useState(null);

   return (
      <UserContext.Provider value={{ logout, loginWithRedirect, myUser }}>
         {children}
      </UserContext.Provider>
   );
};
// make sure use
export const useUserContext = () => useContext(UserContext);
