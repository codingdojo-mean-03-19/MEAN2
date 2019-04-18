var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myStr = 'this is a string';
myStr = 'some other string';
// myStr = 234234;
var array = ['dog', 'cat', 'horse'];
array.push(234);
array.push('234');
array.push(true);
var first = array[0];
if (isString(first)) {
    first.charCodeAt(0);
}
function isString(value) {
    return typeof value === 'string';
}
// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
        this.sayHello(name);
    }
    User.prototype.sayHello = function (name) {
        console.log("Hello " + name + ", I'm " + this.name);
    };
    return User;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(name, age) {
        if (age === void 0) { age = 34; }
        var _this = _super.call(this, name, age) || this;
        _this.sayHello(name);
        return _this;
    }
    return Person;
}(User));
var user = new User('Bob', 23);
var person = new Person('Sally');
person.sayHello(user.name);
user.sayHello(person.name);
var login = {
    email: 'aasdfsadf',
    password: 'asdfasdfasdf'
};
var register = {
    email: 'asdfasdf',
    password: 'asdfsadf',
    confirmationPassword: 'asdfasdf'
};
