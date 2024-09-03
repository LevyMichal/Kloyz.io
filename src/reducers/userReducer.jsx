const initialUserState = {
    currentUser: null,
};

const userReducer = (store = initialUserState, action) => {
    const { payload } = action;

    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...store,
                currentUser: {
                    ...payload
                }
            };

        default:
            return store;
    }
};

export default userReducer;