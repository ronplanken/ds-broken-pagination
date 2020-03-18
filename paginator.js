
const paginator = (result) => {
  if (result.items.length > 0) {
    const totalPages = result.totalPages;
    const pageNumber = ++result.pageNumber;
    const firstItem = (result.pageNumber * result.itemsPerPage) + 1;
    const lastItem = Math.min(firstItem + (result.itemsPerPage), result.totalElements);
    return `${firstItem}-${lastItem} van ${result.totalElements} items`;
  } else {
    return 'Geen items gevonden';
  }
}

module.exports = paginator;