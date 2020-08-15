import {LinkedList} from './../src/ds/LinkedList'

describe('LinkedList Tests ',()=>{
    test('Init Test',()=>{
        let list = new LinkedList<number>();
        list.insertAtBegin(5);
        list.insertAtBegin(12);
        list.insertAtEnd(10);
        expect(list.list()).toStrictEqual([12,5,10]);
        expect(list.find(7)).toBe(false);
        expect(list.find(10)).toBe(true);
        expect(list.findIndex(12)).toBe(0)
        expect(list.size()).toBe(3)
    })
})