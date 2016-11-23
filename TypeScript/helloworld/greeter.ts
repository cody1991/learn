class Student {
	fullName: string;
	constructor(public firstName, public middleInitial, public lastName) {
		this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
	};
	sayFullName() {
		console.log(this.fullName);
	}
}

interface Person {
	firstName: string;
	lastName: string;
}

function greeter(person: Person) {
	return 'Hello,' + person.firstName + " " + person.lastName;
}

// var user = {
// 	firstName: "Jane",
// 	lastName: "user"
// };

var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);