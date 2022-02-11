const Flower = function () {

};

const xiaoming= {
    sendFlower: (target) => {
        const flower = new Flower();
        target.receiveFlower(flower);
    }
}

const B = {
    receiveFlower: (flower) => {
        A.listenGoodMood(() => {
            A.receiveFlower(flower);
        });
    }
};

const A = {
    receiveFlower: (flower) => {
        console.log('receiveFlower' + flower);
    },
    listenGoodMood: (fn) => {
        setTimeout(() => {
            fn();
        }, 10000, );
    }
};

xiaoming.sendFlower(B);