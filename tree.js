"use strict";

/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  /** sumValues(): add up all values of invoking node and its children.
   * Returns sum as an integer. */
  sumValues() {
    let sum = 0;
    let treeStack = [];
    treeStack.push(this);

    while (treeStack.length) {
      let currentNode = treeStack.pop();
      sum += currentNode.val;
      treeStack.push(...currentNode.children);

    }
    return sum;
  }

  /** countEvens(): starting from the invoking node and moving through its
   * children, count how many nodes have even values. Returns that count as
   * an integer. */
  countEvens() {
    let count = 0;
    let treeStack = [];
    treeStack.push(this);

    while (treeStack.length) {
      let currentNode = treeStack.pop();
      if (currentNode.val % 2 === 0) { count++; };
      treeStack.push(...currentNode.children);
    }
    return count;
  }

  /** numGreater(lowerBound): starting from the invoking node and moving through
   * its children, return a count of the number of nodes whose value is greater
   * than lowerBound. */
  numGreater(lowerBound) {
    let count = 0;
    let treeStack = [];
    treeStack.push(this);

    while (treeStack.length) {
      let currentNode = treeStack.pop();
      if (currentNode.val > lowerBound) { count++; };
      treeStack.push(...currentNode.children);
    }
    return count;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all values in the tree. */
  sumValues() {
    return this.root ? this.root.sumValues() : 0;
  }

  /** countEvens(): count all nodes in the tree that have even values. */
  countEvens() {
    return this.root ? this.root.countEvens() : 0;

    // let count = 0;
    // let treeStack = [];
    // if (this.root) {
    //   treeStack.push(this.root);
    //   if (this.root.val % 2 === 0) count = 1;
    // }

    // while (treeStack.length) {
    //   let currentNode = treeStack.pop();

    //   if (currentNode.children !== null) {
    //     for (let child of currentNode.children) {
    //       treeStack.push(...child.children);
    //       count += child.countEvens();
    //     }
    //   }

    // }
    // return count;

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    return this.root ? this.root.numGreater(lowerBound) : 0;
  }
}


module.exports = { Tree, TreeNode };
