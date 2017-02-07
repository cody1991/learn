// 正则表达式可以看这个网站
// https://regexper.com/#%2F%5Cb%5Cd%2B%20(pig%7Ccow%7Cchicken)s%3F%5Cb%2F

// Regular expression objects have a number of methods. The simplest one is test. If you pass it a string, it will return a Boolean telling you whether the string contains a match of the pattern in the expression.
console.log(/abc/.test('abcde'))
console.log(/abc/.test('abxde'))

// In a regular expression, putting a set of characters between square brackets makes that part of the expression match any of the characters between the brackets.

// Within square brackets, a dash (-) between two characters can be used to indicate a range of characters, where the ordering is determined by the character’s Unicode number. Characters 0 to 9 sit right next to each other in this ordering (codes 48 to 57), so [0-9] covers all of them and matches any digit.
console.log(/[0123456789]/.test("in 1992"))
console.log(/[0-9]/.test("in 1992"))

// \d [0-9]
// \w word character
// \s whitespace character: space tab newline
// \D not [0-9]
// \W not word character
// \S not whitespace character
// . any character except for newline

// match like 30-01-2003 15:20

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/
console.log(dateTime.test('30-01-2003 15:20'))
console.log(dateTime.test('30-jan-2003 15:20'))

// These backslash codes can also be used inside square brackets. For example, [\d.] means any digit or a period character. But note that the period itself, when used between square brackets, loses its special meaning. The same goes for other special characters, such as +.

// To invert a set of characters—that is, to express that you want to match any character except the ones in the set—you can write a caret (^) character after the opening bracket.
let notBinary = /[^01]/
console.log(notBinary.test('1100100010100110'))
console.log(notBinary.test('11202'))

// When you put a plus sign (+) after something in a regular expression, it indicates that the element may be repeated more than once. Thus, /\d+/ matches one or more digit characters.

// The star (*) has a similar meaning but also allows the pattern to match zero times. Something with a star after it never prevents a pattern from matching—it’ll just match zero instances if it can’t find any suitable text to match.
console.log(/'\d+'/.test("'123'"))
console.log(/'\d+'/.test("''"))
console.log(/'\d*'/.test("'123'"))
console.log(/'\d*'/.test("''"))

// A question mark makes a part of a pattern “optional”, meaning it may occur zero or one time. In the following example, the u character is allowed to occur, but the pattern also matches when it is missing.
let neighbor = /neighbou?r/
console.log(neighbor.test('neighbour'))
console.log(neighbor.test('neighbor'))

// To indicate that a pattern should occur a precise number of times, use curly braces. Putting {4} after an element, for example, requires it to occur exactly four times. It is also possible to specify a range this way: {2,4} means the element must occur at least twice and at most four times.

dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/
console.log(dateTime.test("30-1-2003 8:45"))

// You can also specify open-ended ranges when using curly braces by omitting the number after the comma. So {5,} means five or more times.

// To use an operator like * or + on more than one element at a time, you can use parentheses. A part of a regular expression that is enclosed in parentheses counts as a single element as far as the operators following it are concerned.

// The first and second + characters apply only to the second o in boo and hoo, respectively. The third + applies to the whole group (hoo+), matching one or more sequences like that.

// The i at the end of the expression in the previous example makes this regular expression case insensitive, allowing it to match the uppercase B in the input string, even though the pattern is itself all lowercase.
let cartoonCrying = /boo+(hoo+)+/i
console.log(cartoonCrying.test("Boohoooooooooohoohooo"))

// Regular expressions also have an exec (execute) method that will return null if no match was found and return an object with information about the match otherwise.

let match = /\d+/.exec('one two 100')

// [ '100', index: 8, input: 'one two 100' ]
console.log(match)
console.log(match.input)
console.log(match.index)

// An object returned from exec has an index property that tells us where in the string the successful match begins. Other than that, the object looks like (and in fact is) an array of strings, whose first element is the string that was matched—in the previous example, this is the sequence of digits that we were looking for.

