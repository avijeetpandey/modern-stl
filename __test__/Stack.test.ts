import {Stack} from '../src/ds/Stack'

describe('Stack Test',()=>{
    test('Number Stack',()=>{
        let st  = new Stack<number>()
        expect(st.isEmpty()).toStrictEqual(true)
        st.push(23)
        st.push(25)
        expect(st.size()).toStrictEqual(2)
        expect(st.top()).toStrictEqual(25)
        st.pop()
        expect(st.top()).toStrictEqual(23)
        expect(st.size()).toBe(1)
        expect(st.isEmpty()).toStrictEqual(false)
    })

    test('String Stack',()=>{
        let st  = new Stack<string>()
        expect(st.isEmpty()).toStrictEqual(true)
        st.push('23')
        st.push('25')
        expect(st.size()).toStrictEqual(2)
        expect(st.top()).toStrictEqual('25')
        st.pop()
        expect(st.top()).toStrictEqual('23')
        expect(st.size()).toBe(1)
        expect(st.isEmpty()).toStrictEqual(false)
    })

    test('real number Stack',()=>{
        let st  = new Stack<number>()
        expect(st.isEmpty()).toStrictEqual(true)
        st.push(23.56)
        st.push(25.235)
        expect(st.size()).toStrictEqual(2)
        expect(st.top()).toStrictEqual(25.235)
        st.pop()
        expect(st.top()).toStrictEqual(23.56)
        expect(st.size()).toBe(1)
        expect(st.isEmpty()).toStrictEqual(false)
    })
})