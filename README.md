# FitLit 

Project By:
Allison Wagner [GitHub Account](https://github.com/allisonjw)
Victor Abraham [GitHub Account](https://github.com/VPAbraham)

Link to the project [GitHub Repo](https://github.com/allisonjw/fitlit-starter-kit)

## Description

FitLit is the second project for Module 2 students at Turning School of Software and Design. The goal of this project was to create a data dashboard for an activity tracker based on a multiple provided data bases. We were challenged to present a useful dashboard for a user to view and see their latest activity data, goals and milestones. As well as to compare their activity to other users. The final product should be modular, reusable code that follows SRP(Single Responsibility Principle). All while using object and array protoype methods to perform data manipulation.

## Languages and Packages Used

- HTML
- CSS
- TDD with Mocha and Chai
- jQuery
- charts.js
- masonry.js


## Data Model

Below are examples of the datasets we used for this project.

**Users**

```
[
  {
    "id": [number],
    "name": [string],
    "address": [string],
    "email": [string],
    "strideLength": [number - feet],
    "dailyStepGoal": [number - steps],
    "friends": [array - one-way connection to other user(s)]
  },
  ...more user data
]
```

**Activity**

```
[
  {
    "userID": [number],
    "date": [string YYYY/MM/DD],
    "numSteps": [number - steps],
    "minutesActive": [number - minutes],
    "flightsOfStairs": [number - flights]
  },
  ...more activity data
]
```

**Hydration**

```
[
  {
    "userID": [number],
    "date": [string YYYY/MM/DD],
    "numOunces": [number - ounces]
  },
  ...more hydration data
]
```

**Sleep**

```
[
  {
    "userID": [number],
    "date": [string YYYY/MM/DD],
    "hoursSlept": [number - hours],
    "sleepQuality": [number - unitless]
  },
  ...more sleep data
]
```


Screen Image
![FitLit Site Screen](https://user-images.githubusercontent.com/30779453/63912684-f1563600-c9ea-11e9-91a8-46cdbfb232ba.png)

