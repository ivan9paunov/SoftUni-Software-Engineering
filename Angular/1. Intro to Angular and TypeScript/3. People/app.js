"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = exports.Senior = exports.Junior = void 0;
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }
    Employee.prototype.work = function () {
        if (this.tasks.length > 0) {
            var currentTask = this.tasks.shift();
            this.tasks.push(currentTask);
            console.log(this.name + currentTask);
        }
    };
    Employee.prototype.collectSalary = function () {
        console.log("".concat(this.name, " received ").concat(this.getSalary(), " this month."));
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    return Employee;
}());
var Junior = /** @class */ (function (_super) {
    __extends(Junior, _super);
    function Junior(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.tasks.push(" is working on a simple task.");
        return _this;
    }
    return Junior;
}(Employee));
exports.Junior = Junior;
var Senior = /** @class */ (function (_super) {
    __extends(Senior, _super);
    function Senior(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.tasks.push(" is working on a complicated task.");
        _this.tasks.push(" is taking time off work.");
        _this.tasks.push(" is supervising junior workers.");
        return _this;
    }
    return Senior;
}(Employee));
exports.Senior = Senior;
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.dividend = 0;
        _this.tasks.push(" scheduled a meeting.");
        _this.tasks.push(" is preparing a quarterly meeting.");
        return _this;
    }
    Manager.prototype.getSalary = function () {
        return this.salary + this.dividend;
    };
    return Manager;
}(Employee));
exports.Manager = Manager;
var junior = new Junior('Ivan', 25);
junior.work();
junior.work();
junior.salary = 5811;
junior.collectSalary();
var sinior = new Senior('Alex', 31);
sinior.work();
sinior.work();
sinior.work();
sinior.work();
sinior.salary = 12050;
sinior.collectSalary();
var manager = new Manager('Tom', 55);
manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();
