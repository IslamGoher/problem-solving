/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
 class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}

 function removeElements(head: ListNode | null, val: number): ListNode | null {
  let prev: ListNode;
  let current = head;
  while(current) {
    if(current.val == val && current == head) {
      head = current.next;
      current = head;
    }
    else if(current.val == val) {
      prev.next = current.next;
      current = current.next;
    }
    
    else {
      prev = current;
      current = current.next;
    }
    
  }
  
  return head;
};