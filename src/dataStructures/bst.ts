class BstNode {
  left: BstNode | null;
  right: BstNode | null;
  value: BstNode | null;
  constructor(value: any) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  root: BstNode | null;
  constructor() {
    this.root = null;
  }
  insert(value: any) {
    const newNode = new BstNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current: BstNode | null = this.root;
    while (current && current.value !== null) {
      if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      } else if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      }
    }
  }
  lookup(value: any): BstNode | null {
    if (!this.root) {
      console.log("The tree is empty");
      return null;
    }
    let current: BstNode | null = this.root;
    while (current && current.value !== null) {
      if (current.value === value) return current;
      if (value > current.value) {
        if (!current.right) {
          console.log("not found");
          return null;
        }
        current = current.right;
      } else if (value < current.value) {
        if (!current.left) {
          console.log("not found");
          return null;
        }
        current = current.left;
      }
    }
    return null;
  }
  remove(value: any) {
    if (!this.root) {
      return false;
    }
    let currentNode: BstNode | null = this.root;
    let parentNode = null;
    while (currentNode && currentNode.value) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            if (parentNode.value) {
              //if parent > current value, make current left child a child of parent
              if (currentNode.value < parentNode.value) {
                parentNode.left = currentNode.left;

                //if parent < current value, make left child a right child of parent
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.left;
              }
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            if (parentNode.value) {
              //if parent > current, make right child of the left the parent
              if (currentNode.value < parentNode.value) {
                parentNode.left = currentNode.right;

                //if parent < current, make right child a right child of the parent
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.right;
              }
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (parentNode.value) {
              if (currentNode.value < parentNode.value) {
                parentNode.left = leftmost;
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = leftmost;
              }
            }
          }
        }
        return true;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(3);
tree.insert(2);
tree.insert(15);
tree.insert(1);
tree.remove(1);
if (tree.root) console.log(JSON.stringify(traverse(tree.root)));
// console.log(tree);

//     9
//  4     20
//1  6  15  170

function traverse(node: BstNode) {
  const tree = node;
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
