/**
 * Coffee or Tea
 * @constructor
 */
const Coffee = function () {

};

Coffee.prototype.boilWater = () => {
    console.log('煮水至沸腾');
};

Coffee.prototype.brewCoffee = () => {
    console.log('用沸水冲泡咖啡');
};

Coffee.prototype.pourInCup = () => {
    console.log('倒进杯子');
};

Coffee.prototype.addSugarAndMilk = () => {
    console.log('加糖加奶');
};

Coffee.prototype.init = function () {
    this.boilWater();
    this.brewCoffee();
    this.pourInCup();
    this.addSugarAndMilk();
};

const coffee = new Coffee();
coffee.init();

// 好莱坞原则

