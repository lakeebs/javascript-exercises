const findTheOldest = function(people) {

  return people.reduce((oldestPerson, currentPerson) => { // In the first iteration, the first item becomes the total. In this case, the first person becomes the oldest person.
    const oldestAge = (oldestPerson.yearOfDeath - oldestPerson.yearOfBirth) || (new Date().getFullYear() - oldestPerson.yearOfBirth)
    const currentAge = (currentPerson.yearOfDeath - currentPerson.yearOfBirth) || (new Date().getFullYear() - currentPerson.yearOfBirth)
    return oldestAge > currentAge ? oldestPerson : currentPerson; // If oldestPerson's age is higher than the currentPerson's age, then return oldestPerson. If not, return currentPerson. The reduce method updates it's accumulated value "oldestPerson" with the new "oldestPerson", then restarts with the new iteration.
  });

};

// Do not edit below this line
module.exports = findTheOldest;