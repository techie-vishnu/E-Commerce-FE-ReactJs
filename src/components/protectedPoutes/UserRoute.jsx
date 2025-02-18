import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setUserData } from '../../store/user/userSlice';

export const UserRoute = ({ isAdmin = false }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector(state => state.user.userData);

    const checkUserLoggedIn = () => {
        try {
            // const res = await axios.get(import.meta.env.VITE_BACKEND_BASEURL + '/api/user/profile', { withCredentials: true });
            if (userData !== null) {
                if (isAdmin) {
                    if (Array.isArray(userData.roles) && userData.roles.includes('Admin')) {

                    } else {
                        navigate('/logout');
                    }
                }
            } else {
                navigate('/logout');
            }
        } catch (error) {
            console.log(error);
            navigate('/logout');
        }
    }
}