export type LinkedListNodeValue = string | number | {};

type LinkedListNodeNext = {
  value: LinkedListNodeValue;
  next?: LinkedListNodeValue;
};

export function LinkedListNode(
  value: LinkedListNodeValue,
  next: LinkedListNodeNext = null
) {
  this.value = value;
  this.next = next;
}
