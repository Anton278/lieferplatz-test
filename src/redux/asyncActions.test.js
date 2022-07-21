import { getAutosuggests } from "./asyncActions";
import { SET_IS_SEARCHING, SET_RESULTS } from "./reducersAndActions";

describe("get-autosuggests thunk", () => {
    test("success request", async () => {
        const thunk = getAutosuggests("Heroiv Dnipra");
        const dispatchMock = jest.fn();
        await thunk(dispatchMock);
        expect(dispatchMock).toBeCalledTimes(3);
    });
});
