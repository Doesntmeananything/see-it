import {
  createLinkedListNode,
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
  const newNode = createLinkedListNode(value, list.head);
  list.head = newNode;

  if (!list.tail) list.tail = newNode;
};

export const append = (value: LinkedListNodeValue, list: LinkedList) => {
  const newNode = createLinkedListNode(value);

  if (!list.head) {
    list.head = newNode;
    list.tail = newNode;
  }

  list.tail.next = newNode;
  list.tail = newNode;
};
