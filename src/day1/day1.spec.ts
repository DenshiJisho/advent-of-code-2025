import day1 from './index';

const example_input1 = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`;

describe('On Day 1', () =>{
    it(`part1 is identity function`, ()=>{
        expect(day1.solveForPartOne(example_input1)).toBe('3');
    })
});
