    const questions = [
        {
            question: "What is the output of the following code? console.log(typeof null);",
            answers: ["'object'", "'null'", "'undefined'", "'number'"],
            correct: 0
        },
        {
            question: "What is the correct way to declare a variable in JavaScript?",
            answers: ["var x;", "let x;", "const x;", "All of the above"],
            correct: 3
        },
        {
            question: "What is a closure?",
            answers: ["A function with access to its own scope", "A function that returns another function", "A function that runs after a timeout", "A block of code that does not execute"],
            correct: 1
        },
        {
            question: "Which of the following methods can be used to convert a string to a number?",
            answers: ["Number()", "parseInt()", "parseFloat()", "All of the above"],
            correct: 3
        },
        {
            question: "What will the following code output? console.log(0.1 + 0.2 === 0.3);",
            answers: ["true", "false", "undefined", "TypeError"],
            correct: 1
        },
        {
            question: "What does the 'this' keyword refer to in JavaScript?",
            answers: ["Global object", "The function context", "The parent object", "None of the above"],
            correct: 1
        },
        {
            question: "How do you create an object in JavaScript?",
            answers: ["let obj = {};", "let obj = new Object();", "Both A and B", "None of the above"],
            correct: 2
        },
        {
            question: "What is the result of the following expression? '5' + 3;",
            answers: ["8", "53", "Error", "undefined"],
            correct: 1
        },
        {
            question: "Which of the following is not a JavaScript data type?",
            answers: ["String", "Boolean", "Character", "Undefined"],
            correct: 2
        },
        {
            question: "What will the following code output? console.log(typeof NaN);",
            answers: ["'number'", "'NaN'", "'undefined'", "'object'"],
            correct: 0
        },
        {
            question: "What method can be used to remove the last element from an array?",
            answers: ["pop()", "push()", "shift()", "unshift()"],
            correct: 0
        },
        {
            question: "What does JSON stand for?",
            answers: ["JavaScript Object Notation", "JavaScript Online Notation", "Java Standard Object Notation", "JavaScript Object Network"],
            correct: 0
        },
        {
            question: "How do you define a function in JavaScript?",
            answers: ["function myFunction() {}", "myFunction() = function {}", "define myFunction() {}", "function:myFunction() {}"],
            correct: 0
        },
        {
            question: "Which of the following is a way to create an array?",
            answers: ["let arr = [];", "let arr = new Array();", "Both A and B", "None of the above"],
            correct: 2
        },
        {
            question: "What is the output of the following code? console.log([1, 2] == [1, 2]);",
            answers: ["true", "false", "undefined", "ReferenceError"],
            correct: 1
        },
        {
            question: "What does the 'map' function do?",
            answers: ["Creates a new array with the results of calling a provided function", "Filters the array", "Finds an element in the array", "Sorts the array"],
            correct: 0
        },
        {
            question: "Which method is used to convert an array to a string?",
            answers: ["join()", "split()", "toString()", "Both A and C"],
            correct: 3
        },
        {
            question: "What is the purpose of the 'async' keyword in JavaScript?",
            answers: ["To define a synchronous function", "To define a function that returns a promise", "To define a callback function", "None of the above"],
            correct: 1
        },
        {
            question: "What will the following code output? console.log(1 + '2' + '3');",
            answers: ["123", "6", "33", "Error"],
            correct: 0
        },
        {
            question: "Which statement is used to exit a loop in JavaScript?",
            answers: ["stop", "exit", "break", "return"],
            correct: 2
        },
        {
            question: "What will the following code output? console.log(!!'');",
            answers: ["true", "false", "undefined", "0"],
            correct: 1
        },
        {
            question: "What is the output of the following code? console.log(typeof undefined);",
            answers: ["'undefined'", "'null'", "'object'", "'number'"],
            correct: 0
        },
        {
            question: "How do you add a comment in JavaScript?",
            answers: ["// This is a comment", "<!-- This is a comment -->", "# This is a comment", "' This is a comment"],
            correct: 0
        },
        {
            question: "What is a promise in JavaScript?",
            answers: ["An object that represents the eventual completion of an asynchronous operation", "A type of array", "A function that returns a value", "None of the above"],
            correct: 0
        },
        {
            question: "What will the following code output? console.log(2 == '2');",
            answers: ["true", "false", "undefined", "TypeError"],
            correct: 0
        },
        {
            question: "What does the 'filter' method do?",
            answers: ["Creates a new array with elements that pass a test", "Maps the elements of the array", "Sorts the elements", "None of the above"],
            correct: 0
        },
        {
            question: "Which of the following is used to define a block scope variable?",
            answers: ["var", "let", "const", "Both B and C"],
            correct: 3
        },
        {
            question: "What does 'strict mode' do?",
            answers: ["Enforces stricter parsing and error handling", "Allows for more flexibility", "Enables deprecated features", "None of the above"],
            correct: 0
        },
        {
            question: "What is the output of the following code? console.log(1 == '1' && 2 == '2');",
            answers: ["true", "false", "undefined", "TypeError"],
            correct: 0
        },
        {
            question: "What is a callback function?",
            answers: ["A function passed into another function as an argument", "A function that calls itself", "A function that returns a value", "None of the above"],
            correct: 0
        },
        {
            question: "What is the use of the 'return' statement?",
            answers: ["To exit a function", "To return a value from a function", "Both A and B", "None of the above"],
            correct: 2
        },
        {
            question: "What will the following code output? console.log([1, 2, 3].length);",
            answers: ["3", "undefined", "NaN", "TypeError"],
            correct: 0
        },
        {
            question: "Which operator is used for string concatenation?",
            answers: ["+", "*", "&", "/"],
            correct: 0
        },
        {
            question: "What is the purpose of the 'new' keyword?",
            answers: ["To create an object", "To create a new function", "To create a new variable", "None of the above"],
            correct: 0
        },
        {
            question: "What will the following code output? console.log([1, 2, 3].push(4));",
            answers: ["3", "4", "undefined", "Error"],
            correct: 1
        },
        {
            question: "What does 'NaN' stand for?",
            answers: ["Not a Number", "Null and Negative", "Not any Number", "None of the above"],
            correct: 0
        },
        {
            question: "What will the following code output? console.log(1 === '1');",
            answers: ["true", "false", "undefined", "TypeError"],
            correct: 1
        },
        {
            question: "What is the purpose of the 'this' keyword inside an object method?",
            answers: ["To refer to the global object", "To refer to the object itself", "To refer to the parent object", "None of the above"],
            correct: 1
        },
        {
            question: "Which method can be used to find the index of an element in an array?",
            answers: ["indexOf()", "findIndex()", "search()", "Both A and B"],
            correct: 3
        },
        {
            question: "What will the following code output? console.log((10).toString());",
            answers: ["'10'", "10", "'NaN'", "'undefined'"],
            correct: 0
        },
        {
            question: "How do you create a new array from an existing array in JavaScript?",
            answers: ["Using slice()", "Using map()", "Using spread operator", "All of the above"],
            correct: 3
        },
        {
            question: "What is the default value of an uninitialized variable?",
            answers: ["null", "undefined", "0", "false"],
            correct: 1
        },
        {
            question: "What will the following code output? console.log([] + []);",
            answers: ["''", "undefined", "0", "NaN"],
            correct: 0
        },
        {
            question: "What is event delegation?",
            answers: ["Attaching a single event listener to multiple elements", "Listening to events in a specific order", "Handling events in a loop", "None of the above"],
            correct: 0
        },{
            question: "What does 'this' refer to in JavaScript?",
            answers: ["The global object", "The current function", "The parent object", "Depends on the context"],
            correct: 3
        },
        {
            question: "Which method is used to parse a JSON string?",
            answers: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.decode()"],
            correct: 0
        },
        {
            question: "What is the output of 'typeof NaN'?",
            answers: ["'number'", "'NaN'", "'undefined'", "'object'"],
            correct: 0
        },
        {
            question: "Which operator is used to assign a value to a variable?",
            answers: ["=", "==", "===", ":="],
            correct: 0
        },
        {
            question: "What will 'console.log(1 + '1')' output?",
            answers: ["2", "11", "NaN", "undefined"],
            correct: 1
        },
        {
            question: "How can you create a function in JavaScript?",
            answers: ["function myFunction() {}", "create myFunction() {}", "function:myFunction() {}", "myFunction() {}"],
            correct: 0
        }
    ];


    const ques = document.getElementById(".question");

    const answers = document.querySelectorAll(".btn");

    const nextButton = document.getElementById(".next-btn");

    let currentQuestionIndex = 0;

    let score = 0 ;

    function startQuiz (){
        currentQuestionIndex = 0;
        score = 0;
        showQuestion();
    }

    function showQuestion(){
        let currentQuestion = questions[currentQuestionIndex];
        let questionNumber = currentQuestionIndex + 1;
        ques.innerText = questionNumber + ". " + currentQuestion.question;

        currentQuestion.answers.forEach(answer =>{
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButton.appendChild(button);
        })
    }

    startQuiz();