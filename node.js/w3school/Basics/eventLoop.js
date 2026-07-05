// The event loop is what makes Node.js non-blocking and efficient.

// It handles asynchronous operations by delegating tasks to the system and processing their results through callbacks, allowing Node.js to manage thousands of concurrent connections with a single thread.

/* Node.js follows these steps to handle operations:
Execute the main script (synchronous code)
Process any microtasks (Promises, process.nextTick)
Execute timers (setTimeout, setInterval)
Run I/O callbacks (file system, network operations)
Process setImmediate callbacks
Handle close events (like socket.on('close')) */

/* console.log('First');
setTimeout(() => console.log('Third', 0));
Promise.resolve().then(() => console.log('second'));
console.log('Fourth');
 */
/* This demonstrates the execution order:
Sync code runs first ('First', 'Fourth')
Microtasks (Promises) run before the next phase ('Second')
Timers execute last ('Third') */

//EVENT LOOP PHASES
/* The event loop processes different types of callbacks in this order:
Timers: setTimeout, setInterval
I/O Callbacks: Completed I/O operations
Poll: Retrieve new I/O events
Check: setImmediate callbacks
Close: Cleanup callbacks (like socket.on('close')) */

console.log(`1. Start`);

//Next tick queue
process.nextTick(() => console.log('2. Next tick'));

//Microtask queue (Promise)
Promise.resolve().then(() => console.log('3. Promise'));

//Timer phase
setTimeout(() => console.log('4. Timeout'), 0);

//Check phase
setImmediate(() => console.log('5. Immediate'));

console.log('6. End');

/* The output will be:
1. Start
6. End
2. Next tick
3. Promise
4. Timeout
5. Immediate
This shows the priority order: sync code > nextTick > Promises > Timers > Check phase. */