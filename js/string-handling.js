
/** Returns true if passed string contains white space only, returns false otherwise
 * @param {String} text - string to test
 * @returns {Boolean} test result
 */
function isWhiteSpaceOnly(text) {

    const noWhiteSpaceInput = text.replace(/\s/g, ""); // replace white space with empty string

    if (noWhiteSpaceInput === "") {
        return true;
    } else {
        return false;
    }
}

/** Returns the first word of a string
 * @param {String} text - string to test
 * @returns {String} if not whitespace only, returns first word of string. Otherwise, returns empty string
 */
function getFirstWord(text) {
    if (!this.isWhiteSpaceOnly(text)) {
        // create a list of all words in text,
        const stringBrokenIntoArray = text.match(/\S+/g); /* '\S: matching anything except a whitespace
      (newline, tab, space) - is the negation of \s*/

        // extract first word in text
        return stringBrokenIntoArray[0];
    } else {
        return "";
    }
}

/** Returns a concatinated string, of the passed list of strings, seperated by a comma then space
 * @param {Array} listOfStrings - a list of strings to concat
 * @returns {String} Returns a string of all strings in the list concatinated and seperated by a comma then space
 * in the format "string 1, string 2, ..., string n"
 */
function concatListAndSeparateByCommas(listOfStrings) {
    const commaThenSpace = ", ";
    let concatinatedString = "";

    // process all string in list and concatinate them
    for (let i = 0; i < listOfStrings.length; i++) {
        // if its the beginning, do not add the comma
        if (i === 0) {
            concatinatedString = concatinatedString.concat(listOfStrings[i]);
        } else { // if its not the first string, prefix it with ", "
            concatinatedString = concatinatedString.concat(commaThenSpace.concat(listOfStrings[i]));
        }
    }

    return concatinatedString;
}

/** Returns escaped regular expression so that its treated as a literal string within a regular expression as that would
 * otherwise be mistaken for a special character
 * @param {String} regExpString - the regular expression as string
 * @returns {String} Returns the escaped regular expression string
 */
function escapeRegExp(regExpString) {
    /*
    []: matches any one of the characters in the brackets
    |: OR
    */
    return regExpString.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

/** Returns a string of the passed string with both single and double quotation escaped
 * @param {String} text - the text to proccess
 * @returns {String} text where single and double quotations are escaped
 */
function escapeNonEscapedSymbols(text) {
    text = text.replace(/&quot;/g, "\"") // g for global match (to not stop at first match)
        .replace(/&apos;/g, "\'") // g for global match (to not stop at first match)
        .replace(/&lt;/g, "<") // g for global match (to not stop at first match)
        .replace(/&amp;/g, "&") // g for global match (to not stop at first match)
        .replace(/&gt;/g, ">"); // g for global match (to not stop at first match)

    return text;
}

/** Determines whether a list of string contain a certain value
 * @param {Array} list - the list to search in
 * @param {String} value - the value to search for in list
 * @returns {Boolean} Returns whether the value exists in the list or not
 */
function includes(list, value) {
    // Note: cannot use built in function "includes" as its not supported by IE

    // traverse all list items
    for (let i = 0; i < list.length; i++) {
        // if any element matches the passed value, return true
        if (list[i] === value) {
            return true;
        }
    }
    // if no element matches the passed value, return false
    return false;
}

/** Returns the first and last word in a string
 * @param {String} text - string to test
 * @returns {String} if not whitespace only, returns first and last word of string. Otherwise, returns empty string
 */
function getFirstAndLastWord(text) {
    if (!this.isWhiteSpaceOnly(text)) {
        // create a list of all words in text,
        const stringBrokenIntoArray = text.match(/\S+/g); /* '\S: matching anything except a whitespace 
      (newline, tab, space) - is the negation of \s*/

        let stringToReturn = stringBrokenIntoArray[0];

        // if string contains more than word, add the last one
        if (stringBrokenIntoArray.length > 1) {
            stringToReturn = stringToReturn + " " + stringBrokenIntoArray[stringBrokenIntoArray.length - 1];
        }

        // extract first and last word only
        return stringToReturn;
    } else {
        return "";
    }
}

/** Returns the passed file name wihtout the file's extension
 * @param {String} filename - the text to proccess
 * @returns {String} the filename without the extension
 */
function removeFileNameExtension(filename) {
    const fileNameAsAnArray = filename.split("."); // [filename, extension]
    const fileNameWithoutExtension = fileNameAsAnArray.slice(0, -1).join("."); // -1 being the last element
    return fileNameWithoutExtension;
}

/** Determines whether the passed text contains the passed prefix as an
 * actual prefix
 * @param {String} text - the string to check if prefix is in it
 * @param {String} possiblePrefix - the possible prefix of text
 * @returns {Boolean} Returns whether the passed text contains the passed prefix as an
 * actual prefix
 */
function isPrefix(text, possiblePrefix) {
    if (text.length < possiblePrefix.length) {
        return false;
    }
    return text.includes(possiblePrefix) && text.substring(0, possiblePrefix.length) === possiblePrefix;
}

/** Extract the path from the passed URL & returns it
 * @param {String} url - the URL to extract the path from
 * @returns {String} Returns the extracted path
 */
function extractPathFromURL(url) {

    let path = "";

    // 1. Remove protocol [http, ftp, etc.] (if any) & remove hostname
    // 1.1. Split url to array by /
    const urlBrokenDownIntoListByBackslash = url.split("/");
    const numberOfEntriesBeforePathInList =
        (url.indexOf("//") > -1) ? // if protocol exist
            3 // as the list is ["https", "", "hostname", "path", ...]
            : // if it doesn't exist
            1; // as the list is ["hostname", "path", ...]

    // 1.2. Remove everything in the array before the path name
    urlBrokenDownIntoListByBackslash.splice(0, numberOfEntriesBeforePathInList);

    // 2. Recreate url with path only and possible query parameters
    // 2.1. Join the list
    path = urlBrokenDownIntoListByBackslash.join("/"); // if list is empty, it will return empty string
    // and if list contains one element, it will return a string of that element

    // 2.2. Remove query params (so ? and beyond) if any
    path = path.split("?")[0]; // If separator is not found or is omitted,
    // the array contains one element consisting of the entire string so [0]
    // will always work

    if (path === "") {
        return path;
    } else {
        return "/" + path;
    }
}

/** Returns the HTTPS version of the URL, if url is not https already
 * @param {String} url - the URL to process
 * @returns {String} Returns the HTTPS version of the passed url
 */
function getHttpsVersionOfURL(url) {
    return this.isPrefix(url, "https") ? url : url.replace("http", "https"); // replace replace first occurance only
}