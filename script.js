function indexOfIgnoreCase(str, subStr) {
    // Convert both strings to lower case for case-insensitive comparison
    var lowerStr = str.toLowerCase();
    var lowerSubStr = subStr.toLowerCase();

    // Find the first occurrence of the lowercased subStr in the lowercased str
    var index = lowerStr.indexOf(lowerSubStr);

    return index;
}

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var mainString = document.getElementById('mainString').value;
    var subString = document.getElementById('subString').value;
    var result = indexOfIgnoreCase(mainString, subString);

    document.getElementById('result').innerText = 'Result: ' + result;
});
