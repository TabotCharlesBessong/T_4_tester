// Section 4: Hooks Best Practices
// Functions to demonstrate when to use which hook

/**
 * Database connection manager
 */
class DatabaseManager {
  constructor() {
    this.connections = [];
    this.isInitialized = false;
  }

  initialize() {
    if (this.isInitialized) {
      return false;
    }
    this.isInitialized = true;
    console.log('Database manager initialized');
    return true;
  }

  createConnection(name) {
    const connection = { name, connected: true };
    this.connections.push(connection);
    return connection;
  }

  closeConnection(name) {
    const index = this.connections.findIndex(c => c.name === name);
    if (index !== -1) {
      this.connections[index].connected = false;
      this.connections.splice(index, 1);
    }
  }

  closeAllConnections() {
    this.connections.forEach(conn => conn.connected = false);
    this.connections = [];
  }

  cleanup() {
    this.closeAllConnections();
    this.isInitialized = false;
    console.log('Database manager cleaned up');
  }
}

/**
 * Test data generator
 */
class TestDataGenerator {
  constructor() {
    this.generatedCount = 0;
  }

  generateUser(overrides = {}) {
    this.generatedCount++;
    return {
      id: this.generatedCount,
      name: overrides.name || `User${this.generatedCount}`,
      email: overrides.email || `user${this.generatedCount}@test.com`,
      age: overrides.age || 25,
      ...overrides
    };
  }

  reset() {
    this.generatedCount = 0;
  }
}

/**
 * Cache manager
 */
class CacheManager {
  constructor() {
    this.cache = {};
    this.hitCount = 0;
    this.missCount = 0;
  }

  set(key, value) {
    this.cache[key] = value;
  }

  get(key) {
    if (this.cache[key]) {
      this.hitCount++;
      return this.cache[key];
    }
    this.missCount++;
    return null;
  }

  clear() {
    this.cache = {};
    this.hitCount = 0;
    this.missCount = 0;
  }

  getStats() {
    return {
      hitCount: this.hitCount,
      missCount: this.missCount,
      size: Object.keys(this.cache).length
    };
  }
}

module.exports = {
  DatabaseManager,
  TestDataGenerator,
  CacheManager
};
