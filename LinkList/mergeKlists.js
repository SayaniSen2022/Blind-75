class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeKLists(lists) {
  if (!lists || lists.length === 0) {
    return null;
  }
  while (lists.length > 1) {
    const mergedLists = [];
    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i];
      const l2 = i + 1 < lists.length ? lists[i + 1] : null;
      mergedLists.push(this.mergeList(l1, l2));
    }
    lists = mergedLists;
  }
}

function mergeList(list1, list2) {
  const dummy = new ListNode();
  const node = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      node.next = list1.val;
      list1 = list1.next;
    } else {
      node.next = list2.val;
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
}
