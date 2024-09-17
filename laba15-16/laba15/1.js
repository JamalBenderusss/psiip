const user = {
    name: "Jone",
};
document.writeln(`Примеры обьетов: number,string,array `+`<br>`);

document.writeln(`\nПример объекта user.name = ${user.name}<br>`);

const trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
document.writeln(`${trees[0]},${trees[1]},${trees[2]},${trees[3]},${trees[4]},<br>`,); 

const hasOwnProperties = user.hasOwnProperty('name');
document.writeln('\nЕсть ли свойство name в user? -', hasOwnProperties +`<br>`);

for (wood in trees) {
    document.writeln("\n",trees[wood]+`<br>`);
}

class User {
    constructor(firstName = 'Иван',lastName = 'Иванов',Age = 18){
        this.firstName = firstName;
        this.lastName = lastName;
        this.Age = Age;
    }

    sayHi() {
        document.writeln(`\nПривет ${this.firstName} ${this.lastName}. Вам ${this.Age} лет.<br>`);    
    }
}

class Student extends User{ // наследование 
    #groceries
    constructor(firstName = 'Иван',lastName = 'Иванов',Age = 18,group = 'clown',groceries){
        super(firstName,lastName,Age);
        this.group = group;
        this.#groceries = groceries;
    }

    sayHi() {
        super.sayHi();
        document.writeln(`\nВы из группы ${this.group}<br>`)
    }

    sayGroceries() {
        document.writeln("\n",this.#groceries+`<br>`);
    }
}

let personNon = new User();
let person = new User('Джамал','Костюк',19);
let student = new Student('Артем','Костюк',19,'PZT=38','Чипсы');
personNon.sayHi(); // полиморфизм
person.sayHi();
student.sayHi();
student.sayGroceries();  // инкапсуляция
document.writeln(student.groceries+`<br>`);
document.writeln(student+`<br>`);
document.writeln(`\nПубличные поля и методы никак не обозначаются, приватные - знаком # перед названием переменной, защищенные - знаком _ перед названием переменной <br>`);

document.writeln(`\nСлужебное слово static используется для объявления статического метода(Метод вызывается через класс, а не через имя экземпляра класса)<br>`);


