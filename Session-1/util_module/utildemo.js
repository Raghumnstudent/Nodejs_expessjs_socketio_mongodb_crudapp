//The node. js "util" module provides some functions to print formatted strings as well as some 'utility' functions that are helpful for debugging purposes. Use require('util') to access these functions

/*utility functions are
debuglog()	Writes debug messages to the error object
deprecate()	Marks the specified function as deprecated
format()	Formats the specified string, using the specified arguments
inherits()	Inherits methods from one function into another
inspect()	Inspects the specified object and returns the object as a string */

var util = require('util')

var txt = 'welcome %s your id  Number is %d'
var result = util.format(txt,'Raghu',101)
console.log(result)