// String values have a match method that behaves similarly.

// [ '100', index: 8, input: 'one two 100' ]
console.log('one two 100'.match(/\d+/))

// When the regular expression contains subexpressions grouped with parentheses, the text that matched those groups will also show up in the array. The whole match is always the first element. The next element is the part matched by the first group (the one whose opening parenthesis comes first in the expression), then the second group, and so on.
let quotedText = /'([^']*)'/

// [ '\'hello\'', 'hello', index: 9, input: 'she said \'hello\'' ]
console.log(quotedText.exec("she said 'hello'"))

// When a group does not end up being matched at all (for example, when followed by a question mark), its position in the output array will hold undefined. Similarly, when a group is matched multiple times, only the last match ends up in the array.
// [ 'bad', undefined, index: 0, input: 'bad' ]
console.log(/bad(ly)?/.exec('bad'))

// ['123', '3', index: 0, input: '123']
console.log(/(\d)+/.exec("123"))

// Groups can be useful for extracting parts of a string. If we don’t just want to verify whether a string contains a date but also extract it and construct an object that represents it, we can wrap parentheses around the digit patterns and directly pick the date out of the result of exec.

// ------------
// date type
// ------------

// JavaScript uses a convention where month numbers start at zero (so December is 11), yet day numbers start at one. This is confusing and silly. Be careful.

// The last four arguments(hours, minutes, seconds, and milliseconds) are optional and taken to be zero when not given.

// Mon Feb 06 2017 22:40:33 GMT+0800 (CST)  浏览器里面
// 2017-02-06T14:38:08.645Z  nodejs 里面
console.log(new Date())

// Wed Dec 09 2009 00:00:00 GMT+0800 (CST)
// 2009-12-08T16:00:00.000Z
console.log(new Date(2009, 11, 9))

// Wed Dec 09 2009 12:59:59 GMT+0800 (CST)
// 2009-12-09T04:59:59.999Z
console.log(new Date(2009, 11, 9, 12, 59, 59, 999))

// Timestamps are stored as the number of milliseconds since the start of 1970, using negative numbers for times before 1970 (following a convention set by “Unix time”, which was invented around that time). The getTime method on a date object returns this number. It is big, as you can imagine.

console.log(new Date(2013, 11, 19).getTime())
console.log(new Date(1387407600000))

// If you give the Date constructor a single argument, that argument is treated as such a millisecond count. You can get the current millisecond count by creating a new Date object and calling getTime on it but also by calling the Date.now function.

// Date objects provide methods like getFullYear, getMonth, getDate, getHours, getMinutes, and getSeconds to extract their components.

function findDate(string) {
  let dateTime = /(\d{1,2})-(\d{1,2})-(\d{4})/
  let match = dateTime.exec(string)

  console.log(match)

  return new Date(Number(match[3]), Number(match[2]) - 1, Number(match[1]))
}

console.log(findDate("30-1-2003"))
console.log(findDate("100-1-30000"))

// Unfortunately, findDate will also happily extract the nonsensical date 00-1-3000 from the string "100-1-30000". A match may happen anywhere in the string, so in this case, it’ll just start at the second character and end at the second-to-last character.

// If we want to enforce that the match must span the whole string, we can add the markers ^ and $. The caret matches the start of the input string, while the dollar sign matches the end. So, /^\d+$/ matches a string consisting entirely of one or more digits, /^!/ matches any string that starts with an exclamation mark, and /x^/ does not match any string (there cannot be an x before the start of the string).

// If, on the other hand, we just want to make sure the date starts and ends on a word boundary, we can use the marker \b. A word boundary can be the start or end of the string or any point in the string that has a word character (as in \w) on one side and a nonword character on the other.

console.log(/cat/.test('concatenate'))
console.log(/\bcat\b/.test('concatenates'))

let animalCount = /\b\d+ (pig|cow|chicken)s?\b/
console.log(animalCount.test('15 pigs'))
console.log(animalCount.test("15 pigchickens"))

