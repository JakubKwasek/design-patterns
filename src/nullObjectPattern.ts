// Returns object with properties instead of null
// It prevents from returning null
// Example: default image/ placholder

interface IUser {
	id: number;
	name: string;
}

class User {
	id: number;
	name: string;
	constructor(id: number, name: string) {
		(this.id = id), (this.name = name);
	}
	hasAccess() {
		return this.name === "Bob";
	}
}

class NullUser {
	id: number;
	name: string;
	constructor() {
		(this.id = -1), (this.name = "Gueast");
	}
	hasAccess() {
		return this.name === "Bob";
	}
}

const users = [new User(1, "Bob"), new User(2, "John")];

const getUser = (id: number) => {
	const user = users.find((user: IUser) => user.id === id);

	if (user == null) {
		return new NullUser();
	} else {
		return user;
	}
};

const printUser = (id: number) => {
	const user = getUser(id);
	console.log(`Hello ${user.name}`);
};
