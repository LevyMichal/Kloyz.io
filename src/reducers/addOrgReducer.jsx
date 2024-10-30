const initialAddOrgState = {
    isAddNewOrg: false,
};

const addOrgReducer = (store = initialAddOrgState, action) => {
    const { payload } = action;

    switch (action.type) {
        case 'IS_ADD_ORG':
            return {
                ...store,
                isAddNewOrg: payload

            };

        default:
            return store;
    }
};

export default addOrgReducer;