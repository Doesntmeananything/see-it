import { LinkedListNode, LinkedListNodeValue } from "./LinkedListNode";

export function LinkedList() {
  this.head = null;
  this.tail = null;

  this.prepend = function(value: LinkedListNodeValue) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) this.tail = newNode;

    return this;
  };

  this.append = function(value: LinkedListNodeValue) {
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
