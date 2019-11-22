import React from "react";
import News from "../src/News";

describe("Test News component", () => {
    it('fetches data from server when server returns a successful response', done => {
        const mockSuccessResponse = [{ Id: "1", Title: "Test", Info: "Test 2" }];
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise,
        });

        global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

        const wrapper = shallow(<News />);

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith('http://localhost:4000/News');

        process.nextTick(() => {
            expect(wrapper.state()).toEqual({
                news: mockSuccessResponse,
                isLoading: false
            });

            global.fetch.mockClear();
            delete global.fetch;
            done();
        });
    });
});
