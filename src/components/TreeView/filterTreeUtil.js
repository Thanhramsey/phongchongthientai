export const defaultMatcher = (filterText, node) => {
  return node.value.toLowerCase().indexOf(filterText.toLowerCase()) !== -1;
};

export const defaultMatcherId = (id, node) => {
  return node.id === id;
};

export const findNode = (node, filter, matcher) => {
  return (
    matcher(filter, node) || // i match
    (node.nodes && // or i have decendents and one of them match
      node.nodes.length &&
      !!node.nodes.find((child) => findNode(child, filter, matcher)))
  );
};

export const filterTree = (node, filter, matcher = defaultMatcher) => {
  if (matcher(filter, node) || !node.nodes) {
    return node;
  }
  // If not then only keep the ones that match or have matching descendants
  const filtered = node.nodes
    .filter((child) => findNode(child, filter, matcher))
    .map((child) => filterTree(child, filter, matcher));
  return Object.assign({}, node, { nodes: filtered });
};

export const filterTreeId = (node, id, matcher = defaultMatcherId) => {
  if (node.id === id) {
    return node;
  }
  // If not then only keep the ones that match or have matching descendants
  const filtered = node.nodes
    .filter((child) => findNode(child, id, matcher))
    .map((child) => filterTreeId(child, id, matcher));
  return Object.assign({}, node, { nodes: filtered });
};

export const expandFilteredNodes = (node, filter, matcher = defaultMatcher) => {
  let children = node.nodes;
  if (!children || children.length === 0) {
    return Object.assign({}, node, { toggled: false });
  }
  const childrenWithMatches = node.nodes.filter((child) =>
    findNode(child, filter, matcher)
  );
  const shouldExpand = childrenWithMatches.length > 0;
  // If im going to expand, go through all the matches and see if thier children need to expand
  if (shouldExpand) {
    children = childrenWithMatches.map((child) => {
      return expandFilteredNodes(child, filter, matcher);
    });
  }
  return Object.assign({}, node, {
    nodes: children,
    toggled: shouldExpand,
  });
};

let store = [];
export const getIDsExpandFilter = (node) => {
  let children = node.nodes;
  if (!children || children.length === 0) {
    return store;
  }
  if (node.id === "1") {
    store = ["1"];
  }
  if (children) {
    store.push(children[0].id);
  }
  node.nodes.map((child) => getIDsExpandFilter(child));
  return store;
};

/**
 * Find tree item with recursive approach
 * @param node
 * @param id
 */
export const searchTree = (node, id) => {
  if (node.id === id) {
    return node;
  } else if (node.nodes != null) {
    let index;
    let result;
    for (index = 0; result == null && index < node.nodes.length; index++) {
      result = searchTree(node.nodes[index], id);
    }
    return result;
  }
  return null;
};
