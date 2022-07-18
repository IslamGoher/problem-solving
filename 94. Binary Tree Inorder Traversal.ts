
// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


 function inorderTraversal(root: TreeNode | null): number[] {
  function inorder(node: TreeNode | null, arr: number[]) {
    if (!node) return arr;
    
    if (node.left) inorder(node.left, arr);
    arr.push(node.val);
    if (node.right) inorder(node.right, arr);
    
    return arr;
  }
  return inorder(root, []);
};