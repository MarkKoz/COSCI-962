# CO SCI 962 - Project 2
**Course Title:** Web Programming Using JavaScript<br/>
**Section:** 10036<br/>
**Instructor:** Manish Patel<br/>
**Semester:** Spring 2018 (2018-02-05 to 2018-06-04)<br/>

### Tasks
##### inlinejs
1. Create a sub-folder named `inlinejs`.
2. Inside, `inlinejs`, create a new HTML file named `index.html`.
3. Type into the HTML file the following:
    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title> </title>
    </head>
    <body>
    <script>
        alert(3 + 5)
    </script>
    </body>
    </html>
    ```

##### fundamentals
1. Create a sub-folder named `fundamentals`.
2. Create an HTML named `index.html`.
3. Type into the HTML file the following:
    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title> </title>
        <script type="application/javascript" src="script.js"></script>
    </head>
    <body>
    <h1>Hello CS962</h1>
    </body>
    </html>
    ```
4. Create a JavaScript file named `scripts.js`.
5. Type into the JavaScript file the following:
    ```js
    var myValue = 5;
    var mySecondValue = 7 + 9;
    var myThirdValue = myValue + mySecondValue;
    alert(myThirdValue);
    ```
6. Add the following code, replacing Jesse's name with your's:
    ```js
    var myName = "Jesse";
    var myLastName = "Liberty";
    var myFullName = myName + " " + myLastName;
    ```
7. Test the code with `alert`.

##### programflow
1. Create a sub-folder named `programflow`.
2. Repeat fundemental's steps 2 through 4.
3. Type into the JavaScript file the following:
    ```js
    var ageAsString = prompt("What is your age? ", "");
    var age = Number(ageAsString);
    alert(age);
    ```

#### Exercises
Repeat fundamental's steps 2 through 4 for each exercise.

1. Create a sub-folder within the root directory called `helloprog` Within
    `script.js`, write code that asks the user for their first name and last
    name. Output an alert with the following message using the inputted first
    name and last name:

    > Hello John Wick, How is you day going?

    Make sure to test your code using an HTML file that links to the
    JavaScript file.
2. Create a sub-folder called `salestax`. Create a sales tax calculator. Ask the
    user for the amount of the item. Output an alert that shows Item Price,
    Tax Amount (9.5%) and the Total Price.
3. Create a sub-folder called `numberguess`. Create a guessing game where the
    user has 3 tries to guess your number.
