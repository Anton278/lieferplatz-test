import {
    SET_IS_SEARCHING,
    SET_RESULTS,
    SET_DATA,
    addressesReducer,
    dataReducer,
} from "./reducersAndActions";

test("action type names match the value", () => {
    expect(SET_IS_SEARCHING).toBe("SET_IS_SEARCHING");
    expect(SET_RESULTS).toBe("SET_RESULTS");
    expect(SET_DATA).toBe("SET_DATA");
});

describe("addresses reducer should", () => {
    test("return init state", () => {
        expect(addressesReducer(undefined, {})).toEqual({
            isSearching: false,
            results: [],
        });
    });
    test("handle SET_IS_SEARCHING", () => {
        const action = { type: SET_IS_SEARCHING, payload: true };
        expect(addressesReducer(undefined, action)).toEqual({
            isSearching: true,
            results: [],
        });
    });
    test("handle SET_RESULTS", () => {
        const action = { type: SET_RESULTS, payload: ["address1", "address2"] };
        expect(addressesReducer(undefined, action)).toEqual({
            isSearching: false,
            results: ["address1", "address2"],
        });
    });
});

describe("data reducer should", () => {
    test("return init state", () => {
        expect(dataReducer(undefined, {})).toEqual([]);
    });
    test("handle SET_DATA", () => {
        const action = { type: SET_DATA, payload: {} };
        expect(dataReducer(undefined, action)).toEqual([{}]);
    });
});
