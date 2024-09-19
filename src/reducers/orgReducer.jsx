const initialOrgState = {
    org: null,
};

const orgReducer = (store = initialOrgState, action) => {
    const { payload } = action;

    switch (action.type) {
        case 'SET_ORG':
            return {
                ...store,
                org: {
                    ...payload
                }
            };

        default:
            return store;
    }
};

export default orgReducer;