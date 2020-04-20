// Is usefull when need to creat many working parts
class Address {
	zip: string;
	street: string;
	constructor(zip: string, street: string) {
		this.zip = zip;
		this.street = street;
	}
}

interface ICitizen {
	age?: number;
	phone?: number;
	address?: string;
}

class Citizen {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
}

class CitizenBuilder {
	citizen: Citizen & ICitizen;
	constructor(name: string) {
		this.citizen = new Citizen(name);
	}
	setAge(age: number) {
		this.citizen.age = age;
		return this;
	}
	setPhone(phone: number) {
		this.citizen.phone = phone;
		return this;
	}
	setAddress(address: string) {
		this.citizen.address = address;
		return this;
	}
	build() {
		return this.citizen;
	}
}

const citizen = new CitizenBuilder("Jakub")
	.setAge(37)
	.setPhone(2123123)
	.build();

// -----------------------------------------------------------------
// It is possible to use optional params in a form of object

interface IOptions {
	age?: number;
	phone?: number;
	address?: string;
}

class SimpleCitizen {
	name: string;
	age: number;
	phone: number;
	address: string;
	constructor(
		name: string,
		options: IOptions = { age: 0, phone: 0, address: "" }
	) {
		this.name = name;
		this.age = options.age;
		this.phone = options.phone;
		this.address = options.address;
	}
}

const simplecitizen = new SimpleCitizen("Jakub", { age: 10 });
