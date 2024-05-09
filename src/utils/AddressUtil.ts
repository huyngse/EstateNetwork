export function getLastTwoWords(str: string) {
    // Split the string into an array of words
    var words = str.split(", ");

    // Get the last two words from the array
    var lastTwoWords = words.slice(-2);

    // Return the last two words as a string
    return lastTwoWords.join(", ");
}

export function validateFullAddress(address: string) {
    // Check if the address is empty
    if (!address) {
      return false;
    }
  
    // Split the address into units
    const units = address.split(", ");
  
    // Check if there are at least 2 units
    if (units.length < 2) {
      return false;
    }
  
    // Check if any unit is empty
    for (let i = 0; i < units.length; i++) {
      if (!units[i].trim()) {
        return false;
      }
    }
  
    // All checks passed, address is valid
    return true;
  }