
class User {
  constructor(userData) {
    this.userData = userData;
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.friends = userData.friends;
  }
  
  getFirstName() {
    let firstName = this.name.split(' ')[0];
    return firstName;
  }

}

if (typeof module !== 'undefined') {
  module.exports = User;
}