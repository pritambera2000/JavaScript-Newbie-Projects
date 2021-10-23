# JavaScript Fundamentals
Documentation Of my JavaScript Practice

## Day-1
### Variables

- What is a Variable 
  - A variable is a container for a value
- Declaring a variable <br>
To use a variable we need to create a it.we can create/decleare a variable 
  - JavaScript has three kinds of variable declaration;
  - var; let; const; First we know about var and let
     
    ```JavaScript
    var myName;
    let myAge;
    console.log(myName) /*Returns 
    undefined(As we don't initialize 
    a value in that container(variable))*/          
    ```


- Initializing a variable <br>
After declearing a variable we need to store some value with in it , i.e called initializing .
     
     ```JavaScript
       var myName = "Pritam"
       let myAge = 20;
       console.log(myName); /*Returns Pritam*/

     ```
- The difference between var and let <br>
to know about the difference between var and let lets see more details in var and let
  - here come two more important topic 
    - variable hoisting 
    - variable scoping
let's see var first

  #### var
  The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value. lets see an example

    ```JavaScript
    var myAge = 18
    console.log(myAge); //returns 18
    if (myAge === 18){
       var myAge = 20
       console.log(myAge); //returns 20
    }
    console.log(myAge); //returns 20
    ```
  The last log we expected to be 18 . its not happen  because the redeclearation of ```myAge``` in the ```if```  statement chage the value and as the ```var``` is not a  block scoped its assigns the 20 value after the ```if```  block.

   #### let
   The let statement declares a block-scoped local variable, optionally initializing it to a value


    ```JavaScript
    let myAge = 18
    console.log(myAge); //returns 18
    if (myAge === 18){
       let myAge = 20
       console.log(myAge); //returns 20
    }
    console.log(myAge); //returns 18
    ```
    In this case , as the let variable is block scoped so the value 20 for the ```myAge``` variable is blocked in the ```if``` statement. the global (outside of the if block) value is remain unchaged.

    #### About variable Scope
    variables have two scopes which also differs var and let(discussed above) ; i.Local variable ii. Global variable <br>
 i. Global variable :- When you declare a variable outside of any function, it is called a global variable, because it is available to any other code in the current document<br>
```JavaScript
  if(true){
     var myAge = 18;
     console.log(myAge); //returns 18;
  }
  console.log(myAge);//returns 18;
  /*as i use "var" so the scope of
   myage is not limited in the
  if block i.e it is in the global scope,
   thats why it returns 18 after teh block*/
```

 ii.Local Variable:-When you declare a variable within a function, it is called a local variable, because it is available only within that function.


```JavaScript
  if(true){
     let myAge = 18;
     console.log(myAge); //returns 18;
  }
  console.log(myAge);//through a reference error;
  
  /*as let is block scoped it returns value in the
  if block but in the global scope is throgh a reference error*/
```
   ####  Variable Hoisting
   Another unusual thing about variables in JavaScript is that you can refer to a variable declared later, without getting an exception. <br>
   This concept is known as hoisting. Variables in JavaScript are, in a sense, "hoisted" (or "lifted") to the top of the function or statement. However, variables that are hoisted return a value of ```undefined```. So even if you declare and initialize after you use or refer to this variable, it still returns ```undefined```. <br>
   ** Because variable declarations (and declarations in general) are processed before any code is executed, and memory is allocated for each var , if in the var is no value its showed undefined ** <br>
