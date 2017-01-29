|| has the lowest precedence, then comes &&, then the comparison operators (>, ==, and so on), and then the rest

However, when null or undefined occurs on either side of the operator, it produces true only if both sides are one of null or undefined.

The rules for converting strings and numbers to Boolean values state that 0, NaN, and the empty string ("") count as false, while all the other values count as true. Because of this, expressions like 0 == false and "" == false are also true.
