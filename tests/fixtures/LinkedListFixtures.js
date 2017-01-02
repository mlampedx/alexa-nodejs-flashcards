const node0 = {
  question: 'What method on the response object sends a response header to the request?',
  answer: 'write Head',
}

const node1 = {
  question: 'What class is the idiomatic asynchronous architecture of Node\'s core API built around?',
  answer: 'Event Emitter',
}

const node2 = {
  question: 'What Event Emitter method is used to register listeners?',
  answer: 'on',
}

const node3 = {
  question: 'What Event Emitter method is used to trigger an event?',
  answer: 'emit',
}

const node4 = {
  question: 'What Node module creates child processes that all share server ports?',
  answer: 'cluster',
}

const node5 = {
  question: 'What Node module provides cryptographic functionality that includes a set of wrappers for OpenSSL\'s hash, HMAC, cipher, decipher, sign and verify functions?',
  answer: 'crypto',
}

const node6 = {
  question: 'What keyword is used to load a Node module?',
  answer: 'require',
}

const node7 = {
  question: 'What Node module provides utilities for working with file and directory paths?',
  answer: 'path',
}

const node8 = {
  question: 'What method of the process object adds one or more callbacks to a queue, which is called after the current turn of the event loop turn runs to completion?',
  answer: 'next Tick',
}

const node9 = {
  question: 'What Node module provides a abstract interface for working with streaming data?',
  answer: 'stream',
}

const manyNodes = [node0, node1, node2, node3, node4];
const manyNodes2 = [node5, node6, node7, node8, node9];
const manyNodes3 = [node0, node1, node2, node3, node4, node5, node6, node7, node8, node9];

module.exports = { node0, node1, manyNodes, manyNodes2, manyNodes3 };