// ----------- isWhiteSpaceOnly Unit Tests -----------

console.log("should return false when passing a string that is not white space only & checking if its white space only: ",
    isWhiteSpaceOnly('hello everybody!') ? "failed" : "success"
);

console.log("should return true when passing a string that is white space only & checking if its white space only: ",
    isWhiteSpaceOnly('       ') ? "success" : "failed"
);

// ----------- isPrefix() Unit Tests -----------

console.log("should return true when passing the text '\"image/png\"' with a possible prefix as '\"image/\"' to the isPrefix function: ",
    isPrefix("image/png", "image/") ? "success" : "failed"
);

console.log("should return false when passing the text '\"document/image/png\"' with a possible prefix as '\"image/\"' to the isPrefix function: ",
    isPrefix("document/image/png", "image/") ? "failed" : "success"
);

console.log("should return true when passing the text '\"https\\x\\x\"' with a possible prefix as '\"https/\"' to the isPrefix function: ",
    isPrefix("https\\x\\x", "https") ? "success" : "failed"
);

console.log("should return false when passing the text '\"http\\x\\x\"' with a possible prefix as '\"https/\"' to the isPrefix function: ",
    isPrefix("  http\\x\\x", "https") ? "failed" : "success"
);

// ----------- getFirstWord() Unit Tests -----------

console.log("should return first word of string when requesting first word and passing a non-empty string: ",
    getFirstWord('   Ahmed    Saleh Algamdi') === ('Ahmed') ? "success" : "failed"
);

console.log("should return empty string when requesting first word but passing an empty string: ",
    getFirstWord('   ') === '' ? "success" : "failed"
);

// ----------- getFirstAndLastWord() Unit Tests -----------

console.log("should return first and last of string when requesting first word and last word and passing a non-empty string",
    getFirstAndLastWord('   Ahmed    Saleh Aymen Raed Algamdi') === 'Ahmed Algamdi' ? "success" : "failed"
);

console.log("should return empty string when requesting first word and last word but passing an empty string: ",
    getFirstAndLastWord('   ') === '' ? "success" : "failed"
);

// ----------- removeFileNameExtension() Unit Tests -----------

console.log("should return '\"file.name-file.name\"' when passing '\"file.name-file.name.png\"' to the removeFileNameExtension from filename: ",
    removeFileNameExtension("file.name-file.name.png") === "file.name-file.name" ? "success" : "failed"
);

console.log("should return '\"file.name-file.name\"' when passing '\"file.name-file.name\"' to the removeFileNameExtension from filename: ",
    removeFileNameExtension("filename-filename") === "filename-filename" ? "success" : "failed"
);

console.log("should return an empty string when passing a white space string the removeFileNameExtension from filename: ",
    removeFileNameExtension("    ") === "" ? "success" : "failed"
);

// ----------- extractPathFromURL() Unit Tests -----------

console.log("should return '/pathname/p1/p2/p3' when passing 'https://hostname.com/pathname/p1/p2/p3?q1=1&q2=2' to the extractPathFromURL function: ",
    extractPathFromURL("https://hostname.com/pathname/p1/p2/p3?q1=1&q2=2") === "/pathname/p1/p2/p3" ? "success" : "failed"
);

console.log("should return '/pathname/p1/p2/p3' when passing 'https://hostname.com:portname/pathname/p1/p2/p3?q1=1&q2=2' to the extractPathFromURL function: ",
    extractPathFromURL("https://hostname.com:portname/pathname/p1/p2/p3?q1=1&q2=2") === "/pathname/p1/p2/p3" ? "success" : "failed"
);

console.log("should return '/pathname/p1/p2/p3' when passing 'hostname.com:portname/pathname/p1/p2/p3?q1=1&q2=2' to the extractPathFromURL function: ",
    extractPathFromURL("hostname.com:portname/pathname/p1/p2/p3?q1=1&q2=2") === "/pathname/p1/p2/p3" ? "success" : "failed"
);

console.log("should return '/pathname/p1/p2/p3' when passing 'https://hostname.com:portname/pathname/p1/p2/p3?' to the extractPathFromURL function: ",
    extractPathFromURL("https://hostname.com:portname/pathname/p1/p2/p3?") === "/pathname/p1/p2/p3" ? "success" : "failed"
);

console.log("should return '/pathname/p1/p2/p3' when passing 'https://hostname.com:portname/pathname/p1/p2/p3' to the extractPathFromURL function: ",
    extractPathFromURL("https://hostname.com:portname/pathname/p1/p2/p3") === "/pathname/p1/p2/p3" ? "success" : "failed"
);

// no path name case
console.log("should return '' when passing 'https://hostname.com:portname/' to the extractPathFromURL function: ",
    extractPathFromURL("https://hostname.com:portname/") === "" ? "success" : "failed"
);

console.log("should return '' when passing 'https://hostname.com:portname' to the extractPathFromURL function: ",
    extractPathFromURL("https://hostname.com:portname") === "" ? "success" : "failed"
);

console.log("should return '' when passing 'hostname.com:portname/' to the extractPathFromURL function: ",
    extractPathFromURL("hostname.com:portname/") === "" ? "success" : "failed"
);

