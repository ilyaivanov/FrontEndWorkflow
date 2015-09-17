describe("Features from ES6", function () {
    it("should work", function () {
        let {name} = getPerson();
        expect(name).toBe("bar");
    });
});