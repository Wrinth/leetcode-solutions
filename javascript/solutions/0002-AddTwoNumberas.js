/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    let head = new ListNode(0);
    let current = head;
    let prev = head;
    
    while(l1 || l2) {
        if (l1 !== null) {
            current.val += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            current.val += l2.val;
            l2 = l2.next;
        }
        if (current.val > 9) {
            current.val = current.val % 10;
            current.next = new ListNode(1);
        } else {
            current.next = new ListNode(0);
        }
        prev = current;
        current = current.next;
    }
    
    if(current.val == 0) prev.next = null;
    
    return head;
};
// @lc code=end

