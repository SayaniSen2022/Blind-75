/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted linked list and return the head of the new sorted linked list.

The new list should be made up of nodes from list1 and list2.
*/

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const mergeTwoLists = (list1, list2) => {
  const dummy = new ListNode();
  const node = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      node.next = list1;
      list1 = list1.next;
    } else {
      node.next = list2;
      list2 = list2.next;
    }
    node = node.next;
  }

  if (list1) {
    node.next = list1;
  } else {
    node.next = list2;
  }

  return dummy.next;
};
