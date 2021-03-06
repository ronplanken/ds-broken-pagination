
const paginator = (result) => {
  if (result.items.length > 0) {
    const totalPages = result.totalPages;
    const pageNumber = ++result.pageNumber;

    const firstItem = (result.pageNumber * result.itemsPerPage) + 1;
    const lastItem = (firstItem + result.itemsPerPage);
    return `Page: ${pageNumber} | ${firstItem}-${lastItem} of ${result.totalElements} items`;
  } else {
    return 'No items found';
  }
}

module.exports = paginator;