// One source of information
// it is global and can cause race conditions
class Logger {
	logs: string[];
	instance: Logger;
	constructor() {
		if (this.instance === null) {
			this.logs = [];
			this.instance = this;
		}
		return this.instance;
	}

	log(message: string) {
		console.log(`Message: ${message}`);
	}
}

const logger = new Logger();
// thas has to be freezed
Object.freeze(logger);
