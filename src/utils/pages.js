export const getPageArr = (totalPages) => {
  const arr = [];
  for (let i = 1; i <= totalPages; i++) {
    arr.push(i)
  }
  return arr;
}