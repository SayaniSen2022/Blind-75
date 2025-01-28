/*
You are given the head of a singly linked-list.
The positions of a linked list of length = 7 for example, can intially be represented as:
[0, 1, 2, 3, 4, 5, 6]
Reorder the nodes of the linked list to be in the following order:
[0, 6, 1, 5, 2, 4, 3]
Notice that in the general case for a list of length = n the nodes are reordered to be in the following order:
[0, n-1, 1, n-2, 2, n-3, ...]
You may not modify the values in the list's nodes, but instead you must reorder the nodes themselves.
*/

const reorderList = (head) => {
  let slow = head;
  let fast = head.next;
  //find the middle of the list: as the fast pointer moves with 2x speed, by the time it will reach the end the slow will be at middle
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //second half starts at slow.next
  let second = slow.next;
  let prev = (slow.next = null); //where the first half ends i.e. slow

  //reverse the second half
  while (second) {
    let temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }

  //merging, alternate nodes
  let first = head;
  second = prev;
  while (second !== null) {
    const temp1 = first.next;
    const temp2 = second.next;
    first.next = second;
    second.next = temp1;
    first = temp1;
    second = temp2;
  }
};
