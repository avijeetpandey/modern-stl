import {
  make_triplets,
  square,
  accumulate,
  isEven,
  isOdd,
  power,
  isPeak
} from "../src/utils/Utils";

describe("Util tests ", () => {
  test("make_triplets", () => {
    expect(make_triplets(3)).toStrictEqual([3, 4, 5]);
    expect(make_triplets(8)).toStrictEqual([8, 17, 15]);
  });

  test("square", () => {
    expect(square(4)).toBe(16);
  });

  test("accumulate", () => {
    expect(accumulate([4, 5, 6])).toBe(15);
    expect(accumulate([4, 5, 6], 10)).toBe(25);
  });

  test("isEven", () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(9)).toBe(false);
  });

  test("isOdd", () => {
    expect(isOdd(23)).toBe(true);
    expect(isOdd(14)).toBe(false);
  });

  test("power", () => {
    expect(power(2,4).toFixed(8));
    expect(power(3,3).toFixed(27));
  });
  
  test("isPeak", ()=> {
    expect(isPeak(2)).toBe(true);
    expect(isPeak(8)).toBe(true);
    expect(isPeak(14)).toBe(false);
  });
});
