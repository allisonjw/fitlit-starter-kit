const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity');
const userData = require('../data-subsets/users-subset')
const activityData = require('../data-subsets/activity-subset');
const ActivityRepository = require('../src/ActivityRepository');

describe('Activity', () => {

  let activity;
  beforeEach( () => {
    activity = new Activity(activityData);
  });

  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', () => {
    expect(activity).to.be.an.instanceof(Activity);
  });

  it('shoud be able to tell how many steps were taken on a specific day', () =>{
    expect(activity.userStepsPerDay(1, '2019/06/15')).to.equal(3577);
  });

  it('shoud be able to return the miles for the user based on steps for a specific day', () =>{
    expect(activity.milesUserWalked(1, '2019/06/15', userData)).to.equal(2.9);
  });

  it('shoud be know how minutes a user was active for a specific day', () =>{
    expect(activity.minsUserActive(1, '2019/06/15')).to.equal(140);

  });

  it('shoud now the user\'s step count average for a given week', () =>{
    expect(activity.weeklyAvgStepCount(1, '2019/06/15')).to.equal(8375.5);
  });

  it('shoud now the user\'s stairs climbed average for a given week', () =>{
    expect(activity.weeklyAvgStairsClimbed(1, '2019/06/15')).to.equal(17.6);
  });

  it('shoud now how many average minutes the user was active for a given week', () =>{
    expect(activity.weeklyAvgMins(1, '2019/06/15')).to.equal(171.2);
  });

  it('shoud be able know if a user met their step goal for a specified day', () =>{
    expect(activity.stepGoalMet(1, '2019/06/15', userData)).to.equal(false);
  });

  it('shoud find all the days the user exceeded thier step goal', () =>{
    expect(activity.overStepGoal(1, userData)).to.deep.equal(['2019/06/17', '2019/06/20', '2019/06/22', '2019/06/23']);
  });

  it('shoud find the users all-time stair climbing record', () =>{
    expect(activity.stairClimbRecord(1)).to.equal(36);
  });

  it('should tell the user how close to meeting thier step goal for the day', () => {
    expect(activity.giveUserStepsFeedback(1, '2019/06/15', userData)).to.equal('Almost there! You have 6423 steps until you have met your step goal.');
  });

});  