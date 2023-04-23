const exp = [
  {
    a: 1,
    b: 1,
    c: 3
  },
  {
    a: 2,
    b: 2,
    c: 3
  }
];

describe('Sample Tests', () => {
  it('Compare object with ignoring fields', () => {
    // Retrieve test.json fixture from fixtures folder}))
    cy.fixture('test').then((test) => {

      //subset
      expect(test).to.containSubset(exp);

      // samsam
      expect(test).to.deep.match(exp);
    });
  });
});
