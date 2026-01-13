// Section 1: before() and after() Hooks
// Learning: Hooks that run ONCE before/after ALL tests in a describe block

const { Database, ApiClient, FileSystem } = require('./functions');

describe('Section 1: before() and after() Hooks', () => {
  let expect;
  let db;
  let apiClient;
  let fileSystem;

  before(async () => {
    const chai = await import('chai');
    expect = chai.expect;
  });

  // before() runs ONCE before ALL tests in this describe block
  // Perfect for: expensive setup operations (database connections, API initialization)
  describe('Database Connection Example', () => {
    before(() => {
      console.log('=== Setting up database connection ===');
      db = new Database();
      db.connect();
      // This runs ONCE, no matter how many tests we have
    });

    // after() runs ONCE after ALL tests in this describe block
    // Perfect for: cleanup operations (closing connections, releasing resources)
    after(() => {
      console.log('=== Cleaning up database connection ===');
      db.disconnect();
      // This runs ONCE after all tests complete
    });

    it('should be connected to database', () => {
      expect(db.isConnected()).to.be.true;
    });

    it('should still be connected (connection persists)', () => {
      expect(db.isConnected()).to.be.true;
      // Notice: connection count is still 1, not 2!
      // This proves before() ran only once
    });

    it('should have connection count of 1 (not 3)', () => {
      expect(db.getConnectionCount()).to.equal(1);
      // If beforeEach() was used, this would be 3
    });
  });

  describe('API Client Initialization Example', () => {
    before(() => {
      console.log('=== Initializing API Client ===');
      apiClient = new ApiClient();
      apiClient.initialize();
    });

    after(() => {
      console.log('=== Cleaning up API Client ===');
      apiClient.cleanup();
    });

    it('should have initialized API client', () => {
      expect(apiClient.isInitialized()).to.be.true;
    });

    it('should still be initialized', () => {
      expect(apiClient.isInitialized()).to.be.true;
    });

    it('should have init count of 1', () => {
      expect(apiClient.getInitCount()).to.equal(1);
    });
  });

  describe('File System Mount Example', () => {
    before(() => {
      console.log('=== Mounting file system ===');
      fileSystem = new FileSystem();
      fileSystem.mount();
    });

    after(() => {
      console.log('=== Unmounting file system ===');
      fileSystem.unmount();
    });

    it('should have mounted file system', () => {
      expect(fileSystem.isMounted()).to.be.true;
    });

    it('should still be mounted', () => {
      expect(fileSystem.isMounted()).to.be.true;
    });

    it('should have mount count of 1', () => {
      expect(fileSystem.getMountCount()).to.equal(1);
    });
  });

  describe('Understanding Execution Order', () => {
    let executionLog = [];

    before(() => {
      executionLog.push('before() - runs ONCE before all tests');
    });

    after(() => {
      executionLog.push('after() - runs ONCE after all tests');
      // Note: This log won't show in test output, but it runs!
    });

    it('test 1: should see before() log', () => {
      expect(executionLog).to.include('before() - runs ONCE before all tests');
      expect(executionLog.length).to.equal(1);
    });

    it('test 2: should still see same before() log', () => {
      expect(executionLog).to.include('before() - runs ONCE before all tests');
      expect(executionLog.length).to.equal(1); // Still 1, not 2!
    });

    it('test 3: before() only ran once', () => {
      expect(executionLog.length).to.equal(1);
    });
  });
});
