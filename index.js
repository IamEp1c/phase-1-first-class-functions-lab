
function returnFirstTwoDrivers(drivers){
    return (drivers.slice(0, 2))
}

function returnLastTwoDrivers(drivers){
    return (drivers.slice(-2))
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number){
    return function(value){
        return number * value
    }
}

function fareDoubler(number){
    return number * 2
}

function fareTripler(number){
    return number * 3
}

function selectDifferentDrivers(drivers, returnLastTwoDrivers){
    return returnLastTwoDrivers(drivers)
}

// selectDifferentDrivers(drivers)