// Задание 1 и 5
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} ест.`);
    }

    sleep() {
        console.log(`${this.name} спит.`);
    }

    makeSound() {
        console.log(`${this.name} издает звук.`);
    }
}

class Mammal extends Animal {
    constructor(name, age) {
        super(name, age);
    }

    makeSound() {
        console.log(`${this.name} издает звуки млекопитающего.`);
    }
}

class Dog extends Mammal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    eat() {
        console.log(`${this.name} любит есть мясо.`);
    }

    bark() {
        console.log("Гав-гав!");
    }

    makeSound() {
        console.log(`${this.name} лает.`);
    }
}

const animal = new Animal('Животное', 5);
animal.eat();
animal.sleep();
animal.makeSound();

const dog = new Dog('Рекс', 3, 'Немецкая овчарка');
dog.eat();
dog.bark();
dog.sleep();
dog.makeSound();

console.log(dog instanceof Dog);
console.log(dog instanceof Animal);
console.log(dog instanceof Mammal);

console.log('---');

// Задание 2
class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(`Авто: ${this.brand} ${this.model} (${this.year})`);
    }
}

class Car extends Vehicle {
    constructor(brand, model, year, doors) {
        super(brand, model, year);
        this.doors = doors;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Количество дверей: ${this.doors}`);
    }
}

const vehicle = new Vehicle('Toyota', 'Camry', 2020);
vehicle.displayInfo();

const car = new Car('Honda', 'Civic', 2022, 4);
car.displayInfo();

console.log('---');

// Задание 3
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Привет, я ${this.name}.`);
    }
}

class Student extends Person {
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }

    greet() {
        console.log(`Привет! Я студент ${this.name}, учусь на курсе ${this.course}.`);
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    greet() {
        console.log(`Здравствуйте, я ${this.name}, преподаю ${this.subject}.`);
    }
}

const person = new Person('Иван', 30);
person.greet();

const student = new Student('Анна', 20, 'JavaScript');
student.greet();

const teacher = new Teacher('Павел', 45, 'Математику');
teacher.greet();

console.log('---');

// Задание 4
console.log(dog instanceof Dog);
console.log(dog instanceof Animal);
console.log(dog instanceof Mammal);
console.log(vehicle instanceof Vehicle);
console.log(car instanceof Car);
console.log(car instanceof Vehicle);

const someString = "текст";
console.log(someString instanceof String); // false