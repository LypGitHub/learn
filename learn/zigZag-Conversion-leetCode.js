const str = 'PAYPALISHIRING'

/**
    The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

    P   A   H   N
    A P L S I I G
    Y   I   R

    P A H N A P L S I I G Y I R

    p   L   I
    A A S G R
    H P I Y
    N   I
    And then read line by line: "PAHNAPLSIIGYIR"
    Write the code that will take a string and make this conversion given a number of rows:

    string convert(string text, int nRows);
    convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 */
function convert (str, row) {
  if (+row <= 1) {
    return str
  }
  const b = row - 2;
  let result = ''
  const swap = (length, value, index, row) => {
    return {
      value,
      index: index === row * 2
    };
  }
}