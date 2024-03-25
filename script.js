function toCase(str) {
	if (!str) {
        return '-';
    }
    
    // Convert the string to lowercase and uppercase with '-' as the delimiter
    const lowerCase = str.toLowerCase();
    const upperCase = str.toUpperCase();
    
    // Return the combined string with '-' as the delimiter
    return lowerCase + '-' + upperCase;
  // write your code here
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