// Parentheses can be used to limit the part of the pattern that the pipe operator applies to, and you can put multiple such operators next to each other to express a choice between more than two patterns.
// [ '15 pigs', 'pig', index: 0, input: '15 pigs' ]
console.log(animalCount.exec('15 pigs'))

// /\b([01]+b|\d+|[\da-f]+h)\b/

console.log(/\b([01]+b|\d+|[\da-f]+h)\b/.exec("103"))

console.log(/^.*x/.exec('abcxe'))

// ---
// replace
// ---

console.log('papa'.replace('p', 'm'))
console.log('Borobudur'.replace(/[ou]/, 'a'))
console.log('Borobudur'.replace(/[ou]/g, 'a'))

// The $1 and $2 in the replacement string refer to the parenthesized groups in the pattern. $1 is replaced by the text that matched against the first group, $2 by the second, and so on, up to $9. The whole match can be referred to with $&.

console.log('Hopper, Grace\nMcCarthy, John\nRitchie, Dennis'.replace(/([\w ]+), ([\w ]+)/g, "$2 $1"))

let s = 'the cia and fbi'
console.log(s.replace(/\b(fbi|cia)\b/g, function (str) {
  return str.toUpperCase()
}))

let stock = '1 lemon, 2 cabbages, and 101 eggs'

// This takes a string, finds all occurrences of a number followed by an alphanumeric word, and returns a string wherein every such occurrence is decremented by one.

// The (\d+) group ends up as the amount argument to the function, and the (\w+) group gets bound to unit. The function converts amount to a number—which always works, since it matched \d+—and makes some adjustments in case there is only one or zero left.
function minusOne(match, amount, unit) {
  // 1 lemon
  // 2 cabbages
  // 101 eggs
  console.log(match)
  amount = Number(amount) - 1
  if (amount == 1) {
    unit = unit.slice(0, unit.length - 1)
  } else if (amount == 0) {
    amount = 'no'
  }
  return amount + " " + unit
}

console.log(stock.replace(/(\d+) (\w+)/g, minusOne))

// -----
// It isn’t hard to use replace to write a function that removes all comments from a piece of JavaScript code. Here is a first attempt:
// -----

function stripComments(code) {
  // The part before the or operator simply matches two slash characters followed by any number of non-newline characters. The part for multiline comments is more involved. We use [^] (any character that is not in the empty set of characters) as a way to match any character. We cannot just use a dot here because block comments can continue on a new line, and dots do not match the newline character.

  // return code.replace(/\/\/.*|\/\*[^]*\*\//g, "")
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "")
}

console.log(stripComments("1 + /* 2 */3"))
console.log(stripComments("x = 10;// ten!"))

// The [^]* part of the expression, as I described in the section on backtracking, will first match as much as it can. If that causes the next part of the pattern to fail, the matcher moves back one character and tries again from there. In the example, the matcher first tries to match the whole rest of the string and then moves back from there. It will find an occurrence of */ after going back four characters and match that. This is not what we wanted—the intention was to match a single comment, not to go all the way to the end of the code and find the end of the last block comment.

// Because of this behavior, we say the repetition operators (+, *, ?, and {}) are greedy, meaning they match as much as they can and backtrack from there. If you put a question mark after them (+?, *?, ??, {}?), they become nongreedy and start by matching as little as possible, matching more only when the remaining pattern does not fit the smaller match.
console.log(stripComments("1 /* a */+/* b */ 1"))

// ---
// RegExp
// ---

// There are cases where you might not know the exact pattern you need to match against when you are writing your code. Say you want to look for the user’s name in a piece of text and enclose it in underscore characters to make it stand out. Since you will know the name only once the program is actually running, you can’t use the slash-based notation.

// When creating the \b boundary markers, we have to use two backslashes because we are writing them in a normal string, not a slash-enclosed regular expression. The second argument to the RegExp constructor contains the options for the regular expression—in this case "gi" for global and case-insensitive.
let name = 'harry'
let text = 'Harry is a suspicious character.'
let regexp = new RegExp("\\b(" + name + ")\\b", "gi")
console.log(text.replace(regexp, "_$1_"))

