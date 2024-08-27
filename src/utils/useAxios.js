import axiosInstance from './axiosInstance';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAxios = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('jwt');
        // Add a request interceptor to include the token in the headers
        const requestInterceptor = axiosInstance.interceptors.request.use(
            (config) => {
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        //add the options after get real API:

        // Optionally add a response interceptor to handle errors globally
        // const responseInterceptor = axiosInstance.interceptors.response.use(
        //     (response) => response,
        //     (error) => {
        //         if (error.response.status === 401) {
        //             // Token might be invalid or expired
        //             localStorage.removeItem('jwt');
        //             navigate('/login'); // Redirect to login page
        //         }
        //         return Promise.reject(error);
        //     }
        // );

        // Cleanup interceptors when component unmounts
        // return () => {
        //     axiosInstance.interceptors.request.eject(requestInterceptor);
        //     axiosInstance.interceptors.response.eject(responseInterceptor);
        // };
    }, [navigate]);

    return axiosInstance;
};

export default useAxios;