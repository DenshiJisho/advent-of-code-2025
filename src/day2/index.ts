import { Day } from '../day';

class Day2 extends Day {
  constructor () {
    super(2);
  }

  solveForPartOne (input: string): string {
    let total = 0;
    for (const range of input.split(',')) {
      const [startStr, endStr] = range.split('-');
      const startNum = parseInt(startStr);
      const endNum = parseInt(endStr);
      const startLeft = startStr.slice(0, Math.floor(startStr.length / 2));
      const startRight = startStr.slice(Math.floor(startStr.length / 2));
      const endLeft = endStr.slice(0, Math.floor(endStr.length / 2));
      const endRight = endStr.slice(Math.floor(endStr.length / 2));
      const startNumLeft = startLeft === "" ? 0 : parseInt(startLeft);
      const endNumLeft = parseInt(endLeft) * (endRight.length > startRight.length ? 10 : 1);
      for (let left = startNumLeft; left <= endNumLeft; left++) {
        if (String(left).length !== endLeft.length) {
          continue;
        }
        let num = parseInt(String(left) + String(left));
        if (num >= startNum && num <= endNum) {
          total += num;
        }
      }
    }
    return String(total);
  }

  solveForPartTwo (input: string): string {
    return input;
  }
}

export default new Day2();
