const makeRows = (arr, pageLimit = 10, pageOffset = 0) =>
  arr.map((item, index) => {
    return {
      id: index + 1 + pageLimit * pageOffset,
      col1: item.name,
    };
  });
export default makeRows;
