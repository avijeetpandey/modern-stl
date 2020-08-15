import {Point} from './../src/algoritms/Geometry'

describe('Point Class Test ',()=>{
    test('Point Init',()=>{
        let p1 = new Point(2,4)
        let p2 = new Point(4,6)
        let p3 = new Point(6,8)

        expect(p1.slope(p2)).toStrictEqual(1)
        expect(p1.distance(p2)).toStrictEqual(Math.sqrt(8))
    })
})