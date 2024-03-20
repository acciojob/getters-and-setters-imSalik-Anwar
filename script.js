//complete this code
class Person {
	constructor(Name, age){
		this.Name = Name;
		this.age = age;
	}
	getName(){
		return this.Name;
	}
	setAge(age){
		this.age = age;
	}
}

class Student extends Person {
	constructor(Name, age){
		super(Name, age);
	}
	study(){
		console.log(`${this.Name} is studying`);
	}
}

class Teacher extends Person {
	constructor(Name, age){
		super(Name, age);
	}
	teach(){
		console.log(`${this.Name} is teaching`);
	}
}

// Do not change the code below this line
// window.Person = Person;
// window.Student = Student;
// window.Teacher = Teacher;
const person = new Person("John", 25);
console.log(person.name); // Output: John

person.age = 30;
console.log(person.age); // Output: 30

const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching
