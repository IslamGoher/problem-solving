// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head == null) return head;
  
  let prevNode = head;
  let currentNode = head.next;
  
  while (currentNode) {
    if (currentNode.val === prevNode.val) {
      // delete the duplicated node
      prevNode.next = currentNode.next;
      currentNode.next = null;
      
      // set prev and current nodes
      currentNode = prevNode.next;
    } else {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }
  
  return head;
};