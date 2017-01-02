function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(key, question, answer) {
  this.key = key;
  this.question = question;
  this.answer = answer;
  this.next = null;
}

LinkedList.prototype.add = function(key, question, answer) {
  const nodeToAdd = new Node(key, question, answer);
  if (!this.head && !this.tail) {
    this.tail = this.head = nodeToAdd;
    return true;
  } else {
    this.tail = this.tail.next = nodeToAdd;
    return true;
  }
}

LinkedList.prototype.remove = function(key) {
  if (!this.head && !this.tail) {
    return false;
  }
  else if (this.head === this.tail) {
    if (this.head.key === key) {
      const nodeToRemove = this.head;
      this.head = this.tail = null;
      return nodeToRemove;
    } else { return false; }
  }
  else {
    if (this.tail.key === key) {
      // remove tail
    }
  }
}

LinkedList.prototype.merge = function(l1, l2) {

}

module.exports = { LinkedList, Node };
