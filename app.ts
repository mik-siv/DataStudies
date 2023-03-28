class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// function isValidBST(root: TreeNode | null): boolean {
//   if (root === null) {
//     return false;
//   }
//   let queue: TreeNode[] = [];
//   let currentNode: TreeNode = root;
//   queue.push(currentNode);
//   while (queue.length > 0) {
//     //@ts-ignore
//     currentNode = queue.shift();
//     if (currentNode.left) {
//       if (currentNode.left.val && currentNode.left.val >= currentNode.val) {
//         return false;
//       }
//       queue.push(currentNode.left);
//     }
//     if (currentNode.right) {
//       if (currentNode.right.val && currentNode.right.val <= currentNode.val) {
//         return false;
//       }
//       queue.push(currentNode.right);
//     }
//     if (currentNode.left && currentNode.right) {
//       if (
//         currentNode.left.right &&
//         currentNode.left.right.val > currentNode.right.val
//       ) {
//         return false;
//       }
//       if (
//         currentNode.right.left &&
//         currentNode.right.left.val < currentNode.left.val
//       ) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

function isValidBST(
  root: TreeNode | null,
  min: number = -Infinity,
  max = Infinity
): boolean {
  if (root === null) return true;

  return true;
}

let i = isValidBST({
  val: 2,
  right: { val: 3, left: null, right: null },
  left: { val: 1, left: null, right: null },
});
console.log(i);
