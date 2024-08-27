//A function that became redundant due to useAxios() custom hook


// import axios from './useAxios';

// export const setAuthToken = (token) => {
//     if (token) {
//         axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//         console.log('protectAxios', axios.defaults.headers)
//     } else {
//         delete axios.defaults.headers.common["Authorization"];
//         console.log('failedAxios', axios.defaults.headers)
//     }
// };