// Section 3: Test Data Setup
// Learning: Setting up test data efficiently with hooks

const { User, Product, Order, DataRepository } = require('./functions');

describe('Section 3: Test Data Setup', () => {
  let expect;

  before(async () => {
    const chai = await import('chai');
    expect = chai.expect;
  });

  describe('Setting up shared test data with before()', () => {
    let repository;
    let testUsers;
    let testProducts;

    // Use before() for data that doesn't change between tests
    before(() => {
      repository = new DataRepository();
      
      // Create test users once
      testUsers = [
        new User(1, 'John Doe', 'john@example.com', 25),
        new User(2, 'Jane Smith', 'jane@example.com', 30),
        new User(3, 'Bob Johnson', 'bob@example.com', 17)
      ];

      // Create test products once
      testProducts = [
        new Product(1, 'Laptop', 999.99, 'Electronics'),
        new Product(2, 'Mouse', 29.99, 'Electronics'),
        new Product(3, 'Desk', 199.99, 'Furniture')
      ];

      // Add to repository
      testUsers.forEach(user => repository.addUser(user));
      testProducts.forEach(product => repository.addProduct(product));
    });

    // Use after() for cleanup
    after(() => {
      repository.clear();
    });

    it('should have test users available', () => {
      expect(testUsers.length).to.equal(3);
      expect(repository.getUserById(1)).to.exist;
    });

    it('should have test products available', () => {
      expect(testProducts.length).to.equal(3);
      expect(repository.getProductById(1)).to.exist;
    });

    it('should reuse same test data', () => {
      // Same data from before() hook
      expect(testUsers.length).to.equal(3);
      expect(testProducts.length).to.equal(3);
    });
  });

  describe('Setting up fresh data with beforeEach()', () => {
    let repository;
    let freshUsers;

    // Use beforeEach() when you need fresh data for each test
    beforeEach(() => {
      repository = new DataRepository();
      
      // Create fresh users for each test
      freshUsers = [
        new User(1, 'Alice', 'alice@example.com', 28),
        new User(2, 'Charlie', 'charlie@example.com', 22)
      ];

      freshUsers.forEach(user => repository.addUser(user));
    });

    afterEach(() => {
      repository.clear();
    });

    it('should have fresh users in test 1', () => {
      expect(freshUsers.length).to.equal(2);
      expect(freshUsers[0].name).to.equal('Alice');
    });

    it('should have fresh users in test 2 (same data, new instances)', () => {
      // Fresh data, but same structure
      expect(freshUsers.length).to.equal(2);
      expect(freshUsers[0].name).to.equal('Alice');
    });
  });

  describe('Complex test data setup', () => {
    let repository;
    let user;
    let products;
    let order;

    before(() => {
      repository = new DataRepository();
    });

    beforeEach(() => {
      // Create a user for each test
      user = new User(1, 'Test User', 'test@example.com', 25);
      repository.addUser(user);

      // Create products
      products = [
        new Product(1, 'Product A', 50, 'Category1'),
        new Product(2, 'Product B', 75, 'Category2')
      ];
      products.forEach(p => repository.addProduct(p));

      // Create an order
      order = new Order(1, user.id, products, 125);
      repository.addOrder(order);
    });

    afterEach(() => {
      repository.clear();
    });

    it('should have user with order', () => {
      const userOrders = repository.getOrdersByUserId(user.id);
      expect(userOrders.length).to.equal(1);
      expect(userOrders[0].total).to.equal(125);
    });

    it('should be able to modify order without affecting other tests', () => {
      order.markAsCompleted();
      expect(order.status).to.equal('completed');
      // Next test will have a fresh order with status 'pending'
    });

    it('should have fresh order with pending status', () => {
      // Fresh order from beforeEach()
      expect(order.status).to.equal('pending');
    });
  });

  describe('Data setup patterns', () => {
    describe('Pattern 1: Static data with before()', () => {
      let staticData;

      before(() => {
        staticData = {
          config: { apiUrl: 'https://api.example.com', timeout: 5000 },
          constants: { MAX_USERS: 100, MIN_AGE: 18 }
        };
      });

      it('should use static config', () => {
        expect(staticData.config.apiUrl).to.equal('https://api.example.com');
      });

      it('should reuse same config', () => {
        expect(staticData.config.timeout).to.equal(5000);
      });
    });

    describe('Pattern 2: Dynamic data with beforeEach()', () => {
      let dynamicData;

      beforeEach(() => {
        dynamicData = {
          timestamp: Date.now(),
          randomId: Math.random()
        };
      });

      it('should have different timestamp in test 1', () => {
        const timestamp1 = dynamicData.timestamp;
        expect(timestamp1).to.be.a('number');
      });

      it('should have different timestamp in test 2', () => {
        const timestamp2 = dynamicData.timestamp;
        expect(timestamp2).to.be.a('number');
        // These timestamps will be different!
      });
    });

    describe('Pattern 3: Mixed approach', () => {
      let sharedConfig;
      let testInstance;

      before(() => {
        // Shared configuration
        sharedConfig = {
          environment: 'test',
          debug: true
        };
      });

      beforeEach(() => {
        // Fresh instance for each test
        testInstance = {
          id: Math.random(),
          createdAt: new Date()
        };
      });

      it('should have shared config and fresh instance', () => {
        expect(sharedConfig.environment).to.equal('test');
        expect(testInstance.id).to.be.a('number');
      });

      it('should reuse config but have new instance', () => {
        expect(sharedConfig.environment).to.equal('test'); // Same
        expect(testInstance.id).to.be.a('number'); // Different
      });
    });
  });
});
