import React from "react";
import ItemComponent from "../src/ItemComponent";

const item = {
    "id": 1,
    "Title": "Essex Police: 39 people found dead in lorry container" ,
    "Date": "2019-08-08",
    "Description": "DescTest",
    "Info": "InfoTest",
};

describe("Test ItemComponent component", () => {
    it("should show correctly", () => {
        const wrapper = shallow(<ItemComponent item={item}  />);

        const title = wrapper.find(".title");
        expect(title.length).toBe(1);
        expect(title.text()).toBe(item.Title);

        const image = wrapper.find("img");
        expect(image.length).toBe(0);
    });
});
