class User {
 
    id: number;
    name: string;
    getInfo(): string {
        return "id:" + this.id + " name:" + this.name;
    }
}

let  tom: User = new User();
    tom.id = 30;
    tom.name = "Tom";
    console.log(tom.getInfo());
    
    
let  john: User = new User();
    john.id = 31;
    john.name = "john";
    console.log(john.getInfo());
    
    