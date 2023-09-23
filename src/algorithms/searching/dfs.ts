// @ts-ignore
class Node123 {
  val: number;
  left: Node123 | null;
  right: Node123 | null;
  constructor(
    val: number,
    left: Node123 | null = null,
    right: Node123 | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class DFS {
  static inorder(node: Node123 | null): void {
    if (node === null) {
      return;
    }
    DFS.inorder(node.left);
    console.log(node.val);
    DFS.inorder(node.right);
  }

  static preorder(node: Node123 | null): void {
    if (node === null) {
      return;
    }
    console.log(node.val);
    DFS.preorder(node.left);
    DFS.preorder(node.right);
  }

  static postorder(node: Node123 | null): void {
    if (node === null) {
      return;
    }
    DFS.postorder(node.left);
    DFS.postorder(node.right);
    console.log(node.val);
  }
}

// Example usage:
const root = new Node123(1, new Node123(2), new Node123(3));
console.log("Inorder traversal:");
DFS.inorder(root);
console.log("Preorder traversal:");
DFS.preorder(root);
console.log("Postorder traversal:");
DFS.postorder(root);
