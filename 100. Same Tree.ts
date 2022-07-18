
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

 function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const preOrderP = preOrder(p, []);
  const preOrderQ = preOrder(q, []);

  return compareTwoArrays(preOrderP, preOrderQ);
};

function preOrder(tree: TreeNode | null, arr: any[]): any[] {
  if (tree === null) {
    arr.push(null);
    return arr;
  }
  
  arr.push(tree.val);
  preOrder(tree.left, arr);
  preOrder(tree.right, arr);

  return arr;
}

function compareTwoArrays(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) return false;
  if (arr1.length === 0 && arr2.length === 0)
    return true;
  if (arr1.length === 0 || arr2.length === 0)
    return false;

  let isEqual = true;

  for(let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      isEqual = false;
      break;
    }
  }

  return isEqual;
}