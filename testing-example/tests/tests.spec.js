describe("function getSumNumbers", () => {
    it("Should exist", () => {
        expect(getSumNumbers).toBeDefined();
    });

    it("Should return the sum of the argumented array", () => {
        expect(getSumNumbers([1, 1])).toBe(2);
        expect(getSumNumbers([-5, 2])).toBe(-3);
        expect(getSumNumbers([1, 10])).toBe(11);
    });
})