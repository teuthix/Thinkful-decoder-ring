// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("Substitution cipher tests", () => {
    //return false when given an alphabet that isn't exactly 26 characters long
    it("returns false if the given alphabet isn't exactly 26 characters long", () => {
        const actual = substitution("test", "abcde");
        expect(actual).to.be.false;
    });

    //correctly translates a given phrase based on the alphabet given
    it("correctly translates the given phrase based on the alphabet given to the function", () => {
        const expected = "jrufscpw";
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });

    //maintains spaces in the message before and after encoding
    it("maintains spaces in the message before and after encoding", () => {
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });

    //maintains spaces in the message before and after decoding
    it("maintains spaces in the message before and after decoding", () => {
        const expected = "you are an excellent spy";
        const actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected);
    });

    //returns false if there are any duplicate characters in the given alphabet
    it("returns false if there are any duplicate characters in the given alphabet", () => {
        const actual = substitution("test", "aacdefghijklmnopqrstuvqxyz");
        expect(actual).to.be.false;
    });

    //ignores capital letters
    it("should ignore capital letters", () => {
        const expected = "jrufscpw";
        const actual = substitution("THINKFUL", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
});