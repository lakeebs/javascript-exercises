const leapYears = function(year) {

    if( (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ) {
        return true;
    } else {
        return false;
    }

};

// leapYears(2000) // is a leap year: returns true
// leapYears(1985) // is not a leap year: returns false

// Leap years are years divisible by four (like 1984 and 2004). 
// However, years divisible by 100 are not leap years (such as 
// 1800 and 1900) unless they are divisible by 400 (like 1600 and
// 2000, which were in fact leap years).

// use an `if` statement and `&&` to make sure all the 
// conditions are met properly

// Do not edit below this line
module.exports = leapYears;
