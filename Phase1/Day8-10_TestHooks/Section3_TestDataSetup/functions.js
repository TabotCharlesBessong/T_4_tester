// Section 3: Test Data Setup
// Functions to demonstrate setting up test data with hooks

/**
 * User model
 */
class User {
  constructor(id, name, email, age) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.age = age;
  }

  getInfo() {
    return `${this.name} (${this.email}) - Age: ${this.age}`;
  }

  isAdult() {
    return this.age >= 18;
  }
}

/**
 * Product model
 */
class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  getFormattedPrice() {
    return `$${this.price.toFixed(2)}`;
  }

  isExpensive() {
    return this.price > 100;
  }
}

/**
 * Order model
 */
class Order {
  constructor(id, userId, items, total) {
    this.id = id;
    this.userId = userId;
    this.items = items;
    this.total = total;
    this.status = 'pending';
  }

  getItemCount() {
    return this.items.length;
  }

  markAsCompleted() {
    this.status = 'completed';
    return this.status;
  }
}

/**
 * Data repository simulator
 */
class DataRepository {
  constructor() {
    this.users = [];
    this.products = [];
    this.orders = [];
  }

  addUser(user) {
    this.users.push(user);
    return this.users.length;
  }

  addProduct(product) {
    this.products.push(product);
    return this.products.length;
  }

  addOrder(order) {
    this.orders.push(order);
    return this.orders.length;
  }

  getUserById(id) {
    return this.users.find(u => u.id === id);
  }

  getProductById(id) {
    return this.products.find(p => p.id === id);
  }

  getOrdersByUserId(userId) {
    return this.orders.filter(o => o.userId === userId);
  }

  clear() {
    this.users = [];
    this.products = [];
    this.orders = [];
  }
}

module.exports = {
  User,
  Product,
  Order,
  DataRepository
};
