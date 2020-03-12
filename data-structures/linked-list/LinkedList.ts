import {
  createNode,
  LinkedListNodeValue,
  LinkedListNode
} from "./LinkedListNode";

type LinkedList = {
  head: LinkedListNode | null;
  tail: LinkedListNode | null;
};

export const createLinkedList = (): LinkedList => ({
  head: null,
  tail: null
});

export const prepend = (value: LinkedListNodeValue, list: LinkedList) => {
  const newNode = createNode(value, list.head);
  list.head = newNode;

  if (!list.tail) list.tail = newNode;
};

export const append = (value: LinkedListNodeValue, list: LinkedList) => {
  const newNode = createNode(value);

  if (!list.head) {
    list.head = newNode;
    list.tail = newNode;
  }

  list.tail.next = newNode;
  list.tail = newNode;
};

export const toValuesArray = (list: LinkedList) => {
  const nodes = [];

  let currentNode = list.head;
  while (currentNode) {
    nodes.push(currentNode.value);
    if (currentNode === currentNode.next) break;
    currentNode = currentNode.next;
  }

  return nodes;
};
