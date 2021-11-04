const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(listOfDrivers, firstName){
    return listOfDrivers.filter (function(drivers){
        return drivers.toLowerCase() === firstName.toLowerCase()
    })
}

function fuzzyMatch(listOfDrivers,letters) {
    return listOfDrivers.filter((drivers) => drivers.toLowerCase().indexOf(letters.toLowerCase()) === 0)
}

function matchName(listOfDrivers, firstName){
    return listOfDrivers.filter (function(drivers){
        return drivers.name === firstName
    })
}