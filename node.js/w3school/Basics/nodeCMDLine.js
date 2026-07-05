// # Run a JavaScript file
//cmd - node app.js

// # Run with additional arguments
//cmd - node app.js arg1 arg2

// # Run in watch mode (restarts on file changes)
// cmd - node --watch app.js

// # Using the REPL (Read Evaluate Print Loop)
// # =>> The Node.js REPL (Read-Eval-Print Loop) is an interactive shell for executing JavaScript code.
// # The REPL is started by running "node" in the terminal:

const name = "node.js";
// console.log(`Hello ${name}!`);
//cmd commands - .help //show available commands
// cmd commands - .exit // exit REPL

// # Access command line arguments using process.argv:
// # args.js
// console.log('All arguments:', process.argv);
// console.log('First argument:', process.argv[2]);
// console.log('Second argument:', process.argv[3]);

// # Access and set environment variables:
// # environment variables
// console.log('Environment:', process.env.NODE_ENV || 'development');
// console.log('Custom variable:', process.env.MY_VARIABLE);
// console.log('Database URL:', process.env.DATABASE_URL || 'Not set');

// # Set Environment Variables
// # Set environment variables when running
// set NODE_ENV=production MY_VARIABLE=test node env.js

// # Debugging Node.js Applications
//# Node.js includes a powerful debugging system that integrates with Chrome DevTools:

// # Basic Debugging Commands
// # Start with inspector (listens on default port 9229)
// node --inspect app.js

// # Break on first line of application
// node --inspect-brk app.js

// # Specify a custom port
// node --inspect=9222 app.js

// # Enable remote debugging (be careful with this in production)
// node --inspect=0.0.0.0:9229 app.js


// # Using Chrome DevTools for Debugging
// # Start your application with node --inspect app.js
// # Open Chrome and navigate to chrome://inspect
// # Click on "Open dedicated DevTools for Node"
// # Set breakpoints and debug your application

// # Node Version Manager (nvm)Install and use different Node.js versions
//  nvm install 18.16.0 # Install specific version
//  nvm use 18.16.0 # Switch to version
// nvm ls # List installed versions

// # npm (Node Package Manager)
// # Common npm commands
// npm init # Initialize a new project
// npm install # Install dependencies
// npm update # Update packages
// npm audit # Check for vulnerabilities


// # Basic Flags
// # Show Node.js version
// node --version # or -v

// # Show V8 version
// node --v8-options

// # Show command-line help
// node --help


// Runtime Behavior
// # Check syntax without executing
// node --check app.js

// # Show stack traces for warnings
// node --trace-warnings app.js

// # Set max memory (in MB)
// node --max-old-space-size=4096 app.js

// # Preload a module before execution
// node --require dotenv/config app.js


// Performance and Optimization
// # Enable ES module loader
// node --experimental-modules app.mjs

// # Enable experimental features
// node --experimental-repl-await

// # Enable experimental worker threads
// node --experimental-worker


// Show the V8 engine version used by your Node.js installation
console.log(`V8 version: ${process.versions.v8}`);

// Get information about V8's heap memory usage
const v8 = require('v8');
const heapStats = v8.getHeapStatistics();
// console.log(heapStats);
console.log('Heap size limit:', (heapStats.heap_size_limit / 1024 / 1024).toFixed(2), 'MB');
console.log('Total heap size:', (heapStats.total_heap_size / 1024 / 1024).toFixed(2), 'MB');
console.log('Used heap size:', (heapStats.used_heap_size / 1024 / 1024).toFixed(2), 'MB');