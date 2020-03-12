import React, { useState, useEffect } from "react";

import { LinkedListNode } from "./LinkedListNode";
import {
  createLinkedList,
  append,
  toValuesArray
} from "../data-structures/linked-list/LinkedList";

const generateLinkedList = () => {
  let linkedList = createLinkedList();
  for (let i = 0; i < 10; i++) {
    append(Math.ceil(Math.random() * 99), linkedList);
  }
  return linkedList;
};

export const LinkedList = () => {
  const [linkedList, setLinkedList] = useState(generateLinkedList());

  return (
    <>
      {toValuesArray(linkedList).map((value, i) => (
        <LinkedListNode key={`${value}: ${i}`} value={value} />
      ))}
      <button
        style={{ display: "block" }}
        onClick={() => setLinkedList(generateLinkedList())}
      >
        Generate new list
      </button>
    </>
  );
};
