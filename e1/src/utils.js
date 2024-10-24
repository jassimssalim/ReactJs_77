export function generateId(collection = []) {
  return collection.length * 1000 + 1;
}
