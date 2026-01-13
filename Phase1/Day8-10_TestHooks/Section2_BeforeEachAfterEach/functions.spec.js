// Section 2: beforeEach() and afterEach() Hooks
// Learning: Hooks that run BEFORE/AFTER EACH test in a describe block

const { Calculator, UserSession, ShoppingCart } = require('./functions');

describe('Section 2: beforeEach() and afterEach() Hooks', () => {
  let expect;

  before(async () => {
    const chai = await import('chai');
    expect = chai.expect;
  });

  // beforeEach() runs BEFORE EACH test
  // Perfect for: resetting state, creating fresh instances, setting up test data
  describe('Calculator with beforeEach()', () => {
    let calculator;

    beforeEach(() => {
      console.log('=== Creating fresh calculator for each test ===');
      calculator = new Calculator();
      // This runs BEFORE EACH test, so each test gets a fresh calculator
    });

    // afterEach() runs AFTER EACH test
    // Perfect for: cleaning up after each test, resetting state
    afterEach(() => {
      console.log('=== Test completed, calculator state:', calculator.getHistory());
      // This runs AFTER EACH test
    });

    it('should start with empty history', () => {
      expect(calculator.getHistory()).to.be.empty;
      expect(calculator.getResult()).to.equal(0);
    });

    it('should add numbers', () => {
      calculator.add(2, 3);
      expect(calculator.getResult()).to.equal(5);
      expect(calculator.getHistory().length).to.equal(1);
    });

    it('should have fresh state (history is empty again)', () => {
      // This test gets a NEW calculator instance!
      expect(calculator.getHistory()).to.be.empty;
      expect(calculator.getResult()).to.equal(0);
    });

    it('should perform multiple operations', () => {
      calculator.add(5, 3);
      calculator.subtract(10, 2);
      expect(calculator.getHistory().length).to.equal(2);
    });
  });

  describe('UserSession with beforeEach()', () => {
    let session;

    beforeEach(() => {
      session = new UserSession();
      session.login('testuser');
    });

    afterEach(() => {
      // Clean up: logout after each test
      if (session.isLoggedIn()) {
        session.logout();
      }
    });

    it('should be logged in', () => {
      expect(session.isLoggedIn()).to.be.true;
    });

    it('should perform actions', () => {
      session.performAction('View profile');
      expect(session.getActions().length).to.equal(2); // Login + action
    });

    it('should have fresh session for each test', () => {
      // Each test gets a fresh session with fresh login
      expect(session.getLoginCount()).to.equal(1);
      expect(session.getActions().length).to.equal(1); // Just the login
    });
  });

  describe('ShoppingCart with beforeEach() and afterEach()', () => {
    let cart;

    beforeEach(() => {
      cart = new ShoppingCart();
      // Each test starts with an empty cart
    });

    afterEach(() => {
      cart.clear();
      // Clean up after each test
    });

    it('should start with empty cart', () => {
      expect(cart.getItems()).to.be.empty;
      expect(cart.getTotal()).to.equal(0);
    });

    it('should add items to cart', () => {
      cart.addItem('Apple', 1.50);
      cart.addItem('Banana', 0.75);
      expect(cart.getItems().length).to.equal(2);
      expect(cart.getTotal()).to.equal(2.25);
    });

    it('should have empty cart again (fresh state)', () => {
      // This test gets a fresh cart!
      expect(cart.getItems()).to.be.empty;
      expect(cart.getTotal()).to.equal(0);
    });
  });

  describe('Understanding Execution Order', () => {
    let executionLog = [];

    beforeEach(() => {
      executionLog.push('beforeEach() - runs BEFORE EACH test');
    });

    afterEach(() => {
      executionLog.push('afterEach() - runs AFTER EACH test');
    });

    it('test 1: should see beforeEach() log', () => {
      expect(executionLog).to.include('beforeEach() - runs BEFORE EACH test');
      expect(executionLog.length).to.equal(1); // Only beforeEach so far
    });

    it('test 2: should see both hooks from previous test', () => {
      // Now we have: beforeEach (test1), afterEach (test1), beforeEach (test2)
      expect(executionLog.length).to.be.at.least(2);
      expect(executionLog.filter(log => log.includes('beforeEach')).length).to.equal(2);
    });

    it('test 3: should see multiple hook executions', () => {
      // Each test adds: beforeEach + afterEach
      expect(executionLog.length).to.be.at.least(4);
    });
  });

  describe('Comparing before() vs beforeEach()', () => {
    let beforeCount = 0;
    let beforeEachCount = 0;

    before(() => {
      beforeCount++;
      console.log('before() executed - count:', beforeCount);
    });

    beforeEach(() => {
      beforeEachCount++;
      console.log('beforeEach() executed - count:', beforeEachCount);
    });

    it('test 1: before() runs once, beforeEach() runs once', () => {
      expect(beforeCount).to.equal(1);
      expect(beforeEachCount).to.equal(1);
    });

    it('test 2: before() still 1, beforeEach() is 2', () => {
      expect(beforeCount).to.equal(1); // Still 1!
      expect(beforeEachCount).to.equal(2); // Now 2!
    });

    it('test 3: before() still 1, beforeEach() is 3', () => {
      expect(beforeCount).to.equal(1); // Still 1!
      expect(beforeEachCount).to.equal(3); // Now 3!
    });
  });
});
