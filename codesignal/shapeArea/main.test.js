const shapeArea = require("./main")

test('shapeArea(1) returns 1', () => {
  expect(shapeArea(1)).toBe(1);
});

test('shapeArea(2) returns 5', () => {
  expect(shapeArea(2)).toBe(5);
});
