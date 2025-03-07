// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(array) {  
    return array.slice(0, 2); 
};

const returnLastTwoDrivers = function(array){
return array.slice(2, 5);
};
console.log(returnLastTwoDrivers(drivers));

const selectingDrivers =[
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];

const createFareMultiplier = function(value){
   return function faremultiplier(fare){
        return fare*value
    }
}

const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(800))

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(800))
 
 function selectDifferentDrivers(drivers, selectingDrivers){
return selectingDrivers(drivers)

 }
