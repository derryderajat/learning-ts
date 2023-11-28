let hello_world : string = "Hello worlddd";
// console.log(hello_world)




const student:Student = {
    name: "Derry",
    age:20,
}
interface Student {
    name: String,
    age: Number
}
// console.log(student.name, " : ", student.age)


interface User {
    name:String,
    id_type:String,
    id_number:Number
}

class UserAccount {
    name:String;
    id_type:String;
    id_number: Number;

    constructor(name:string, id_type:string, id_number:number){
        this.name = name;
        this.id_type=id_type;
        this.id_number = id_number
    }
}

const derry: User = new UserAccount("Derry", "KTP", 17029131283)

function displayNumberID(user:User){
    console.log(user.id_number)
}

// displayNumberID(derry);

const getLength=(obj: string | string[])=>{
    return obj.length;
}
// console.log(getLength("Derry"));
// console.log(getLength(["1","2"]));
const domains =(obj:string | string[]) => {
    const isObjString = typeof obj ==="string";
    if(isObjString) return [obj]
    return obj
}

// console.log(domains("www.kinderjoy.com"))
// console.log(domains(["www.kinderjoy.com", "www.pendekin.com"]))

