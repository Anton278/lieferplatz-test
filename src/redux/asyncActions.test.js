import { getAutosuggests } from "./asyncActions";

describe("get-autosuggests thunk", () => {
    test("success request", async () => {
        const thunk = getAutosuggests("Heroiv Dnipra");
        const dispatchMock = jest.fn();
        await thunk(dispatchMock);
        expect(dispatchMock).toBeCalledTimes(3);
    });
});
