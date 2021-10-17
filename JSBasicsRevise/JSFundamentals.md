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
   This concept is known as hoisting. Variables in JavaScript are, in a sense, "hoisted" (or "lifted") to the top of the function or statement. However, variables that are hoisted return a value of ```undefined```. So even if you declare and initialize after you use or refer to this variable, it still returns ```undefined```.