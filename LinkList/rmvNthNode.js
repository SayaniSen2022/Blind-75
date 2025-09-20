/*
Leet19: You are given the beginning of a linked list head, and an integer n.
Remove the nth node from the end of the list and return the beginning of the list. 
*/

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const removeNthNode = (head, n) => {
  let dummy = new ListNode(0, head);
  let [left, right] = [dummy, head];

  while (n > 0) {
    right = right.next;
    n--;
  }

  while (right) {
    left = left.next;
    right = right.next;
  }

  left.next = left.next.next;
  return dummy.next;
};
