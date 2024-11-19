class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  const values = getListNodeValues(head);

  const reversedList = new ListNode(values.pop());
  let currentNode = reversedList;
  while (values.length) {
    currentNode.next = new ListNode(values.pop());
    currentNode = currentNode.next;
  }

  return reversedList;
}

function getListNodeValues(head: ListNode | null): number[] {
  const stack: number[] = [];
  let currentNode = head;

  while (currentNode != null) {
    stack.push(currentNode.val);
    currentNode = currentNode.next;
  }

  return stack;
}
