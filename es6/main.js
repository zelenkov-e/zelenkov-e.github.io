class SimpleDate {
    constructor (year, month, day) {
      this.year = year;
      this.month = month;
      this.day = day;
    }
    setAge(age){
         this.age = age;
    }
    getAge(){
        return this.age
    }

    toString(){
        return (`${this.day}/${this.month}/${this.year}/my age ${this.age}`)
    }

  }

const today = new SimpleDate(2017, 1, 28)
today.setAge(30)
// console.log(today.getAge())
// console.log(today.toString())
// console.log(today.getYear())



class showDotDate extends SimpleDate{
    constructor(year, month, day){
        super(year, month, day)
    }
    // toString(){
    //     return (`${this.day}.${this.month}.${this.year}.my age ${this.age}`)
    // }
    
}
const dotToday = new showDotDate(2017, 1, 28)
console.log(dotToday.setAge())
// console.log(dotToday.toString())
 