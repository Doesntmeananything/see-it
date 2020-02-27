type LinkedListNodeValue = string | number | {};

type LinkedListNodeNext = LinkedListNodeValue | null;

export function LinkedListNode(
  value: LinkedListNodeValue,
  next: LinkedListNodeNext = null
) {
  this.value = value;
  this.next = next;
}