// But what if the name is "dea+hl[]rd" because our user is a nerdy teenager? That would result in a nonsensical regular expression, which won’t actually match the user’s name.

// To work around this, we can add backslashes before any character that we don’t trust. Adding backslashes before alphabetic characters is a bad idea because things like \b and \n have a special meaning. But escaping everything that’s not alphanumeric or whitespace is safe.

name = 'dea+hl[]rd'
text = 'This dea+hl[]rd guy is super annoying'
let escaped = name.replace(/[^\w\s]/g, "\\$&")
console.log(escaped)
regexp = new RegExp("\\b(" + escaped + ")\\b", 'gi')
console.log(text.replace(regexp, "_$1_"))

// ----
// search
// ----
// The indexOf method on strings cannot be called with a regular expression. But there is another method, search, which does expect a regular expression. Like indexOf, it returns the first index on which the expression was found, or -1 when it wasn’t found.
console.log("  word".search(/\S/))
console.log("    ".search(/\S/))

// ---------

// The exec method similarly does not provide a convenient way to start searching from a given position in the string. But it does provide an inconvenient way.

// Regular expression objects have properties. One such property is source, which contains the string that expression was created from. Another property is lastIndex, which controls, in some limited circumstances, where the next match will start.

// Those circumstances are that the regular expression must have the global (g) option enabled, and the match must happen through the exec method. Again, a more sane solution would have been to just allow an extra argument to be passed to exec, but sanity is not a defining characteristic of JavaScript’s regular expression interface.
{
  let pattern = /y/g
  pattern.lastIndex = 3

  let match = pattern.exec('xyzzy')

  // [ 'y', index: 4, input: 'xyzzy' ]
  console.log(match)

  // 4
  console.log(match.index)

  // 5
  console.log(pattern.lastIndex)
}

// If the match was successful, the call to exec automatically updates the lastIndex property to point after the match. If no match was found, lastIndex is set back to zero, which is also the value it has in a newly constructed regular expression object.

// When using a global regular expression value for multiple exec calls, these automatic updates to the lastIndex property can cause problems. Your regular expression might be accidentally starting at an index that was left over from a previous call.

{
  let digit = /\d/g

  // [ '1', index: 12, input: 'here it is: 1' ]
  // null
  console.log(digit.exec('here it is: 1'))
  console.log(digit.exec("and now:1"))

}

// Another interesting effect of the global option is that it changes the way the match method on strings works. When called with a global expression, instead of returning an array similar to that returned by exec, match will find all matches of the pattern in the string and return an array containing the matched strings.

// [ 'an', 'an' ]
// [ 'an', index: 1, input: 'Banana' ]
console.log('Banana'.match(/an/g))
console.log(/an/g.exec('Banana'))

{
  let input = 'A string with 3 numbers in it... 42 and 88.'
  let number = /\b(\d+)\b/g

  // [ '3', '42', '88' ]
  console.log(input.match(number))

  let match

  // This makes use of the fact that the value of an assignment expression (=) is the assigned value. So by using match = number.exec(input) as the condition in the while statement, we perform the match at the start of each iteration, save its result in a variable, and stop looping when no more matches are found.
  while (match = number.exec(input)) {
    console.log(number.lastIndex)
    console.log('Found', match[1], 'at', match.index)

    // 15
    // Found 3 at 14
    // 35
    // Found 42 at 33
    // 42
    // Found 88 at 40
  }

  console.log(number.lastIndex)
}

let ini = `searchengine=http://www.google.com/search?q=$1
spitefulness=9.7

; comments are preceded by a semicolon...
; each section concerns an individual enemy
[larry]
fullname=Larry Doe
type=kindergarten bully
website=http://www.geocities.com/CapeCanaveral/11451

[gargamel]
fullname=Gargamel
type=evil sorcerer
outputdir=/home/marijn/enemies/gargamel
`


