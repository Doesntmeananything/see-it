export type LinkedListNodeValue = { [key: string]: any } | number | string;

export type LinkedListNode = {
  value: LinkedListNodeValue;
  next?: LinkedListNode;
};

export const createNode = (
  value: LinkedListNodeValue,
  next: LinkedListNode = null
): LinkedListNode => ({
  value,
  next
});
