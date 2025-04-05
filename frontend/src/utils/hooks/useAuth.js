import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';
import axiosInstance from '@/config/axios';

const useAuth = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const verifyUser = async () => {
            try {
                // Make a request to verify the token
                const response = await axiosInstance.get('/api/user/profile', { withCredentials: true });

                if (response.data.user) {
                    dispatch(setUser(response.data.user));
                } else {
                    dispatch(setUser(null));
                    localStorage.removeItem('token');
                }
            } catch (error) {
                console.error('Auth verification failed:', error);
                dispatch(setUser(null));
                localStorage.removeItem('token');
            }
        };

        verifyUser();
    }, [dispatch]);
};

export default useAuth; 