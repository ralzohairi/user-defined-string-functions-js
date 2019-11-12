// .:: User defined String functions implemented by ralzohairi ::.

/** Determines if passed string contains white space only
   * @param {String} text - string to test
   * @returns {Boolean} true if passed string contains white space only and false otherwise
   */
function isWhiteSpaceOnly(text) {

    // Replace all existing white space in string with an empty string
    const noWhiteSpaceInput = text.replace(/\s/g, ""); // Note: g is for global match (to not stop at first match)

    if (noWhiteSpaceInput === "") {
        return true;
    } else {
        return false;
    }
}

/** Determines if the first passed string contains the second passed string as a prefix
 * @param {String} text - the string to check it's prefix
 * @param {String} possiblePrefix - the possible prefix of text
 * @returns {Boolean} true if the first passed string contains the second passed
 * string as a prefix and false otherwise.
 */
function isPrefix(text, possiblePrefix) {
    // If the text is shorte, in length, than the passed possible prefix
    if (text.length < possiblePrefix.length) {
        return false;
    }

    // Otherwise, test if it contains the possible prefix
    return isIncludedInString(text, possiblePrefix) && text.substring(0, possiblePrefix.length) === possiblePrefix;

    // Note using the built in function includes as it's not supported in IE.
}

/** Returns the first word of a string
 * @param {String} text - string to test
 * @returns {String} the first word of the passed string, if string is not white space
 *  only. Otherwise, returns an empty string.
 */
function getFirstWord(text) {

    if (!this.isWhiteSpaceOnly(text)) {
        // create a list of all words in text using any white space as a breaking point
        const stringBrokenIntoArray = text.match(/\S+/g); /* '\S: matching anything except a whitespace
      (newline, tab, space) - "\S" is the negation of \s*/

        // extract first word in text
        return stringBrokenIntoArray[0];
    } else {
        return "";
    }
}

/** Returns the first and last word in a string
 * @param {String} text - string to test
 * @returns {String} the first and last word of the string, if string is not white space only.
 *  Otherwise, returns an empty string. However, If the string has only one word,
 * the output will be the first word only.
 */
function getFirstAndLastWord(text) {
    if (!this.isWhiteSpaceOnly(text)) {
        // create a list of all words in text using any white space as a breaking point
        const stringBrokenIntoArray = text.match(/\S+/g); /* '\S: matching anything except a whitespace
      (newline, tab, space) - is the negation of \s*/

        let stringToReturn = stringBrokenIntoArray[0];

        // if string contains more than one word, append the last word to the string to return
        if (stringBrokenIntoArray.length > 1) {
            stringToReturn = stringToReturn + " " + stringBrokenIntoArray[stringBrokenIntoArray.length - 1];
        }

        // extract first and last word only
        return stringToReturn;
    } else {
        return "";
    }
}

/** Returns the passed file name without the file's extension
 * @param {String} filename - the text to proccess
 * @returns {String} the passed string, that represents the file name,
 * without the extension, if the string is not whitespace only.
 * Otherwise, returns an empty string. If the file name has no extension,
 * the output is the file name as is.
 */
function removeFileNameExtension(filename) {
    if (!this.isWhiteSpaceOnly(filename)) {

        const fileNameAsAnArray = filename.split("."); // i.e. [filename, extension]

        // If filename has no extention, return it as is
        if (fileNameAsAnArray.length === 1) {
            return fileNameAsAnArray[0];
        }

        const fileNameWithoutExtension = fileNameAsAnArray.slice(0, -1).join("."); // -1 being the last element,
        // therefore, remove the last element but join everything else (in the case of filename.x.js)
        return fileNameWithoutExtension;
    } else {
        return "";
    }
}

/** Extracts the path from the passed URL & returns it
 * @param {String} url - the URL to extract the path from
 * @returns {String} the path of the passed URL, whether or not it contains a protocol,
 *  a port and/or query parameters. An empty string is returned if the URL contains no path
 *  or if it contains whitespace only.
 */
function extractPathFromURL(url) {

    if (!this.isWhiteSpaceOnly(url)) {

        let path;

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
    } else {
        return "";
    }
}

/** Determines whether a string includes another string within it
 * @param {String} string1 - the string to test whether it includes string2
 * @param {String} string2 - the string to test whether it's included in string1
 * @returns {Boolean} true if string2 is included in string 1 and false otherwise
 */
function isIncludedInString(string1, string2) {
    // Note: cannot use built in string function "includes" as its not supported by IE
    return string1.indexOf(string2) !== -1;
}

/** Determines whether a list of strings contain a particular string
 * @param {Array} list - the list to search in
 * @param {String} value - the value to search for in list
 * @returns {Boolean} true if the passed list contains the string value and false otherwise
 */
