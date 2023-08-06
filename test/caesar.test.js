const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("Caesar shift tests", () => {
    //return false if the shift = 0, < -25, > 25
    it("should return false if the shift value is equal to 0", () => {
        expect(caesar("test", 0)).to.equal(false);
    });
    it("should return false if the shift value is less than -25", () =>{
        expect(caesar("test", -26)).to.equal(false);
    });
    it("should return false if the shift value is greater than 25", () => {
        expect(caesar("test", 26)).to.equal(false);
    });
    
    //ignores capital letters
    it("should ignore capital letters", () => {
        expect(caesar("TEST", 1)).to.equal("uftu");
    });
    it("should correctly encode without spaces", () => {
        const expected = "bcde";
        const actual = caesar("abcd", 1);
        expect(actual).to.equal(expected);
    });
    
    //when encoding, handles shifts that go past the end of the alphabet
    it("should handle shifts that go past the end of the alphabet", () => {
        const expected = "abc";
        const actual = caesar("xyz", 1);
        expect(actual).to.equal(expected);
    });
    
    //maintain spaces and other nonalphabetic symbols before and after encoding
    it("should maintain spaces and other nonalphabetic symbols before and after encoding", () => {
        const expected = "bcd";
        const actual = caesar("abc", 1);
        expect(actual).to.equal(expected);
    });

    //maintain spaces and other nonalphabetic symbols before and after decoding
    it("should maintain spaces and other nonalphabetic symbols before and after decoding", () => {
        const expected = "test";
        const actual = caesar("uftu", 1, false);
        expect(actual).to.equal(expected);
    });
});