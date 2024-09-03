const API_BASE_URL = 'http://our-api-url'; // Replace with actual base URL


// Define environment-specific base URLs if needed
const getBaseURL = () => {
    switch (process.env.NODE_ENV) {
        case 'user':
            return 'http://user-api-url';
        case 'quotes':
            return 'http://quotes-api-url';
        case 'auth':
            return 'http://auth-api-url';
        default:
            return API_BASE_URL;
    }
};

export { getBaseURL };