function isIncludedInStringList(list, value) {
    // Note: cannot use built in array function "includes" as its not supported by IE

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

/** Returns whether the passed text contains at least one arabic character or not
 * @param {String} text - the text to test
 * @returns {Boolean} Returns whether the passed text containts at least one Arabic
 * character
 */
function hasAnArabicCharacter(text) {
    // Define the arabic char unicode range: u0600-\u06FF as a regular expression
    const arabicCharUnicodeRange = /[\u0600-\u06FF]/;
    // Brackets: matches any one of the characters in the brackets
    // -: defines a range (period)
    // \u: Matches the character with the Unicode value hhhh (hexadecimal digits)

    // Return whether at least one of the text string's characters match the regular expression
    return arabicCharUnicodeRange.test(text);
}

/** Returns the HTTPS version of the URL
 * @param {String} url - the URL to process
 * @returns {String} the HTTPS version of a URL if the string is not whitespace only.
 *  Otherwise, an empty string is returned. If the URL doesn't contain a protocol
 * or contains a different protocol than HTTP/HTTPS, the URL is returned as is.
 */
function getHttpsVersionOfURL(url) {
    if (!this.isWhiteSpaceOnly(url)) {
        url = url.toLowerCase();

        // CASE 1: If the url doesn't have a protocol or have a different protocol than HTTP/HTTPS
        if (!isIncludedInString(url, "http")) { // Note: not  using the built in function includes() as it's not supported in IE
            return url;
        }
        // CASE 2: If the protocol contains an HTTP/HTTPS protocol
        return this.isPrefix(url, "https") ? url : url.replace("http", "https"); // replace replace first occurance only
    } else {
        return "";
    }
}

/** Returns a concatenated string, of the passed list of strings, separated by the passed symbol
 * @param {Array} listOfStrings - a list of strings to concat
 * @param {String} seperatorSymbol - the symbol to use as a seperator i.e. ", "
 * @returns {String} a string of all strings in the list concatinated and seperated by the passed symbol
 * in the format "string 1(symbol)string 2(symbol)...(symbol)string n". If list is empty, an empty string is returned.
 */
function concatListAndSeparateBySymbol(listOfStrings, seperatorSymbol) {
    let concatinatedString = "";

    // process all string in list and concatinate them
    for (let i = 0; i < listOfStrings.length; i++) {
        // if its the beginning, do not add the symbol
        if (i === 0) {
            concatinatedString = concatinatedString.concat(listOfStrings[i]);
        } else { // if its not the first string, prefix it with the passed symbol
            concatinatedString = concatinatedString.concat(seperatorSymbol.concat(listOfStrings[i]));
        }
    }

    return concatinatedString;
}

/** Replaces the escaped XML characters in a string, if any,
 * with the corresponding non-escaped characters
 * @param {String} text - the text to proccess
 * @returns {String} the string where all escaped XML characters are replaced
 * by the corresponding non-escaped character.
 */
function replaceEscapedXMLCharactersWithNonEscapedCharacters(text) {
    text = text
        .replace(/&quot;/g, "\"")
        .replace(/&apos;/g, "\'")
        .replace(/&lt;/g, "<")
        .replace(/&amp;/g, "&")
        .replace(/&gt;/g, ">");
    // g for global match (to not stop at first match)

    return text;
}

/** Escapes all of the special characters, used in regular expression logic,
 * that exist in the passed string so when the string is used in a regular
 * expression, those characters will be treated as a part of the string rather
 * than a special character for the regEx logic
 * @param {String} regExpString - the regular expression as string
 * @returns {String} the passed string where all of the special characters
 *  of regular expressions are escaped, if any.
 */
function escapeSpecialCharactersOfRegExpInAString(regExpString) {
    /*
    []: matches any one of the characters in the brackets
    |: OR
    */
    return regExpString.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

/** Replaces white spaces, new lines, invalid URL characters and the symbols "'<>&[!@#$%^*(),?":{}|<>]
 *  with an underscore"
 * @param {String} text - the string to handle
 * @returns {String} Returns the string after replacing the special
 * characters with underscore
 */
function replaceSpecialCharactersWithUnderscore(text) {

    const symbol = "_";

    return this
        .replaceNonValidURLCharsWithSymbol(text, symbol) // replace non valid URL chars
        .replace(/[\s\n'"<>&\!\@#\$%\^\*\|\(\)\,\?\:\{\}\[\]]/g, symbol); // Replace additional special characters with
    // an underscore as well (if they still exist after URL): white space, new line, "'<>&[!@#$%^*(),?":{}|<>]

    /* Note special characters in regular expressions has to be escaped them with
     *  a \ to indicate I wanted a literal character. */
}

/** Replaces non-valid URL charatcers existing in the passed text with
 *  the passed symbol
 * @param {String} text - the string to handle
 * @returns {String} Returns the string after replacing any non-valid
 * URL characters with the passed symbol
 */
function replaceNonValidURLCharsWithSymbol(text, symbol) {

    // Replace any non-valid URL character with an underscore
    return text.replace(/[^a-zA-Z0-9-\._~\:\/\?#\[\]\@\!\$\&'\(\)\*\+\,\;\=]/g, symbol);

    // ^ in a char set: A negated or complemented character set. That is, it matches anything that is not enclosed in the brackets
    // None valid char list is anything that is not from the following list:
    // ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~:/?#[]@!$&'()*+,;=
}