console.log("should return '' when passing 'hostname.com:portname' to the extractPathFromURL function: ",
    extractPathFromURL("hostname.com:portname") === "" ? "success" : "failed"
);

console.log("should return an empty string when passing a string of whitespace to the extractPathFromURL function: ",
    extractPathFromURL("    ") === "" ? "success" : "failed"
);

// ----------- isIncludedInString() Unit Tests -----------

console.log("should return true when checking if 'Pacific' is included in the string 'The Pacific Ocean': ",
    isIncludedInString("The Pacific Ocean", "Pacific") ? "success" : "failed"
);

console.log("should return false when checking if 'Pacific' is included in the string 'The Indian Ocean': ",
    !isIncludedInString("The Indian Ocean", "Pacific") ? "success" : "failed"
);

// ----------- isIncludedInStringList() Unit Tests -----------

const animals = ['cat', 'dog'];

console.log("should return true when checking if [\'cat\'] is included in the string list [\'cat\', \'dog\']: ",
    isIncludedInStringList(animals, 'cat') ? "success" : "failed"
);

console.log("should return false when checking if [\'bird\'] is included in the string list [\'cat\', \'dog\']: ",
    isIncludedInStringList(animals, 'bird') ? "failed" : "success"
);

// ----------- hasAnArabicCharacter() Unit Tests -----------

console.log("should return true when passing text that has at least one Arabic character to the hasAnArabicCharacter function: ",
    hasAnArabicCharacter("أ") &&
        hasAnArabicCharacter("آ") &&
        hasAnArabicCharacter("ا") &&
        hasAnArabicCharacter("إ") &&
        hasAnArabicCharacter("ب") &&
        hasAnArabicCharacter("ت") &&
        hasAnArabicCharacter("ث") &&
        hasAnArabicCharacter("ج") &&
        hasAnArabicCharacter("ح") &&
        hasAnArabicCharacter("خ") &&
        hasAnArabicCharacter("د") &&
        hasAnArabicCharacter("ذ") &&
        hasAnArabicCharacter("ر") &&
        hasAnArabicCharacter("ذ") &&
        hasAnArabicCharacter("س") &&
        hasAnArabicCharacter("ش") &&
        hasAnArabicCharacter("ص") &&
        hasAnArabicCharacter("ض") &&
        hasAnArabicCharacter("ط") &&
        hasAnArabicCharacter("ظ") &&
        hasAnArabicCharacter("ع") &&
        hasAnArabicCharacter("غ") &&
        hasAnArabicCharacter("ف") &&
        hasAnArabicCharacter("ق") &&
        hasAnArabicCharacter("ك") &&
        hasAnArabicCharacter("ل") &&
        hasAnArabicCharacter("م") &&
        hasAnArabicCharacter("ن") &&
        hasAnArabicCharacter("ه") &&
        hasAnArabicCharacter("و") &&
        hasAnArabicCharacter("ي") &&
        hasAnArabicCharacter("ى") &&
        hasAnArabicCharacter("ئ") &&
        hasAnArabicCharacter("ء") &&
        hasAnArabicCharacter("ة") &&
        hasAnArabicCharacter("ؤ") &&
        // Arabic symbols
        hasAnArabicCharacter("ّ") &&
        hasAnArabicCharacter("َ") &&
        hasAnArabicCharacter("ً") &&
        hasAnArabicCharacter("ِ") &&
        hasAnArabicCharacter("ٍ") &&
        hasAnArabicCharacter("ُ") &&
        hasAnArabicCharacter("ٌ") &&
        hasAnArabicCharacter("ْ") &&
        // Arabic numbers
        hasAnArabicCharacter("١") &&
        hasAnArabicCharacter("٢") &&
        hasAnArabicCharacter("٣") &&
        hasAnArabicCharacter("٤") &&
        hasAnArabicCharacter("٥") &&
        hasAnArabicCharacter("٦") &&
        hasAnArabicCharacter("٧") &&
        hasAnArabicCharacter("٨") &&
        hasAnArabicCharacter("٩") &&
        hasAnArabicCharacter("١٠") &&
        // Arabic punctuation
        hasAnArabicCharacter("؟") &&
        hasAnArabicCharacter("،") &&
        // A string with at least one Arabic character
        hasAnArabicCharacter("aأ") &&
        hasAnArabicCharacter("Zأ") &&
        hasAnArabicCharacter("0أ") &&
        hasAnArabicCharacter("9أ") &&
        hasAnArabicCharacter("9،") &&
        hasAnArabicCharacter("aZأ") ? "success" : "failed"
);

console.log("should return false when passing text that has no Arabic character to the hasAnArabicCharacter function: ",
    // Strings with not a single arabic character
    hasAnArabicCharacter("a") &&
        hasAnArabicCharacter("Z") &&
        hasAnArabicCharacter("0") &&
        hasAnArabicCharacter("9") &&
        hasAnArabicCharacter("?") &&
        hasAnArabicCharacter("!") &&
        hasAnArabicCharacter(".") &&
        hasAnArabicCharacter(",") ? "failed" : "success"
);

