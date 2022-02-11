/**
 * 策略模式
 * @param salary
 * @returns {number}
 * @constructor
 */
const S = (salary) => {
    return salary * 4;
};

const A = (salary) => {
    return salary * 3;
};

const B = (salary) => {
    return salary * 2;
};

const calculateBonus = (func, salary) => {
    return func(salary);
};

calculateBonus(S, 10000);
