const chai = require('chai');
const expect = require('chai').expect;
const { LinkedList, Node } = require('./../app/alexa/LinkedList');
const { node0, node1, manyNodes, manyNodes2, manyNodes3 } = require('./fixtures/LinkedListFixtures');

describe('LinkedList', () => {
  
  it('should have an add method that works for one node', () => {
    const testLinkedList = new LinkedList();
    expect(testLinkedList.add(node0)).to.be.true;
    expect(testLinkedList.constructor).to.deep.equal(LinkedList);
    expect(testLinkedList.head.constructor).to.deep.equal(Node);
    expect(testLinkedList.tail.next).to.equal(null);
    expect(testLinkedList.head.key).to.equal(0);
    expect(testLinkedList.head.question).to.equal(node0.question);
    expect(testLinkedList.head.answer).to.equal(node0.answer);
    expect(testLinkedList.head.correctAnswers).to.equal(0);
    expect(testLinkedList.head.wrongAnswers).to.equal(0);
  });

  it('should have an add method that works for multiple nodes', () => {
    const testLinkedList = new LinkedList();
    expect(testLinkedList.add(node0)).to.be.true; 
    expect(testLinkedList.add(node1)).to.be.true;
    expect(testLinkedList.head).to.not.deep.equal(testLinkedList.tail);
    expect(testLinkedList.tail.next).to.equal(null);
    expect(testLinkedList.head.key).to.equal(0);
    expect(testLinkedList.tail.question).to.equal(node1.question);
    expect(testLinkedList.tail.answer).to.equal(node1.answer);
    expect(testLinkedList.tail.correctAnswers).to.equal(0);
    expect(testLinkedList.tail.wrongAnswers).to.equal(0);
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
      const testLinkedList = new LinkedList();
      expect(testLinkedList.add(node0)).to.be.true; 
      expect(testLinkedList.remove(0).constructor).to.deep.equal(Node);
      expect(testLinkedList.head).to.equal(null);
      expect(testLinkedList.tail).to.equal(null);
      expect(testLinkedList.length).to.equal(0);
    });

    it('should have a remove method that works for the head node in a LinkedList with multiple nodes', () => {
      const testLinkedList = new LinkedList();
      expect(testLinkedList.add(node0)).to.be.true; 
      expect(testLinkedList.add(node1)).to.be.true;
      expect(testLinkedList.remove(0).constructor).to.deep.equal(Node);
      expect(testLinkedList.head.key).to.equal(1);
      expect(testLinkedList.tail.key).to.equal(1);
      expect(testLinkedList.length).to.equal(1);
    });

    it('should have a remove method that works for a node in a LinkedList with multiple nodes', () => {
      const testLinkedList = new LinkedList();
      testLinkedList.addAll(manyNodes);
      expect(testLinkedList.remove(2).constructor).to.deep.equal(Node);
      expect(testLinkedList.length).to.equal(4);
    });

    it('should have a remove method that returns false when a specified key is not found', () => {
      const testLinkedList = new LinkedList();
      testLinkedList.addAll(manyNodes);
      expect(testLinkedList.remove(5)).to.deep.equal(false);
      expect(testLinkedList.length).to.equal(5);
    });

    xit('should have a scramble method', () => {
      const testLinkedList = new LinkedList();
      testLinkedList.addAll(manyNodes);
      testLinkedList.scramble();
      expect(testLinkedList.head.key).to.equal(0);
      expect(testLinkedList.head.question).to.not.equal(node0.question);
      expect(testLinkedList.head.answer).to.not.equal(node0.answer);
      expect(testLinkedList.length).to.equal(5);
    });

    it('should have a merge method', () => {
      const testLinkedList = new LinkedList();
      const testLinkedList2 = new LinkedList();
      const testLinkedList3 = new LinkedList();
      const testLinkedList4 = new LinkedList();
      testLinkedList.addAll(manyNodes);
      testLinkedList2.addAll(manyNodes2);
      testLinkedList4.addAll(manyNodes3);
      const mergedLinkedList = testLinkedList3.merge(testLinkedList, testLinkedList2);
      expect(mergedLinkedList.head).to.deep.equal(testLinkedList4.head);
      expect(mergedLinkedList.tail).to.deep.equal(testLinkedList4.tail);
      expect(mergedLinkedList.length).to.equal(10);
    });

});
