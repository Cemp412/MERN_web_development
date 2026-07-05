/* What is Asynchronous Programming?
In Node.js, asynchronous operations let your program do other work while waiting for tasks like file I/O or network requests to complete.

This non-blocking approach enables Node.js to handle thousands of concurrent connections efficiently.
 */

const fs = require('fs').promises;

// Example: Synchronous File Read
console.log('1. Reading file...');
fs.readFile('myFile.txt', 'utf8')
  .then(data => {
    console.log('3. File content:', data);
  })
  .catch(err => console.error('Error:', err));

console.log('2. This runs before file is read!');

// Example: Asynchronous File Read
console.log('1. Starting async read...');
fs.readFile('myfile.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('2. File contents:', data);
});

console.log('3. Done starting read operation');


// --- Define the mock asynchronous functions ---

function getUserDataCallback(userId, callback) {
    console.log("Fetching user data...");
    setTimeout(() => {
        if (userId === 1) {
            callback(null, { id: 1, name: "Alice" });
        } else {
            callback(new Error("User not found"), null);
        }
    }, 500); // Simulate network delay
}

function getArticlesCallback(userId, callback) {
    console.log(`Fetching articles for user ${userId}...`);
    setTimeout(() => {
        if (userId === 1) {
            callback(null, ["Article 1", "Article 2", "Article 3"]);
        } else {
            callback(new Error("Articles not found"), null);
        }
    }, 400);
}

// Nested Callbacks (Callback Hell)
// --- The Callback Hell Code (Original Snippet) ---

const userId = 1; // Change this to trigger an error scenario

getUserDataCallback(userId, function(err, user) {
    if (err) {
        console.error("Error in getUserData:", err.message);
        return;
    }
    getArticlesCallback(user.id, function(err, articles) {
        if (err) {
        console.error("Error in getArticles:", err.message);
        return;
        }
    });
});


// Solution: Use Promises
const util = require('util');
// --- Convert them to Promise-returning functions using util.promisify ---
// Node.js requires the function to follow the standard (err, data) => {} signature
const getUserData = util.promisify(getUserDataCallback);
const getArticles = util.promisify(getArticlesCallback);

// Define a simple error handler function
function handleError(error) {
    console.error("\nAn error occurred in the promise chain:");
    console.error(error.message);
}

// --- The working Promise chain syntax ---
getUserData(userId)
    .then(user => {
        console.log(`Received user: ${user.name}`);
        // To continue the chain, you must return the next promise
        return getArticles(user.id); 
    })
    .then(articles => {
        console.log(`Received articles: ${articles.length} items`);
        console.log('All done!');
        // Note: We don't have getAddresses here, but if we did, 
        // we would return getAddresses(user.id) here.
    })
    // A single .catch() handles errors from any step above it
    .catch(handleError);

// Even Better: Async/Await
async function readFiles() {
  try {
    console.log('1. Starting to read files...');
    const data1 = await fs.readFile('myFile.txt', 'utf8');
    const data2 = await fs.readFile('myFile.txt', 'utf8');
    console.log('2. Files read successfully!');
    return { data1, data2 };
  } catch (error) {
    console.error('Error reading files:', error);
  }
}

readFiles();