import { LinkedList } from "../LinkedList";

describe("Linked List", () => {
  it("should create an empty linked list", () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it("should prepend a node to the linked list", () => {
    const linkedList = new LinkedList();

    linkedList.prepend(2);
    expect(linkedList.head.value).toBe(2);
    expect(linkedList.tail.value).toBe(2);

    linkedList.prepend(1);

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.tail.value).toBe(2);
  });

  it("should append a node to the linked list", () => {
    const linkedList = new LinkedList();

    linkedList.append(1);

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.tail.value).toBe(1);

    linkedList.append(2);

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.tail.value).toBe(2);
  });
});
