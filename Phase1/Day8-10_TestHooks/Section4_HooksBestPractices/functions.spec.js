// Section 4: Hooks Best Practices
// Learning: When to use which hook - decision guide and examples

const { DatabaseManager, TestDataGenerator, CacheManager } = require('./functions');

describe('Section 4: Hooks Best Practices', () => {
  let expect;

  before(async () => {
    const chai = await import('chai');
    expect = chai.expect;
  });

  describe('When to use before()', () => {
    let dbManager;

    // ✅ USE before() FOR:
    // - Expensive operations (database connections, API setup)
    // - One-time initialization
    // - Shared resources that don't change
    // - Configuration that applies to all tests

    before(() => {
      dbManager = new DatabaseManager();
      dbManager.initialize(); // Expensive operation - do it once!
    });

    after(() => {
      dbManager.cleanup(); // Clean up once
    });

    it('should use initialized database manager', () => {
      const conn1 = dbManager.createConnection('test1');
      expect(conn1.connected).to.be.true;
    });

    it('should reuse same database manager', () => {
      const conn2 = dbManager.createConnection('test2');
      expect(conn2.connected).to.be.true;
      // Same dbManager instance from before() hook
    });
  });

  describe('When to use beforeEach()', () => {
    let generator;
    let cache;

    // ✅ USE beforeEach() FOR:
    // - Resetting state between tests
    // - Creating fresh instances
    // - Setting up test data that should be isolated
    // - Ensuring tests don't affect each other

    before(() => {
      // Initialize shared resources once
      generator = new TestDataGenerator();
      cache = new CacheManager();
    });

    beforeEach(() => {
      // Reset state before each test
      generator.reset();
      cache.clear();
    });

    after(() => {
      cache.clear();
    });

    it('should generate user with id 1', () => {
      const user = generator.generateUser();
      expect(user.id).to.equal(1);
    });

    it('should generate user with id 1 again (fresh start)', () => {
      // Fresh generator state from beforeEach()
      const user = generator.generateUser();
      expect(user.id).to.equal(1); // Not 2!
    });

    it('should have fresh cache for each test', () => {
      cache.set('key1', 'value1');
      expect(cache.getStats().size).to.equal(1);
    });

    it('should have empty cache again', () => {
      // Fresh cache from beforeEach()
      expect(cache.getStats().size).to.equal(0);
    });
  });

  describe('When to use after()', () => {
    let dbManager;

    // ✅ USE after() FOR:
    // - Closing connections
    // - Releasing resources
    // - Final cleanup
    // - One-time teardown

    before(() => {
      dbManager = new DatabaseManager();
      dbManager.initialize();
    });

    after(() => {
      // Clean up once after all tests
      dbManager.cleanup();
      expect(dbManager.isInitialized).to.be.false;
    });

    it('should create connections', () => {
      dbManager.createConnection('conn1');
      dbManager.createConnection('conn2');
      expect(dbManager.connections.length).to.equal(2);
    });

    it('should still have connections from previous test', () => {
      // Connections persist until after() runs
      expect(dbManager.connections.length).to.equal(2);
    });
  });

  describe('When to use afterEach()', () => {
    let cache;

    // ✅ USE afterEach() FOR:
    // - Cleaning up after each test
    // - Resetting state
    // - Closing test-specific resources
    // - Ensuring clean state for next test

    before(() => {
      cache = new CacheManager();
    });

    afterEach(() => {
      // Clean up after each test
      // This ensures each test starts with a clean cache
      cache.clear();
    });

    after(() => {
      cache.clear();
    });

    it('should add data to cache', () => {
      cache.set('test', 'data');
      cache.set('additional', 'data');
      expect(cache.getStats().size).to.equal(2);
    });

    it('should have clean cache (afterEach cleared it)', () => {
      // Cache was cleared by afterEach() after previous test
      // This test starts with an empty cache
      expect(cache.get('test')).to.be.null;
      expect(cache.get('additional')).to.be.null;
      expect(cache.getStats().size).to.equal(0);
    });
  });

  describe('Common Patterns and Anti-Patterns', () => {
    describe('✅ GOOD: Expensive setup with before()', () => {
      let expensiveResource;

      before(() => {
        // Simulating expensive operation
        expensiveResource = {
          initialized: true,
          setupTime: Date.now()
        };
        console.log('Expensive setup done once');
      });

      it('test 1 uses resource', () => {
        expect(expensiveResource.initialized).to.be.true;
      });

      it('test 2 reuses same resource', () => {
        expect(expensiveResource.initialized).to.be.true;
        // Same resource, not recreated!
      });
    });

    describe('✅ GOOD: Fresh state with beforeEach()', () => {
      let mutableState;

      beforeEach(() => {
        mutableState = {
          counter: 0,
          items: []
        };
      });

      it('test 1 modifies state', () => {
        mutableState.counter = 5;
        mutableState.items.push('item1');
        expect(mutableState.counter).to.equal(5);
      });

      it('test 2 has fresh state', () => {
        // Fresh state from beforeEach()
        expect(mutableState.counter).to.equal(0);
        expect(mutableState.items).to.be.empty;
      });
    });

    describe('❌ BAD: Using before() for mutable state', () => {
      let sharedState;

      before(() => {
        sharedState = { value: 0 };
      });

      it('test 1 modifies shared state', () => {
        sharedState.value = 10;
        expect(sharedState.value).to.equal(10);
      });

      it('test 2 sees modified state (BAD!)', () => {
        // This is BAD - tests are affecting each other!
        expect(sharedState.value).to.equal(10); // Not 0!
        // This can cause flaky tests!
      });
    });

    describe('✅ GOOD: Fixing the above with beforeEach()', () => {
      let freshState;

      beforeEach(() => {
        freshState = { value: 0 };
      });

      it('test 1 modifies state', () => {
        freshState.value = 10;
        expect(freshState.value).to.equal(10);
      });

      it('test 2 has fresh state (GOOD!)', () => {
        // Fresh state - tests don't affect each other
        expect(freshState.value).to.equal(0);
      });
    });
  });

  describe('Decision Guide: Which Hook to Use?', () => {
    describe('Scenario 1: Database Connection', () => {
      // ✅ Use before() - expensive, shared resource
      let db;

      before(() => {
        db = { connected: true };
        console.log('Database connected (expensive operation)');
      });

      after(() => {
        db.connected = false;
        console.log('Database disconnected');
      });

      it('should use shared database connection', () => {
        expect(db.connected).to.be.true;
      });
    });

    describe('Scenario 2: Test Data', () => {
      // ✅ Use beforeEach() - fresh data for each test
      let testData;

      beforeEach(() => {
        testData = { id: Math.random(), clean: true };
      });

      it('should have fresh test data', () => {
        testData.clean = false;
        expect(testData.id).to.be.a('number');
      });

      it('should have fresh test data again', () => {
        // Fresh data
        expect(testData.clean).to.be.true;
      });
    });

    describe('Scenario 3: Configuration', () => {
      // ✅ Use before() - shared configuration
      let config;

      before(() => {
        config = {
          apiUrl: 'https://api.test.com',
          timeout: 5000
        };
      });

      it('should use shared config', () => {
        expect(config.apiUrl).to.equal('https://api.test.com');
      });

      it('should reuse same config', () => {
        expect(config.timeout).to.equal(5000);
      });
    });

    describe('Scenario 4: Mutable Objects', () => {
      // ✅ Use beforeEach() - prevent test interference
      let mutableObj;

      beforeEach(() => {
        mutableObj = { items: [], count: 0 };
      });

      it('should modify object', () => {
        mutableObj.items.push('item1');
        mutableObj.count = 1;
        expect(mutableObj.items.length).to.equal(1);
      });

      it('should have fresh object', () => {
        // Fresh object - previous test didn't affect this one
        expect(mutableObj.items.length).to.equal(0);
        expect(mutableObj.count).to.equal(0);
      });
    });
  });
});
