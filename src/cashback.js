const casback = {
    regular: {
        bound: 1000,
        percent: 1,
    },
    silver: {
        bound: 10000,
        percent: 2,
    },
    gold: {
        bound: 100000,
        percent: 5,
    },
};

export default function calculateCashback(amount) {
    if (amount >= casback.gold.bound){
        return Math.ceil(amount * casback.gold.percent / 100);
    }
    if (amount >= casback.silver.bound){
        return Math.ceil(amount * casback.silver.percent / 100);
    }
    if (amount >= casback.regular.bound){
        return Math.ceil(amount * casback.regular.percent / 100);
    }
    return 0;
};