class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) return list2;
  else if (!list2) return list1;
  else if (!list1 && !list2) return null;

  let list1Head: ListNode | null = list1;
  let list2Head: ListNode | null = list2;
  let newList = new ListNode();
  let newListHead = newList;

  while (list1Head || list2Head) {
    if (list1Head && list2Head) {
      if (list1Head.val <= list2Head.val) {
        newListHead.val = list1Head.val;
        list1Head = list1Head.next;
      } else if (list1Head.val > list2Head.val) {
        newListHead.val = list2Head.val;
        list2Head = list2Head.next;
      }
    } else if (list1Head) {
      newListHead.val = list1Head.val;
      list1Head = list1Head.next;
    } else if (list2Head) {
      newListHead.val = list2Head.val;
      list2Head = list2Head.next;
    }

    if (list1Head || list2Head) {
      newListHead.next = new ListNode();
      newListHead = newListHead.next;
    }
  }

  return newList;
}
