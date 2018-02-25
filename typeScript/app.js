var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.getInfo = function () {
        return "id:" + this.id + " name:" + this.name;
    };
    return User;
}());
var tom = new User();
tom.id = 30;
tom.name = "Tom";
console.log(tom.getInfo());
var john = new User();
john.id = 31;
john.name = "john";
console.log(john.getInfo());