// ----------- getHttpsVersionOfURL() Unit Tests -----------

console.log("should return 'https://github.com/' when passing 'http://github.com/' to the getHttpsVersionOfURL function: ",
    getHttpsVersionOfURL("http://github.com/") === "https://github.com/" ? "success" : "failed"
);

console.log("should return 'https://github.com/' when passing 'hTtP://GITHUB.com/' to the getHttpsVersionOfURL function: ",
    getHttpsVersionOfURL("hTtP://GITHUB.com/") === "https://github.com/" ? "success" : "failed"
);

console.log("should return 'https://github.com/' when passing 'https://github.com/' to the getHttpsVersionOfURL function: ",
    getHttpsVersionOfURL("https://github.com/") === "https://github.com/" ? "success" : "failed"
);

console.log("should return 'https://github.com/' when passing 'HTTPS://GITHUB.com/' to the getHttpsVersionOfURL function: ",
    getHttpsVersionOfURL("HTTPS://GITHUB.com/") === "https://github.com/" ? "success" : "failed"
);

console.log("should return 'github.com/' when passing 'github.com/' to the getHttpsVersionOfURL function (no protocol case): ",
    getHttpsVersionOfURL("github.com/") === "github.com/" ? "success" : "failed"
);

console.log("should return 'github.com/' when passing 'GITHUB.com/' to the getHttpsVersionOfURL function (no protocol case): ",
    getHttpsVersionOfURL("GITHUB.com/") === "github.com/" ? "success" : "failed"
);

console.log("should return an empty string when passing only whitespace to the getHttpsVersionOfURL function: ",
    getHttpsVersionOfURL("     ") === "" ? "success" : "failed"
);

// ----------- concatListAndSeparateBySymbol() Unit Tests -----------

const listOfCars = ['Toyota', 'GMC', 'BMW'];
console.log("should return passed string list in the format \'string1, string2, ..., stringn\'': ",
    concatListAndSeparateBySymbol(listOfCars, ", ") === 'Toyota, GMC, BMW' ? "success" : "failed"
);

// ----------- replaceEscapedXMLCharactersWithNonEscapedCharacters() Unit Tests -----------

console.log("should return '\"The ocean's blue < & > \"' when passing '&quot; The ocean&apos;s blue &lt; &amp; &gt; &quot;': ",
    replaceEscapedXMLCharactersWithNonEscapedCharacters("&quot; The ocean&apos;s blue &lt; &amp; &gt; &quot;") === "\" The ocean's blue < & > \"" ?
        "success" : "failed"
);

console.log("should return the same string if a string of whitespace only is passed to replaceEscapedXMLCharactersWithNonEscapedCharacters(): ",
    replaceEscapedXMLCharactersWithNonEscapedCharacters("      ") === "      " ?
        "success" : "failed"
);

// ----------- escapeSpecialCharactersOfRegExpInAString() Unit Tests -----------

console.log("should escape the regular expression \'.*+?^${}()\\ \\\\ \' and return \'\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\\\ \\\\\\\\\': ",
    escapeSpecialCharactersOfRegExpInAString('.*+?^${}()\\ \\\\ \'') === '\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\\\ \\\\\\\\ \'' ? "success" : "failed"
);

// ----------- replaceSpecialCharactersWithUnderscore() Unit Tests -----------
console.log("should replace all special characters '\\s\\n\"'<>&' to undersocre when passing '     \n\n\"'<>&' to replaceSpecialCharactersWithUnderscore: ",
    replaceSpecialCharactersWithUnderscore("     \n\n\"'<>&") === "____________" ? "success" : "failed"
);

console.log("should replace all extra forbidden characters to underscore when passing ' \n'\"<>&!@#$%^*|(),?:{}[]' to replaceSpecialCharactersWithUnderscore: ",
    replaceSpecialCharactersWithUnderscore(" \n'\"<>&!@#$%^*|(),?:{}[]") === "________________________" ? "success" : "failed"
);

console.log("should replace non valid URL chars & forbidden characters with underscore when passing 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~:/?#[]@!$&'()*+,;={}|^' to replaceSpecialCharactersWithUnderscore: ",
    replaceSpecialCharactersWithUnderscore
        ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~:/?#[]@!$&'()*+,;={}|^") === "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~_/____________+_;=____" ?
        "success" : "failed"
);

console.log("should return string as is when it has no invalid URL chars and no forbidden characters to replaceSpecialCharactersWithUnderscore: ",
    replaceSpecialCharactersWithUnderscore("ab") === "ab" &&
        replaceSpecialCharactersWithUnderscore("") === "" ?
        "success" : "failed"
);

// ----------- replaceNonValidURLCharsWithSymbol() Unit Tests -----------
console.log("should replace non valid URL chars with underscore when passing 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~:/?#[]@!$&'()*+,;={}|^' to replaceNonValidURLCharsWithSymbol: ",
    replaceNonValidURLCharsWithSymbol("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~:/?#[]@!$&'()*+,;={}|^", "_") === "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~:/?#[]@!$&'()*+,;=____" ?
        "success" : "failed"
);
