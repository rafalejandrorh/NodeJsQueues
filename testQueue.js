const Queue = require('./Queue');

class RememberQueue extends Queue {

}

class TestQueue extends Queue {

}

const testQueue = new TestQueue();
console.log(testQueue.enqueue('Test 1')); // ['The Rock']
console.log(testQueue.enqueue('Test 2')); // ['The Rock', 'John Cena']
console.log(testQueue.enqueue('Test 3')); // ['The Rock', 'John Cena', 'Stone Cold Steve Austin']

const rememberQueue = new RememberQueue();
console.log(rememberQueue.enqueue('The Rock')); // ['The Rock']
console.log(rememberQueue.enqueue('John Cena')); // ['The Rock', 'John Cena']
console.log(rememberQueue.enqueue('Stone Cold Steve Austin')); // ['The Rock', 'John Cena', 'Stone Cold Steve Austin']
// console.log(rememberQueue.dequeue()); // 'The Rock'
// console.log(rememberQueue.peek()); // 'John Cena'
// console.log(rememberQueue.isEmpty()); // false

console.log('rememberQueue:', rememberQueue.print()); // ['John Cena', 'Stone Cold Steve Austin']
console.log('testQueue:', testQueue.print()); // ['John Cena', 'Stone Cold Steve Austin']