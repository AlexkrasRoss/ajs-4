import  calculateCashback from "../src/cashback.js";
test('casback at sum: 500', ()=>{
const result = calculateCashback(500);
expect(result).toBe(0)
});

const dataList = [
    ['gold', 100000, 5000],
    ['silver', 10000, 200],
    ['regular', 1000, 10],
    ['no', 500, 0],
];

const handler = test.each(dataList);
handler('testing cashback function with %s status and %i amount', (status, amout, expected) => {
const result = calculateCashback(amout);
expect(result).toBe(expected)
});

//ВТОРОЙ ВАРИАНТ 
test.each([
    ['gold', 100000, 5000],
    ['silver', 10000, 200],
    ['regular', 1000, 10],
    ['no', 500, 0],
]);


('testing cashback function with %s status and %i amount', (_, amout, expected) => {
const result = calculateCashback(amout);
expect(result).toBe(expected)
});
