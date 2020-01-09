import React from "react";
import Container from "../src/Container";

describe("Test Container component", () => {
    it("setPage should set state correctly", () => {
        const wrapper = shallow(<Container />);

        let news = wrapper.find("News");
        expect(news.length).toBe(1);
        
        let addItem = wrapper.find("AddItem");
        expect(addItem.length).toBe(0);

        wrapper.instance().setPage("add");
        wrapper.update();

        news = wrapper.find("News");
        expect(news.length).toBe(0);
        
        addItem = wrapper.find("AddItem");
        expect(addItem.length).toBe(1);
    });
});

