import {fast_exponentiation} from '../src/algorithms/Maths'

describe('fast_exp test',()=>{
    test('Init',()=>{
        expect(fast_exponentiation(8,2)).toBe(64)
    })
})