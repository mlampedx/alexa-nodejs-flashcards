const chai = require('chai');
const expect = require('chai').expect;
const { LinkedList, Node } = require('./../app/alexa/LinkedList');

describe('LinkedList', () => {

before(() => {
  const testLinkedList = new LinkedList();
  testLinkedList.add(node1);
  it('should have an add method that works for one node', () => {
    expect(testLinkedList.add(node1)).to.be.true;
    expect(testLinkedList.constructor).to.deep.equal(LinkedList);
    expect(testLinkedList.head.constructor).to.deep.equal(Node);
    expect(testLinkedList.head).to.deep.equal(testLinkedList.tail);
    expect(testLinkedList.tail.next).to.equal(null);
    expect(testLinkedList.head.key).to.equal(1);
    expect(testLinkedList.head.question).to.equal(node1.question);
    expect(testLinkedList.head.answer).to.equal(node1.answer);
    expect(testLinkedList.head.correctAnswers).to.equal(0);
    expect(testLinkedList.head.wrongAnswers).to.equal(0);
  });
});

before(() => {
  const testLinkedList = new LinkedList();
  testLinkedList.add(node1);
  testLinkedList.add(node2);
  it('should have an add method that works for multiple nodes', () => {
    expect(testLinkedList.add(node1)).to.be.true; 
    expect(testLinkedList.add(node2)).to.be.true;
    expect(testLinkedList.head).to.not.deep.equal(testLinkedList.tail);
    expect(testLinkedList.tail.next).to.equal(null);
    expect(testLinkedList.head.key).to.equal(2);
    expect(testLinkedList.tail.question).to.equal(node2.question);
    expect(testLinkedList.tail.answer).to.equal(node2.answer);
    expect(testLinkedList.tail.correctAnswers).to.equal(0);
    expect(testLinkedList.tail.wrongAnswers).to.equal(0);
  });
});

  it('should have an addAll method', () => {
    const testLinkedList = new LinkedList();
    expect(testLinkedList.addAll(manyNodes)).to.be.true;
    expect(testLinkedList.constructor).to.deep.equal(LinkedList);
    expect(testLinkedList.head.constructor).to.deep.equal(Node);
    expect(testLinkedList.head).to.not.deep.equal(testLinkedList.tail);
    expect(testLinkedList.tail.next).to.equal(null);
    expect(testLinkedList.length).to.equal(5);
  });

  it('should have a remove method that works for one node', () => {

  });

});