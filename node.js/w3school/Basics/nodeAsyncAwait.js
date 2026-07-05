// Async/await makes asynchronous code look and more feel like synchronous code. It does not block the main thread, but is easy to follow and understand.

/* The syntax consists of two keywords:

async: Used to declare an asynchronous function that returns a Promise
await: Used to pause execution until a Promise is resolved, can only be used inside async functions
 */
async function getData() {
    console.log('Starting...');
    const result = await someAsyncOperations();
    console.log(`Result: ${result}`);
    return result;
}

function someAsyncOperations() {
    return new Promise((resolve => {
        setTimeout(() => resolve('Operation Completed'), 1000);
    }));
}

//Call the async function 
// getData().then(data => console.log('Final Data:', data));


// Example: Reading a file with async/await
const fs = require('fs').promises;

async function readFile() {
    try{
        const data = await fs.readFile('myFile.txt', 'utf8')
        console.log("File data: ", data);
    } catch(error) {
        console.log('Error reading file:', error);
    }
}

// readFile();


// Error Handling with Try/Catch
// One of the advantages of async/await is that you can use traditional try/catch blocks for error handling, making your code more readable.

async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if(!response.ok) {
            throw new Error(`Http Error: ${response.status}`);
        }

        const post = await response.json();
        console.log('User Post: ', post);
        return post;
    }
    catch(error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}

// Using catch with an async function
/* fetchUserData().catch(error => {
    console.log('Caught outside of async function:', error.message);
}); */



// Helper function to simulate an API call (Sequential VS Parallel)
function fetchData(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Data for Id ${id}`), 1000);
    })
}

//Sequential opearation takes ~3 seconds
async function fetchSequential() {
    console.time('sequential');
    const data1 = await fetchData(1);
    const data2 = await fetchData(2);
    const data3 = await fetchData(3);
    console.timeEnd('sequential');
    return [data1, data2, data3];
}


//Parallel operation takes ~1 seconds
async function fetchParallel() {
    console.time('parallel');
    const results = await Promise.all([
        fetchData(1),
        fetchData(2),
        fetchData(3)
    ]);
        console.timeEnd('parallel');
        return results;
   
}

// run demo
async function runDemo() {
    console.log('Running Sequentially');
    const seqResults = await fetchSequential();
    console.log(seqResults);

    console.log('\nRunning in parallel...');
    const parResults = await fetchParallel();
    console.log(parResults);
}

// runDemo();





// Async/Await vs Promises vs Callbacks
// Let's see how the same task is handled with different asynchronous patterns:

// **** Using Callbacks ****
function getUser(userId, callback) {
    setTimeout(() => {
        callback(null, { id: userId, name: 'John' });
    }, 1000);
}
  
function getUserPosts(user, callback) {
    setTimeout(() => {
      callback(null, ['Post 1', 'Post 2']);
    }, 1000);
}
  
// Using callbacks
getUser(1, (error, user) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log('User:', user);
    
    getUserPosts(user, (error, posts) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log('Posts:', posts);
    });
});



//  **** with Promises ****
function getUserPromise(userId) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ id: userId, name: 'John' });
      }, 1000);
    });
}
  
function getUserPostsPromise(user) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(['Post 1', 'Post 2']);
      }, 1000);
    });
}
  
// Using promises
getUserPromise(1)
    .then(user => {
      console.log('User:', user);
      return getUserPostsPromise(user);
    })
    .then(posts => {
      console.log('Posts:', posts);
    })
    .catch(error => {
      console.error(error);
    });

// With Async/Await
// Using async/await
async function getUserAndPosts() {
    try {
      const user = await getUserPromise(1);
      console.log('User:', user);
      
      const posts = await getUserPostsPromise(user);
      console.log('Posts:', posts);
    } catch (error) {
      console.error(error);
    }
}
  
getUserAndPosts();

	  
/* 1. Callbacks : 
    Pros: - 1.Simple to understand - 2.Widely supported	  
    Cons: - 1.Callback hell - 2. Error handling is complex - 3.Hard to reason about

2. Promises:
    Pros: -1.Chaining with .then()   -2.Better error handling  -3.Composable
    Cons: - 1.Still requires nesting for complex flows - 2.Not as readable as async/await

3. Async/Await: 
    Pros: - 1.Clean, synchronous-like code - 2.Easy error handling with try/catch -3. Easier debugging
    cons: - 1.Requires understanding of Promises -2. Easy to accidentally block execution */



    // ****** When working with async/await in Node.js, follow these best practices:

    // 1.Remember that async functions always return Promises
    async function myFunction() {
        return 'Hello';
      }
      
      // This returns a Promise that resolves to 'Hello', not the string 'Hello' directly
      const result = myFunction();
      console.log(result); // Promise { 'Hello' }
      
      // You need to await it or use .then()
      myFunction().then(message => console.log(message)); // Hello


    /* // 2.Use Promise.all for concurrent operations
       -When operations can run in parallel, use Promise.all to improve performance.
    3.Always handle errors
        -Use try/catch blocks or chain a .catch() to the async function call.
    4. Avoid mixing async/await with callbacks
        -Convert callback-based functions to Promises using util.promisify or custom wrappers.

        const util = require('util');
        const fs = require('fs');

        // Convert callback-based function to Promise-based
        const readFile = util.promisify(fs.readFile);

        async function readFileContents() {
        const data = await readFile('file.txt', 'utf8');
        return data;
        }

        
    5. Create clean async functions
        -Keep async functions focused on a single responsibility. */