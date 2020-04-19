/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Example 1:
 *
 *      Input: 123
 *      Output: 321
 *
 * Example 2:
 *
 *      Input: -123
 *      Output: -321
 *
 * Example 3:
 *
 *      Input: 120
 *      Output: 21
 *
 * Note:
 * Assume we are dealing with an environment which could only store
 * integers within the 32-bit signed integer range: [−2^31,  2^31 − 1].
 * For the purpose of this problem, assume that your function returns
 * 0 when the reversed integer overflows.
 */

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  const maxNum = Math.pow(2, 31);
  const minNum = Math.pow(-2, 31);
  let sourceNumber = x;
  let rev = 0;

  while (sourceNumber >= 1 || sourceNumber <= -1) {
    const pop = sourceNumber % 10;
    sourceNumber =
      sourceNumber > 0
        ? Math.floor(sourceNumber / 10)
        : Math.ceil(sourceNumber / 10);
    if (rev > maxNum / 10 || (rev == maxNum / 10 && pop > 7)) {
      return 0;
    }
    if (rev < minNum / 10 || (rev == minNum / 10 && pop < -8)) {
      return 0;
    }

    rev = rev * 10 + pop;
  }

  return rev;
};
