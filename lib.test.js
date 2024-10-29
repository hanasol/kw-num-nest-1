const { test, expect } = require("@jest/globals");
const lib = require("./lib");
test("avg([3, 5, 7]) should be 5", () => {
expect(lib.avg([3, 5, 7])).toBe(5);
});
test("avg([-5, 5]) should be 0", () => {
expect(lib.avg([-5, 5])).toBe(0);
});

test("facorial[5] should be 120", ()=>{
expect(lib.factorial(5)).toBe(120);
});

test("prime[7] should be prime", ()=>{
    expect(lib.prime(7)).toBe(true);
    });

test("prime[8] should not prime", ()=>{
expect(lib.prime(8)).toBe(false);
});