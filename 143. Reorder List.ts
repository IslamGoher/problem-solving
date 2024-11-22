class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reorderList(head: ListNode): void {
  if (!head.next) return;

  let currentNode = head;
  let { prevLastNode, lastNode } = getLastTwoNodes(head);

  while (currentNode && currentNode.next) {
    prevLastNode.next = lastNode.next;
    lastNode.next = currentNode.next;
    currentNode.next = lastNode;
    currentNode = currentNode.next.next!;

    ({ prevLastNode, lastNode } = getLastTwoNodes(head));
  }
}

function getLastTwoNodes(head: ListNode) {
  let currentNode = head;
  while (currentNode.next!.next) currentNode = currentNode.next!;
  return {
    prevLastNode: currentNode!,
    lastNode: currentNode.next!,
  };
}
