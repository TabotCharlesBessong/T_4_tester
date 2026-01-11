
const {add,subtract} = require("../src/app.js");

describe('Suite 1', () => {
  let expect;
  
  before(async () => {
    const chai = await import("chai");
    expect = chai.expect;
  });
  
  it('add(2,3) should return 5', () => {
    expect(add(2,3)).to.be.equal(5);
  });
});

// test suit for subtract function
describe('Suite 2', () => {
  let expect;

  before(async () => {
    const chai = await import("chai");
    expect = chai.expect;
  });

  it('subtract(5,3) should return 2', () => {
    expect(subtract(5,3)).to.be.equal(2);
  });
});