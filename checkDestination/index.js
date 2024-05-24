
function checkDestination(paths) {
    const departureCities = new Set();
    const arrivalCities = new Set();
    
    for (const [departure, arrival] of paths) {
        departureCities.add(departure);
        arrivalCities.add(arrival);
    }
    
    for (const city of arrivalCities) {
        if (!departureCities.has(city)) {
            return city;
        }
    }
    
    return null; 
}


exports.checkDestination = checkDestination;
