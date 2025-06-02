// utils/catalog.js

export const findCategoryById = (node, id) => {
  if (node.id === id) return node;
  for (const child of node.children || []) {
    const found = findCategoryById(child, id);
    if (found) return found;
  }
  return null;
};

export const getAllCategories = (node) => {
  let categories = [node];
  for (const child of node.children || []) {
    categories = categories.concat(getAllCategories(child));
  }
  return categories;
};

export const getDirectChildrenOfCategory = (node) => {
  console.log(node)
  if (!node || !node.children) return [];
  return node.children;
};