```JavaScript
    function do_something() {
    console.log(bar); // undefined
    var bar = 111;
    console.log(bar); // 111
    }
    do_something()
    /*another eg.*/
    console.log(x); // undefined
    var x = 3;
```



   ** Hoisting no longer works with ```let```. If we changed var to ```let``` in the above example, it would fail with an error.```because the variable is in a "temporal dead zone" from the start of the block until the declaration is processed.``` This is a good thing — declaring a variable after you initialize it results in confusing, harder to understand code. **

   ```JavaScript
    function do_something() {
    console.log(bar); // Uncaught ReferenceError;
    let bar = 111;
    console.log(bar); 
    }
    do_something()
     /*another eg.*/
    console.log(x); // ReferenceError
    let x = 3;
```
- apert from scope secondly, when you use var, you can declare the same variable as many times as you like, but with let you can't. The following would work:

 ```JavaScript
   var myName = 'Pritam';
   var myName = 'Swapna'; //no error

   let myName = 'Pritam';
   let myName = 'Swapna'; //error
````
#### Updating a variable
Once a variable has been initialized with a value, you can change (or update) that value by giving it a different value.


 ````JavaScript
    let myName = 'Pritam';
    myName = 'Swapna'; //updated value pritam to swapna
````

# Day -2

## Data Types 

There are two main datatypes in JS (i)Primitives (ii)Objects

(i)Primitives Data Types are 7 types 

```Boolean :``` They  are ```true``` or ```false```

```Number :``` An Integer or Floating point number . e.g 32 or 32.123 . Integers are limited by ```±(2 to the power 53 - 1)```
 
 ```String :```  for strings. A string may have zero or more characters, there’s no separate single-character type.

 ```BigInt : ``` An integer with arbitrary precision. For example: 9007199254740992n.

 ```undefined :``` A top-level property whose value is not defined.

 ```null : ``` A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)

 ```symbol : ```      A data type whose instances are unique and immutable.

(ii) Objects willbe discussed Later.

Examples of primitives 
****
#### Boolean
   booleans are two types true or false  ; This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

````JavaScript
    let userLogIn = true; // yes , user loggedIn
    let userSignUp = false; // false , user not signed In

    let isGreater = 4 > 5;
    console.log(isGreater); // false
    let isLess = 4 < 5;
    console.log(isLess); // true;

````
****
 #### Number
  The number type represents both integer and floating point numbers.

  Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN. 

  NaN represents a computational error.

```JavaScript
let int = 786; // Integer
let float = 77.5698; // Floating point

let inf = (1/0);
console.log(inf); // Infinity
let noNumber = ("pritam"/2); 
console.log(noNumber); /*  NaN ("pritam" is not a number so it returns 
a computaional error)*/
``` 
****
#### String
A string in JavaScript must be surrounded by quotes.
There are three kinds of quotes (i) Single quotes ```' '``` , (ii) Double quotes ```" "``` (iii) backticks ``` ` ` ```   ; charaters inside these quotes are strings

```JavaScript
let firstName = "Pritam"; // Double Quoted String 
let lastName = "Bera"; //Single Quoted String
let fullName = ` Your Full Name is ${firstName} ${lastName}`; // Backticks Strings

console.log(fullName); //  Your Full Name is Pritam Bera
```
More About Strings Discussed Later;

****

#### BigInt

A BigInt value is created by appending n to the end of an integer:

```JavaScript
const bigInt = 1234567890123456789012345678901234567890n;
```
****

#### undefined

The meaning of undefined is “value is not assigned”.

If a variable is declared, but not assigned, then its value is undefined:

*** undefined is different from reference error . 
if variable is decleared but not value is assigened to it then it is ```undefined``` but if the variable is not decleard then it throughs ```reference error``` ***
```JavaScript
let country;
console.log(country); // undefied coz no value is assigened to country

console.log(state); // Uncaught ReferenceError: state is not defined state is decleared as a variable;
```

***
#### null 

It’s just a special value which represents “nothing”, “empty” or “value unknown”.
```JavaScript
let hobby = null;
```
***
#### Symbol
Details in objects section

***
## Day -3

### Numbers
In modern JavaScript, there are two types of numbers:
- Regular numbers in JavaScript are stored in 64-bit format IEEE-754, also known as “double precision floating point numbers”.i.e poisitve,negetive and decimal numbers
- Big Init
##### Ways to Write a Number
Big Numbers
```JavaScript
let oneBillion = 1000000000 // normal method
let newOneBillion = 1e9 // e9 = Nine Zeros
let bigNum1 = 7300000000 //         method 1
let bigNum2 = 7.3e9 //  special method 

1e3 === 1 * 1000 // 1000
1.32e6 === 1.32 *  1000000
```
Small Numbers
```JavaScript
let smallNumber = 0.00001 // normal method
let smallNumber1 = 1e-5 // 0.00001 Five zeroes to the left from 1

1e-5 === 1/100000 // 0.00001
1.32-5 === 1.32/100000 // 0.0000132
```
Hexadecimal Numbers
- Hexadecimal numbers are widely used in JavaScript to represent colors, encode characters, and for many other things
```JavaScript
let hex = 0xff; // 255
```
#### Number Methods

- 1. Method :```toString(base) :```
The method num.toString(base) returns a string representation of num in the numeral system with the given base.
    - ``` base=16 :``` is used for hex colors, character encodings etc, digits can be 0..9 or A..F.
    - ```base=2 :```  is mostly for debugging bitwise operations, digits can be 0 or 1.
    - ``` base=36 :``` is the maximum, digits can be 0..9 or A..Z

```JavaScript
   let num1 = 1234
  console.log(num1.toString(16)); // 4d2

   let num2 = 5678;
   console.log(num2.toString(2)); // 1011000101110
   
   console.log(9101112..toString(32)); // 8lnpo

   /**** Please note that two dots in
    123456..toString(36) is not a typo. If we want to 
   call a method directly on a number, 
   like toString in the example above,
    then we need to place two dots .. after  *****/


