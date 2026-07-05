/* const firstPromise = new Promise((resolve, reject) => {
    setTimeout( () => {
        const success = Math.random() > 0.5;

        if (success) {
            resolve('Operation completed successfully');
        } else {
            reject(new Error('Operation failed'));
        }
    }, 2000);

});

// Using the Promise
firstPromise
    .then(result => console.log('Success:', result))
    .catch(error => console.error('Error:', error.message)); 
 */

const { error } = require('console');
const { resolve } = require('path');

// Promise.all() for Parallel Execution
// Promise.all() is used to run multiple promises in parallel, and wait for ALL of them to complete. It fails fast if any promise rejects.
// Example: Reading a File with Promises
const fs = require('fs').promises;
const promise1 = Promise.resolve('First result');
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Second Promise'), 1000));
const promise3 = fs.readFile('myFile.txt', 'utf8');

/* Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log('Results:', results);
        // result[0] is from promise1;
        // result[1] is from promise2;
        // result[2] is the content of myFile.txt
 
})
.catch(error => {
    console.error('Error  in one of the promises:', error);
}); */


// Promise Chaining
// Promises can be chained to execute asynchronous operations in sequence, with each .then() receiving the result of the previous operation.

// Example: Promise Chaining
function getUser(userId, username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({id: userId, name: username ? username :'George'});
        })
    }, 1000);
}

function getUserPosts(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Post 1', 'Post 2', 'Post 3');
        })
    });
}

/* getUser(23)
    .then(user => {
    console.log('User:', user);
    return getUserPosts(user);
}).then(posts => {
    console.log('Posts:', posts);
    return getUser(21, 'malti');
})
.then(user => {
    console.log("User 2:", user);
})
.catch(error => {
    console.log('Error: ', error);
}); */


// Promise Methods
/* 1. Instance Methods => 
    then(onFulfilled, onRejected): Handles fulfillment or rejection.
    catch(onRejected): Handles rejection.
    finally(onFinally): Runs after promise settles. */

/* 2. Static Methods => 
    Promise.all([Promise1, Promose2, Promise3] || iterable): wait for all promises to resolve.
    Promise.race(iterable): Waits for first promise to settle.
    Promise.allSettled(iterable): Waits for all promises to settle. */

/* 3. Utility Methods =>
    Promise.resolve(value): Creates a resolved promise.
    Promise.reject(reason): Creates a rejected promise. */


// Promise.then()
/* The then() method takes up to two arguments. The arguments are callback functions for the success and failure cases for the promise.
    example: myPromise.then(
        result => console.log(result),
        error => console.log(error)
    ); */


// Promise.catch() 
/* The catch() method handles rejected promises and is equivalent to .then(null, errorHandler)
    example: myPromise
            .then(result => console.log(result))
            .catch(error => console.error(error));
 */

// Promise.finally
/* The finally() method executes code regardless of whether the promise is fullfilled or rejected.
example: myPromise
            .then(result => console.log(result))
            .catch(error => console.error(error))
            .finally(() => console.log('Operation completed')); */

// Promise.race() For First Result
// Promise.race() is useful when you need the result of first settled promise, whether it's fulfilled or rejected.
// Example: Timeout Pattern with Promise.race()
const Promise1 = new Promise(resolve => setTimeout(() => resolve('First result'), 1100));
const Promise2 = new Promise(resolve => setTimeout(() => resolve('Second Result'), 1000));

Promise.race([Promise1, Promise2])
    .then(result => {
        console.log('Fastest result:', result);
        // Will log 'Second result' because promise2 is faster
    })

// Error Handling in Promises
// Proper error handling is important.
// Promises provide several ways to handle errors:
// Example: Error Handling in Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        //simulating an error 
        reject(new Error('Network Error'));
    }); 
}

// Error handling in promise
fetchData().then(
    data => console.log('Data:', data),
    error => console.log('Error handled in then:', error.message)
);

// Alternative method using catch
fetchData()
    .then(data => console.log('Data:', data))
    .catch(error => console.log('Error handled in catch:', error.message));

// Best Practice: Always include error handling with promises using .catch() to prevent unhandled promise rejections, which can lead to silent failures and memory leaks.
