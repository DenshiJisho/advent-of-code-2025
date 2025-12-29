import { Day } from '../day';

class Day1 extends Day {

  start: number;

  constructor () {
    super(1);
    this.start = 50;
  }

  solveForPartOne (input: string): string {
    let x: number = this.start;
    let count = 0;
    for (const line of input.split('\n')) {
      if (line.startsWith('L')) {
        x = (x - parseInt(line.slice(1)) + 100) % 100;
      } else if (line.startsWith('R')) {
        x = (x + parseInt(line.slice(1))) % 100;
      }
      if (x === 0) {
        count += 1;
      }
    }
    return String(count);
  }

  solveForPartTwo (input: string): string {
    let x: number = this.start;
    let count = 0;
    for (const line of input.split('\n')) {
      if (line.startsWith('L')) {
        if (x === 0) {
          count -= 1;
        }
        x = x - parseInt(line.slice(1));
      } else if (line.startsWith('R')) {
        x = x + parseInt(line.slice(1));
      }
      count += Math.abs(Math.floor(x / 100));
      if (x === 0) {
        count += 1;
      }
      if (x < 0 && x % 100 === 0) {
        count += 1;
      }
      x = ((x % 100) + 100) % 100;
    }
    return String(count);
  }
}

export default new Day1();
