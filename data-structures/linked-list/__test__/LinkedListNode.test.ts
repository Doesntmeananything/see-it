import { LinkedListNode } from "../LinkedListNode";

describe("Linked List Node", () => {
  it("should create a list node with a value", () => {
    const node = new LinkedListNode(1);

    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  });

  it("should create a list node with an object as a value", () => {
    const nodeValue = { id: 1, description: "test" };
    const node = new LinkedListNode(nodeValue);

    expect(node.value.id).toBe(1);
    expect(node.value.description).toBe("test");
    expect(node.next).toBeNull();
  });

  it("should be able to point to the next list node", () => {
    const node2 = new LinkedListNode(2);
    const node1 = new LinkedListNode(1, node2);

    expect(node1.value).toBe(1);
    expect(node1.next.value).toBe(2);
    expect(node2.value).toBe(2);
    expect(node2.next).toBeNull();
  });
});
