const shapeArea = require("./main")

test('returns area of an "n"-interesting polygon', () => {
  expect(shapeArea(3)).toBe(13);
});
