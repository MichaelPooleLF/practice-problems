const shapeArea = require('./main');

test('shapeArea(1) returns 1', () => {
	expect(shapeArea(1)).toBe(1);
	expect(typeof shapeArea(1)).toBe('number');
});

test('shapeArea(2) returns 5', () => {
	expect(shapeArea(2)).toBe(5);
	expect(typeof shapeArea(2)).toBe('number');
});

test('shapeArea(3) returns 13', () => {
	expect(shapeArea(3)).toBe(13);
	expect(typeof shapeArea(3)).toBe('number');
});

test('shapeArea(4) returns 25', () => {
	expect(shapeArea(4)).toBe(25);
	expect(typeof shapeArea(4)).toBe('number');
});
