function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

function Node(key, question, answer, correctAnswers, wrongAnswers) {
  this.key = key;
  this.question = question;
  this.answer = answer;
  this.correctAnswers = correctAnswers;
  this.wrongAnswers = wrongAnswers;
  this.next = null;
}

LinkedList.prototype.add = function(node) {
  const { key = this.length, question, answer, correctAnswers = 0, wrongAnswers = 0 } = node;
  const nodeToAdd = new Node(key, question, answer, correctAnswers, wrongAnswers);
  if (!this.head && !this.tail) {
    this.tail = this.head = nodeToAdd;
    this.length += 1;
    return true;
  } else {
    this.tail = this.tail.next = nodeToAdd;
    this.length += 1;
    return true;
  }
}

LinkedList.prototype.addAll = function(nodes) {
  nodes.forEach(node => this.add(node));
  return true;
}

LinkedList.prototype.remove = function(key) {
  if (!this.head && !this.tail) {
    return false;
  }
  else if (this.head === this.tail) {
    if (this.head.key === key) {
      const nodeToRemove = this.head;
      this.head = this.tail = null;
      this.length = 0;
      return nodeToRemove;
    } else { return false; }
  }
  else if (this.head.key === key) {
    const nodeToRemove = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return nodeToRemove;
  }
  else {
    let prevNode;
    let curNode = this.head;
    while (curNode !== null) {
      if (curNode.key === key) {
        const nodeToRemove = curNode;
        prevNode.next = curNode.next;
        if (curNode === this.tail) { this.tail = prevNode; }
        this.length -= 1;
        return nodeToRemove;
      }
      prevNode = curNode;
      curNode = curNode.next;
    }
    return false;
  }
}

LinkedList.prototype.scramble = function() {
  if (!this.head) { return false; }
  const nodes = [];
  const keys = {};
  let curNode = this.head;
  while (curNode !== null) {
    nodes.push(curNode);
    curNode = curNode.next;
  }
  for (let i = 0; i < this.length; i += 1) {
    keys[i] = false;
  }
  nodes.map(node => {
    node.key = generateNewKey();
    delete node.next;
  }).sort((a, b) => {
    a.key - b.key;
  });
  return this.addAll(nodes);

  function generateNewKey() {
    let newKey = ~~(Math.random() * this.length);
    if (!keys[newKey]) {
      keys[newKey] = true;
      return newKey;
    }
    return generateNewKey();
  }
}

LinkedList.prototype.merge = function(l1, l2) {
  if (l1.constructor !== LinkedList || l2.constructor !== LinkedList) { return false; }
  const mergedLinkedList = new LinkedList();
  const l1Nodes = [];
  const l2Nodes = [];
  let curL1Node = l1.head;
  while (curL1Node !== null) {
    l1Nodes.push(curL1Node);
    curL1Node = curL1Node.next;
  }
  let curL2Node = l2.head;
  while (curL2Node !== null) {
    curL2Node.key += l1.length;
    l2Nodes.push(curL2Node);
    curL2Node = curL2Node.next;
  }
  mergedLinkedList.addAll(l1Nodes);
  mergedLinkedList.addAll(l2Nodes);
  console.log('mergedLinkedList', mergedLinkedList)
  return mergedLinkedList;
}

module.exports = { LinkedList, Node };
