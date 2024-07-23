export default function getStudentsByLocation(list, city) {
  if (Array.isArray(list) !== true) {
    return [];
  }

  return list.filter((list) => list.location === city);
}
