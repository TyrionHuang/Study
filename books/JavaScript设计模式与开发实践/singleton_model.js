const Singleton = function (name) {
    this.name = name;
    this.instance = null;
};

Singleton.prototype.getName = () => {
    alert(this.name);
};

Singleton.getInstance = (name) => {
    if(!this.instance) {
        this.instance = new Singleton(name);
    }
    return this.instance;
};

const a = Singleton.getInstance('sven1');
const b = Singleton.getInstance('sven2');

alert(a === b);
