import {fast_exponentiation} from '../src/algoritms/Maths'

describe('fast_exp test',()=>{
    test('Init',()=>{
        expect(fast_exponentiation(8,2)).toBe(64)
    })
})