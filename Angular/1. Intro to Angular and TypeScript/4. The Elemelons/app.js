var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Object.defineProperty(Watermelon.prototype, "index", {
        get: function () {
            return this.elementIndex = this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    Watermelon.prototype.toString = function () {
        return "Element: Water\nSort: ".concat(this.melonSort, "\"\nElement Index: ").concat(this.index);
    };
    return Watermelon;
}(Melon));
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Object.defineProperty(Firemelon.prototype, "index", {
        get: function () {
            return this.elementIndex = this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    Firemelon.prototype.toString = function () {
        return "Element: Fire\nSort: ".concat(this.melonSort, "\"\nElement Index: ").concat(this.index);
    };
    return Firemelon;
}(Melon));
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Object.defineProperty(Earthmelon.prototype, "index", {
        get: function () {
            return this.elementIndex = this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    Earthmelon.prototype.toString = function () {
        return "Element: Earth\nSort: ".concat(this.melonSort, "\"\nElement Index: ").concat(this.index);
    };
    return Earthmelon;
}(Melon));
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Object.defineProperty(Airmelon.prototype, "index", {
        get: function () {
            return this.elementIndex = this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    Airmelon.prototype.toString = function () {
        return "Element: Air\nSort: ".concat(this.melonSort, "\"\nElement Index: ").concat(this.index);
    };
    return Airmelon;
}(Melon));
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.elements = ['Water', 'Fire', 'Earth', 'Air'];
        return _this;
    }
    Melolemonmelon.prototype.morph = function () {
        var currentElement = this.elements.shift();
        this.elements.push(currentElement);
    };
    Melolemonmelon.prototype.toString = function () {
        return "Element: ".concat(this.elements[0], "\nSort: ").concat(this.melonSort, "\"\nElement Index: ").concat(this.index);
    };
    return Melolemonmelon;
}(Watermelon));
var watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
// let melolemonmelon = new Melolemonmelon(15.5, "XXL");
// console.log(melolemonmelon.toString());
// melolemonmelon.morph();
// melolemonmelon.morph();
// melolemonmelon.morph();
// console.log(melolemonmelon.toString());
