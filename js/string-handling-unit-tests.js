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

// ----------- includes() Unit Tests -----------

const animals = ['cat', 'dog'];

console.log("should return true when checking if [\'cat\'] is included in the string list [\'cat\', \'dog\']: ",
    includes(animals, 'cat') ? "success" : "failed"
);

console.log("should return false when checking if [\'bird\'] is included in the string list [\'cat\', \'dog\']: ",
    includes(animals, 'bird') ? "failed" : "success"
);

// ----------- hasAnArabicCharacter() Unit Tests -----------
//TODO:

// ----------- getHttpsVersionOfURL() Unit Tests -----------

console.log("should return 'https://github.com/' when passing 'http://github.com/' to the getHttpsVersionOfURL function: ",
    getHttpsVersionOfURL("http://github.com/") === "https://github.com/" ? "success" : "failed"
);

console.log("should return 'https://github.com/' when passing 'https://github.com/' to the getHttpsVersionOfURL function: ",
    getHttpsVersionOfURL("https://github.com/") === "https://github.com/" ? "success" : "failed"
);

console.log("should return 'github.com/' when passing 'github.com/' to the getHttpsVersionOfURL function (no protocol case): ",
    getHttpsVersionOfURL("github.com/") === "github.com/" ? "success" : "failed"
);

console.log("should return an empty string when passing only whitespace to the getHttpsVersionOfURL function: ",
    getHttpsVersionOfURL("     ") === "" ? "success" : "failed"
);

// ----------- concatListAndSeparateByCommas() Unit Tests -----------

const listOfCars = ['Toyota', 'GMC', 'BMW'];
console.log("should return passed string list in the format \'string1, string2, ..., stringn\'': ",
    concatListAndSeparateByCommas(listOfCars) === 'Toyota, GMC, BMW' ? "success" : "failed"
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

// TODO:

//   // ----------- replaceSpecialCharactersWithUnderscore() Unit Tests -----------
//   it("should replace all special characters '\\s\\n\"'<>&' to undersocre when passing '     \n\n\"'<>&' to replaceSpecialCharactersWithUnderscore", () => {
//     expect(stringHandlingService.replaceSpecialCharactersWithUnderscore("     \n\n\"'<>&")).toBe("____________");
//   });

//   it("should replace all extra forbidden characters to underscore when passing ' \n'\"<>&!@#$%^*|(),?:{}[]' to replaceSpecialCharactersWithUnderscore", () => {
//     expect(stringHandlingService.replaceSpecialCharactersWithUnderscore(" \n'\"<>&!@#$%^*|(),?:{}[]")).toBe("________________________");
//   });

//   it("should replace non valid URL chars & forbidden characters with underscore when passing 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~:/?#[]@!$&'()*+,;={}|^' to replaceSpecialCharactersWithUnderscore", () => {
//     expect(stringHandlingService.replaceSpecialCharactersWithUnderscore
//       ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~:/?#[]@!$&'()*+,;={}|^"))
//       .toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~_/____________+_;=____");
//   });

//   // ----------- replaceNonValidURLCharsWithSymbol() Unit Tests -----------
//   it("should replace non valid URL chars with underscore when passing 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~:/?#[]@!$&'()*+,;={}|^' to replaceNonValidURLCharsWithSymbol", () => {
//     expect(stringHandlingService.replaceNonValidURLCharsWithSymbol("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~:/?#[]@!$&'()*+,;={}|^", "_"))
//       .toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~:/?#[]@!$&'()*+,;=____");
//   });
