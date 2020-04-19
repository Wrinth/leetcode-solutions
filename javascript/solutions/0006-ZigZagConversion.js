/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on
 * a given number of rows like this: (you may want to display
 * this pattern in a fixed font for better legibility)
 *
 *      P   A   H   N
 *      A P L S I I G
 *      Y   I   R
 *
 * And then read line by line: "PAHNAPLSIIGYIR"
 *
 * Write the code that will take a string and make this conversion given a number of rows:
 *
 *      string convert(string s, int numRows);
 *
 * Example 1:
 *
 *      Input: s = "PAYPALISHIRING", numRows = 3
 *      Output: "PAHNAPLSIIGYIR"
 *
 * Example 2:
 *
 *      Input: s = "PAYPALISHIRING", numRows = 4
 *      Output: "PINALSIGYAHRPI"
 *      Explanation:
 *
 *      P     I    N
 *      A   L S  I G
 *      Y A   H R
 *      P     I
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  if (numRows === 1) return s;

  const rows = [];
  for (let count = 0; count < numRows; count++) rows.push([]);

  const sLength = s.length;
  let down = false;
  let currentRow = 0;
  for (let count = 0; count < sLength; count++) {
    rows[currentRow].push(s.charAt(count));
    if (currentRow === 0 || currentRow === numRows - 1) down = !down;
    currentRow += down ? 1 : -1;
  }

  let returnS = "";
  for (let count = 0; count < numRows; count++) returnS += rows[count].join("");

  return returnS;
};
