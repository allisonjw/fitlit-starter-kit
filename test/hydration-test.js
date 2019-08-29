const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const User = require('../src/User');
const Hydration = require('../src/Hydration');
const userData = require('../data-subsets/users-subset');
const hydrationData = require('../data-subsets/hydration-subset');

describe('Hydration', () => {

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of hydration', () => {
    const hydration = new Hydration(userData[0]);
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should be able to find out how many ounces the user drank daily', () => {
    const hydration = new Hydration(userData[0]);
    expect(hydration.filterToOunces()).to.deep.equal([ 37, 69, 96, 61, 91, 50, 50, 43, 39, 61, 51, 52, 29, 57 ])
  });

  it('should be able to get the average fluid ounces consumed per day for all time', () => {
    const hydration = new Hydration(userData[0]);
    expect(hydration.findAvgWaterCons()).to.be.equal(56)
  });

  it('should be able to get fluid ounces consumed for specific day', () => {
    const hydration = new Hydration(userData[0]);
    expect(hydration.findWaterByDate('2019/06/21')).to.be.equal(50);
  });

  it('should be able to get fluid ounces consumed each day over a course of a week', () => {
    const hydration = new Hydration(userData[0]);
    expect(hydration.findWeeklyWaterCons()).to.deep.equal([ 43, 39, 61, 51, 52, 29, 57 ]);
  });

});    
