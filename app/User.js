export class User{
    constructor(name,password){
        this.name=name;
        this.password=password;
    }
    render(){
        console.log("name:",this.name);
        console.log("password:",this.password);
    }
}
