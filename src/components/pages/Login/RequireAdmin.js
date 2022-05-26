import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import ReactSpinner from '../../Sheared/ReactSpinner';

const RequireAdmin = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if(loading || adminLoading){
        return <ReactSpinner></ReactSpinner>
    }
    if(!user || !admin){
        signOut(auth);
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

   return children;
};

export default RequireAdmin;