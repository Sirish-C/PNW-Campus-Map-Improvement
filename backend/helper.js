function getOffset(currentPage = 1, listPerPage) {
    return (currentPage - 1) * [listPerPage];
  }
  
  function isEmpty(data) {
    if (!data) {
      return [];
    }
    return data;
  }
  
  module.exports = {
    getOffset,
    isEmpty
  }