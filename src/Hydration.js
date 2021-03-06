if (typeof module !== "undefined") {
  hydrationData = require('../data-subsets/hydration-subset');
}

class Hydration {
  constructor(userData) {
    this.userData = userData;
    this.id = userData.id;
    this.name = userData.name;
    this.hydrationFiltered = this.filterHydrationData();
    this.ouncesPerDay = this.filterToOunces();
  }

  filterHydrationData() {
    return hydrationData.filter(hydObj => hydObj.userID === this.id)
  }

  filterToOunces() {
    return this.hydrationFiltered.map(day => day.numOunces);
  }

  findAvgWaterCons() {
    const oz = this.ouncesPerDay.reduce((totalOunces, day) => {
      totalOunces += day;
      return totalOunces;
    }, 0) / this.ouncesPerDay.length;
    return Math.floor(oz);
  }

  findWaterByDate(day) {
    return this.hydrationFiltered.find(obj => obj.date === day).numOunces; 
  }

  findWeeklyWaterCons() {
    return this.ouncesPerDay.slice((-7));
  }

}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}