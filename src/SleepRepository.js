const Sleep = require('./Sleep')
const sleepData = require('../data-subsets/sleep-subset');
const userData = require('../data-subsets/users-subset');
const User = require('./User');

class SleepRepository {
  constructor() {
    this.userData = userData;
    this.sleepData = sleepData;
    // this.users = new Sleep(id);
  }

  findGlobalSleepAverage() {
    let totalQuality = this.sleepData.map(user => user.sleepQuality);
    let reducedTotalQuality = totalQuality.reduce((a, b) => (a += b));
    return Math.round(reducedTotalQuality /this.sleepData.length)
  }

  findSleepQualAboveAverage(givenDate) {
    let userIds = new Set(sleepData.map(user => user.userID));
    let individualIds = [...userIds];
    return individualIds.reduce((acc, userId) => {
      let indivData = sleepData.filter(user => user.userID === userId);
      let index = indivData.findIndex(day => day.date === givenDate);
      let week = indivData.slice(index-6, index+1);
      let avgQual = week.reduce((acc, day) => {
        return acc += day.sleepQuality;
      }, 0) / week.length;
      if (avgQual >= 3) {
        acc.push(userId)
      }
      return acc;
    }, [])
  }

  findSleepiestUserPerDay(givenDate) {
    let days = this.sleepData.filter(day => day.date === givenDate);
    // return days
    let hours = days.sort((a, b) => b.hoursSlept - a.hoursSlept);
    let longestSleeper = hours.filter(day => day.hoursSlept === hours[0].hoursSlept);
    return longestSleeper[0].hoursSlept;
  }
  


}   


if (typeof module !== "undefined") {
  module.exports = SleepRepository;
}