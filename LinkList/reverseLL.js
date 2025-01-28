/* Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list. */

let head = [0, 1, 2, 3];

/**
 Definition for singly-linked list.
 
 */

 class ListNode {
    constructor(val = 0, next = null) {
       this.val = val;
        this.next = next;
    }
}

const reverseList = (head) => {
    let curr = head;
    let prev = null;

    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
}

const result = reverseList(head);

console.log(result);