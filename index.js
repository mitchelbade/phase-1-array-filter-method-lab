// Code your solution here

function findMatching(drivers, string) {
    const matchingListOfDrivers = drivers.filter(element => element.toLowerCase() == string.toLowerCase())
    return matchingListOfDrivers;
}

function fuzzyMatch(drivers, letter) {
    return drivers.filter(element => element.startsWith(letter))
}

function matchName(drivers, string) {
    return drivers.filter(element => element.name === string || element.hometown === string)
}