function parseINI(string) {
  let currentSection = {
    name: null,
    fields: []
  }
  let categories = [currentSection]

  string.split(/\r?\n/).forEach(function (line) {
    let match

    // Note the recurring use of ^ and $ to make sure the expression matches the whole line, not just part of it. 

    // The pattern if (match = string.match(...)) is similar to the trick of using an assignment as the condition for while. You often aren’t sure that your call to match will succeed, so you can access the resulting object only inside an if statement that tests for this. To not break the pleasant chain of if forms, we assign the result of the match to a variable and immediately use that assignment as the test in the if statement.

    // First, it checks whether the line can be ignored, using the expression /^\s*(;.*)?$/. Do you see how it works? The part between the parentheses will match comments, and the ? will make sure it also matches lines containing only whitespace.
    // 空白的，或者 ; 开头的 都会被匹配上
    if (/^\s*(;.*)?$/.test(line)) {

      // 整段都是空白的话能匹配上
      // ; 后面跟着任何字符 也能匹配上，是一段注释

      return
    } else if (match = line.match(/^\[(.*)\]$/)) {

      // If the line is not a comment, the code then checks whether the line starts a new section. If so, it creates a new current section object, to which subsequent settings will be added.

      // ^\[   (.*)  \]$  中间是任意的字符 match[1]
      currentSection = {
        name: match[1],
        fields: []
      }
      categories.push(currentSection)
    } else if (match = line.match(/^(\w+)=(.*)$/)) {

      // The last meaningful possibility is that the line is a normal setting, which the code adds to the current section object.

      // (\w+) = (.*)  左边是属性名字 match[1] 右边是属性值 match[2]

      currentSection.fields.push({
        name: match[1],
        value: match[2]
      })
    } else {
      throw new Error('Line \'' + line + '\' is invalid.')
    }
  })

  return categories
}

let resultINI = parseINI(ini)

for (let i = 0; i < resultINI.length; i++) {
  let curItem = resultINI[i]
  console.log(curItem.name)

  for (let j = 0; j < curItem.fields.length; j++) {
    console.log(curItem.fields[j].name)
    console.log(curItem.fields[j].value)
  }
}

// ---
// ---
// ---

// Because of JavaScript’s initial simplistic implementation and the fact that this simplistic approach was later set in stone as standard behavior, JavaScript’s regular expressions are rather dumb about characters that do not appear in the English language. For example, as far as JavaScript’s regular expressions are concerned, a “word character” is only one of the 26 characters in the Latin alphabet (uppercase or lowercase) and, for some reason, the underscore character. Things like é or β, which most definitely are word characters, will not match \w (and will match uppercase \W, the nonword category).

// Summary

// /abc/ A sequence of characters
// /[abc]/ Any character from a set of characters
// /[^abc]/  Any character not in a set of characters
// /[0-9]/ Any character in a range of characters
// /x+/  One or more occurrences of the pattern x
// /x+?/ One or more occurrences, nongreedy
// /x*/  Zero or more occurrences
// /x?/  Zero or one occurrence
// /x{2,4}/  Between two and four occurrences
// /(abc)/ A group
// /a|b|c/ Any one of several patterns
// /\d/  Any digit character
// /\w/  An alphanumeric character (“word character”)
// /\s/  Any whitespace character
// /./ Any character except newlines
// /\b/  A word boundary
// /^/ Start of input
// /$/ End of input

// A regular expression has a method test to test whether a given string matches it. It also has an exec method that, when a match is found, returns an array containing all matched groups. Such an array has an index property that indicates where the match started.

// Strings have a match method to match them against a regular expression and a search method to search for one, returning only the starting position of the match. Their replace method can replace matches of a pattern with a replacement string. Alternatively, you can pass a function to replace, which will be used to build up a replacement string based on the match text and matched groups.
// Regular expressions can have options, which are written after the closing slash. The i option makes the match case insensitive, while the g option makes the expression global, which, among other things, causes the replace method to replace all instances instead of just the first.

// The RegExp constructor can be used to create a regular expression value from a string.
