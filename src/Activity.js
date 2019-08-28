if (typeof module !== 'undefined') {	
  userData = require('../data-subsets/users-subset');	
}

class Activity {
    constructor(activityData) {
        this.activityData = activityData;
    }

    userStepsPerDay(id, date) {
        return this.activityData.find(user => id === user.userID && date === user.date).numSteps;
    }

    milesUserWalked(id, date, userData) {
        let userSteps = this.activityData.find(user => id === user.userID && date === user.date).numSteps;
        let userStride = userData.find(user => id === user.id).strideLength;
        return parseFloat(((userSteps * userStride) / 5280).toFixed(1)); 
    }
   
    minsUserActive(id, date) {
        return this.activityData.find(user => id === user.userID && date === user.date).minutesActive;
    }

    weeklyAvgStepCount(id, date) {
        let userActivity = this.activityData.filter(user => id === user.userID);
        let findIndexOfDates = userActivity.findIndex(index => date === index.date);  
        let getWeeklyAvgSteps = userActivity.slice(findIndexOfDates, findIndexOfDates + 7)
        return getWeeklyAvgSteps.reduce((acc, avg) => {
            return parseFloat((acc + (avg.numSteps / 7)).toFixed(1))
        }, 0);
    }

    weeklyAvgStairsClimbed(id, date) {
        let userActivity = this.activityData.filter(user => id === user.userID);
        let findIndexOfDates = userActivity.findIndex(index => date === index.date);  
        let getWeeklyAvgStairs = userActivity.slice(findIndexOfDates, findIndexOfDates + 7)
        return getWeeklyAvgStairs.reduce((acc, avg) => {
            return parseFloat((acc + (avg.flightsOfStairs / 7)).toFixed(1))
        }, 0);
    }

    weeklyAvgMins(id, date) {
        let userActivity = this.activityData.filter(user => id === user.userID);
        let findIndexOfDates = userActivity.findIndex(index => date === index.date);  
        let getWeeklyAvgMins = userActivity.slice(findIndexOfDates, findIndexOfDates + 7)
        return getWeeklyAvgMins.reduce((acc, avg) => {
            return parseFloat((acc + (avg.minutesActive / 7)).toFixed(1))
        }, 0);
    }

    stepGoalMet(id, date, userData) {
        let stepsOfDay = this.activityData.find(user => id === user.userID && date === user.date).numSteps;
        let goalSteps = userData.find(user => id === user.id).dailyStepGoal;
        if (stepsOfDay >= goalSteps) {
          return true
        } else {
          return false
        }
    }
    
    overStepGoal(id, userData) {
        let userActivity = this.activityData.filter(user => id === user.userID);
        let goalSteps = userData.find(user => id === user.id).dailyStepGoal;
        let stepsAbove = userActivity.filter(user => user.numSteps > goalSteps);
        return stepsAbove.map(steps => steps.date) 
    }

    stairClimbRecord(id) {
        let userActivity = this.activityData.filter(user => id === user.userID);
        let stairsClimbed = userActivity.map(day => day.flightsOfStairs);
        return Math.max(...stairsClimbed)
    }
    
    giveUserStepsFeedback(id, date, userData) {
        let userActivityToday = this.activityData.find(user => id === user.userID && date === user.date).numSteps;
        let goalSteps = userData.find(user => id === user.id).dailyStepGoal
        if (userActivityToday >= goalSteps) {
          let stepsOver = userActivityToday - goalSteps
          return `You're a rockstar! You went ${stepsOver} steps over your goal!`
        } else {
          let stepsLeft = goalSteps - userActivityToday
          return `Almost there! You have ${stepsLeft} steps until you have met your step goal.`
        }
    }

    gatherFriends(givenDate, id) {
      let allFriends = [...userData[id].friends];
      return allFriends
      let userFriends = allFriends.map(friend => ({
        id: friend,
        name: userData.find(user => user.id === friend).name,
        steps: this.activityData.filter(day => day.userID === userFriends && day.date <= givenDate)
          .map(user => user.numSteps) 
      }));
      return userFriends.amp(friend => {
        return friend.name;
      });
    }
}


if (typeof module !== 'undefined') {
    module.exports = Activity;
  }