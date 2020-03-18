
const paginator = require('./paginator');

const result = {
  totalPages: 10,
  totalElements: 95,
  itemsPerPage: 10,
  pageNumber: 0,
  items: [
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
    "item6",
    "item7",
    "item8",
    "item9",
    "item10"
  ]
}

console.log(paginator(result));