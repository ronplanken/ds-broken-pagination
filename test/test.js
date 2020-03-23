const assert = require('assert');
const paginator = require('../paginator');

describe('Pagination', function() {
  describe('First page', function() {

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

    it('should return 1-10 van 95 items', function() {
      assert.equal(paginator(result), "Page: 1 | 1-10 of 95 items");
    });
  });
});