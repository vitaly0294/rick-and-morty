/* eslint-disable radix */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
export const getPageArr = (totalPages = 1) => {
  const arr = [];
  for (let i = 1; i <= totalPages; i++) {
    arr.push(i);
  }
  return arr;
};

export const getDataIdArr = (dataArr) => {
  const arr = [];
  dataArr.forEach((item) => {
    arr.push(getDataId(item));
  });
  return arr;
};

export const getDataId = (str) => parseInt(str.match(/\d+/));
