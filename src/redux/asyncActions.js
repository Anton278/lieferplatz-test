import { SET_IS_SEARCHING, SET_RESULTS } from "./reducersAndActions";

export const getAutosuggests = (searchValue) => {
    return async (dispatch) => {
        const API_KEY = "sQh_qHZ_2iKPBOas-pxtIYrKLZBY3Lmn6G4P5M-SwV0";
        const url = `https://autosuggest.search.hereapi.com/v1/autosuggest?apiKey=${API_KEY}&q=${searchValue}&at=50.450001,30.523333`;
        try {
            dispatch({ type: SET_IS_SEARCHING, payload: true });
            const response = await fetch(url);
            const data = await response.json();
            dispatch({ type: SET_RESULTS, payload: data.items || [] });
            dispatch({ type: SET_IS_SEARCHING, payload: false });
        } catch (_) {
            dispatch({ type: SET_RESULTS, payload: [] });
            dispatch({ type: SET_IS_SEARCHING, payload: false });
        }
    };
};
