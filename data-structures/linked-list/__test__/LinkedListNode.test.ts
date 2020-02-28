import { createNode } from "../LinkedListNode";

describe("Linked List Node", () => {
  it("should create a list node with a value", () => {
    const node = createNode(1);

    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  });

  it("should create a list node with an object as a value", () => {
    const nodeValue = { id: 1, description: "test" };
    const node = createNode(nodeValue);

    expect(node.value).toBe(nodeValue);
    expect(node.next).toBeNull();
  });

  it("should be able to point to the next list node", () => {
    const node2 = createNode(2);
    const node1 = createNode(1, node2);

    expect(node1.value).toBe(1);
    expect(node1.next.value).toBe(2);
    expect(node2.value).toBe(2);
    expect(node2.next).toBeNull();
  });
});
