function Admin(name, age) {
  this.name = name;
  this.age = age;
  this.displayInfo = function() {
    console.log(`Name: ${this.name}  Age: ${this.age}`);
  };
}

Admin.prototype.sauHi = function() {
  console.log(`hello ! My name is ${this.name}`);
};

module.exports = Admin;
