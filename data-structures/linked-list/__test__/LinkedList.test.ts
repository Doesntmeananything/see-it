import {
  createLinkedList,
  prepend,
  append,
  toValuesArray
} from "../LinkedList";

describe("Linked List", () => {
  it("should create an empty linked list", () => {
    const linkedList = createLinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it("should prepend a node to the linked list", () => {
    const linkedList = createLinkedList();

    prepend(2, linkedList);

    expect(linkedList.head.value).toBe(2);
    expect(linkedList.tail.value).toBe(2);

    prepend(1, linkedList);

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.tail.value).toBe(2);
  });

  it("should append a node to the linked list", () => {
    const linkedList = createLinkedList();

    append(1, linkedList);

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.tail.value).toBe(1);

    append(2, linkedList);

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.tail.value).toBe(2);
  });

  it("should convert the linked list to an array of node values", () => {
    const linkedList = createLinkedList();
    expect(toValuesArray(linkedList).join(",")).toBe("");

    append(2, linkedList);

    expect(toValuesArray(linkedList).join(",")).toBe("2");

    prepend(1, linkedList);

    expect(toValuesArray(linkedList).join(",")).toBe("1,2");
  });
});
