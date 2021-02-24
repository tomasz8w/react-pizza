import sortBy from "lodash.sortby";

export default function sortList(list, sortByProp, orderAsc = true) {
  return orderAsc
    ? sortBy(list, sortByProp)
    : sortBy(list, sortByProp).reverse();
}
