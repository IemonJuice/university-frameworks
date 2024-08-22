var IceCreamSize;
(function (IceCreamSize) {
    IceCreamSize["Small"] = "small";
    IceCreamSize["Big"] = "big";
})(IceCreamSize || (IceCreamSize = {}));
var calcIcecreamPrice = function () {
    var size = prompt("1 - великий стаканчик \n 2 - малий", "2");
    var icecreamBuilder = new IceCreamBuilder();
    if (size === "1") {
        icecreamBuilder.changeSize(IceCreamSize.Big);
    }
    else {
        icecreamBuilder.changeSize(IceCreamSize.Small);
    }
    var chocolate = prompt("Додати шоколад Так/Ні", "Так");
    var caramel = prompt("Додати карамель Так/Ні", "Так");
    var berries = prompt("Додати ягоди Так/Ні", "Так");
    if (chocolate !== "Так" && caramel !== "Так" && berries !== "Так") {
        alert("Потрібно мінімум 1 добавка");
        return;
    }
    var marshmello = prompt("Додати маршмелоу Так/Ні", "Так");
    if (chocolate === "Так") {
        icecreamBuilder.addChocolate();
    }
    if (berries === "Так") {
        icecreamBuilder.addBerries();
    }
    if (caramel === "Так") {
        icecreamBuilder.addCaramel();
    }
    if (marshmello === "Так") {
        icecreamBuilder.addMarshmello();
    }
    var iceream = icecreamBuilder.cook();
    alert(iceream.checkout());
};
var IceCreamBuilder = /** @class */ (function () {
    function IceCreamBuilder() {
        this.size = IceCreamSize.Small;
        this.chocolate = false;
        this.caramel = false;
        this.marshmello = false;
        this.berries = false;
    }
    IceCreamBuilder.prototype.addChocolate = function () {
        this.chocolate = true;
    };
    IceCreamBuilder.prototype.addCaramel = function () {
        this.caramel = true;
    };
    IceCreamBuilder.prototype.addBerries = function () {
        this.berries = true;
    };
    IceCreamBuilder.prototype.addMarshmello = function () {
        this.marshmello = true;
    };
    IceCreamBuilder.prototype.changeSize = function (size) {
        this.size = size;
    };
    IceCreamBuilder.prototype.cook = function () {
        return new IceCream(this.size, this.chocolate, this.caramel, this.berries, this.marshmello);
    };
    return IceCreamBuilder;
}());
var IceCream = /** @class */ (function () {
    function IceCream(size, chocolate, caramel, berries, marshmello) {
        this.price = 0;
        this.size = IceCreamSize.Small;
        this.chocolate = false;
        this.caramel = false;
        this.marshmello = false;
        this.berries = false;
        this.size = size;
        this.caramel = caramel;
        this.chocolate = chocolate;
        this.berries = berries;
        this.marshmello = marshmello;
    }
    IceCream.prototype.checkout = function () {
        if (this.size === IceCreamSize.Big) {
            this.price += 25;
        }
        if (this.size === IceCreamSize.Small) {
            this.price += 10;
        }
        if (this.berries) {
            this.price += 10;
        }
        if (this.chocolate) {
            this.price += 5;
        }
        if (this.caramel) {
            this.price += 6;
        }
        return this.price;
    };
    return IceCream;
}());
calcIcecreamPrice();
