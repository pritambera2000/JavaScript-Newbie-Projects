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



## Data Types 

There are two main datatypes in JS (i)Primitives (ii)Objects

(i)Primitives Data Types are -- ```Numbers``` , ```Boolean``` , ```Strings``` , 

(ii) Objects willbe discussed Later.

