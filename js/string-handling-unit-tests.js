// ----------- isWhiteSpaceOnly Unit Tests -----------

console.log("should return false when passing a string that is not white space only & checking if its white space only: ",
    isWhiteSpaceOnly('hello everybody!') ? "failed" : "success"
);

console.log("should return true when passing a string that is white space only & checking if its white space only: ",
    isWhiteSpaceOnly('       ') ? "success" : "failed"
);

// ----------- getFirstWord() Unit Tests -----------

console.log("should return first word of string when requesting first word and passing a non-empty string: ",
    getFirstWord('   Ahmed    Saleh Algamdi') === ('Ahmed') ? "success" : "failed"
);

console.log("should return empty string when requesting first word but passing an empty string: ",
    getFirstWord('   ') === '' ? "success" : "failed"
);

// ----------- concatListAndSeparateByCommas() Unit Tests -----------

const listOfCars = ['Toyota', 'GMC', 'BMW'];
console.log("should return passed string list in the format \'string1, string2, ..., stringn\'': ",
    concatListAndSeparateByCommas(listOfCars) === 'Toyota, GMC, BMW' ? "success" : "failed"
);

// ----------- escapeRegExp() Unit Tests -----------

console.log("should escape the regular expression \'.*+?^${}()\\ \\\\ \' and return \'\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\\\ \\\\\\\\\': ",
    escapeRegExp('.*+?^${}()\\ \\\\ \'') === '\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\\\ \\\\\\\\ \'' ? "success" : "failed"
);

// ----------- includes() Unit Tests -----------

const animals = ['cat', 'dog'];

console.log("should return true when checking if [\'cat\'] is included in the string list [\'cat\', \'dog\']: ",
    includes(animals, 'cat') ? "success" : "failed"
);

console.log("should return false when checking if [\'bird\'] is included in the string list [\'cat\', \'dog\']: ",
    includes(animals, 'bird') ? "failed" : "success"
);

// ----------- getFirstAndLastWord() Unit Tests -----------

console.log("should return first and last of string when requesting first word and last word and passing a non-empty string",
    getFirstAndLastWord('   Ahmed    Saleh Aymen Raed Algamdi') === 'Ahmed Algamdi' ? "success" : "failed"
);

console.log("should return empty string when requesting first word and last word but passing an empty string: ",
    getFirstAndLastWord('   ') === '' ? "success" : "failed"
);

// ----------- escapeNonEscapedSymbols() Unit Tests -----------

console.log("should return '\"The ocean's blue < & > \"' when passing '&quot; The ocean&apos;s blue &lt; &amp; &gt; &quot;': ",
    escapeNonEscapedSymbols("&quot; The ocean&apos;s blue &lt; &amp; &gt; &quot;") === "\" The ocean's blue < & > \"" ?
        "success" : "failed"
);

// ----------- removeFileNameExtension() Unit Tests -----------

console.log("should return '\"file.name-file.name\"' when passing '\"file.name-file.name.png\"' to the removeFileNameExtension from filename: ",
    removeFileNameExtension("file.name-file.name.png") === "file.name-file.name" ? "success" : "failed"
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

// ----------- extractPathFromURL() Unit Tests -----------

console.log("should return '/pathname/p1/p2/p3' when passing 'https://hostname.com/pathname/p1/p2/p3?q1=1&q2=2' to the extractPathFromURL function: ",
    extractPathFromURL("https://hostname.com/pathname/p1/p2/p3?q1=1&q2=2") === "/pathname/p1/p2/p3" ? "success" : "failed"
);

console.log("should return '/pathname/p1/p2/p3' when passing 'https://hostname.com:portname/pathname/p1/p2/p3?q1=1&q2=2' to the extractPathFromURL function: ",
extractPathFromURL("https://hostname.com:portname/pathname/p1/p2/p3?q1=1&q2=2") === "/pathname/p1/p2/p3"? "success" : "failed"
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

// ----------- getHttpsVersionOfURL() Unit Tests -----------

console.log("should return 'http://github.com/' when passing 'https://github.com/' to the getHttpsVersionOfURL function: ",
    getHttpsVersionOfURL("http://github.com/") === "https://github.com/" ? "success" : "failed"
);

console.log("should return 'https://github.com/' when passing 'https://github.com/' to the getHttpsVersionOfURL function: ",
    getHttpsVersionOfURL("https://github.com/") === "https://github.com/" ? "success" : "failed"
);