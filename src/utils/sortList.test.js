import sortList from "./sortList";
describe("Test filter function", () => {
  const input = [
    { name: "Bcd", price: [1, 1, 3] },
    { name: "Cde", price: [7, 2, 5] },
    { name: "Abc", price: [0, 3, 2] },
  ];
  test("it should filter by name ascending", () => {
    const output = [
      { name: "Abc", price: [0, 3, 2] },
      { name: "Bcd", price: [1, 1, 3] },
      { name: "Cde", price: [7, 2, 5] },
    ];
    expect(sortList(input, "name", true)).toEqual(output);
  });
  test("it should filter by price ascending", () => {
    const output = [
      { name: "Bcd", price: [1, 1, 3] },
      { name: "Cde", price: [7, 2, 5] },
      { name: "Abc", price: [0, 3, 2] },
    ];
    expect(sortList(input, "price[1]", true)).toEqual(output);
  });
  test("it should filter by name descending", () => {
    const output = [
      { name: "Cde", price: [7, 2, 5] },
      { name: "Bcd", price: [1, 1, 3] },
      { name: "Abc", price: [0, 3, 2] },
    ];
    expect(sortList(input, "name", false)).toEqual(output);
  });
  test("it should not filter when key is invalid", () => {
    expect(sortList(input, "names", true)).toEqual(input);
  });
});
