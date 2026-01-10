
const {add,subtract} = require("../src/app.js");

const expect = require("chai").expect;

describe('Suite 1', () => {
  it('add(2,3) should return 5', () => {
    expect(add(2,3)).to.be.equal(5);
  });
});