```

- 2. Rounding

One of the most used operations when working with numbers is rounding.
  - methods are :
    - ``` Math.floor :``` "Rounds Down" e.g - 3.1 to 3 ; -1.1 to -2
    - ```Math.ceil :``` "Rounds Up" e.g- 3.1 to 4 ; -1.1 to -1
    - ```Math.round : ``` "Rounds to the nearset integer" e.g - 3.1 to 3 ; 3.6 to 4; 3.5 to 4 too.
    - ```Math.random() :``` Returns a random number from 0 to 1 (not including 1) e.g 0.1234567894322
    - ```Math.pow(n, power) :``` Returns n raised to the given power. e.g ```alert( Math.pow(2, 10) ); // 2 in power 10 = 1024```

  Prob: 1.234567 and want to round it to 2 digits, getting only 1.23
  sol: There are Multiple Ways to do it
  - Multiply And Devide 

```JavaScript
console.log(Math.round(1.234567 * 100)/100); // 1.234567 * 100 > 123.4567 (Math.floor method) > 123 (devided by 100) > 1.23

```
- 3. toFixed(n)
The method toFixed(n) rounds the number to n digits after the point and returns a string representation of the result.
```JavaScript
let number = 13.342
console.log(number.toFixed(1)); // 13.3
console.log(number.toFixed(2)); // 13.34
console.log(number.toFixed(3)); // 13.342
console.log(number.toFixed(4)); // 13.3420 /*Please note that result of toFixed is a string. If the decimal part is shorter than required, zeroes are appended to the end:*/


/*This rounds up or down to the nearest value, similar to Math.round:*/
let number1 = 13.36679
console.log(number1.toFixed(1)); // 13.4
console.log(number1.toFixed(2)); // 13.37
console.log(number1.toFixed(3)); // 13.367
console.log(number1.toFixed(4)); // 13.3668

```
- 4. parseInt & parseFloat
 this method read” a number from a string until they can’t.Converts a string to a numnber . The function parseInt returns an integer, whilst parseFloat will return a floating-point number:

```JavaScript
console.log(parseInt("100px")); // 100
console.log(parseInt("12em")); // 12
console.log(parseInt("a127")); // NaN ; First symbol stops the process;


console.log(parseFloat('12.2em')); // 12.2
console.log(parseFloat('12.2.6em')); // 12.2

```
he parseInt() function has an optional second parameter. It specifies the base of the numeral system, so parseInt can also parse strings of hex numbers, binary numbers and so on:
```JavaScript
/* parseInt(str ,base)*/
let num = "133"
console.log(parseInt(num,16)) // 307

```

#### Imprecise calculations
 So, there is wired thig here 

```JavaScript
console.log(0.1+0.2) // Expected 0.3
(0.1+0.2 === 0.3) // false
console.log(0.1+0.2) // 0.30000000000000004
```
But why This happens : A Number is stored in memoy in binary form , a sequence of bits i.e 0 & 1 but fractions like 0.1 ans 0.2 that look simple in decimal numeric system but actually unEnding fractions in their binary form. e.g
```0.1 = 1/10``` but ```1/3=0.3333(3)endlessfraction``` So, division by powers 10 is guaranteed to work well in the decimal system, but division by 3 is not. For the same reason, in the binary numeral system, the division by powers of 2 is guaranteed to work, but 1/10 becomes an endless binary fraction.There’s just no way to store exactly 0.1 or exactly 0.2 using the binary system, just like there is no way to store one-third as a decimal fraction.

##### Solution of the problem
```JavaScript
/* By toFixed method*/
let sum = 0.1+0.2
console.log(sum.toFixed(2))//"0.30" (String)
console.log(+sum.toFixed(2)) //0.30 (Number)

/*By multiply and division*/

console.log((0.1 * 100 + 0.2 * 100)/100); //0.3

```

#### Converting to number data types
Sometimes we need to extract a number embded in strings i.e in "" . Specially when a user puts a number in a form . The method is ```Number()```

```JavaScript
let userInput = "12";
let sum = "12" + 3;
console.log(sum); // 123

console.log(Number(userInput) + 3); // 15

```
 
### Basic operators, maths

