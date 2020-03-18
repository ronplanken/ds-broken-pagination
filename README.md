# Digital Solutions broken-pagination

In this example test project, we have a [paginator](https://en.wikipedia.org/wiki/Pagination) function that is being used to show a text at the bottom of a large table. Unfortunatly the function does not seem to properly show the current page the user is at. 

## The issue

The paginator gets a result object as follows: 

```javascript
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
```

If you run the paginator with the shown input, it will output the following line: `11-21 van 95 items`. Which is incorrect. The following assumptions regarding the result are given:

**pageNumber is a 0-based index of the current page the user is shown**

**totalElements is the final, total number of elements in the larger result set available**

**Not all pages always have the full number of items shown in itemsPerPage**


## Usage
In order to do a once-off run simply clone the repository and do a `npm install` to setup the Mocha testing library. Then you can run the project by typing: `npm start` for a once-off with a basic result set. In order to test your output a sample test has been provided that can be run using: `npm test`. The assignment is as follows:

## The assignment
**Fix the paginator so it works for all pages with any given result, prove the result by extending the test cases.**

