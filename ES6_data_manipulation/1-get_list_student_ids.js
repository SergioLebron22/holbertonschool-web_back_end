export default function getListStudentIds(list) {
  if (Array.isArray(list) !== true) {
    return [];
  }

  return list.map((list) => list.id);
}
