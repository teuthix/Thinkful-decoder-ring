// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("Polybius tests", () => {
    //when encoding, translates letters i AND j to 42
    it("should translate letters 'i' and 'j' to 42", () => {
        const expected = "4242";
        const actual = polybius("ij");
        expect(actual).to.equal(expected);
    });
    //ignores capital letters
    it("should ignore capital letters", () => {
        const expected = "44513444";
        const actual = polybius("TEST");
        expect(actual).to.equal(expected);
    });

    //when encoding, output should still be a string
    it("should return a string when encoding", () => {
        expect(polybius("test")).to.be.a('string');
    });

    //when decoding, translates 42 to (i/j)
    it("should decode 42 to '(i/j)'", () => {
        const actual = polybius("42", false);
        expect(actual).to.equal("(i/j)")
    });

    //maintains spaces in the message before and after encoding;
    it("should maintain spaces throughout encoding", () => {
        const expected = "4451 3444";
        const actual = polybius("te st");
        expect(actual).to.equal(expected);
    });

    //maintains spaces in the message before and after decoding;
    it("should maintain spaces throughout encoding", () => {
        const expected = "te st";
        const actual = polybius("4451 3444", false);
        expect(actual).to.equal(expected);
    });
});