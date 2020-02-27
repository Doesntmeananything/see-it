import {
  LinkedListNode,
  LinkedListNodeValue,
  LinkedListNodeType
} from "./LinkedListNode";

type LinkedList = {
  head: LinkedListNodeType;
  tail: LinkedListNodeType;
  prepend: (value: LinkedListNodeValue) => LinkedList;
  append: (value: LinkedListNodeValue) => LinkedList;
};

export function LinkedList(this: LinkedList) {
  this.head = null;
  this.tail = null;

  this.prepend = function(this: LinkedList, value: LinkedListNodeValue) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) this.tail = newNode;

    return this;
  };

  this.append = function(this: LinkedList, value: LinkedListNodeValue) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  };
}
