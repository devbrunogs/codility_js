function solution(T) {
  return Math.max(getSubTreeHeight(T.l), getSubTreeHeight(T.r));
}

function getSubTreeHeight(subTree) {
  // if tree is null, return 0
  if (!subTree) {
    return 0;
  }

  // recursion to get the max height + 1
  return Math.max(getSubTreeHeight(subTree.l), getSubTreeHeight(subTree.r)) + 1;
}
