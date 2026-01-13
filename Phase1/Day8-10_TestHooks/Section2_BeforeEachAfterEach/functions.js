// Section 2: beforeEach() and afterEach() Hooks
// Functions to demonstrate hooks that run before/after EACH test

/**
 * Calculator class that maintains state
 */
class Calculator {
  constructor() {
    this.history = [];
    this.result = 0;
  }

  add(a, b) {
    const result = a + b;
    this.history.push(`add(${a}, ${b}) = ${result}`);
    this.result = result;
    return result;
  }

  subtract(a, b) {
    const result = a - b;
    this.history.push(`subtract(${a}, ${b}) = ${result}`);
    this.result = result;
    return result;
  }

  multiply(a, b) {
    const result = a * b;
    this.history.push(`multiply(${a}, ${b}) = ${result}`);
    this.result = result;
    return result;
  }

  getHistory() {
    return this.history;
  }

  getResult() {
    return this.result;
  }

  clear() {
    this.history = [];
    this.result = 0;
  }
}

/**
 * User session simulator
 */
class UserSession {
  constructor() {
    this.loggedIn = false;
    this.loginCount = 0;
    this.actions = [];
  }

  login(username) {
    this.loggedIn = true;
    this.loginCount++;
    this.actions.push(`Login: ${username}`);
    return this.loggedIn;
  }

  logout() {
    this.loggedIn = false;
    this.actions.push('Logout');
    return this.loggedIn;
  }

  performAction(action) {
    this.actions.push(action);
    return this.actions.length;
  }

  getActions() {
    return this.actions;
  }

  getLoginCount() {
    return this.loginCount;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}

/**
 * Shopping cart simulator
 */
class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
  }

  addItem(item, price) {
    this.items.push({ item, price });
    this.total += price;
    return this.items.length;
  }

  removeItem(item) {
    const index = this.items.findIndex(i => i.item === item);
    if (index !== -1) {
      this.total -= this.items[index].price;
      this.items.splice(index, 1);
    }
    return this.items.length;
  }

  getItems() {
    return this.items;
  }

  getTotal() {
    return this.total;
  }

  clear() {
    this.items = [];
    this.total = 0;
  }
}

module.exports = {
  Calculator,
  UserSession,
  ShoppingCart
};
