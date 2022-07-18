const addressesInitState = {
    isSearching: false,
    results: [],
};
export const addressesReducer = (state = addressesInitState, action) => {
    switch (action.type) {
        case SET_IS_SEARCHING:
            return { ...state, isSearching: action.payload };
        case SET_RESULTS:
            return { ...state, results: action.payload };
        default:
            return state;
    }
};

export const dataReducer = (state = [], action) => {
    switch (action.type) {
        case SET_DATA:
            return [...state, action.payload];
        default:
            return state;
    }
};

export const SET_IS_SEARCHING = "SET_IS_SEARCHING";
export const SET_RESULTS = "SET_RESULTS";
export const SET_DATA = "SET_DATA";
