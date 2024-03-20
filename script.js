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
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
