const makeRows = (arr: any[], pageLimit: number = 10, pageOffset: number = 0) =>
  arr.map((item: any, index: number) => ({
    id: index + 1 + pageLimit * pageOffset,
    col1: item.name,
  }));
export default makeRows;
