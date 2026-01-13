// Section 1: before() and after() Hooks
// Functions to demonstrate hooks that run once before/after all tests

/**
 * Database connection simulator
 */
class Database {
  constructor() {
    this.connected = false;
    this.connectionCount = 0;
  }

  connect() {
    this.connected = true;
    this.connectionCount++;
    console.log('Database connected');
    return this.connected;
  }

  disconnect() {
    this.connected = false;
    console.log('Database disconnected');
    return this.connected;
  }

  isConnected() {
    return this.connected;
  }

  getConnectionCount() {
    return this.connectionCount;
  }
}

/**
 * API client simulator
 */
class ApiClient {
  constructor() {
    this.initialized = false;
    this.initCount = 0;
  }

  initialize() {
    this.initialized = true;
    this.initCount++;
    console.log('API Client initialized');
    return this.initialized;
  }

  cleanup() {
    this.initialized = false;
    console.log('API Client cleaned up');
    return this.initialized;
  }

  isInitialized() {
    return this.initialized;
  }

  getInitCount() {
    return this.initCount;
  }
}

/**
 * File system simulator
 */
class FileSystem {
  constructor() {
    this.mounted = false;
    this.mountCount = 0;
  }

  mount() {
    this.mounted = true;
    this.mountCount++;
    console.log('File system mounted');
    return this.mounted;
  }

  unmount() {
    this.mounted = false;
    console.log('File system unmounted');
    return this.mounted;
  }

  isMounted() {
    return this.mounted;
  }

  getMountCount() {
    return this.mountCount;
  }
}

module.exports = {
  Database,
  ApiClient,
  FileSystem
};
