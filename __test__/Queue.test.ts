import {Queue} from '../src/ds/Queue'

describe('Queue Data Structure Test',()=>{
    test('Queue Init Test',()=>{
        let q = new Queue()
        q.push(45)
        q.push(89)
        expect(q.front()).toBe(45)
        q.remove(45)
        expect(q.front()).toBe(89)
        expect(q.size()).toBe(1)
        expect(q.isEmpty()).toBe(false)
    })
})