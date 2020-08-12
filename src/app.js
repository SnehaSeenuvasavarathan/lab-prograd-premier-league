//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [managerName, managerAge, currentTeam, trophiesWon];
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(arr) {
  if (arr.length == 0)
    return null;
  for (let i = 0; i < arr.length; i++)
    if (arr[i] == 'undefined')
      arr[i] = 'undefined';
  return { 'defender': arr[0], 'midfield': arr[1], 'forward': arr[2] };
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  let p = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].debut == year)
      p.push(players[i]);
  }
  return p;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  let p = [];
  let c = 0;
  if (position == 'undefined')
    return p;

  for (let i = 0; i < players.length; i++) {
    if (players[i].position == position) {
      p.push(players[i]);

    }
  }
  return p;
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  let p = [];
  if (awardName == 'undefined' || awardName == null)
    return p;
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName) {
        if (!(p.includes(players[i])))
          p.push(players[i]);
      }
    }

  }
  return p;
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  let p = [];
  let count = 0;
  if (awardName == 'undefined' || awardName == null || noOfTimes == 'undefined' || noOfTimes == null)
    return p;
  else {
    for (let i = 0; i < players.length; i++) {
      count = 0;
      for (let j = 0; j < players[i].awards.length; j++) {
        if (players[i].awards[j].name == awardName)
          count++;
      }
      if (count == 2)
        p.push(players[i]);
    }
  }
  return p;
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  let p = [];
  if (awardName == 'undefined' || awardName == null || country == 'undefined' || country == null)
    return p;
  for (let i = 0; i < players.length; i++) {
    if (players[i].country == country) {
      for (let j = 0; j < players[i].awards.length; j++) {
        if (players[i].awards[j].name == awardName)
          p.push(players[i]);
      }
    }
  }
  return p;
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  let p = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].team == team && players[i].age < age && players[i].awards.length >= noOfAwards)
      p.push(players[i]);

  }
  return p;
}
//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
