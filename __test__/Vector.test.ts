import {Vector} from '../src/algorithms/Geometry'

describe('Vector Tests : ',()=>{
    test('Init ',()=>{
        let a : Vector = new Vector(4,5,6)
        expect(a).toStrictEqual(new Vector(4,5,6))
        expect(a.x).toBe(4)
        expect(a.y).toBe(5)
        expect(a.z).toBe(6)
    })

    test('Basic Operations ', ()=>{
        let a : Vector  = new Vector(4,5,6)
        let b : Vector = new Vector(10,2,0)
        let multiplied = new Vector(20,25,30)
        expect(a.add(b)).toStrictEqual(new Vector(14,7,6))
        expect(a.subtract(b)).toStrictEqual(new Vector(-6,3,6))
        expect(a.show()).toBe('4i + 5j + 6k ')
        a.multiplyWith(5)
        console.log(a.show())
    })

    test('Multiply and Angle Tests',()=>{
        let a : Vector = new Vector(10,2,0)
        let b : Vector = new Vector(-1,-2,-3)
        expect(a.dotProduct(b)).toStrictEqual(-14)
        expect(a.crossProduct(b)).toStrictEqual(new Vector(-6,30,-18))
        expect(a.magnitude()).toBe(10.19804)
        expect(b.magnitude()).toBe(3.74166)
        expect(a.angle(b)).toBe(-0.3669)
    })

    test('Geometric orientation Test',()=>{
        let a : Vector = new Vector(5,10,0)
        let b : Vector = new Vector(6,-3,0)
        expect(a.isPerpendicularTo(b)).toBe(true)
        expect(a.isParallelTo(b)).toBe(false)
    })
})