/**
* find the area of a polygon for a given "n"-interesting polygon.
*
* a 1-interesting polygon is a square with a side of length 1.
* an "n"-interesting polygon is obtained by taking the "n-1"-interesting
* polygon and appending 1-interesting polygons to its rim, side by side.
*
* examples:
*   for n = 2, output should be shapeArea(n) = 5;
*   for n = 3, output should be shapeArea(n) = 13;
*
*
* @param {number} n - Describes the polygon
* @return {number} - Area of the "n"-interesting polygon
*/

function shapeArea(n) {
	return (n * n) + ((n - 1)*(n - 1));
}

module.exports = shapeArea;
//array of example inputs  [1,  2,  3,  4,  5 ]
//array of example outputs [1,  5,  13, 25, 41]
