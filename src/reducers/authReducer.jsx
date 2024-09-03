const initialAuthState = {
    isLogged: false,
    token: null,
};

const authReducer = (store = initialAuthState, action) => {

    const { payload } = action;

    switch (action.type) {
        case 'IS_LOGGED':
            return {
                ...store,
                isLogged: true,
                token: payload,
            }

        default:
            return store;
    }
};

export default authReducer;