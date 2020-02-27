export type LinkedListNodeValue = string | number | {};

type LinkedListNodeNext = {
  value: LinkedListNodeValue;
  next?: LinkedListNodeValue;
};

export type LinkedListNodeType = {
  value: LinkedListNodeValue;
  next?: LinkedListNodeNext;
};

export function LinkedListNode(
  this: LinkedListNodeType,
  value: LinkedListNodeValue,
  next: LinkedListNodeNext = null
) {
  this.value = value;
  this.next = next;
}
