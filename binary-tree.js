"use strict";

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** minDepth(): return the minimum depth from the invoking node -- that is,
   * the length of the shortest path from the invoking node to a leaf. */
  minDepth() {
    // degen case

    if (this.left === null && this.right === null) {
      return 1;
    }
    // if there is only a right child
    if (this.left === null) {
      return this.right.minDepth() + 1;
    }
    // if there is only a left child
    if (this.right === null) {
      return this.left.minDepth() + 1;
    }
    return Math.min(this.left.minDepth(), this.right.minDepth()) + 1;
  }

  // bfs

  /** maxDepth(): return the maximum depth from the invoking node -- that is,
   * the length of the longest path from the invoking node to a leaf. */
  maxDepth() {
    //dfs
    // degen case
    if (this.left === null && this.right === null) {
      return 1;
    }
    // if there is only a right child
    if (this.left === null) {
      return this.right.maxDepth() + 1;
    }
    // if there is only a left child
    if (this.right === null) {
      return this.left.maxDepth() + 1;
    }
    return Math.max(this.left.maxDepth(), this.right.maxDepth()) + 1;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  minDepth() {
    return this.root ? this.root.minDepth() : 0;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  maxDepth() {
    return this.root ? this.root.maxDepth() : 0;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
